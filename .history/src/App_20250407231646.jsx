import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aliceblue;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <H1>Hello</H1>
      <Button>Check In</Button>
    </div>
  );
}

export default App;
