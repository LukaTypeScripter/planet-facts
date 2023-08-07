import { useContext, useState } from 'react'
import styled from 'styled-components'
import { iconCHeveron, iconHamburger } from '../../assets'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
import PlanetContext from '../../contexts/Planet'
type PlanetColors = {
  [key: string]: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const planetColors: PlanetColors = {
  Mercury: '#419db9',
  Venus: '#eda44a',
  Earth: '#6f2ed6',
  Mars: '#d14e33',
  Jupiter: '#d93b36',
  Saturn: '#cb5020',
  Uranus: '#1ec2a4',
  Neptune: '#2d68f0',
};
function Header() {
  const isAboveMediumScreens = useMediaQuery("(min-width:684px)");
  const isAboveTabletScreens = useMediaQuery("(min-width:685px)");
  const [isHamOpen,setIsHamOpen] = useState(false)
 
    const {setactivePlanet,activePlanet} = useContext(PlanetContext)

    const handlePlanetClick = (planet:string) => {
      setactivePlanet(planet);
    };
  
  return (
    <Headers>
      <p className='Header__text'>The planets</p>
      {isAboveMediumScreens ? (
        <>
         {isAboveTabletScreens && (
                <nav className='tablet__size__nav'>
                <StyledLink
                  to='planet/mercury'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Mercury')}
                  bgcolor={ activePlanet === "Mercury" ?planetColors['Mercury'] : ""}
                >
                  Mercury
                </StyledLink>
                <StyledLink
                  to='planet/venus'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Venus')}
                  bgcolor={ activePlanet === "Venus" ?planetColors['Venus'] : ""}
                >
                  Venus
                </StyledLink>
                <StyledLink
                  to='planet/mars'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Mars')}
                  bgcolor={ activePlanet === "Mars" ?planetColors['Mars'] : ""}
                >
                  Mars
                </StyledLink>
                <StyledLink
                  to='planet/jupiter'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Jupiter')}
                  bgcolor={ activePlanet === "Jupiter" ?planetColors['Jupiter'] : ""}
                >
                  Jupiter
                </StyledLink>
                <StyledLink
                  to='planet/saturn'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Saturn')}
                  bgcolor={ activePlanet === "Saturn" ?planetColors['Saturn'] : ""}
                >
                  Saturn
                </StyledLink>
                <StyledLink
                  to='planet/uranus'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Uranus')}
                  bgcolor={ activePlanet === "Uranus" ?planetColors['Uranus'] : ""}
                >
                  Uranus
                </StyledLink>
                <StyledLink
                  to='planet/neptune'
                  activeplanet={activePlanet}
                  onClick={() => handlePlanetClick('Neptune')}
                  bgcolor={ activePlanet === "Neptune" ?planetColors['Neptune'] : ""}
                >
                  Neptune
                </StyledLink>
              </nav>
        ) }
        </>
      ) : (
        <>
        <button className='Header__btn' onClick={() => setIsHamOpen(!isHamOpen)}>
          <img src={iconHamburger} alt="ham" className='header__hamburger' />
        </button>
        {isHamOpen && (
          <nav className='Header__navigation'>
          <StyledLink to='planet/mercury' bgcolor={planetColors.Mercury}>
            Mercury
          </StyledLink>
          <StyledLink to='planet/venus' bgcolor={planetColors.Venus}>
            Venus
          </StyledLink>
          <StyledLink to='planet/mars' bgcolor={planetColors.Mars}>
          Mars
          </StyledLink>
          <StyledLink to='planet/jupiter' bgcolor={planetColors.Jupiter}>
          Jupiter
          </StyledLink>
          <StyledLink to='planet/saturn' bgcolor={planetColors.Saturn}>
          Saturn
          </StyledLink>
          <StyledLink to='planet/uranus' bgcolor={planetColors.Uranus}>
          Uranus
          </StyledLink>
          <StyledLink to='planet/neptune' bgcolor={planetColors.Neptune}>
          Neptune
          </StyledLink>
          </nav>
        )}

         
        </>
      )}
        
    </Headers>
  )
}
const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:16px 24px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid hsla(0,0%,100%,.2);
  @media screen and (min-width: 685px) {
    flex-direction: column;
    justify-content: normal;
    padding: 33px 50px 27px;
  }
  @media screen and (min-width: 1016px) {
    flex-direction: row;
    justify-content: space-between;
  }
  .Header__text {
    font-weight: 500;
    font-size: 1.75rem;
    letter-spacing: -1.05px;
  text-transform: uppercase;
  }
  .Header__btn {
    background-color: transparent;
    border: none;
  }
  .header__hamburger {
    width: 24px;
    height: 17px;
  }
  .Header__navigation {
    background-color: #070722;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    gap: 20px;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    right: 0;
    padding: 43px 24px 60px;
  }
  
 .tablet__size__nav {
  display: flex;
    grid-gap: 33px;
    gap: 33px;
 }

`


const StyledLink = styled(Link)<{bgcolor?:string,activeplanet?:string}>`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.56rem;
  letter-spacing: 1.36px;
  position: relative;
  margin-left: 45px;
  transition: all 0.3s ease-in;
  color: white;
  @media screen and (min-width: 685px) {
    font-size: .546rem;
    letter-spacing: 1px;
    margin-left: 0;
  }
  ::before {
    content: '';
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
     left: -45px;

     background-color: ${({ bgcolor }) => bgcolor};
  }
  @media screen and (min-width: 685px) {
    ::before {
      left: auto;
    }
  }
  ::after {
    content: url(${iconCHeveron});
    position: absolute;
    right: 0;
  }
  @media screen and (min-width: 685px) {
    ::before {
      display: initial;
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    bottom: -27px;
    border-radius: 0;
     &.active::before {
    background-color: ${({ bgcolor }) => bgcolor};
  }
  
/* .active__jupiter::before {
  background-color:#d93b36;
}
.active__saturn::before {
  background-color:#cb5020;
}
.active__uranus::before {
  background-color:#1ec2a4;
}
.active__neptune::before {
  background-color:#2d68f0;
} */
    }
  }

`;

export default Header

