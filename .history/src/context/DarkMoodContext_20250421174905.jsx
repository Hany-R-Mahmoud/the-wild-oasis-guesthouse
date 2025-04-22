import { createContext, useContext } from "react";
import UseLocalStorageState from "../hooks/useLocalStorageState";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  const [isDarkMood, setIsDarkMood] = useLocalStorageState(false, "isDarkMood");

  function toggleDarkMood() {
    setIsDarkMood((isDark) => !isDark);
  }

  return (
    <DarkMoodContext.Provider value={{ isDarkMood, toggleDarkMood }}>
      {children}
    </DarkMoodContext.Provider>
  );
}

function useDarkMood() {
  const context = useContext(DarkMoodContext);
  if (context === undefined)
    throw new Error("DarkMoodContext is used outside DarkMoodProvider");
  return context;
}
