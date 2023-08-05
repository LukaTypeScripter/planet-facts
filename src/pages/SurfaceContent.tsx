
import { Wrapper } from './OverviewContent'
import { OverviewContentProps } from './type/type'

function SurfaceContent({planet}: OverviewContentProps) {
  return (
    <Wrapper>
    <div className='img__cont'>
        <img src={planet?.images.planet} alt="imgs" className='planet__imgs' />
        <img src={planet?.images.geology} alt="imgs" className='planet__infos' />
    </div>
    <div className='planet__info'>
        <div className='planet__info__inside'>
            <h1>{planet?.name}</h1>
            <p className='about'>{planet?.geology.content}</p>
            <p className='wikipedia'>
                Source: <a href={planet?.geology.source}>Wikipedia</a>
            </p>
        </div>
    </div>
    
</Wrapper>
  )
}

export default SurfaceContent