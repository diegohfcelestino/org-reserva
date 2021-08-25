import { createContext, useState } from "react";

export const NavBarContext = createContext();

export function NavBarProvider({ children }) {
  const [isHome, setIsHome] = useState(true)

  function handleIsHome() {
    setIsHome(!isHome)
  }
  return (
    <NavBarContext.Provider value={{
      isHome,
      handleIsHome,
    }}>
      {children}
    </NavBarContext.Provider>
  )
}