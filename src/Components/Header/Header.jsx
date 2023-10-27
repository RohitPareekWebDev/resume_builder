
import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    const NavLinkCss = ({ isActive }) => `${isActive ? "text-blue-500" : "text-black"} p-2 mx-5  hover:text-blue-500 `
    return (
        <nav className=' flex p-2 justify-between shadow-lg'>
            <span>
                <NavLink to="/resumetemp" >
                    {/*Click this image you will be redirected to the resume templates. */}
                    <img className="h-8 mt-2" src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2FAlma_Better_Logo_4d9d929fe6.png&w=256&q=75" alt="error" /></NavLink>
            </span>

            <div className='mt-2 font-bold text-xl'>
                <NavLink to="/resumetemp" className={NavLinkCss}> Resume Templates</NavLink>

                <NavLink to="/myresume" className={NavLinkCss}>My Resume</NavLink>

                <NavLink to="/about" className={NavLinkCss}>About Us</NavLink>
            </div>
        </nav >
    )
}

export default Header