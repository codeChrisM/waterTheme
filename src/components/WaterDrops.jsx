import React from "react";
import "./styles/WaterDrops.css"; // Import css modules stylesheet as styles

let AnimationStyles = {
  transitionDuration: "0.5s",
  transitionProperty: "all",
};

function WaterDrops() {
  return (
    <div className="text-white bg-purple rounded-3xl rounded-e-full border-black bg-opacity-90  border-y-4 ">
      <section className="cards">
        <div className="container flex md:mx-8 flex-wrap m-auto ">
          <div class="drop  ">
            <h2 className="font-bold text-2xl">The Elite Difference</h2>
            <p className="text-xl">
              Learn about the Elite stands out vs the competitors
            </p>
            <button
              style={AnimationStyles}
              className="bg-gray-900 hover:bg-purple-600  text-white font-bold py-2 px-4 rounded "
            >
              Hover me
            </button>
          </div>
          <div className="description text-white  bg-black m-6 flex p-4 self-center rounded-xl ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam voluptate sit unde ipsa et voluptatem sapiente,
              distinctio eligendi? Perferendis molestiae ipsam ullam delectus
              hic ipsum sed voluptatum aliquid laudantium at!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WaterDrops;
