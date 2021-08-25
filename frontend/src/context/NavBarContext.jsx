import { createContext, useState } from "react";

export const NavBarContext = createContext();

export function NavBarProvider({ children }) {
  const [isHome, setIsHome] = useState(true)

  function handleIsHome(prop) {
    setIsHome(prop)
  }
  return (
    <NavBarContext.Provider value={{
      isHome,
      handleIsHome,
      setIsHome
    }}>
      {children}
    </NavBarContext.Provider>
  )
}