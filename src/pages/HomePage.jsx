import { Container, Carousel } from 'react-bootstrap';
import Heading from '../components/HomeComponents/Heading';
import Introdesign from '../components/HomeComponents/Introdesign';
import Introoverview from '../components/HomeComponents/Introoverview';
import ProductInfoPage from '../components/HomeComponents/ProductInfoPage';
import InvoiceInfoPage from '../components/HomeComponents/InvoiceInfoPage';
import SupplierInfoPage from '../components/HomeComponents/SupplierInfoPage';
import CustomerInfoPage from '../components/HomeComponents/CustomerInfoPage';
import UserInfoPage from '../components/HomeComponents/UserInfoPage';


const HomePage = () => {

   return <Container className="mt-5 text-center">
        <Heading />
        <Introdesign />
        <Introoverview />

        <Carousel className='p-0 shadow-lg my-5'>
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
};

export default HomePage;
