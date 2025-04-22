// import TableOperations from "../../ui/TableOperations";
import styled from "styled-components";

import Filter from "../../ui/Filter";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "With discount", value: "with-discount" },
          { label: "No discount", value: "no-discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
