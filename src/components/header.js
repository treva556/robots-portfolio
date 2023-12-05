

// code 
import React from "react";
import pic11 from "../images/pic11.jpeg";

function Header() {
  return (
    <div>
      <div className="w-screen h-[1cm] bg-black text-white text-center">
        <p className="text-center">BR</p>
        <img src={pic11} alt="nal" />
      </div>
    </div>
  );
}

export default Header;