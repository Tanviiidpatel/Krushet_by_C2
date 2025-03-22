import { Homepage,InvestorHomepage } from "./components/components"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup } from "./components/home-1/component";

function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/investor" element={<InvestorHomepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
        