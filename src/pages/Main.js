import React from "react";

function Main() {
  return (
    <div className="grid grid-cols-2 gap-4">
        <div className="box-border h-64 w-110 p-4 content-center">

            <p className=" text-center">pic1</p>

        </div>
        <div>
        its info

        </div>
        <div className="box-border h-64 w-110 p-4 content-center">

            <p className=" text-center">pic2</p>

            </div>
        <div>
            its info
        </div>
        <div className="box-border h-64 w-110 p-4">

            <p className=" text-center">  pic3</p>

        </div>
        <div className="box-border h-64 w-110 p-4 content-center">

<p className=" text-center">its info</p>

</div>
      
    </div>
  );
}

export default Main;
