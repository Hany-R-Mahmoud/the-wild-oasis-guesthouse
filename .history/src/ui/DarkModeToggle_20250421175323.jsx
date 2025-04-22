import { HiOutlineMoon } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMood } from "../context/DarkMoodContext";

function DarkModeToggle() {
  const { isDarkMood, toggleDarkMood } = useDarkMood();

  return (
    <ButtonIcon onClick={toggleDarkMood}>
      <HiOutlineMoon />
    </ButtonIcon>
  );
}

export default DarkModeToggle;
