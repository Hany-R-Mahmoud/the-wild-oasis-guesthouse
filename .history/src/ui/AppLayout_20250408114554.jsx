import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: green;
  padding: ;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
