export interface PlanetContextValue {
    activeStructure: string;
setActiveStructure: React.Dispatch<React.SetStateAction<string>>
activePlanet: string;
setactivePlanet: React.Dispatch<React.SetStateAction<string>>
}


export const initialContextValue: PlanetContextValue = {
    activeStructure:"overview",
    setActiveStructure:() => {},
    activePlanet:"overview",
    setactivePlanet:() => {}
};