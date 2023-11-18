import React from 'react'
import img from './Img.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function About() {
    return (
        <div className='flex h-screen m-6 fixed'>
            <div style={{ width: "70%" }}>
                <h1 className='font text-5xl font-bold ml-16 mt-16'>Resume <br />Builder</h1>
                <p className=' h-2/4 w-5/6 ml-16 mt-8 text-2xl pt-10'>
                    Discover a dynamic collection of striking and professionally crafted premium resume and cover letter templates offered by Resume Builder. Elevate your job application and ensure a memorable impact that sets you apart from the competition. Our extensive library boasts top-tier resume templates suitable for job seekers in virtually every industry. These templates are thoughtfully designed, employer-ready, optimized for Applicant Tracking Systems (ATS), and effortlessly customizable to suit your unique style. Take your pick from a multitude of free resume templates, and streamline the resume creation process with our user-friendly Resume Builder, allowing you to fashion a polished, professional resume in mere minutes. Your path to career success begins here.</p>
                <span>
                    <ul className='flex ml-20'>
                        <li><FacebookIcon style={{ color: "blue", fontSize: "40px", margin: "10px" }} /></li>
                        <li><LinkedInIcon style={{ color: "blue ", fontSize: "40px", margin: "10px" }} /></li>
                        <li><WhatsAppIcon style={{ color: "green", fontSize: "40px", margin: "10px" }} /></li>
                        <li><TwitterIcon style={{ color: "blue", fontSize: "40px", margin: "10px" }} /></li>
                        <li><EmailIcon style={{ color: "gray", fontSize: "40px", margin: "10px" }} /></li>
                    </ul>
                </span>
            </div>

            <div style={{ width: "30%" }}>
                <img className="mt-40 " src={img} alt="" />
            </div>
        </div>
    )
}

export default About
