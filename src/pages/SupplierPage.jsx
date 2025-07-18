import { useState, useEffect } from 'react';
import SupplierList from '../components/SupplierComponents/SupplierList';
import { Spinner, Button, Alert } from 'react-bootstrap';
import UpdateSupplierForm from '../components/SupplierComponents/UpdateSupplierForm';
import getAllSuppliers from '../utils/supplierUtil/getAllSupplier'
import deleteSupplier from '../utils/supplierUtil/deleteSupplier'


const SupplierPage = () => {
    const [suppliers, setSuppliers] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);
    const [activeUpdate, setActiveUpdate] = useState(null);

    useEffect(() => {
        let ignore = false;

        if (!activeUpdate) {
            let errorString = null;
            console.log("running supplier effect to reload suppliers");

            if (!localStorage.authToken) {
                ignore = true;
                updateErrorMsg("You need to login again.");
            }

            if(!ignore){
            const getAllSuppliers = async () => {
                try {
                    const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/supplier', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.authToken}`,
                        },
                    });

                    if (!response.ok) {
                        errorString = "There is some error while retrieving suppliers.";
                    }

                    const data = await response.json();

                    if (!data) {
                        errorString = "Bad Auth";
                    }
                    return data;
                } catch (error) {
                    console.error('Error fetching suppliers:', error);
                    errorString = "Error fetching suppliers";
                }
            };

            if(errorMsg){
                updateErrorMsg(errorMsg + " Updating Suppliers...");
            }
            else{
                updateErrorMsg("Updating Suppliers...");
            }

            setTimeout(() => {
                getAllSuppliers().then(entity => {
                    console.log(entity);
                    let newList = [];
                    if (!ignore && entity) {
                        for (let i = 0; i < entity.length; i++) {
                            newList[i] = entity[i];
                            newList[i].id = i + 1;
                        }

                        console.log("setting suppliers");
                        
                        setSuppliers(newList);
                    }
                });
            }, 1000); }

            return () => {
                ignore = true;
            };
        }
    }, [activeUpdate]);

    const handleUpdate = (supplier) => {
        console.log(supplier);
        if (supplier) {
            let defaultValues = {
                _id: supplier._id,
                name: supplier.name,
                contactPerson: supplier.contactPerson,
                phone: supplier.phone,
                email: supplier.email,
                address: supplier.address,
                notes: supplier.notes,
            };
            if (defaultValues) {
                setActiveUpdate(defaultValues);
            }
        }
    };

    const handleRefresh = async () => {
        getAllSuppliers().then(entity => {
            console.log(entity);
            let newList = [];
            if (entity) {
                for (let i = 0; i < entity.length; i++) {
                    newList[i] = entity[i];
                    newList[i].id = i + 1;
                }

                setSuppliers(newList);
            }
        });
    };

    const handleDelete = async (id) => {
         const res = await deleteSupplier(id);         
        if(res != "Error"){
                setTimeout(handleRefresh, 1000);
            }
        else{            
                updateErrorMsg("Error Deleting Supplier");
            }
        
    };

    
    const updateErrorMsg = (msg) => {
        setErrorMsg(msg);
        setTimeout(() => {
            setErrorMsg(false);
        },5000)
    }

    return (
        <div>
            {errorMsg && (
                <Alert className='w-75 text-center mx-auto mt-4' variant='danger'>
                    {errorMsg}
                </Alert>
            )}
            {activeUpdate ? (
                <UpdateSupplierForm
                    defaultValues={activeUpdate}
                    onCancel={() => setActiveUpdate(!activeUpdate)}
                    updateErrorMsg={updateErrorMsg}
                />
            ) : (
                <div className='w-100 d-flex justify-content-center flex-column'>
                    {suppliers ? (
                        <SupplierList
                            suppliers={suppliers}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                            updateErrorMsg={updateErrorMsg}
                            handleRefresh={handleRefresh}
                        />
                    ) : (
                        <Spinner className='my-5 mx-auto' animation="border" variant="dark" />
                    )}
                    <Button variant="dark" className='w-25 m-auto my-4' onClick={handleRefresh}>
                        Refresh List
                    </Button>
                </div>
            )}
        </div>
    );
};

export default SupplierPage;
