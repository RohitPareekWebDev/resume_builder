import React from 'react'

function Education() {
    let inputCss = 'w-full border rounded-lg p-2 shadow-blue-950 shadow-sm'
    return (
        <div className=" flex w-3/4 flex-col p-5 shadow-gray-500 shadow-xl">
            <h1 className=' text-2xl font font-bold  text-justify mt-10 '>Work Experience</h1>

            <div>
                <div className=' '>
                    <label className=" text-sm font-bold" htmlFor="">Type</label>
                    <select className={`${inputCss}`} name="" id="">
                        <option value="hello">Select</option>
                        <option value='Graduation'> Graduation</option>
                        <option value='Post Graduation'> Post Graduation</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Education
