import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
