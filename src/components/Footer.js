import React from "react";

function Footer() {
  grabTheDate = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer bg-black p-3 mt-10">
      {/* year and copyright text */}
      <p className="text-white text-center w-full">
        © {grabTheDate()} Elite Splash Pools. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
