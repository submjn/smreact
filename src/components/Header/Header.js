import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="s-header">

            <div className="header-logo">
                <a className="site-logo" href="index.html"><img src="images/logo.png" alt="Homepage" /></a>
            </div>

            <Navbar />

            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

        </header>
    )
}

export default Header