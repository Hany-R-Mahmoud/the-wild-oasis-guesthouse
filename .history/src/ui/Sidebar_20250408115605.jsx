import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: aliceblue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-0);

  grid-row: 1/ -1;
`;

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
