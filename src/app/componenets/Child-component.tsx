import React from "react";

const Child_Components = (props: any) => {
  console.log(props);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 ">

      <div className=" shadow-lg rounded-lg p-10 w-100 border border-slate-400 bg-slate-600">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">
          Class 11 Assignment Props
        </h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <p className="text-lg font-semibold text-zinc-100 mr-2">
              Full Name :
            </p>
            <p className="text-black font-bold ">{props.name}</p>
          </div>

          

          <div className="flex items-center">
            <p className="text-lg font-semibold  text-zinc-100 mr-2">
              Address :
            </p>
            <p className="text-black font-bold">{props.address}</p>
          </div>

          <div className="flex items-center">
            <p className="text-lg font-semibold  text-zinc-100 mr-2">
              Contact No :
            </p>
            <p className="text-black font-bold">{props.contact}</p>
          </div>

          <div className="flex items-center">
            <p className="text-lg font-semibold  text-zinc-100 mr-2">
              Experience In :
            </p>
            <p className="text-black font-bold">{props.exp_in}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child_Components;