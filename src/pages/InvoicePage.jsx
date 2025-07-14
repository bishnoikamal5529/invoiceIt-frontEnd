import { useState, useEffect } from 'react';
import InvoiceList from '../components/InvoiceComponents/InvoiceList.jsx';
import { Alert, Button, Spinner } from 'react-bootstrap';
import UpdateInvoiceForm from '../components/InvoiceComponents/UpdateInvoiceForm.jsx'

const InvoicePage = () => {
    const [invoices, setInvoices] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);
    const [activeUpdate, setActiveUpdate] = useState(null);

    useEffect(() => {
        let ignore = true;

        if(!activeUpdate){
        let errorString = null;
        console.log("Running invoice effect to reload invoices");

        if (!localStorage.authToken) {
            ignore = false;
            setErrorMsg("You need to login again.");
        }
        const getAllInvoices = async () => {
            try {
                const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/invoice', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.authToken}`,
                    },
                });

                if (!response.ok) {
                    errorString = "There is some error while retrieving Invoices.";
                }

                const data = await response.json();

                if (!data) {
                    errorString = "Bad Auth";
                }
                return data;
            } catch (error) {
                console.error('Error fetching invoices:', error);
                errorString = "Error fetching invoices";
            }
        };

        if(errorMsg){
            updateErrorMsg(errorMsg + "- Updating Invoices...");
        }
        else{
            updateErrorMsg("Updating Invoices...");
        }
        setTimeout(() => {
            getAllInvoices().then(entity => {
                console.log(entity);
                let newList = [];
                if (ignore && entity.success) {
                    for (let i = 0; i < entity.data.length; i++) {
                        newList[i] = entity.data[i];
                        newList[i].id = i + 1;
                    }
                    
                    setInvoices(newList);
                }
            });
        }, 500);
    }

        return () => {
            ignore = false;
        };
    }, [activeUpdate]);

    const handleRefresh = () => {
        const getAllInvoices = async () => {
            try {
                const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/invoice', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.authToken}`,
                    },
                });

                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        getAllInvoices().then(entity => {
            console.log(entity);
            let newList = [];
            if (entity.success === true) {
                for (let i = 0; i < entity.data.length; i++) {
                    newList[i] = entity.data[i];
                    newList[i].id = i + 1;
                }

                setInvoices(newList);
                console.log("logging newList");
                console.log(newList);
                
                
            }
        });
    };

    const handleUpdate = (invoice) => {
        if(invoice){            
            setActiveUpdate(invoice);
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
            {   activeUpdate ? 
                        <UpdateInvoiceForm 
                            defaultValues={activeUpdate} 
                            onCancel={() => setActiveUpdate(null)} 
                            updateErrorMsg={updateErrorMsg}
                            /> :
                        
                        <div className='w-100 d-flex justify-content-center flex-column'>
                            {
                                invoices ?
                                    <InvoiceList 
                                        updateErrorMsg={updateErrorMsg} 
                                        invoices={invoices} 
                                        handleUpdate={handleUpdate} 
                                        handleRefresh={handleRefresh} /> :
                                    <Spinner 
                                        className='my-5 mx-auto' 
                                        animation="border" 
                                        variant="dark" />
                            }
                            <Button variant="dark" className='w-25 m-auto' onClick={handleRefresh}>
                                Refresh List
                            </Button>
                        </div>
            }
        </div>
    );
};

export default InvoicePage;
