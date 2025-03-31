import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IncompleteDigitalAddressVerificationReport from './pages/IncompleteDigitalAddressVerificationReport';
import VerifiedDigitalAddressVerificationeport from './pages/VerifiedDigitalAddressVerificationeport';
import FailedDigitalAddressVerificationReport from './pages/FailedDigitalAddressVerificationReport';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<IncompleteDigitalAddressVerificationReport />} />
        <Route path="/verified" element={<VerifiedDigitalAddressVerificationeport />} />
        <Route path="/failed" element={<FailedDigitalAddressVerificationReport />} />
      </Routes>
    </Router>
  )
}

export default App
