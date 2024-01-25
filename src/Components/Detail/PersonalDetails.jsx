import React, { useState, useRef } from "react";
import img from "./image/ProfileDefaultImg.jpg";
import { stateNames } from "../ImagesFile/images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "../../Store/dataStoreSlice";

function PersonalDetails() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Mobile: "",
    Address: "",
    City: "",
    State: "",
    Pin: "",
    Objective: "",
  });
  const dispatch = useDispatch();

  const addPersonalinfo = (e) => {
    console.log("form submitted");
    console.table(input);
    dispatch(updatePersonalInfo(input));
    setInput({
      firstName: "",
      lastName: "",
      Email: "",
      Mobile: "",
      Address: "",
      City: "",
      State: "",
      Pin: "",
      Objective: "",
    });
  };

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  function handleImageClick() {
    inputRef.current.click();
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  const inputCss = "w-full border rounded-lg p-2 shadow-blue-950 shadow-sm";

  return (
    <div className=" flex w-3/4 flex-col p-5 shadow-gray-500 shadow-xl">
      <div onClick={handleImageClick}>
        <div className="flex items-center justify-center space-x-4">
          {image ? (
            <img
              style={{ height: "150px", width: "150px", marginRight: "100px" }}
              className="ml-10 cursor-pointer border rounded-full"
              src={URL.createObjectURL(image)}
              alt="error"
            />
          ) : (
            <img
              style={{
                height: "150px",
                marginRight: "100px",
                border: "4px solid black",
              }}
              className="ml-10 cursor-pointer border rounded-full"
              src={img}
              alt="error"
            />
          )}
          <h1 className="text-center border border-black rounded-md cursor-pointer p-1 w-48">
            Change Profile Photo
          </h1>
        </div>
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      <div className="flex justify-center mt-10">
        {/* form */}
        <form onSubmit={addPersonalinfo}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-bold">
                First name
              </label>
              <input
                type="text"
                id="firstname"
                className={inputCss}
                value={input.firstName}
                onChange={(e) =>
                  setInput({ ...input, firstName: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm font-bold">
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                className={inputCss}
                value={input.lastName}
                onChange={(e) =>
                  setInput({ ...input, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={inputCss}
                value={input.Email}
                onChange={(e) => setInput({ ...input, Email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="mobile" className=" block text-sm font-bold">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                className={inputCss}
                value={input.Mobile}
                onChange={(e) => setInput({ ...input, Mobile: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="address" className="block text-sm font-bold">
              Address
            </label>
            <input
              type="text"
              id="address"
              className={inputCss}
              value={input.Address}
              onChange={(e) => setInput({ ...input, Address: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="city" className="block text-sm font-bold">
                City
              </label>
              <input
                type="text"
                id="city"
                className={inputCss}
                value={input.City}
                onChange={(e) => setInput({ ...input, City: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-bold">
                State
              </label>
              <select
                value={input.State}
                onChange={(e) => setInput({ ...input, State: e.target.value })}
                name="state"
                id="state"
                className={inputCss}
              >
                <option>Select Option</option>
                {stateNames.map((state, i) => (
                  <option key={i} className="text-blue-900 ">
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="postalcode" className="block text-sm font-bold">
              Postal Code
            </label>
            <input
              type="text"
              id="postalcode"
              className={inputCss}
              value={input.Pin}
              onChange={(e) => setInput({ ...input, Pin: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="objective" className="block text-sm font-bold">
              Objective
            </label>
            <textarea
              name="objective"
              id="objective"
              className={inputCss}
              rows="6"
              value={input.Objective}
              onChange={(e) =>
                setInput({ ...input, Objective: e.target.value })
              }
            ></textarea>
          </div>

          <div className="flex justify-end">
            <Link to="/detailfilling/workexp">
              <button
                type="submit"
                onClick={addPersonalinfo}
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

export default PersonalDetails;
