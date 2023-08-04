
import { useParams } from 'react-router-dom';
import { PlanetData } from '../data';
interface PlanetPageProps {
    data: PlanetData[]; 
  }
  
const PlanetPage = ({ data }:PlanetPageProps) => {
  const { planetName } = useParams();
  const planet = data.find(item => item.name.toLowerCase() === planetName);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <div>
      <h2>{planet.temperature}</h2>
      <h1>{planet.name}</h1>
    </div>
  );
}

export default PlanetPage;