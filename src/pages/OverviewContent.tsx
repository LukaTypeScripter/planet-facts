import React, { useContext } from 'react'
import { PlanetData } from '../data'
import styled from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';
import PlanetContext from '../contexts/Planet';

interface OverviewContentProps {
    planet: PlanetData | undefined;
  }
  
  const OverviewContent: React.FC<OverviewContentProps> = ({ planet }) => {
    const isAboveTabletScreens = useMediaQuery("(min-width:685px)");
    const {setActiveStructure} = useContext(PlanetContext)
  return (
    <Wrapper>
        <div className='img__cont'>
            <img src={planet?.images.planet} alt="imgs" className='planet__imgs' />
        </div>
        <div className='planet__info'>
            <div className='planet__info__inside'>
                {!isAboveTabletScreens && (
                    <>
                     <h1>{planet?.name}</h1>
                <p className='about'>{planet?.overview.content}</p>
                <p className='wikipedia'>
                    Source: <a href={planet?.overview.source}>Wikipedia</a>
                </p>
                    </>
                )}
                {isAboveTabletScreens && (
                    <>
                    <div className='info'>
                         <h1>{planet?.name}</h1>
                <p className='about'>{planet?.overview.content}</p>
                <p className='wikipedia'>
                    Source: <a href={planet?.overview.source}>Wikipedia</a>
                </p>
                    </div>
                    <div className='dekstop__cont'>
                            <div className='dekstop__wrap' onClick={() => setActiveStructure("overview")}>
                                <span>01</span>
                                <p>Overview</p>
                            </div>
                            <div className='dekstop__wrap' onClick={() => setActiveStructure('structure')}>
                                <span>02</span>
                                <p>INTERNAL STUCTURE</p>
                            </div>
                            <div className='dekstop__wrap' onClick={() => setActiveStructure('surface')}>
                                <span>03</span>
                                <p>SURFACE GEOLOGY</p>
                            </div>
                    </div>
                    </>
                )}
               
            </div>
        </div>
    </Wrapper>
  )
}
export const Wrapper = styled.div`
        display: grid;
    grid-template-rows: minmax(5rem,1fr);
    grid-template-rows: minmax(5rem,1fr) min-content minmax(5rem,1fr) min-content;
.img__cont {
    max-width: 224px;
    grid-row: 2/3;
    position: relative;
    margin: auto;
    display: flex;
}
@media screen and (min-width: 685px) {
    .info {
        text-align: left;
    text-align: initial;
    max-width: 350px;
    padding: initial;
    }
}
.planet__imgs {
    max-width: 100%;
    margin: auto;
}

.planet__info {
    grid-row: 4/5;
}

.planet__info__inside {
    text-align: center;
    padding: 0 24px;
    @media screen and (min-width: 685px) {
        display: flex;
    align-items: center;
    grid-gap: 70px;
    gap: 70px;
    padding: 0 90px;
    }
    h1 {
        font-family: antonio;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.25rem;
    }
    .about {
        font-size: 1rem;
    line-height: 1.375rem;
    margin-top: 16px;
    margin-bottom: 32px;
    }
    .wikipedia {
        font-size: .75rem;
    line-height: 1.56rem;
    opacity: .5;
    margin-top: 0;
    margin-bottom: 0;
    }
}

.planet__infos {
    width: 100%;
    max-width: 50%;
    position: absolute;
    bottom: -16%;
    left: 25%;
}
@media screen and (min-width: 685px) {
    .dekstop__cont {
        display: flex;
    grid-gap: 16px;
    gap: 16px;
    flex-direction: column;
    width: 100%;
}
.dekstop__wrap {
    text-transform: uppercase;
    color: #fff;
    font-family: spartan;
    font-weight: 700;
    font-size: .5625rem;
    line-height: .625rem;
    letter-spacing: 2px;
    padding: 8px 20px;
    display: flex;
    transition: all .3s ease-in;
    border: 1px solid hsla(0,0%,100%,.2);
    span {
        color: hsla(0,0%,100%,.5);
    margin-right: 15px;
    }
   
}
}

`
export default OverviewContent