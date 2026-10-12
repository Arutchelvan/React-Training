import { createContext, useContext } from "react";

const AuthContext = createContext();
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside AuthProvider");

  return context;
}

export { AuthContext, useAuth };
