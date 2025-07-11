import {useState, useEffect} from 'react';
import ProductList from '../components/ProductComponents/ProductList.jsx';
import { Alert, Button, Spinner } from 'react-bootstrap';
import UpdateProductForm from '../components/ProductComponents/UpdateProductForm.jsx';
import getAllProducts from '../utils/productsUtil/getAllProducts.jsx';
import { deleteProduct } from '../utils/productsUtil/deleteProduct.jsx';

const ProductPage = () => {
    const [products, setProducts] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);
    const [activeUpdate, setActiveUpdate] = useState(null);

    useEffect(() => {
        let ignore = true;

        if(!activeUpdate){
            let errorString = null;
            console.log("running product effect to reload products");
            

            if(!localStorage.authToken){
                ignore = false;
                setErrorMsg("You need to login again.");
            }
            const getAllProducts = async () => {
                try {
                    const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/product', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.authToken}`,
                        },
                    });
            

                    if (!response.ok) {
                        errorString = "There is some error while retrieving Products."
                    }
            
                    const data = await response.json();
            
                    if(!data){
                        errorString = "Bad Auth";
                    }
                    return data;
                } catch (error) {
                    console.error('Error fetching products:', error);
                    errorString =  "Error fetching products";
                }
            };

            setErrorMsg("Updating Products....");
            setTimeout(() => {
                    getAllProducts().then(entity => {
                        console.log(entity);
                        let newList = new Array;
                        if(ignore && entity && entity.success){
                            for(let i=0; i<entity.data.length; i++){
                                newList[i] = entity.data[i];
                                newList[i].id = i+1;
                            }
                        
                            setProducts(newList);
                            setErrorMsg(false);
                        }  
                    })
                }, 1000)
        
                return () => {
                    ignore = false;
                }
            }
        }, [activeUpdate]);

    const handleUpdate = (product) => {

        console.log(product);
        if(product){
            let defaultValues = {
                _id: product._id,
                name: product.name,
                sku: product.sku,
                price: product.price,
                quantityInStock: product.quantityInStock,
                category: product.category
            }
            if(defaultValues){
                setActiveUpdate(defaultValues);
            }
        }
        
        
    };

    const handleRefresh = () => {
        getAllProducts().then(entity => {
            console.log(entity);
            let newList = new Array;
            if(entity.success){
                for(let i=0; i<entity.data.length; i++){
                    newList[i] = entity.data[i];
                    newList[i].id = i+1;
                }
            
                setProducts(newList);
            }  
        })
    }

    const handleDelete =async (id) => {
        console.log(`Deleting product with ID: ${id}`);
        const res = await deleteProduct(id)
        if(res){
            setTimeout(handleRefresh, 1000);
        }
        else{
            setErrorMsg("Error Delete Product");
        }
    };

    return (
        <div>
            {
                errorMsg && <Alert className='w-75 text-center mx-auto mt-4' variant='danger'>
                    {errorMsg}
                </Alert>
            }
            {
                activeUpdate ? <UpdateProductForm defaultValues={activeUpdate} onCancel={() => setActiveUpdate(!activeUpdate)} setErrorMsg={setErrorMsg} />
                :<div className='w-100 d-flex justify-content-center flex-column'>
                {
                    products ? 
                        <ProductList products={products} handleUpdate={handleUpdate} handleDelete={handleDelete} setErrorMsg={setErrorMsg} handleRefresh={handleRefresh} />:
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

export default ProductPage;
