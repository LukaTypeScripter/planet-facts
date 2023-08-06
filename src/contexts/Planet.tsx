import React, { createContext, useEffect, useState } from "react";
import { PlanetContextValue, initialContextValue } from "./types/Planet";
const PlanetContext = createContext<PlanetContextValue>(initialContextValue);
export const PlanetContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

    const [activeStructure, setActiveStructure] = useState('overview'); 
  const value: PlanetContextValue = {
    activeStructure,
    setActiveStructure
  };
 
  return <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>;
};

export default PlanetContext;