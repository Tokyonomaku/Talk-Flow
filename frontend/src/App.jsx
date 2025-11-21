import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleTalkFlowUI from "./SimpleTalkFlowUI";
import Pricing from "./pages/Pricing";
import Activate from "./pages/Activate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimpleTalkFlowUI />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/activate" element={<Activate />} />
      </Routes>
    </Router>
  );
}
