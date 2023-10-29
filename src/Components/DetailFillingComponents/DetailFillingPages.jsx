import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function PersnalDetail() {
    return (
        <div className='flex mt-2'>
            <div style={{ width: "20vw" }} className=''>
                <ul className='list-none m-2 font-bold text-center'>
                    <li className='m-2 p-2 border-2 border-black '><Link>Personal Info</Link></li>
                    <li className='m-2 p-2 border-2 border-black '><Link to="">Work Experience</Link></li>
                    <li className='m-2 p-2 border-2 border-black '><Link>Education</Link></li>
                    <li className='m-2 p-2 border-2 border-black '><Link>Key Skills</Link></li>
                </ul>
            </div>
            <div style={{ width: "80vw" }} className=' '>

            </div>
        </div >
    )
}

export default PersnalDetail
