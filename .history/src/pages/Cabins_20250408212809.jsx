import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {

  useEffect(function () {
  getCabins(.then)
},[])

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
