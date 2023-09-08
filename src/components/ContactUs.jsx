import React from "react";
import Iframe from "react-iframe";

const JotFormIframe = ({ ref }) => {
  return (
    <div >
      <Iframe
        ref={ref}
        url="https://form.jotform.com/232114601026136"
        id="JotFormIFrame-232114601026136"
        title="Lime Theme Contact Us Form"
        allowTransparency
        allowFullScreen
        width="100%"
        height="1000px"
        overflow="hidden"
      />
    </div>
  );
};

export default JotFormIframe;
