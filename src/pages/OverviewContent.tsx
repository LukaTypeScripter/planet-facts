import React, { useContext } from "react";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import PlanetContext from "../contexts/Planet";
import { OverviewContentProps } from "./type/type";
import Info from "../components/info/Info";

const OverviewContent: React.FC<OverviewContentProps> = ({
  planet,
  color,
  activeStructure,
}) => {
  const isAboveTabletScreens = useMediaQuery("(min-width:685px)");
  const { setActiveStructure } = useContext(PlanetContext);
  return (
    <Wrapper color={color} activeStructure={activeStructure}>
      <div className="img__cont">
        <img src={planet?.images.planet} alt="imgs" className="planet__imgs" />
      </div>
      <div className="planet__info">
        <div className="planet__info__inside">
          {!isAboveTabletScreens && (
            <>
              <h1>{planet?.name}</h1>
              <p className="about">{planet?.overview.content}</p>
              <p className="wikipedia">
                Source: <a href={planet?.overview.source}>Wikipedia
                <span style={{marginLeft:"8px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg>
                </span>
                </a>
              </p>
            </>
          )}
          {isAboveTabletScreens && (
            <>
              <Info setActiveStructure={setActiveStructure} activeStructure={activeStructure} planet={planet}/>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export const Wrapper = styled.div<{ activeStructure: string }>`
  display: grid;
  grid-template-rows: minmax(5rem, 1fr);
  grid-template-rows: minmax(5rem, 1fr) min-content minmax(5rem, 1fr) min-content;

  @media screen and (min-width: 1016px) {
    grid-template-rows: none;
  }
  .img__cont {
    max-width: 224px;
    grid-row: 2/3;
    position: relative;
    margin: auto;
    display: flex;
    @media screen and (min-width: 1016px) {
        grid-row: initial;
    grid-column: 2/3;
    width: 100%;
    }
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
    @media screen and (min-width: 685px) {
        display: flex;
    align-items: center;
    grid-gap: 70px;
    gap: 70px;
    padding: 0 40px;
    }
    @media screen and (min-width: 1016px) {
        flex-direction: column;
    grid-row: initial;
    grid-column: 4/5;
    padding: initial;
    margin-right: 100px;
    }
  }

  .planet__info__inside {
    text-align: center;
    padding: 0 24px;
    @media screen and (min-width: 685px) {
    display: flex;
    gap: 50px;
    }
    @media screen and (min-width: 1016px) {
    flex-direction: column;
    gap: 70px;
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
      font-size: 0.75rem;
      line-height: 1.56rem;
      opacity: 0.5;
      margin-top: 0;
      margin-bottom: 0;
      a {
        color: inherit;
    margin-left: 8px;
    font-weight: 700;
      }
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
      font-weight: 700;
      font-size: 0.5625rem;
      line-height: 0.625rem;
      letter-spacing: 2px;
      padding: 8px 20px;
      display: flex;
      transition: all 0.3s ease-in;
      border: 1px solid hsla(0,0%,100%,.2);
      padding: 8px 20px!important;
      @media screen and (min-width: 1016px) {
        font-size: .75rem;
    line-height: 1.56rem;
    letter-spacing: 2.57px;
      }
      span {
        color: hsla(0, 0%, 100%, 0.5);
        margin-right: 15px;
      }
    }
  }
  @media screen and (min-width: 1016px) {
    .dekstop__wrap {
        flex-direction: row;
    grid-row: initial;
    grid-column: 4/5;
    padding: initial;
    }
   
  }
  .active {
    border: 1px solid
        ${(props) => (props.activeStructure === "overview" ? props.color : "#ffffff")};
      border: 1px solid
        ${(props) => (props.activeStructure === "structure" ? props.color : "#ffffff")};
      border: 1px solid
        ${(props) => (props.activeStructure === "surface" ? props.color : "#ffffff")};
      background-color: ${(props) =>
        props.activeStructure === "overview" ? props.color : ""};
      background-color: ${(props) =>
        props.activeStructure === "structure" ? props.color : ""};
      background-color: ${(props) =>
        props.activeStructure === "surface" ? props.color : ""};
  }
`;
export default OverviewContent;
