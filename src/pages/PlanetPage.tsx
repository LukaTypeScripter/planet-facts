
import { useParams } from 'react-router-dom';
import { PlanetData } from '../data';
import styled from 'styled-components';
import { useState } from 'react';
import OverviewContent from './OverviewContent';
import StructureContent from './StructureContent';
import SurfaceContent from './SurfaceContent';
import Footer from '../components/footer/Footer';

interface PlanetPageProps {
    data: PlanetData[]; 
  }
  
  const PlanetPage = ({ data }: PlanetPageProps) => {
    const { planetName } = useParams();
    const planet = data.find(item => item.name.toLowerCase() === planetName) || data.find(item => item.name === "Mercury");

    const [activeStructure, setActiveStructure] = useState('overview'); 
  
    const handleStructureClick = (structure:string) => {
      setActiveStructure(structure);
    };
  
    if (!planet) {
      return <div>Planet not found</div>;
    }
  
    return (
      <>
      <MainWrapper>
        <div className='structure__wrapper'>
          <p
            className={`overview ${activeStructure === 'overview' ? 'active' : ''}`}
            onClick={() => handleStructureClick('overview')}
          >
            OVERVIEW
          </p>
          <p
            className={`structure ${activeStructure === 'structure' ? 'active' : ''}`}
            onClick={() => handleStructureClick('structure')}
          >
            STUCTURE
          </p>
          <p
            className={`surface ${activeStructure === 'surface' ? 'active' : ''}`}
            onClick={() => handleStructureClick('surface')}
          >
            SURFACE
          </p>
        </div>
        <div className='planet'>
        {activeStructure === 'overview' && <OverviewContent planet={planet} />}
      {activeStructure === 'structure' && <StructureContent planet={planet} />}
      {activeStructure === 'surface' && <SurfaceContent planet={planet} />}
        </div>
       
      </MainWrapper>
      <Footer planet={planet}/>
       </>
    );
  }
  

const MainWrapper
 = styled.main`
  
  .structure__wrapper {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    p {
      background-color: transparent;
    text-transform: uppercase;
    color: hsla(0,0%,100%,.5);
    font-family: spartan;
    font-weight: 700;
    font-size: .5625rem;
    line-height: .625rem;
    letter-spacing: 2px;
    position: relative;
    }
  }
  .active::after {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: -20px;
    left: 0;
    background-color: #d93b36;
  }
 `
export default PlanetPage;