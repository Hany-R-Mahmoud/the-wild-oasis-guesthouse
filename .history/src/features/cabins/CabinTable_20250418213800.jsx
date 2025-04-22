import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useReadCabins } from "./useReadCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabins, isLoading, error } = useReadCabins();
  const [searchParams] = useSearchParams();

  // 1) Filter
  // if switching to Cabins Page for first time, the search params would be null , no previously clicked buttons,
  //to avoid that, set it to be "all" by default
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);

  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

  // 2) Sort BY
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filteredCabins?.sort(
    (a, b) => a[field] - b[field] * modifier
  );

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
          // data={filteredCabins}
          data={sortedCabins}
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
