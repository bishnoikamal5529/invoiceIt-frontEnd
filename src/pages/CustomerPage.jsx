import { useState, useEffect } from 'react';
import CustomerList from '../components/CustomerComponents/CustomerList.jsx';
import { Alert, Button, Spinner } from 'react-bootstrap';
import UpdateCustomerForm from '../components/CustomerComponents/UpdateCustomerForm.jsx';
import getAllCustomers from '../utils/CustomerUtil/getAllCustomers.jsx';
import deleteCustomer from '../utils/CustomerUtil/deleteCustomer.jsx';

const CustomerPage = () => {
    const [customers, setCustomers] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);
    const [activeUpdate, setActiveUpdate] = useState(null);

    useEffect(() => {
        let ignore = false;

        if (!activeUpdate) {
            let errorString = null;
            console.log("Running customer effect to reload customers");

            if (!localStorage.authToken) {
                ignore = true;
                setErrorMsg("You need to login again.");
            }

            if(!ignore){
            const getAllCustomers = async () => {
                try {
                    const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/customer', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.authToken}`,
                        },
                    });

                    if (!response.ok) {
                        errorString = "There is some error while retrieving Customers.";
                    }

                    const data = await response.json();

                    if (!data) {
                        errorString = "Bad Auth";
                    }
                    return data;
                } catch (error) {
                    console.error('Error fetching customers:', error);
                    errorString = "Error fetching customers";
                }
            };

            if(errorMsg){
                updateErrorMsg(errorMsg + " Updating Customers...");
            }
            else{
                updateErrorMsg("Updating Customers...");
            }
            setTimeout(() => {
                getAllCustomers().then(entity => {
                    console.log(entity);
                    let newList = [];
                    if (!ignore) {
                        for (let i = 0; i < entity.length; i++) {
                            newList[i] = entity[i];
                            newList[i].id = i + 1;
                        }

                        setCustomers(newList);
                    }
                });
            }, 200);
        }
            return () => {
                ignore = true;
            };
        }
    }, [activeUpdate]);

    const handleUpdate = (customer) => {
        console.log(customer);
        if (customer) {
            let defaultValues = {
                _id: customer._id,
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address,
            };
            if (defaultValues) {
                setActiveUpdate(defaultValues);
            }
        }
    };

    const handleRefresh = () => {
        getAllCustomers().then(entity => {
            let newList = [];
            if (entity) {
                for (let i = 0; i < entity.length; i++) {
                    newList[i] = entity[i];
                    newList[i].id = i + 1;
                }

                setCustomers(newList);
            }
        });
    };

    const handleDelete = async (id) => {
        const res = await deleteCustomer(id);
        if (res != 'Error') {
            setTimeout(handleRefresh, 1000);
        } else {
            updateErrorMsg("Error Deleting Customer");
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
            {
                errorMsg && <Alert className='w-75 text-center mx-auto mt-4' variant='danger'>
                    {errorMsg}
                </Alert>
            }
            {
                activeUpdate ? 
                    <UpdateCustomerForm 
                        defaultValues={activeUpdate} 
                        onCancel={() => setActiveUpdate(!activeUpdate)} 
                        updateErrorMsg={updateErrorMsg} />
                : <div className='w-100 d-flex justify-content-center flex-column'>
                    {
                        customers ?
                            <CustomerList 
                                customers={customers} 
                                handleUpdate={handleUpdate} 
                                handleDelete={handleDelete} 
                                updateErrorMsg={updateErrorMsg} 
                                handleRefresh={handleRefresh} /> :
                            <Spinner className='my-5 mx-auto' animation="border" variant="dark" />
                    }
                    <Button variant="dark" className='w-25 m-auto' onClick={handleRefresh}>
                        Refresh List
                    </Button>
                </div>
            }
        </div>
    );
};

export default CustomerPage;
