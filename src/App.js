// App.js
import React, { useState } from "react";

import MainHeader from "./components/MainHeader";
import SlideOutComponent from "./components/SlideOutComponent";
import WaterDrops from "./components/WaterDrops";
import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
import AccordionItem from "./components/AccordianItem";
import Footer from "./components/Footer";
import faqData from "./data/faqData";
import QuiltedImageList from "./components/QuiltedImageList";
// import "./components/styles/styles.scss";

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
    <div className="app">
      <MainHeader toggleMenu={toggleMenu} />
      <div className=" relative">
        <SlideOutComponent isMenuVis={isMenuVisible} />
        <HeroVideo />

        <div style={styles} className="relative rounded-full ">
          <AboutUs />
        </div>
        <WaterDrops />
        {/* <QuiltedImageList /> */}
        <div className="accordion-wrapper">
          {faqData.map((item, index) => (
            <div>
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
