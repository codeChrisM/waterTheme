// components/AboutUs.js

import React from "react";
import "./styles/styles.scss";

const styles = {
  background: "black",
  padding: "1em",
  color: "white",
  border: "13px solid purple",
  borderTopRightRadius: "5%",
  borderBottomLeftRadius: "7%",
  borderStartStartRadius: "26%",
  borderEndEndRadius: "29%",
};

const AboutUs = () => {
  return (
    <div style={styles}>
      <h2>About Us</h2>
      <p>
        At Epic Splash Pools, we specialize in creating breathtaking pools that
        turn your backyard into an oasis. With our expertise and commitment to
        quality, we bring your vision to life, providing exceptional
        craftsmanship and unparalleled customer satisfaction.
      </p>
    </div>
  );
};

export default AboutUs;
