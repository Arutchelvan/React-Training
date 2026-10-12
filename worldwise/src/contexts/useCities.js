import { createContext, useContext } from "react";

const CitiesContext = createContext();

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesProvider updated inside App Component.");

  return context;
}

export { CitiesContext, useCities };
