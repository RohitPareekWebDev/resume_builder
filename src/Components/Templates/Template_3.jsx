import React from 'react';

function Template_3() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-1/2 h-screen m-5 p-5'>
                <div className='flex '>
                    <div className={`w-1/4`} style={{ backgroundColor: '#8a4242' }}>
                        <div className='p-10'>
                            <img className='h-30' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" />
                        </div>
                        <div className='text-white'>
                            <h2 className='flex justify-center font-bold text-2xl'>ROHIT PAREEK</h2>
                            <div className='flex justify-center'>
                                <h3 className='font-bold'>Job Title</h3>
                            </div>
                        </div>

                        <div className='mt-5 p-3'>
                            <label className='bg-white my-2' htmlFor="">Email :</label>
                            <div className='text-white my-2'>vyasrohit200@gmail.com</div>
                            <label className='bg-white my-2' htmlFor="">Contact : </label>
                            <div className='text-white my-2'>7878713945</div>
                            <label className='bg-white my-2' htmlFor="">Address : </label>
                            <div className='text-white my-2'>Budh vihar pal village jodhpur</div>
                        </div>
                    </div>

                    <div className='p-3 w-3/4' style={{ backgroundColor: "#F8EEBB" }}>
                        <div>
                            <p className='border-red-900 border-b-4 pb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eius inventore blanditiis ab dolores repellendus nam id modi quisquam similique?
                            </p>
                        </div>

                        <div>
                            <h3 className='mt-3 font-bold text-2xl bg-orange-50 text-red-900'>Professional Experience</h3>
                            <div className='border-red-900 border-b-4 pb-5'>
                                <h3 className='font-bold text-xl mt-2'>Job Title</h3>
                                <h3 className='font-bold mt-2'>Job Title</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quisquam explicabo magnam non totam alias sunt molestias aliquid a dolor?</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='mt-3 font-bold text-2xl bg-orange-50 text-red-900'>Education</h3>
                            <div className='border-red-900 border-b-4 pb-5'>
                                <h3 className='font-bold text-lg mt-2'>Bachelor of Engineering & Technology</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quisquam explicabo magnam non totam alias sunt molestias aliquid a dolor?</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='mt-3 font-bold text-2xl bg-orange-50 text-red-900'>Key Skills</h3>
                            <div>
                                <li>HTML</li>
                                <li>JAVASCRIPT</li>
                                <li>CSS</li>
                                <li>REACT</li>
                                <li>NEXTJS</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Template_3;