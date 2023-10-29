import React, { useState } from 'react'
import { templateImages } from '../ImagesFile/images'
import { NavLink } from 'react-router-dom'
function ResumeTemp() {
    const [mouseOver, setMouseOver] = useState("mouseNotOver")
    return (
        <div className='container flex flex-col items-center justify-center h-min ml-16'>
            <div >
                <h1 className='m-10  p-10 font-bold text-2xl flex justify-center '>Select a Template to get started!</h1>
            </div>
            <div className=' flex justify-between items-center'>
                {
                    templateImages && templateImages.map((template) => {
                        return (
                            <div>
                                <div className=' text-blue-500 flex justify-center font-bold mb-3 text-xl'><h2>{template.name}</h2></div>
                                <div
                                    onMouseOver={() => {
                                        //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                                        setMouseOver(template.name)
                                    }}
                                    onMouseOut={() => {
                                        //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                                        setMouseOver('MouseIsNotOver')
                                    }}
                                    className=" mx-7 flex justify-between h-96 w-80 ml-2" key={template.name}>
                                    <img src={template.imageSource} alt="error" />
                                    {
                                        mouseOver === template.name ?
                                            <div className='absolute mx-7 flex justify-between h-96 w-80 ml-2'>
                                                <div className='absolute inset-0 flex items-center justify-center'>
                                                    <NavLink to="/detailform" ><button id='tempUseBtn' className='bg-blue-500 h-10 px-2 rounded-xl font-bold text-white'>Use Template</button></NavLink>
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default ResumeTemp


{/* <div className='absolute bg-black bg-opacity-20 mx-7 flex justify-between h-96 w-80 ml-2'>
<div className='absolute inset-0 flex items-center justify-center'>
    <button id='tempUseBtn' className='bg-blue-500 h-10 px-2 rounded-xl font-bold text-white'>Use Template</button>
</div>
</div>  */}