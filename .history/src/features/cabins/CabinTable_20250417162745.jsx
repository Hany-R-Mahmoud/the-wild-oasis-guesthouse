import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useReadCabins } from "./useReadCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { cabins, isLoading, error } = useReadCabins();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        {/* rendr prop technique */}
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />

        {/* <Table.Body>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Table.Body> */}
      </Table>
    </Menus>
  );
}

export default CabinTable;
