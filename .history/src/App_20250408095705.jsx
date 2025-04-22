import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">The Wild Oasis</Heading>
        <Heading type="h2">Check in and out</Heading>
        <Button>Check In</Button>
        <Button>CheckOut</Button>
        <Heading type="h3">Form</Heading>
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
