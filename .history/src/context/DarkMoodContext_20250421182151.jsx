import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  const [isDarkMood, setIsDarkMood] = useLocalStorageState(false, "isDarkMood");

  function toggleDarkMood() {
    setIsDarkMood((isDark) => !isDark);
  }

  useEffect(
    function () {
      if (isDarkMood) {
        document.documentElement.classList.add("dark-mood");
        document.documentElement.classList.remove("light-mood");
      }
    },
    [isDarkMood]
  );

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
export { DarkMoodProvider, useDarkMood };
