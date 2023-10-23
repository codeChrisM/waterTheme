import React, { useEffect } from "react";

function SlideOut__Content({ toggleMenu }) {
  const handleAboutUs = () => {
    toggleMenu();
    window.scrollTo(0, 0);
    document.getElementById("about-us").scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleContactUs = () => {
    toggleMenu();
    window.scrollTo(100, 0);
    document.getElementById("contact-us").scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    toggleMenu();
  }, []);

  return (
    <div className="content overflow-hidden">
      <ul className="menu ">
        <li>
          {/* TODO: anchor links */}
          <button
            className="btn rounded-lg w-full border-1 text-black border-teal-secondary hover:text-white  hover:bg-teal-secondary font-bold py-2 px-4 rounded-full text-base"
            onClick={handleContactUs}
          >
            Contact Us
          </button>
        </li>

        <li>
          <button
            className="btn rounded-lg w-full border-1 text-black border-teal-secondary hover:text-white  hover:bg-teal-secondary font-bold py-2 px-4 rounded-full text-base"
            onClick={handleAboutUs}
          >
            About Us
          </button>
        </li>
        <li>
          <a
            //this will save the file as "your_cv.pdf"
            download="Elite-Splash--BR-Pool-Models.pdf"
            //put the path of your pdf file
            href="/src/img/Elite-Splash--BR-Pool-Models.pdf"
            //reactstrap classes. add green button
            className="btn btn-success text-white bg-teal bg-opacity-50 hover:bg-teal-secondary font-bold py-2 px-4 rounded-full m-auto my-4 text-base"
          >
            Download Pools PDF
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SlideOut__Content;
