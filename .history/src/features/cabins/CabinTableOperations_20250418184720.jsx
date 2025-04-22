// import TableOperations from "../../ui/TableOperations";
import styled from "styled-components";

import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

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
      <SortBy options={[
        { label: "Sort by name {A-Z}", value: 'name-asc' }
        { label: "Sort by name {Z-A}", value: 'name-desc' }
        { label: "", value: '' }
        { label: "", value: '' }
        { label: "", value: '' }
      ]} />
    </TableOperations>
  );
}

export default CabinTableOperations;
