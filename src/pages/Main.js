import React from "react";

function Main() {
  return (
    <>
    <div className="box-border bg-red-800 h-64 w-200 p-6 content-center gap-4">
    <div className="grid grid-cols-2">
        <h2>KS</h2>
        <p>Serving Security as a Right</p>
    </div>
    <p className=" text-center text-white mt-11">Kite Security is a technology company, offerring services like, private security, Cyber security, Weapon hardware and technology hardware and security cunsultancy</p>
  </div>
    <div className="grid grid-cols-2 gap-4">
        <div className="box-border h-64 w-200 p-6 content-center">

            <p className=" text-center">pic1</p>

        </div>
        {/* <div>
        its info

        </div> */}
        <div className="box-border h-64 w-110 p-4 content-center">

            <p className=" text-center">What We Offer</p>
            <p className=" text-center">PMC</p>
            <p className=" text-center">Intelligence Services</p>
            <p className=" text-center">Millitary and Surveillance Hardware and Software</p>
            <p className=" text-center"> Military and Surveillance vehicles</p>
            <p className=" text-center">PMC</p>

            </div>
        <div>
        <p className=" text-center">What We Offer</p>
     </div>
        <div className="box-border h-64 w-110 p-4">

            <p className=" text-center">  pic3</p>

        </div>

    </div>
    </>
  );
}

export default Main;
