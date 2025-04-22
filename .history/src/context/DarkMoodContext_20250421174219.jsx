import { createContext, useContext } from "react";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  return (
    <DarkMoodContext.Provider value={{}}>{children}</DarkMoodContext.Provider>
  );
}

function useDarkMood() {
  const context = useContext(DarkMoodContext);
  if (context === undefined) throw new Error("Context is used outside");
  return context;
}
