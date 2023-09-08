import React from "react";
import "./styles/WaterDrops.css"; // Import css modules stylesheet as styles

let AnimationStyles = {
  transitionDuration: "0.5s",
  transitionProperty: "all",
};

function WaterDrops(toggleMenu) {
  const handleContactUs = () => {
    toggleMenu();
    window.scrollTo(100, 0);
    document.getElementById("contact-us").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="text-white bg-teal rounded-3xl rounded-e-full border-black bg-opacity-90  border-y-4 my-60">
      <section className="cards">
        <div className="container flex md:mx-8 flex-wrap m-auto ">
          <div class="drop  ">
            <h2 className="font-bold text-2xl">The Elite Difference</h2>
            <p className="text-xl"></p>
            <button
              style={AnimationStyles}
              className="btn p-4 rounded-lg bg-black"
              onClick={handleContactUs}
            >
              Reach Out Today!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WaterDrops;
