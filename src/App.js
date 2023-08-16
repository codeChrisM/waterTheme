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
  // create an observern  that targets  section entries   and when intersecting adds  class name of show

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="app">
      <MainHeader toggleMenu={toggleMenu} />
      <div className=" relative">
        <SlideOutComponent isMenuVis={isMenuVisible} />

        <div className="">
          <HeroVideo className="snap-mandatory snap-center" />
          {/* <div class="scroll-container">
          <div class="scroll-area">1</div>
          <div class="scroll-area">2</div>
          <div class="scroll-area">3</div>
          <div class="scroll-area">4</div>
        </div> */}
          <div
            style={styles}
            className="relative rounded-full  py-30 snap-mandatory snap-center  "
          >
            <AboutUs />
          </div>

          <div>
            <WaterDrops />
          </div>
        </div>

        <div>{/* <QuiltedImageList /> */}</div>
        <div>
          <div className="accordion-wrapper ">
            <h2 className="font-bold text-2xl p-4 text-gold border-bottom-purple border-bottom-2 border-solid bg-black rounded-t-lg mt-20">
              Frequently Asked Questions
            </h2>
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
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
