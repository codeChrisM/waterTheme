import React from "react";
import SlideOut__Content from "./SlideOut__Content";

const baseColor = "#F8F9F9";
const secondaryColor = "rgba(12, 181, 252, 1)";
const thrirdColor = "#026893";

const SlideOutComponent = ({ isMenuVis, toggleMenu }) => {
  return (
    <div className={`component--slide-out ${isMenuVis ? "show" : ""} `}>
      {/* Waves Container */}
      <div className="container--top">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="slide-out-component-gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#slide-out-component-gentle-wave"
              x="48"
              y="3"
              fill="rgba(12, 181, 252, 1)"
            />

            <use
              xlinkHref="#slide-out-component-gentle-wave"
              x="48"
              y="7"
              {...{ fill: baseColor }}
            />
          </g>
        </svg>
      </div>
      {/*-------------------------- Waves end */}

      <div className="container--menu">
        {/* Menu Ball */}
        <div className="ball ">
          <div className="text" onClick={toggleMenu}>Menu</div>
        </div>
        {/* --------------------------Menu Ball */}

        {/* Waves Container */}
        <div className="container--side ">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="slide-out-component-gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#slide-out-component-gentle-wave"
                x="48"
                y="5"
                fill="rgba(12, 181, 252, 1)"
              />

              <use
                xlinkHref="#slide-out-component-gentle-wave"
                x="48"
                y="7"
                {...{ fill: baseColor }}
              />
            </g>
          </svg>
        </div>
        {/*-------------------------- Waves end */}

        {/* Content starts */}
        <SlideOut__Content toggleMenu={toggleMenu} />
        {/* Content ends */}
      </div>
    </div>
  );
};

export default SlideOutComponent;
