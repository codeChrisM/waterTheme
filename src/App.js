// App.js
import React, { useState } from "react";

import MainHeader from "./components/MainHeader";
import SlideOutComponent from "./components/SlideOutComponent";
import WaterDrops from "./components/WaterDrops";
import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
// import "./components/styles/styles.scss";

const MainHeaderClassName = "";

const styles = {
  width: "100%",
  // height: "340px",
};

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="overflow-hidden">
      <MainHeader
        MainHeaderClassName={MainHeaderClassName}
        toggleMenu={toggleMenu}
      />
      <div id="" className="wrapper wrapper--body  relative">
        <SlideOutComponent isMenuVis={isMenuVisible} />
        <HeroVideo />

        <div style={styles} className="relative rounded-full ">
          <AboutUs />
        
        </div>
        <WaterDrops />
      </div>
    </div>
  );
};

export default App;
