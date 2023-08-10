// App.js
import React, { useState } from "react";

import MainHeader from "./components/MainHeader";
import SlideOutComponent from "./components/SlideOutComponent";
import WaterDrops from "./components/WaterDrops";
import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
// import "./components/styles/styles.scss";

const MainHeaderClassName =
  "bg-black-600 border-2 border-white text-white top-0 z-99 ";
const gradient = `linear-gradient(
    to bottom,
    rgba(173, 216, 230, 0) 0px,
    rgba(173, 216, 230, 1) 200px,
    rgba(173, 216, 230, 1) 300px
  )`;

const styles = {
  width: "100%",
//   height: "300px",
  background: gradient,
};

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <MainHeader
        MainHeaderClassName={MainHeaderClassName}
        toggleMenu={toggleMenu}
      />
      <div id="" className="wrapper wrapper--body  relative">
        <SlideOutComponent isMenuVis={isMenuVisible} />
        <HeroVideo />
        <div style={styles} className="relative">
          <AboutUs />

          {/* <WaterDrops /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
