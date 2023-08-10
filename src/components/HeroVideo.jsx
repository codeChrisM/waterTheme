import React from "react";
import { useEffect, useState } from "react";
// import "./styles/styles.css";

export default function HeroVideo() {
  const videoBackground = "video-background";
  const [intro, setIntro] = useState("");
  const combinedClassName = videoBackground + intro;

  useEffect(() => {
    setIntro("intro");
  }, [intro]);

  return (
    <section className="hero">
      <div className={combinedClassName}>
        <div id="ytplayer2"></div>

        <div id="vidtop-content">
          <div class="vid-info">
            <h1 class="vid-info__name">Welcome to</h1>
            <h2 class="vid-info__alias">
              <span class="primary--purple">Epic</span> Splash Pools
            </h2>
            <p
              class="vid-info__summary text-white
            "
            >
              Elite Designs & Pool Installations
            </p>
          </div>
        </div>
        <div class="top"></div>

        <div class="video-foreground border-red-600 ">
          <iframe
            src="http://www.youtube.com/embed/dKsQP_rEnhk?autoplay=1&mute=1&version=3&loop=1&list=PLV-_0_pB5OVT4oGF_U5g1sX6hRvvcDXHh"
            allowfullscreen=""
            frameborder="0"
            width="100%"
            height="570px"
          ></iframe>
        </div>
      </div>

      <div class="blue"></div>
    </section>
  );
}
