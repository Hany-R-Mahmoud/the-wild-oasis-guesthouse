import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main``;

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
