import React from 'react';

function Template_1() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-red-300'>
            <div className='bg-white w-1/2 h-screen m-5 p-5'>
                <div className=' h-1/4 flex justify-between items-center border-b-8 outline-none border-blue-400'>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" width={'200px'} alt="" />
                    </div>

                    <div className=' font-bold text-5xl'>
                        <h1 >ROHIT PAREEK</h1>
                    </div>
                    <div className='w-52'>
                        sereenawislon@gamil.com
                        43479857409 <br />
                        Apartment 4, Wall Street, Lane
                        Journal, jummaidnagar, Karnataka,
                        686674
                    </div>
                </div>

                <div className='p-5 border-b-4 outline-none border-blue-400'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem laboriosam o Magnam animi molestias incidunt dolore expedita quasi! Animi id a illum alias, accusantium sequi necessitatibus consectetur numquam, corrupti voluptatibus ex, vero modi nulla.</p>
                </div>

                <div className='flex justify-between'>
                    <div><h2>Professional Experience</h2></div>
                    <div className='flex items-center'>
                        <h3>job title</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template_1;
