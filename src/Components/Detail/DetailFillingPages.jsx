import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PersonalDetails from './PersonalDetails'
import Education from './Education'
import KeySkill from './KeySkill'
import WorkExperience from './WorkExperience'
function DetailFillingPages() {
    return (
        <div className='flex mt-2'>
            <div style={{ width: "20vw" }} className=''>
                <ul className='list-none m-2 font-bold text-center'>
                    <li className='m-2 p-2 border-2 border-black '><Link to="personalinfo">Personal Info</Link></li>
                    <li className='m-2 p-2 border-2 border-black '><Link to="workexp">Work Experience</Link></li>
                    <li className='m-2 p-2 border-2 border-black '><Link to="education">Education</Link></li>
                    <li className='m-2 p-2 border-2 border-black '><Link to="skill">Key Skills</Link></li>
                </ul>
            </div>
            <div style={{ width: "80vw" }} className='bg-yellow-500'>
                <Routes>
                    <Route path='personalinfo' element={<PersonalDetails />} />
                    <Route path='workexp' element={<WorkExperience />} />
                    <Route path='education' element={<Education />} />
                    <Route path='skill' element={<KeySkill />} />
                </Routes>
            </div>
        </div >
    )
}

export default DetailFillingPages
