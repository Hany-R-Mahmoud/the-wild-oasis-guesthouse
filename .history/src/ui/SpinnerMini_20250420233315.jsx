import styled, { keyframes } from "styled-components";
import { BiLoaderCircle } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderCircle)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
