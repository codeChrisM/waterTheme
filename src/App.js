// App.js
import React, { useRef, useState } from "react";

import MainHeader from "./components/MainHeader";
import SlideOutComponent from "./components/SlideOutComponent";
import WaterDrops from "./components/WaterDrops";
import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

import QuiltedImageList from "./components/QuiltedImageList";
import ContactUs from "./components/ContactUs";
import FileDownloadButton from "./components/FileDownloadButton";
import Description from "./components/Description";
import Faq from "./components/Faq.js";

// import "./components/styles/styles.scss";

const styles = {
  width: "100%",
};

const App = () => {
  const ref = useRef(null);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="app">
      <MainHeader toggleMenu={toggleMenu} />
      <div className=" relative">
        <SlideOutComponent
          isMenuVis={isMenuVisible}
          toggleMenu={toggleMenu}
          ref={ref}
        />
        <div className="">
          <HeroVideo className="snap-mandatory snap-center" />

          <div id="about-us" className=" h-8"></div>
          <div
            style={styles}
            className="relative rounded-full  py-30 snap-mandatory snap-center  "
          >
            <AboutUs />
          </div>

          <WaterDrops />
        </div>
        <div className="description text-white  bg-black m-6 flex p-4 self-center rounded-xl ">
          <Description />
        </div>
        <div>
          <QuiltedImageList />
          <div className="mt-2 flex items-center">
            <FileDownloadButton />
          </div>
        </div>
        <div className="faq block my-40 relative">
          <div
            id="contact-us"
            className="h-8 bg-red-300 absolute top-0 z-10"
          ></div>

          <Faq />

          <div className="contact-us-Wrapper my-30 mt-10 mx-auto ">
            {/* TODO: change the color on the contact us form to teal */}

            <ContactUs />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
