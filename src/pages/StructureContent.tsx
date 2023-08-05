

import { OverviewContentProps } from './type/type'
import { Wrapper } from './OverviewContent'
function StructureContent({planet}:OverviewContentProps) {
  return (
    <Wrapper>
        <div className='img__cont'>
            <img src={planet?.images.internal} alt="imgs" className='planet__imgs' />
        </div>
        <div className='planet__info'>
            <div className='planet__info__inside'>
                <h1>{planet?.name}</h1>
                <p className='about'>{planet?.structure.content}</p>
                <p className='wikipedia'>
                    Source: <a href={planet?.structure.source}>Wikipedia</a>
                </p>
            </div>
        </div>
        
    </Wrapper>
  )
}
export default StructureContent