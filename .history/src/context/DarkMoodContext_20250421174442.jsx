import { createContext, useContext } from "react";
import UseLocalStorageState from "../hooks/useLocalStorageState";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  const [isDarkMood, setIsDarkMood] = useLocalStorageState();

  return (
    <DarkMoodContext.Provider value={{}}>{children}</DarkMoodContext.Provider>
  );
}

function useDarkMood() {
  const context = useContext(DarkMoodContext);
  if (context === undefined) throw new Error("Context is used outside");
  return context;
}
