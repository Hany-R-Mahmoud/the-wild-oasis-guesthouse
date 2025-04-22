import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
