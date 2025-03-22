import { InvestorFormAi,InvestorHomepage } from "./components/components"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<InvestorHomepage />} />
          <Route path="/investmentAi" element={<InvestorFormAi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
        