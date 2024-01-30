import React from "react";
import { useSelector } from "react-redux";
function Template_1() {
  const dataStore = useSelector((state) => state.dataStore);
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-1/2 h-screen m-5 p-5 shadow-black shadow-lg">
        <div className=" h-1/4 flex justify-between items-center border-b-8 outline-none border-blue-400">
          <div>
            <img src="" width={"200px"} alt="" />
          </div>

          <div>
            <h1
              className="font-bold text-5xl text-blue-400"
              style={{ color: "#00adb5", fontSize: "55px" }}
            >
              {dataStore.personalInfo.firstName + " " + dataStore.personalInfo.lastName}
            </h1>
            <div className="flex justify-center">
              <h3 className="font-bold">Job Title</h3>
            </div>
          </div>
          <div className="w-52">
            <div>{dataStore.personalInfo.Email}</div>
            <div>{dataStore.personalInfo.Mobile}</div>
            <div>{dataStore.personalInfo.Address + ",  " + dataStore.personalInfo.City + ", " + dataStore.personalInfo.State + ", " + dataStore.personalInfo.Pin}
            </div>
          </div>
        </div>

        <div className="p-5 border-b-4 outline-none border-blue-400 text-justify.
        ">

          {dataStore.personalInfo.Objective}

        </div>

        <div className="flex p-5 border-b-4 outline-none border-blue-400 ">
          <div className="w-1/4 font-bold text-blue-400">
            <h2>Experience</h2>
          </div>
          <div className="grid w-3/4 ">
            <h3 className="font-bold text-blue-400">Job Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quisquam explicabo magnam non totam alias sunt
              molestias aliquid a dolor?
            </p>
          </div>
        </div>

        <div className="flex p-5 border-b-4 outline-none border-blue-400">
          <div className="w-1/4 font-bold text-blue-400">
            <h2>Education</h2>
          </div>
          <div className="grid w-3/4 ">
            <h3 className="font-bold text-blue-400">
              Bachelor of Computer science
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quisquam explicabo magnam non totam alias sunt
              molestias aliquid a dolor?
            </p>
          </div>
        </div>

        <div className="flex p-5  outline-none ">
          <div className="w-1/4  font-bold text-blue-400">
            <h2>Key Skills</h2>
          </div>
          <div className="grid w-3/4 "></div>
        </div>
      </div>
    </div>
  );
}

export default Template_1;
