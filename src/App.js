// App.js
import React, { useState } from "react";

import MainHeader from "./components/MainHeader";
import SlideOutComponent from "./components/SlideOutComponent";
import WaterDrops from "./components/WaterDrops";
// import "./components/styles/styles.scss";

const MainHeaderClassName = "bg-black-600 border-2 border-white text-white";

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
      <SlideOutComponent isMenuVis={isMenuVisible} />
      <WaterDrops />
    </div>
  );
};

export default App;
