
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/CartPage';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/Checkout/OrderSuccess';
import Layout from './layouts';
import Home from './pages/Home/home';  // Fixed import path
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CartPage from './pages/Cart/CartPage';
import { Toaster } from 'react-hot-toast';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import UserOrders from './pages/UserOrders/UserOrders';
import OrderDetails from './pages/UserOrders/OrderDetails';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="seller/:sellerId" element={<SellerProfile />} />
          <Route path="/orders" element={<UserOrders />}/>
          <Route path="/orders/:orderId" element={<OrderDetails />}/>
        </Route>
        
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
