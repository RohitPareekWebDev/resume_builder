import React, { useState } from 'react';
import "./HomePage.css";
import { templateImages } from '../ImagesFile/images';
import { NavLink } from 'react-router-dom';

function ResumeTemp() {
    const [mouseOver, setMouseOver] = useState("mouseNotOver");

    return (
        <div>
            <div>
                <h1 className='m-10 p-10 font-bold text-2xl flex justify-center '>Select a Template to get started!</h1>
            </div>
            <div id="one" className='container flex flex-col items-center justify-center h-auto mx-auto'>
                <div className='flex flex-wrap justify-center'>
                    {templateImages &&
                        templateImages.map((template, index) => (
                            <div id='two' key={template.name} className={`mb-5 ${index > 0 ? 'ml-2' : ''} sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4`}>
                                <div className='text-blue-500 flex justify-center font-bold mb-5 text-xl'><h2>{template.name}</h2></div>
                                <div
                                    onMouseOver={() => setMouseOver(template.name)}
                                    onMouseOut={() => setMouseOver('MouseIsNotOver')}
                                    className={`mx-7 flex justify-between h-96 w-80 ${mouseOver === template.name ? 'scale-110' : 'scale-100'}`}>
                                    <img className="transform transition-transform" src={template.imageSource} alt="error" />
                                    {mouseOver === template.name ? (
                                        <div className='absolute mx-7 flex justify-between h-96 w-80'>
                                            <div className='absolute inset-0 flex items-center justify-center'>
                                                <NavLink to="/detailfilling/personalinfo" ><button id='tempUseBtn' className='bg-blue-500 h-10 px-2 rounded-xl font-bold text-white'>Use Template</button></NavLink>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default ResumeTemp;
