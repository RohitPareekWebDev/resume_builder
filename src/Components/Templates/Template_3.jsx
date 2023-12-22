import React from 'react';

function Template_3() {
    return (
        <div className='min-h-screen flex items-center justify-center
        '>
            <div className='w-1/2 h-screen m-5 p-5 shadow-white shadow-lg'>
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
                    </div>

                    <div className='w-3/4' style={{ backgroundColor: "#F8EEBB" }}>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Template_3;
