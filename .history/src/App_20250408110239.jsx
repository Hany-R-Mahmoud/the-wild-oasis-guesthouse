import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
