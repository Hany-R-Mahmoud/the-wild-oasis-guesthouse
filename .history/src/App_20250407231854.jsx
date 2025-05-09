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
const Input = styled.input`
  border: 1px;
  border-radius: 5px;
  padding: 0%.8rem 1.2rem;
`;

function App() {
  return (
    <div>
      <H1>Hello</H1>
      <Button>Check In</Button>
      <Input />
    </div>
  );
}

export default App;
