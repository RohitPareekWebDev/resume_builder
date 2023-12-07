import React from 'react'

function Education() {
    let inputCss = 'w-full border rounded-lg p-2 shadow-blue-950 shadow-sm';
    return (
        <div className=" flex w-3/4 flex-col p-5 shadow-gray-500 shadow-xl">
            <h1 className=' text-2xl font font-bold  text-justify mt-10 border-b-2 border-blue-400'>Key Skills</h1>

            <div className='grid grid-cols-2 mt-10 gap-4'>
                <input className={inputCss} placeholder='Enter Skill' type="text" />
                <input className={inputCss} placeholder='Enter Skill' type="text" />
            </div>

            <div className='flex justify-center mt-5 gap-5 font-bold text-blue-500'>
                <button>Add Item</button>
                <button>Remove Item</button>
            </div>
        </div>

    )
}

export default Education
