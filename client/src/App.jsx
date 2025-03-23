import {
  InvestorHomepage,
  InvestorProfile,
  InvestorFormAi,
} from "./components/Investor-home/components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  I_Login,
  I_Signup,
  C_Login,
  C_Signup,
  F_Login,
  F_Signup,
  Homepage,
  FeaturePage,
  ContactPage,
} from "./components/home-1/component";
import { FarmerProfile } from "./components/farmer/components";
import Demo from "./pages/Farmer/demo/Demo";
import DemoDetails from "./pages/Farmer/demo/DemoDetails";
import DemoFarmerInvestment from "./pages/Farmer/demo/DemoFarmerInvestment";
import DemoInvestorCheckout from "./pages/Farmer/demo/demoInvestorCheckout";
import { useAppStore } from "./store";

import Customer from "./pages/Consumer/Customer";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import CustomerLayout from "./components/customer/CustomerLayout";
import Shop from "./components/customer/Shop/Shop";
import PreOrder from "./components/customer/PreOrder/PreOrder";
import InSeasonNow from "./components/customer/InSeasonNow/InSeasonNow";
import ProductDetail from "./components/customer/ProductDetail/ProductDetail";
import AllProducts from "./components/customer/Shop/AllProducts";
import MyOrders from "./components/customer/Orders/MyOrders";
import Cart from "./components/customer/Cart/Cart";
import Checkout from "./components/customer/Checkout/Checkout";
import AddCrop from "./pages/Farmer/AddCrop/AddCrop";
import InventoryPage from "./pages/Farmer_dashboard_page/Inventory";
import EarningsPage from "./pages/Farmer_dashboard_page/EarningsPage";
import GuideSection from "./components/farmer_dashboard/GuideSection";
import MarketChart from "./components/farmer_dashboard/MarketCart";
import MarketAnalysis from "./components/farmer_dashboard/MarketAnalysis";
import Navbar from "./components/farmer_dashboard/Navbar";
import Farmer_dash_hero from "./components/farmer_dashboard/Farmer_dash_hero";

function App() {
  const { userInfo } = useAppStore();
  // const isAuthenticated = !!userInfo;
  // const privateRoute = ({ children }) => {

  // }

  // const authRoute

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/investor" element={<InvestorHomepage />} />
          <Route path="/consumer/signup" element={<C_Signup />} />
          <Route path="/consumer/login" element={<C_Login />} />

          <Route path="/consumer" element={<CustomerLayout />}>
            <Route index element={<Customer />} />
            {/* ✅ Correct: Renders at /customer-dashboard */}
            <Route path="shop" element={<Shop />} />
            <Route path="preorder" element={<PreOrder />} />
            <Route path="in-season-now" element={<InSeasonNow />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="all-products" element={<AllProducts />} />            
          </Route>
          

          <Route path="/orders" element={<MyOrders />} />
          <Route path="/consumer/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/farmer/login" element={<F_Login />} />
          <Route path="/farmer/signup" element={<F_Signup />} />
          <Route
          path="/farmer/dashboard"
          element={
            <div>
             
              <Navbar />
              <Farmer_dash_hero />
              <GuideSection />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ">
             
                <div className="w-8px">
                  <MarketAnalysis />
                </div>
                <div className="w-8px">
                  <MarketChart />
                </div>
              </div>
              <InventoryPage />
              <AddCrop />
              <EarningsPage />
            </div>
          }
        />


          <Route path="/investor/login" element={<I_Login />} />
          <Route path="/investor/signup" element={<I_Signup />} />
          <Route path="/investor/profile" element={<InvestorProfile />} />
          <Route path="/farmer/profile" element={<FarmerProfile />}></Route>
          <Route path="/farmer/add-crop" element={<AddCrop />} />
          <Route path="/investor/investmentAi" element={<InvestorFormAi />} />
          <Route path="/product/demo" element={<Demo />} />
          <Route path="/product/:id" element={<DemoDetails />} />
          <Route
            path="/farmer/demo/investment"
            element={<DemoFarmerInvestment />}
          />
          <Route
            path="/investor/investment"
            element={<DemoInvestorCheckout />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
