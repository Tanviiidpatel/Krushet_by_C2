import { InvestorHomepage, InvestorProfile, InvestorFormAi } from "./components/Investor-home/components"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {I_Login, I_Signup,C_Login, C_Signup, F_Login, F_Signup, Homepage, FeaturePage, ContactPage} from "./components/home-1/component";
import { AddCrop } from "./pages/Farmer/components";
import { FarmerProfile } from "./components/farmer/components";
import Demo from "./pages/Farmer/demo/Demo";
import DemoDetails from "./pages/Farmer/demo/DemoDetails";
import DemoFarmerInvestment from "./pages/Farmer/demo/DemoFarmerInvestment";
import DemoInvestorCheckout from "./pages/Farmer/demo/demoInvestorCheckout";
import { useAppStore } from "./store";



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
          
          <Route path="/farmer/login" element={<F_Login />} />
          <Route path="/farmer/signup" element={<F_Signup />} />
          <Route path="/investor/login" element={<I_Login />} />
          <Route path="/investor/signup" element={<I_Signup />} />
          <Route path="/investor/profile" element={<InvestorProfile />} />
          <Route path="/farmer/profile" element={<FarmerProfile />}></Route>
          <Route path="/farmer/add-crop" element={<AddCrop />} />
          <Route path="/investor/investmentAi" element={<InvestorFormAi />} />
          <Route path="/product/demo" element={<Demo />} /> 
          <Route path="/product/:id" element={<DemoDetails />} />
          <Route path="/farmer/demo/investment" element={<DemoFarmerInvestment />} />
        <Route path="/investor/investment" element={<DemoInvestorCheckout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
        