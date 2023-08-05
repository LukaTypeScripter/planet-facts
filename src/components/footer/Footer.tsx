
import styled from 'styled-components'
import { OverviewContentProps } from '../../pages/type/type'

function Footer({planet}:OverviewContentProps) {
  return (
    <FooterSection>
      <div className='section__wrapper'>
            <div className='details__container__box'>
              <h2>Rotation Time</h2>
              <h3>{planet?.rotation}</h3>
            </div>
            <div className='details__container__box'>
              <h2>Revolution Time</h2>
              <h3>{planet?.revolution}</h3>
            </div>
            <div className='details__container__box'>
              <h2>Radius</h2>
              <h3>{planet?.radius}</h3>
            </div>
            <div className='details__container__box'>
              <h2>Average Temp.</h2>
              <h3>{planet?.temperature}</h3>
            </div>
          </div>
    </FooterSection>
  )
}
const FooterSection = styled.section`
      padding: 28px 24px 50px;
    width: 100%;
  .section__wrapper {
    display: grid;
    grid-gap: 8px;
    gap: 8px
  }
  .details__container__box{
    border: 1px solid hsla(0,0%,100%,.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;
    text-transform: uppercase;
    width: 100%;
    h2 {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: .73px;
    opacity: .5;
    }
    h3 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.625rem;
    letter-spacing: -.75px;
    }
  }
`
export default Footer