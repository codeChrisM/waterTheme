import React from "react";
import { useEffect, useState } from "react";
import FullLogo from "../img/elite-splash-logo-v1-full.png";

// import "./styles/styles.css";

export default function HeroVideo() {
  const videoBackground = "video-background";
  const [intro, setIntro] = useState("");
  const combinedClassName = videoBackground + intro;
  const styles = {
    background:
      'url("https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Whitsunday-and-Cube-Spa-Ocean-scaled-1920x1080.jpg") left 5% / 15% 60% repeat',
    width: "100%",
    display: "block",
    height: "800px", // hieght must be applied inline
    backgroundSize: "cover",
    position: "absolute",
    mixBlendMode: "screen",
    // "border-us": "50%",
  };

  useEffect(() => {
    setIntro("intro");
  }, [intro]);

  return (
    <section className="hero overflow-hidden ">
      <div className={combinedClassName}>
        <div>
          <div className="vid-info bg-white bg-opacity-50   rounded-ee-full   bg-opacity-60 text-black">
            <h1 className="vid-info__name  text-md text-white">
              <span className="block">
                <img {...{ src: FullLogo }}></img>
              </span>

              <span className="text-sm  p-1 ">
                Designs & Pool Installations
              </span>
            </h1>
          </div>
        </div>
        <div className="top rounded-full"></div>

        <div className="video-foreground">
          {/* <iframe
            src="http://www.youtube.com/embed/dKsQP_rEnhk?autoplay=1&mute=1&version=3&loop=1&list=PLV-_0_pB5OVT4oGF_U5g1sX6hRvvcDXHh"
            allowfullscreen=""
            frameborder="0"
            width="100%"
            allow="autoplay"
          ></iframe> */}
        </div>
      </div>

      <div style={styles} className=" "></div>
    </section>
  );
}
