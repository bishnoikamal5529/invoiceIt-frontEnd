import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponents/NavbarComponent';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import InvoicePage from './pages/InvoicePage';
import SupplierPage from './pages/SupplierPage';
import MaintenancePage from './pages/MaintenancePage';

function App() {
  return (
    <section>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/supplier" element={<SupplierPage />} />
          <Route path='/maintenance' element={<MaintenancePage />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App
