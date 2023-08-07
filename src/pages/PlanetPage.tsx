
import {  useParams } from 'react-router-dom';
import { PlanetData } from '../data';
import styled from 'styled-components';
import { useContext, useMemo } from 'react';
import OverviewContent from './OverviewContent';
import StructureContent from './StructureContent';
import SurfaceContent from './SurfaceContent';
import Footer from '../components/footer/Footer';
import useMediaQuery from '../hooks/useMediaQuery';
import PlanetContext from '../contexts/Planet';
import { planetColors } from '../components/Header/Header';

interface PlanetPageProps {
    data: PlanetData[]; 
  }
  
  const PlanetPage = ({ data }: PlanetPageProps) => {
    const isAboveMobileScreens = useMediaQuery("(max-width:685px)");
    const { planetName } = useParams();
    const defaultPlanetName = "mercury";
  const currentPlanetName = planetName || defaultPlanetName;
  const planet = useMemo(() => {
    if (!planetName) {
      return data.find(item => item.name.toLowerCase() === "mercury");
    }
    return data.find(item => item.name.toLowerCase() === currentPlanetName);
  }, [data, currentPlanetName, planetName]);
const {setActiveStructure,activeStructure} = useContext(PlanetContext)
    const handleStructureClick = (structure:string) => {
      setActiveStructure(structure);
    };
    if (!planet) {
      return <div>Planet not found</div>;
    }
    const activeColor = planetColors[planet.name] as string;
    return (
      <>
      <MainWrapper bgcolor={activeColor}>
        {isAboveMobileScreens && (
  <div className='structure__wrapper'>
  <p
    className={`overview ${activeStructure === 'overview' ? 'actives' : ''}`}
    onClick={() => handleStructureClick('overview')}
    
  >
    OVERVIEW
  </p>
  <p
    className={`structure ${activeStructure === 'structure' ? 'actives' : ''}`}
    onClick={() => handleStructureClick('structure')}
  >
    STUCTURE
  </p>
  <p
    className={`surface ${activeStructure === 'surface' ? 'actives' : ''}`}
    onClick={() => handleStructureClick('surface')}
  >
    SURFACE
  </p>
</div>
        )}
      
      <div className='planet'>
      {activeStructure === 'overview' &&  <OverviewContent
    planet={planet}
    color={activeColor}
    activeStructure={activeStructure}
  />}
          {activeStructure === 'structure' &&  <StructureContent
    planet={planet}
    color={activeColor}
    activeStructure={activeStructure}
  />}
          {activeStructure === 'surface' &&  <SurfaceContent
    planet={planet}
   color={activeColor}
   activeStructure={activeStructure}
  />}
</div>
       
      </MainWrapper>
      <Footer planet={planet}    activeStructure={activeStructure}/>
       </>
    );
  }
  

const MainWrapper
 = styled.main<{bgcolor:string}>`

@media screen and (min-width: 685px) {
  .planet {
padding: 96px 0 100px;
}
}
 
  .structure__wrapper {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    p {
      background-color: transparent;
    text-transform: uppercase;
    color: hsla(0,0%,100%,.5);
    font-weight: 700;
    font-size: .5625rem;
    line-height: .625rem;
    letter-spacing: 2px;
    position: relative;
    }
  }
  .actives::after {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: -20px;
    left: 0;
    background-color: ${props => props.bgcolor};
  }
 `
export default PlanetPage;