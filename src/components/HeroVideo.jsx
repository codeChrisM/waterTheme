import React from "react";
import "./styles/styles.scss";
// import "./styles/styles.css";

export default function HeroVideo() {
  return (
    <section class="hero">
      <div class="video-background">
        <div id="ytplayer2"></div>

        <div id="vidtop-content">
          <div class="vid-info">
            <h1 class="vid-info__name">Welcome to</h1>
            <h2 class="vid-info__alias">
              <span class="primary--purple">Epic</span> Splash Pools
            </h2>
            <p
              class="vid-info__summary text-red-600
            "
            >
              Epic <span>Designs for</span> Pool Installations
            </p>
          </div>
        </div>
        <div class="top"></div>

        <div class="video-foreground">
          <iframe
            src="http://www.youtube.com/embed/dKsQP_rEnhk?autoplay=1&mute=1&version=3&loop=1&list=PLV-_0_pB5OVT4oGF_U5g1sX6hRvvcDXHh"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>

      <div class="blue"></div>
    </section>
  );
}
