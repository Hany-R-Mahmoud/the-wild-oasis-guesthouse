// import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter />
    </TableOperations>
  );
}

export default CabinTableOperations;
