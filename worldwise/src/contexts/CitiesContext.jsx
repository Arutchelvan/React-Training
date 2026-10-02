import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  errorMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, errorMessage: "" };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, errorMessage }, disptch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchCities() {
      disptch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data);
        disptch({ type: "cities/loaded", payload: data });
      } catch {
        disptch({
          type: "rejected",
          payload: "There was an error loading data.",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;
    disptch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      console.log(data);
      disptch({ type: "city/loaded", payload: data });
    } catch {
      disptch({
        type: "rejected",
        payload: "There was an error loading data.",
      });
    }
  }

  async function createCity(newCity) {
    disptch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);
      disptch({ type: "cities/created", payload: data });
    } catch {
      disptch({
        type: "rejected",
        payload: "There was an error while creating city.",
      });
    }
  }

  async function deleteCity(id) {
    disptch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, { method: "DELETE" });
      disptch({ type: "city/deleted", payload: id });
    } catch {
      disptch({
        type: "rejected",
        payload: "There was an error while deleting city.",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        errorMessage,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesProvider updated inside App Component.");

  return context;
}
export { CitiesProvider, useCities };
