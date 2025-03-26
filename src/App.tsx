
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/Checkout/OrderSuccess';
import Layout from './layouts';
import Home from './pages/Home/home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CartPage from './pages/Cart/CartPage';
import { Toaster } from 'react-hot-toast';
import AuthLayout from './layouts/AuthLayout';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import UserOrders from './pages/UserOrders/UserOrders';
import OrderDetails from './pages/UserOrders/OrderDetails';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Auth/signin';
import SignUp from './pages/Auth/signup';
import Services from './pages/Services/Services'; // Add this import
import ExpertProfile from './pages/Expert/ExpertProfile';

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="seller/:sellerId" element={<SellerProfile />} />
          <Route path="/orders" element={<UserOrders />}/>
          <Route path="/orders/:orderId" element={<OrderDetails />}/>
          <Route path="/services" element={<Services />}/> {/* Add this route */}
          <Route path="/expert/:expertId" element={<ExpertProfile />} />
        </Route>
        
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
