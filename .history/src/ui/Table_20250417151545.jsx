import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

// 1) context
const TableContext = createContext();

// 2) Parent
function Table({ columns, children }) {
  // return createPortal(
  return (
    <TableContext.Provider value={{ columns }}>
      {/* role attr is for accessability reasons, not passing props */}
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
    // document.body
  );
}

/* Table receives prop columns=''
in Cabin table <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"></Table>

then this prop is passed through the context value
value={{columns}}

then the child comp receives it through consuming context
const { columns } = useContext(TableContext);

then uses it in jsx
<StyledElement columns={columns}

which is used as a prop for the styledElement
grid-template-columns: ${(props) => props.columns};
*/

// 3) children

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns} as="header">
      {/*  grid-template-columns: ${(props) => props.columns}; */}
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ children }) {
  // return <StyledBody>{children}</StyledBody>;
}

// function Footer() {}

// 4) add as properties
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
