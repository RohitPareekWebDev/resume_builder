import React, { useState } from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

// Define a functional component named 'Header'
function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    // Define a custom CSS class for NavLink components
    const NavLinkCss = ({ isActive }) => `${isActive ? "text-blue-500" : "text-black"} font-bold text-2xl p-5 hover:text-blue-500`

    return (
        // Create a navigation bar using the 'nav' element
        <nav className='flex p-2 justify-between shadow-lg'>
            <span id='logo' className=" mt-2 bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text text-4xl font-bold ">
                {/* Add AlmaBetter logo as a link to the '/resumetemp' route */}
                <NavLink to="/" >
                    <h1>Resume Builder</h1>
                </NavLink>
            </span>

            <div className="social-media">

                {/* hamburget menu start  */}
                <div className="hamburger-menu">
                    <Link href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </Link>
                </div>
            </div>

            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>

                <NavLink to="/" className={`${NavLinkCss}`}> Resume Templates</NavLink>

                <NavLink to="/myresume" className={NavLinkCss}>My Resume</NavLink>

                <NavLink to="/about" className={NavLinkCss}>About Us</NavLink>
            </div>
        </nav>
    )
}

// Export the 'Header' component to make it available for use in other parts of the application
export default Header   