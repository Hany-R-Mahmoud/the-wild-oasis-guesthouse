import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="login" element={<Login />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
