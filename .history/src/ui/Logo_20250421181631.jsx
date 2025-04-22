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

  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
