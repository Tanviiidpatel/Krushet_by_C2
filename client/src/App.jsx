import { Homepage,InvestorHomepage } from "./components/components"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup } from "./components/home-1/component";
import Customer from "./pages/customer_dashboard/Customer";
import CustomerLayout from "./components/customer/CustomerLayout"; 
import CustomerDashboard from "./components/customer/CustomerDashboard"; 
import Shop from "./components/customer/Shop/Shop";
import PreOrder from "./components/customer/PreOrder/PreOrder"; 
import InSeasonNow from "./components/customer/InSeasonNow/InSeasonNow";
import ProductDetail from "./components/customer/ProductDetail/ProductDetail";
import AllProducts from "./components/customer/Shop/AllProducts";
import MyOrders from "./components/customer/Orders/MyOrders";
import Cart from "./components/customer/Cart/Cart";
import Checkout from "./components/customer/Checkout/Checkout";



function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/investor" element={<InvestorHomepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer-dashboard" element={<CustomerLayout />}>
          <Route index element={<CustomerDashboard />} />  {/* ✅ Shows Main Dashboard by default */}
            <Route path="shop" element={<Shop />} />  {/* ✅ Navigates inside dashboard */}
            <Route path="preorder" element={<PreOrder />} />
            <Route path="in-season-now" element={<InSeasonNow />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="/customer-dashboard/all-products" element={<AllProducts />} />
            
        </Route>
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
        