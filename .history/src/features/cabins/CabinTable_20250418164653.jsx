import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useReadCabins } from "./useReadCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabins, isLoading, error } = useReadCabins();
  const [searchParams] = useSearchParams();

  // if switching to Cabins Page for first time, the search params would be null , no previously clicked buttons,
  //to avoid that, set it to be "all" by default
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);

  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

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
          // data={cabins}
          data={filteredCabins}
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
