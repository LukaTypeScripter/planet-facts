import React from 'react'
import { PlanetData } from '../data'
import styled from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';

interface OverviewContentProps {
    planet: PlanetData | undefined;
  }
  
  const OverviewContent: React.FC<OverviewContentProps> = ({ planet }) => {
    const isAboveTabletScreens = useMediaQuery("(min-width:685px)");
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
                    <div>

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
    padding: 0 40px;
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
`
export default OverviewContent