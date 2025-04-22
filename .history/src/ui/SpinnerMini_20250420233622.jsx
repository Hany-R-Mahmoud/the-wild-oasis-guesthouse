import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
from {
    transform: rotate(0)
  }
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 0.5s infinite linear;
`;

export default SpinnerMini;
