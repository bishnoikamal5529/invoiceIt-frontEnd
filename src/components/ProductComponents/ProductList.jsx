import {useState, useRef} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProductInput from './ProductInput';
import SearchProduct from './SearchProduct';
import ConfirmDelete from '../GlobalComponents/ConfirmDelete';


const ProductList = ({products, handleUpdate, handleDelete, updateErrorMsg, handleRefresh}) => {

    const [showCreate ,setShowCreate] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const currentID = useRef(null);

    return  <Container>
    <section className='d-flex w-100 justify-content-between'>

        <Button 
            variant={showCreate?"dark":"primary"}
            className="me-2 my-4"
            onClick={() => setShowCreate(!showCreate)}
            >{showCreate?"Close":"Create"}
            </Button>

        <h1 className='text-center my-4'>Product List</h1>

        <Button 
            variant={showSearch?"dark":"primary"}
            className="me-2 my-4"
            onClick={() => setShowSearch(!showSearch)}
            >{showSearch?"Close":"Search"}
            </Button>
    </section>

    {showCreate && <ProductInput 
                    setShowCreate={setShowCreate} 
                    updateErrorMsg={updateErrorMsg} 
                    handleRefresh={handleRefresh} />}

    {showSearch && <SearchProduct 
                    productList={products} />}

    {showDelete && <ConfirmDelete 
         currentID={currentID.current} 
         onDelete={handleDelete} 
         handleRefresh={handleRefresh} 
         setShowDelete={setShowDelete} 
         />}
    <Container className='overflow-auto'>
        <p className='text-center text-muted m-0 p-0' >
            Scroll to left to see more information
        </p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Quantity In Stock</th>
                    <th>Category</th>
                    <th>Supplier</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {products && products.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>{product.price}</td>
                    <td>{product.quantityInStock}</td>
                    <td>{product.category}</td>
                    <td>{product.supplier.slice(3,10)}</td>
                    <td className='d-flex'>
                        <Button 
                            variant="warning" 
                            className="me-2" 
                            onClick={() => handleUpdate(product)}
                        >
                            Update
                        </Button>
                        <Button 
                            variant="danger" 
                            onClick={() => 
                                {
                                    currentID.current = product._id
                                    setShowDelete(true)
                                }
                            }
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    </Container>

</Container>
};

export default ProductList;