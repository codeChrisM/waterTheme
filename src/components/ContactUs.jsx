import React from "react";
import Iframe from "react-iframe";

const JotFormIframe = () => {
  return (
    <Iframe
      url="https://form.jotform.com/232114601026136"
      id="JotFormIFrame-232114601026136"
      title="Lime Theme Contact Us Form"
      allowTransparency
      allowFullScreen
      allow="geolocation; microphone; camera"
      width="100%"
      height="539px"
    />
  );
};

export default JotFormIframe;
