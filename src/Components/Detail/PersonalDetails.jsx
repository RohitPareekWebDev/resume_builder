import React, { useState, useRef } from 'react';
import img from './image/ProfileDefaultImg.jpg';
import { stateNames } from '../ImagesFile/images';
import { Link } from 'react-router-dom';


function PersonalDetails() {
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
                            className='ml-10 cursor-pointer border rounded-full'
                            src={URL.createObjectURL(image)}
                            alt="error"
                        />
                    ) : (
                        <img
                            style={{ height: "150px", marginRight: "100px" }}
                            className='ml-10 cursor-pointer border rounded-full'
                            src={img}
                            alt="error"
                        />
                    )}
                    <h1 className="text-center border border-black rounded-md cursor-pointer p-1 w-48">
                        Change Profile Photo
                    </h1>
                </div>
                <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
            </div>

            <div className="flex justify-center mt-10">
                <form action="">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-bold">First name</label>
                            <input type="text" id="firstname" className={inputCss} />
                        </div>

                        <div>
                            <label htmlFor="lastname" className="block text-sm font-bold">Last name</label>
                            <input type="text" id="lastname" className={inputCss} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold">Email</label>
                            <input type="email" id="email" className={inputCss} />

                        </div>

                        <div>
                            <label htmlFor="mobile" className=" block text-sm font-bold">Mobile</label>
                            <input type="tel" id="mobile" className={inputCss} />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="address" className="block text-sm font-bold">Address</label>
                        <input type="text" id="address" className={inputCss} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="city" className="block text-sm font-bold">City</label>
                            <input type="text" id="city" className={inputCss} />
                        </div>

                        <div>
                            <label htmlFor="state" className="block text-sm font-bold">State</label>
                            <select name="state" id="state" className={inputCss}>
                                <option value="null">Select Option</option>
                                {stateNames.map((state, i) => (
                                    <option value={state} key={i} className="text-blue-900 ">
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="postalcode" className="block text-sm font-bold">Postal Code</label>
                        <input type="text" id="postalcode" className={inputCss} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="description" className="block text-sm font-bold">Description</label>
                        <textarea name="description" id="description" className={inputCss} rows="6"></textarea>
                    </div>

                    <div className='flex justify-end' >
                        <Link to="/detailfilling/workexp">
                            <button className="text-white bg-blue-500 m-2 p-2 rounded-2xl">Next</button>
                        </Link>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default PersonalDetails;