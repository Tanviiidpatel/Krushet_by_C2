import { InvestorHomepage, InvestorProfile } from "./components/Investor-home/components"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup, Homepage} from "./components/home-1/component";
import { AddCrop } from "./pages/Farmer/components";
import { FarmerProfile } from "./components/farmer/components";

function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/investor" element={<InvestorHomepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/investor/profile" element={<InvestorProfile />} />
          <Route path="/farmer/profile" element={<FarmerProfile />}></Route>
          <Route path="/farmer/add-crop" element={<AddCrop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
        