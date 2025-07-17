import { Container } from 'react-bootstrap';
import Heading from '../components/HomeComponents/Heading';
import Introdesign from '../components/HomeComponents/Introdesign';
import Introoverview from '../components/HomeComponents/Introoverview';
import ProductInfoPage from '../components/HomeComponents/ProductInfoPage';
import InvoiceInfoPage from '../components/HomeComponents/InvoiceInfoPage';
import SupplierInfoPage from '../components/HomeComponents/SupplierInfoPage';
import UserAndCustomer from '../components/HomeComponents/UserAndCustomer';


const HomePage = () => (
    <Container className="mt-5 text-center">
        <Heading />
        <Introdesign />
        <Introoverview />
        <ProductInfoPage />
        <SupplierInfoPage />
        <InvoiceInfoPage />
        <UserAndCustomer />
    </Container>
);

export default HomePage;
