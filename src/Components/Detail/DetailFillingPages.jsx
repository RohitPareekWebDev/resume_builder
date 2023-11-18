import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import KeySkill from './KeySkill';
import WorkExperience from './WorkExperience';

function DetailFillingPages() {
    const location = useLocation();

    return (
        <div className='flex mt-2'>
            <div style={{ width: '20vw' }} className='h-fit'>
                <ul className='list-none m-2 font-bold text-center'>
                    <li className={`m-2 p-2 border-l-4 ${location.pathname === '/detailfilling/personalinfo' ? 'border-blue-500 text-blue-500' : 'border-black'}`}>
                        <Link to='personalinfo'>Personal Info</Link>
                    </li>
                    <li className={`m-2 p-2 border-l-4 ${location.pathname === '/detailfilling/workexp' ? 'border-blue-500 text-blue-500' : 'border-black'}`}>
                        <Link to='workexp'>Work Experience</Link>
                    </li>
                    <li className={`m-2 p-2 border-l-4 ${location.pathname === '/detailfilling/education' ? 'border-blue-500 text-blue-500' : 'border-black'}`}>
                        <Link to='education'>Education</Link>
                    </li>
                    <li className={`m-2 p-2 border-l-4 ${location.pathname === '/detailfilling/skill' ? 'border-blue-500 text-blue-500 ' : 'border-black'}`}>
                        <Link to='skill'>Key Skills</Link>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center w-3/4'>
                <Routes>
                    <Route path='personalinfo' element={<PersonalDetails />} />
                    <Route path='workexp' element={<WorkExperience />} />
                    <Route path='education' element={<Education />} />
                    <Route path='skill' element={<KeySkill />} />
                </Routes>
            </div>
        </div>
    );
}

export default DetailFillingPages;
