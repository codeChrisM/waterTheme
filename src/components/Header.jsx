import React from "react";

let temportaryStyle = {
  backgroundColor: "blue",
  width: "100%",
  height: "auto",
};

export default function Header() {
  return (
    <div className="font-bold" style={temportaryStyle}>
      Header Component
    </div>
  );
}
