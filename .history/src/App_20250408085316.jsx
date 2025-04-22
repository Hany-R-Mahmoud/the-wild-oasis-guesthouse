import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Check In</Button>
        <Button>CheckOut</Button>
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
