import { createContext, useContext, useState } from "react";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  const [isDarkMood, setIsDarkMood] = useState;
  return (
    <DarkMoodContext.Provider value={{}}>{children}</DarkMoodContext.Provider>
  );
}

function useDarkMood() {
  const context = useContext(DarkMoodContext);
  if (context === undefined) throw new Error("Context is used outside");
  return context;
}
