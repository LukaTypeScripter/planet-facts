import React, { useState } from 'react'
import styled from 'styled-components'
import { iconCHeveron, iconHamburger } from '../../assets'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
export const planetColors = {
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
 
    const [activeStructure, setActiveStructure] = useState('Mercury');

    const handlePlanetClick = (planet:string) => {
      setActiveStructure(planet);
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
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Mercury')}
                  bgColor={ activeStructure === "Mercury" ?planetColors['Mercury'] : ""}
                >
                  Mercury
                </StyledLink>
                <StyledLink
                  to='planet/venus'
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Venus')}
                  bgColor={ activeStructure === "Venus" ?planetColors['Venus'] : ""}
                >
                  Venus
                </StyledLink>
                <StyledLink
                  to='planet/mars'
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Mars')}
                  bgColor={ activeStructure === "Mars" ?planetColors['Mars'] : ""}
                >
                  Mars
                </StyledLink>
                <StyledLink
                  to='planet/jupiter'
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Jupiter')}
                  bgColor={ activeStructure === "Jupiter" ?planetColors['Jupiter'] : ""}
                >
                  Jupiter
                </StyledLink>
                <StyledLink
                  to='planet/saturn'
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Saturn')}
                  bgColor={ activeStructure === "Saturn" ?planetColors['Saturn'] : ""}
                >
                  Saturn
                </StyledLink>
                <StyledLink
                  to='planet/uranus'
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Uranus')}
                  bgColor={ activeStructure === "Uranus" ?planetColors['Uranus'] : ""}
                >
                  Uranus
                </StyledLink>
                <StyledLink
                  to='planet/neptune'
                  activeStructure={activeStructure}
                  onClick={() => handlePlanetClick('Neptune')}
                  bgColor={ activeStructure === "Neptune" ?planetColors['Neptune'] : ""}
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
          <StyledLink to='planet/mercury' bgColor={planetColors.Mercury}>
            Mercury
          </StyledLink>
          <StyledLink to='planet/venus' bgColor={planetColors.Venus}>
            Venus
          </StyledLink>
          <StyledLink to='planet/mars' bgColor={planetColors.Mars}>
          Mars
          </StyledLink>
          <StyledLink to='planet/jupiter' bgColor={planetColors.Jupiter}>
          Jupiter
          </StyledLink>
          <StyledLink to='planet/saturn' bgColor={planetColors.Saturn}>
          Saturn
          </StyledLink>
          <StyledLink to='planet/uranus' bgColor={planetColors.Uranus}>
          Uranus
          </StyledLink>
          <StyledLink to='planet/neptune' bgColor={planetColors.Neptune}>
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
  .Header__text {
    font-family: antonio;
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


const StyledLink = styled(Link)<{bgColor?:string,activeStructure?:string}>`
  text-decoration: none;
  text-transform: uppercase;
  font-family: spartan;
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

    background-color: ${({ bgColor }) => bgColor};
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
    background-color: ${({ bgColor }) => bgColor};
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

