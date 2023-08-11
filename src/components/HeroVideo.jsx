import React from "react";
import { useEffect, useState } from "react";
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
  };

  useEffect(() => {
    setIntro("intro");
  }, [intro]);

  return (
    <section className="hero">
      <div className={combinedClassName}>
        <div >
          <div className="vid-info">
            <h1 className="vid-info__name">Welcome to</h1>
            <h2 className="vid-info__alias">
              <span className="primary--purple">Elite</span> Splash Pools
            </h2>
            <p className="vid-info__summary text-white">
              Elite Designs & Pool Installations
            </p>
          </div>
        </div>
        <div className="top"></div>

        <div className="video-foreground">
          <iframe
            src="http://www.youtube.com/embed/dKsQP_rEnhk?autoplay=1&mute=1&version=3&loop=1&list=PLV-_0_pB5OVT4oGF_U5g1sX6hRvvcDXHh"
            allowfullscreen=""
            frameborder="0"
            width="100%"
          ></iframe>
        </div>
      </div>

      <div style={styles} className="blue"></div>
    </section>
  );
}
