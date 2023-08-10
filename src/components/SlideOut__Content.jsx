import React from "react";

function SlideOut__Content() {
  return (
    <div className="content">
      <ul className="menu">
        <li>
          {" "}
          <a className="btn btn--blue" href="www.calendly.com">
            Check Availability
          </a>
        </li>
        <li>
          {" "}
          <a className="btn" href="www.calendly.com">
            Book Appointment
          </a>
        </li>
        <li>About Us</li>
        <li>Our Mission</li>
        <li>Our Vision</li>
      </ul>
    </div>
  );
}

export default SlideOut__Content;
