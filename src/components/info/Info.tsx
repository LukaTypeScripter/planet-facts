import { PlanetData } from "../../data"

interface Props {
    planet: PlanetData | undefined
    activeStructure:string
    setActiveStructure: React.Dispatch<React.SetStateAction<string>>
}

function Info({planet,activeStructure,setActiveStructure}:Props) {
  return (
    <>
    <div className='info'>
                         <h1>{planet?.name}</h1>
                <p className='about'>{planet?.overview.content}</p>
                <p className="wikipedia">
                Source: <a href={planet?.overview.source}>Wikipedia
                <span style={{marginLeft:"8px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg>
                </span>
                </a>
              </p>
                    </div>
                    <div className='dekstop__cont'>
                    <div
                  className={`dekstop__wrap ${
                    activeStructure === "overview" ? "active" : ""
                  }`}
                  onClick={() => setActiveStructure("overview")}
                >
                  <span>01</span>
                  <p>Overview</p>
                </div>
                <div
                   className={`dekstop__wrap ${
                    activeStructure === 'structure' ? 'active' : ''
                  }`}
                  onClick={() => setActiveStructure("structure")}
                >
                  <span>02</span>
                  <p>INTERNAL STUCTURE</p>
                </div>
                <div
                  className={`dekstop__wrap ${
                    activeStructure === 'surface' ? 'active' : ''
                  }`}
                  onClick={() => setActiveStructure("surface")}
                >
                  <span>03</span>
                  <p>SURFACE GEOLOGY</p>
                </div>
                    </div>
    </>
  )
}

export default Info