
// code 
import React from "react";
import pic11 from "../images/pic11.jpeg";

function Header() {
  return (
    <div>
      <div className="w-screen h-[1cm] bg-black text-white flex justify-center items-center">
        <img src={pic11} alt="nal" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </div>
    </div>
  );
}

export default Header;