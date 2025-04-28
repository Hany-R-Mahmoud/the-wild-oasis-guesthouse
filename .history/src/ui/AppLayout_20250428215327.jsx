import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992xpx) {
    width: 950px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

/* 
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
}
@media (min-width:768px) {
    .container {
        width: 750px;
    }
}
@media (min-width:992xpx) {
    .container {
        width: 950px;
    }
}
@media (min-width:1200px) {
    .container {
        width: 1170px;
    }
}
*/
// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 240px 1fr;
//   grid-template-rows: auto;
//   height: 100dvh;

//   @media (min-width: 481px) and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     grid-template-rows: auto 1fr;
//   }

//   @media (min-width: 769px) and (max-width: 1024px) {
//     grid-template-columns: 26rem 1fr;
//     grid-template-rows: auto 1fr;
//   }

//   @media (min-width: 1025px) {
//     grid-template-columns: 30rem 1fr;
//     grid-template-rows: auto 1fr;
//   }
// `;

// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.4rem;
//   overflow: scroll;

//   @media (max-width: 480px) {
//     padding: 2rem 2.4rem 4rem;
//   }
// `;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;

//   @media (max-width: 480px) {
//     max-width: 90rem;
//   }
// `;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
