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
import ContactUs from "./components/ContactUs";
// import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
// import "./components/styles/styles.scss";

const styles = {
  width: "100%",
};

const App = () => {
  // create an observern  that targets  section entries   and when intersecting adds  class name of show

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);
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

        <div>
          <QuiltedImageList />
        </div>
        <div>
          <div className={`accordion-wrapper  `}>
            <h2></h2>
            {/* button that will toggle the accordion */}

            <button
              onClick={() => setIsAccordionVisible(!isAccordionVisible)}
              className={`font-bold text-2xl p-4 text-gold border-bottom-purple border-bottom-2 border-solid bg-black rounded-t-lg mt-20 w-full ${
                isAccordionVisible ? "rounded-lg " : "rounded-none"
              }`}
            >
              Frequently Asked Questions
            </button>

            {faqData.map((item, index) => (
              <div className={`${isAccordionVisible ? "hidden " : "visible"}`}>
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="contact-us-Wrapper my-10">
          <ContactUs />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
