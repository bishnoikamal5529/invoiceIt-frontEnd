import {useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddProduct from './AddProduct';
import CreateInvoiceForm from './CreateInvoiceForm';


const InvoiceInput = ({updateErrorMsg, setShowCreate, handleRefresh, productList }) => {
    const [itemsList, setItemList] = useState([]);

    const addItem = (item) => {        
        let ignore = false;
        for(let i=0; i<itemsList.length; i++){
            if(item.productName === itemsList[i].productName){
                ignore = true;
            }
        }
        if(!ignore){
            setItemList(itemsList => [...itemsList, item]);
        }
    }

    const removeItem = (productName) => {
        let newList = [];
        for (let i = 0; i < itemsList.length; i++) {
            if(itemsList[i].productName !== productName){
                newList.push(itemsList[i]);
            } 
        }        
        setItemList(newList);
    }

    const increaseQuantity = (productName) => {
        let ignore = false;
        let currentItem = 0;
        for(let i=0; i<itemsList.length; i++){
            if(productName === itemsList[i].productName){                
                currentItem = itemsList[i];
            }
        }
        
        
        for(let i=0; i<productList.length; i++){
            if(currentItem.productName === productList[i].name){
                if(currentItem.quantity >= productList[i].quantityInStock){
                    ignore = true;
                }
            }
        }

        
        
        if(!ignore){
            let newList = [];
            for (let i = 0; i < itemsList.length; i++) {
                newList[i] = itemsList[i]
                if(itemsList[i].productName === productName){
                    newList[i].quantity++;
                } 
            }
            setItemList(newList);
        }
    }

    const decreaseQuantity = (productName) => {
        let newList = [];
        for (let i = 0; i < itemsList.length; i++) {
            newList[i] = itemsList[i]
            if(itemsList[i].productName === productName){
                if(newList[i].quantity > 1){
                    newList[i].quantity--
                }
            } 
        }
        setItemList(newList);
        
    }

    return (
        <Container className='my-5 border-2 border-black rounded-3 shadow-lg'> 
            <h4 className='text-center pt-3 text-primary-emphasis'>Input Invoice Details.</h4>
            <Row className='w-100'>
                <Col className=' border-end'>
                    <CreateInvoiceForm  
                        removeItem={removeItem}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        invoiceNum={"INV" + Date.now()} 
                        itemsList={itemsList} 
                        productList={productList}
                        handleRefresh={handleRefresh}
                        setShowCreate={setShowCreate}
                        updateErrorMsg={updateErrorMsg}
                    />
                </Col>
                <Col className=''>
                    <AddProduct addItem={addItem} productList={productList} />
                </Col>
            </Row>
        </Container>
    );
};

export default InvoiceInput;
