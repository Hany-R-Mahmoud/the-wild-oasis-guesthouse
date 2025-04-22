import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
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
