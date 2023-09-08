import React from "react";
import SlideOut__Content from "./SlideOut__Content";

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
              fill="rgba(23, 190, 187, 1)"
            />

            <use
              xlinkHref="#slide-out-component-gentle-wave"
              x="48"
              y="7"
              fill="#1A1f24"
            />
          </g>
        </svg>
      </div>
      {/* Waves end */}

      <div className="container--menu">
        <div className="ball ">
          <div className="text">Menu</div>
        </div>

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
                fill="rgba(23, 190, 187, 1)"
              />

              <use
                xlinkHref="#slide-out-component-gentle-wave"
                x="48"
                y="7"
                fill="#1A1f24"
              />
            </g>
          </svg>
        </div>
        {/* Waves end */}

        {/* Content starts */}
        <SlideOut__Content toggleMenu={toggleMenu} />
        {/* Content ends */}
      </div>
    </div>
  );
};

export default SlideOutComponent;
