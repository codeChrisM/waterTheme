import React from "react";
import "./styles/WaterDrops.css"; // Import css modules stylesheet as styles

function WaterDrops() {
  return (
    <div>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet"> */}
      <section class="cards">
        <div class="container">
          <div class="drop">
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, voluptatem.
            </p>
            <a class="read-btn" href="#">
              Read More
            </a>
          </div>
          <div class="drop">
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, voluptatem.
            </p>
            <a class="read-btn" href="#">
              Read More
            </a>
          </div>
          <div class="drop">
            <h2>Card Title</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, voluptatem.
            </p>
            <a class="read-btn" href="#">
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WaterDrops;
