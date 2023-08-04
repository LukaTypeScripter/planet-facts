import React from 'react'
import styled from 'styled-components'
import { iconCHeveron, iconHamburger } from '../../assets'
import { Link } from 'react-router-dom'

function Header() {


    const planetColors = {
      Mercury: '#419db9',
      Venus: '#eda44a',
      Earth: '#6f2ed6',
      Mars: '#d14e33',
      Jupiter: '#d93b36',
      Saturn: '#cb5020',
      Uranus: '#1ec2a4',
      Neptune: '#2d68f0',
    };

  return (
    <Headers>
      <p className='Header__text'>The planets</p>
        <button className='Header__btn'>
          <img src={iconHamburger} alt="ham" className='header__hamburger' />
        </button>
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
  
 

`


const StyledLink = styled(Link)<{bgColor:string}>`
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
  ::before {
    content: '';
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    left: -45px;
    background-color: ${({ bgColor }) => bgColor}; /* Dynamically set color */
  }

  ::after {
    content: url(${iconCHeveron});
    position: absolute;
    right: 0;
  }
`;

export default Header