import React from "react";
import { Link } from "react-router-dom";
import { updateWorkEx } from "../../Store/dataStoreSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function WorkExperience() {
  const [input, setInput] = useState({
    title: "",
    orgName: "",
    startYear: "",
    endYear: "",
  });
  const dispatch = useDispatch();

  const addWorkEx = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.table(input);
    dispatch(updateWorkEx(input));
    setInput({
      title: "",
      orgName: "",
      startYear: "",
      endYear: "",
    });
  };

  let inputCss = "w-full border rounded-lg p-2 shadow-blue-950 shadow-sm";
  let year = yearRange(2000, 2024);

  function yearRange(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }

  return (
    <div className="flex w-3/4 flex-col p-5 shadow-gray-500 shadow-xl">
      <h1 className="text-2xl font-bold text-justify mt-10 border-b-2 border-blue-400">
        Work Experience
      </h1>

      <div className="flex justify-center mt-10">
        <form onSubmit={addWorkEx}>
          <h2 className="text-xl font-bold text-justify mt-10 border-b-2 border-blue-200">
            Experience
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-2.5">
            <div>
              <label className="text-sm font-bold" htmlFor="jobTitle">
                Job title
              </label>
              <input
                className={`${inputCss}`}
                id="jobTitle"
                type="text"
                value={input.title}
                onChange={(e) => {
                  setInput({ ...input, title: e.target.value });
                }}
              />
            </div>

            <div>
              <label className="text-sm font-bold" htmlFor="orgName">
                Organization Name
              </label>
              <input
                className={`${inputCss}`}
                id="orgName"
                type="text"
                value={input.orgName}
                onChange={(e) => {
                  setInput({ ...input, orgName: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2.5">
            <div>
              <label className="text-sm font-bold" htmlFor="startYear">
                Start Year
              </label>
              <select
                className={`${inputCss}`}
                name="startYear"
                id="startYear"
                value={input.startYear}
                onChange={(e) => {
                  setInput({ ...input, startYear: e.target.value });
                }}
              >
                <option className="text-blue-400" value="">
                  Select
                </option>
                {year.map((yr, i) => (
                  <option className="text-blue-400" key={i} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold" htmlFor="endYear">
                End Year
              </label>
              <select
                className={`${inputCss}`}
                name="endYear"
                id="endYear"
                value={input.endYear}
                onChange={(e) => {
                  setInput({ ...input, endYear: e.target.value });
                }}
              >
                <option className="text-blue-400" value="">
                  Select
                </option>
                {year.map((yr, i) => (
                  <option className="text-blue-400" key={i} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-5 gap-5 font-bold text-blue-500">
            <button>Add Item</button>
            <button>Remove Item</button>
          </div>

          <div className="flex justify-end">
            <Link to="/detailfilling/education">
              <button
                type="submit"
                onClick={addWorkEx}
                className="text-white bg-blue-500 m-2 p-2 rounded-2xl"
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WorkExperience;
