import React, { useState, useEffect } from "react";
import eliteSlashLogo from "../img/elite-splash-logo-v1.png";

function MainHeader({ MainHeaderClassName, toggleMenu }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fadeInStyle = {
    // opacity: fadeIn ? 1 : 0,
    // transition: "opacity 1500ms linear",
  };

  return (
    <>
      <header style={fadeInStyle} className="bg-teal w-full border-b-2">
        <div className="bg-blend-multiply">
          <img src={eliteSlashLogo} className="w-9" alt="" />
        </div>
        <div className=" text-l text-white">
          <span className="">Elite</span> Splash Pools
        </div>
        <div className="icons flex gap-2">
          <a href="tel:+1234567890" className="phone md:hidden">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5 16.8152C33.5 25.8207 26.1179 33.1304 17 33.1304C7.88214 33.1304 0.5 25.8207 0.5 16.8152C0.5 7.80971 7.88214 0.5 17 0.5C26.1179 0.5 33.5 7.80971 33.5 16.8152Z"
                fill="white"
                stroke="black"
              />
              <path
                d="M15.5217 11.8261C15.7064 10.5326 12.3804 6.46737 10.7173 8.13041C9.05427 9.79346 8.3151 13.6739 8.49988 14.5978C8.68467 15.5217 13.1934 23.6522 17.9238 25.8695C20.1412 26.9089 23.8369 23.6522 24.3913 22.7282C24.9456 21.8043 22.1739 18.1087 20.8804 18.4782C19.5869 18.8478 18.663 20.5109 18.663 20.5109L13.3043 14.0435C13.3043 14.0435 15.3369 13.1195 15.5217 11.8261Z"
                fill="black"
              />
            </svg>
          </a>
          <a onClick={toggleMenu} className="menu-toggle ">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 0.5C28.4411 0.5 36.5 8.55887 36.5 18.5C36.5 28.4411 28.4411 36.5 18.5 36.5C8.55888 36.5 0.5 28.4411 0.5 18.5C0.5 8.55887 8.55888 0.5 18.5 0.5Z"
                fill="white"
                stroke="url(#paint0_linear_0_1)"
              />
              <path
                d="M6 26.4165C6 26.4165 9.47222 31.3009 17.1111 27.6376C24.75 23.9743 23.3611 25.1953 31 25.1954"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M6 21.0624C6 21.0624 9.47222 24.7257 17.1111 21.9782C24.75 19.2307 23.3611 20.1465 31 20.1465"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M6 10.4165C6 10.4165 9.47222 15.3009 17.1111 11.6376C24.75 7.97427 23.3611 9.19535 31 9.19538"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M6 16.0624C6 16.0624 9.47222 19.7257 17.1111 16.9782C24.75 14.2307 23.3611 15.1465 31 15.1465"
                stroke="black"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="37"
                  y1="18.5"
                  x2="-8.08661e-07"
                  y2="18.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#415EB9" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
