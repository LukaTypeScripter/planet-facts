import React, { createContext,  useState } from "react";
import { PlanetContextValue, initialContextValue } from "./types/Planet";
const PlanetContext = createContext<PlanetContextValue>(initialContextValue);
export const PlanetContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

    const [activeStructure, setActiveStructure] = useState('overview'); 
    const [activePlanet, setactivePlanet] = useState('Mercury');
  const value: PlanetContextValue = {
    activeStructure,
    setActiveStructure,
    activePlanet,
    setactivePlanet
  };
 
  return <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>;
};

export default PlanetContext;