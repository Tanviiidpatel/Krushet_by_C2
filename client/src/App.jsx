import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { InvestorHomepage } from "./components/components";
import { Login, Signup, Homepage } from "./components/home-1/component";
import FeaturesPage from "./pages/Homepage/FeaturesPage";
import ContactPage from "./pages/Homepage/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/investor" element={<InvestorHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
