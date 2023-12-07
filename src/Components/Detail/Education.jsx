import React from 'react'

function Education() {
    let inputCss = 'w-full border rounded-lg p-2 shadow-blue-950 shadow-sm';
    let year = yearRange(2000, 2024)
    function yearRange(start, end) {
        //this function  is used to create list of years in a range to display list of options in the 'Select' input field of the form.
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    return (
        <div className=" flex w-3/4 flex-col p-5 shadow-gray-500 shadow-xl">
            <h1 className=' text-2xl font font-bold  text-justify mt-10 border-b-2 border-blue-400'>Education Details</h1>

            <div className='flex justify-center mt-10'>
                <form action="">
                    <h2 className=' text-xl font font-bold  text-justify mt-10 border-b-2 border-blue-200'>Experience</h2>
                    <div className='grid grid-cols-2 gap-4 mt-2.5'>
                        <div>
                            <label className=" text-sm font-bold" htmlFor="">Type</label>
                            <select className={`${inputCss}`} name="" id="">
                                <option value="hello">Select</option>
                                <option value='Graduation'> Graduation</option>
                                <option value='Post Graduation'> Post Graduation</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 mt-2.5'>
                        <div>
                            <label className=" text-sm font-bold" htmlFor="university">University</label>
                            <input id='university' className={`${inputCss}`} type="text" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold" htmlFor="degree">Degree</label>
                            <input id='degree' className={`${inputCss}`} type="text" />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 mt-2.5'>
                        <div>
                            <label className=" text-sm font-bold" htmlFor="Starting Year ">Start Year</label>
                            <select className={`${inputCss}`} name="" id="">
                                <option className="text-blue-400" value="">Select</option>
                                {
                                    year.map((yr, i) => {
                                        return (
                                            <option className="text-blue-400" key={i} >{yr}</option>
                                        )
                                    })}
                            </select>
                        </div>

                        <div>
                            <label className=" text-sm font-bold" htmlFor="Ending Year ">End Year</label>
                            <select className={`${inputCss}`} name="" id="">
                                <option className="text-blue-400" value="">Select</option>
                                {
                                    year.map((yr, i) => {
                                        return (
                                            <option className="text-blue-400" key={i} >{yr}</option>
                                        )
                                    })}
                            </select>

                        </div>
                    </div>

                    <div className='flex justify-center mt-5 gap-5 font-bold text-blue-500'>
                        <button>Add Item</button>
                        <button>Remove Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Education
