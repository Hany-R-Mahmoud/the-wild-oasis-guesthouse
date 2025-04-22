import styled from "styled-components";
import { useDarkMood } from "../context/DarkMoodContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMood } = useDarkMood();

  const src = isDarkMood ? "" : "/logo-light.png"
  return (
    <StyledLogo>
      <Img src= alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
