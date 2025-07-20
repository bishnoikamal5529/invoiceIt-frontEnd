import { useState } from 'react';
import { Carousel, Container ,Spinner ,Alert } from 'react-bootstrap';
import Heading from '../components/HomeComponents/Heading';
import Introdesign from '../components/HomeComponents/Introdesign';
import Introoverview from '../components/HomeComponents/Introoverview';
import ProductInfoPage from '../components/HomeComponents/ProductInfoPage';
import InvoiceInfoPage from '../components/HomeComponents/InvoiceInfoPage';
import SupplierInfoPage from '../components/HomeComponents/SupplierInfoPage';
import CustomerInfoPage from '../components/HomeComponents/CustomerInfoPage';
import UserInfoPage from '../components/HomeComponents/UserInfoPage';
import Footer from '../components/HomeComponents/Footer';
import GuestLoginWarning from '../components/HomeComponents/GuestLoginWarning';
import NavigationButtons from '../components/HomeComponents/NavigationButtons';


const HomePage = () => {

    const [msgLoading, setMsgLoading] = useState(false);
    const [navLinks, setNavLinks] = useState(false);

   return <div className="mt-5 text-center">
        <Container className='mb-4'>
            {
                msgLoading && msgLoading == 'Spinner' &&
                <Spinner animation='border' variant='dark' />
            }
            {
                msgLoading && msgLoading == 'Success' && 
                <Alert variant="primary" className='text-center text-capitalize'>Guest Login Successful.</Alert>
            }
            {
                msgLoading && msgLoading == 'Error' && 
                <Alert variant="danger" className='text-center text-capitalize'>There is a server error while login. Please try again in few minutes.</Alert>
            }
        </Container>
            {
                navLinks && 
                <NavigationButtons />
            }
        <Container>
            <GuestLoginWarning 
                setMsgLoading={setMsgLoading}
                setNavLinks={setNavLinks} />
            <Heading />
            <Introdesign />
            <Introoverview />
        <Carousel 
            interval={null}
            className='p-0 shadow-lg my-5'>
            <Carousel.Item>
                <ProductInfoPage />
            </Carousel.Item>
            <Carousel.Item>
                <SupplierInfoPage />
            </Carousel.Item>
            <Carousel.Item>
                <InvoiceInfoPage />
            </Carousel.Item>
            <Carousel.Item>
                <CustomerInfoPage />
            </Carousel.Item>
            <Carousel.Item>
                <UserInfoPage />
            </Carousel.Item>
        </Carousel>
        </Container>

        <Footer />
    </div>
};

export default HomePage;
