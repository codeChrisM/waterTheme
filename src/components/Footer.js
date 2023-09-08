import React from "react";

function Footer() {
  const grabTheDate = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer bg-black p-1 mt-4  ">
      {/* year and copyright text */}
      <p className="text-white text-center w-full">
        © {grabTheDate()} Elite Splash Pools. All rights reserved.
        <a
          className="text-gray-600 text-sm block m-2"
          href="https://www.codechris.com"
        >
          contact developer of website
        </a>
      </p>
    </div>
  );
}

export default Footer;
