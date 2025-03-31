import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Incomplete from './pages/DigitalAddressCertificateReport/Incomplete';
import Verified from './pages/DigitalAddressCertificateReport/Verified';
import Failed from './pages/DigitalAddressCertificateReport/Failed';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Incomplete />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </Router>
  )
}

export default App
