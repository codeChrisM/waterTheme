// components/AboutUs.js

import React from "react";
// import "./styles/styles.scss";

const styles = {
  // borderTopRightRadius: "5%",
  // borderBottomLeftRadius: "7%",
  borderStartStartRadius: "26%",
  borderEndEndRadius: "29%",
};

// floating animation
const styles__FloatAnimation_A = {
  animation: "float 4s ease-in-out infinite",
  animationDirection: "alternate",
};
// floating animation
const styles__FloatAnimation_B = {
  animation: "float 2.5s ease-in-out infinite",
  animationDirection: "alternate",
};
// floating animation
const styles__FloatAnimation_C = {
  animation: "float 3.5s ease-in-out infinite",
  animationDirection: "alternate",
};

let combinedStyles = {
  ...styles,
  ...styles__FloatAnimation_A,
};

const AboutUs = () => {
  return (
    <div
      style={combinedStyles}
      className="my-4 bg-purple-950 pt-56 pr-6 pl-3 pb-6 relative border-r-8 "
    >
      <h2
        style={styles__FloatAnimation_B}
        className="delay-1000  bg-black border-3  text-white rounded-full text-center absolute z-10 bottom-48 right-3 px-3 py-6 uppercase font-bold "
      >
        About Us
      </h2>
      <p
        style={styles__FloatAnimation_C}
        className="bg-gray-900 border-2    delay-2000  text-white z-10 absolute top-14 rounded-3xl p-4"
      >
        At Epic Splash Pools, we specialize in creating breathtaking pools that
        turn your backyard into an oasis. With our expertise and commitment to
        quality, we bring your vision to life, providing exceptional
        craftsmanship and unparalleled customer satisfaction.
      </p>
    </div>
  );
};

export default AboutUs;
