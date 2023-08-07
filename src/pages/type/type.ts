import { PlanetData } from "../../data";

export interface OverviewContentProps {
    planet: PlanetData | undefined;
    color?:string
    activeStructure: string; 
  }