import React from 'react'

const Navbar = () => (
    <nav className="header-nav-wrap">
        <ul className="header-nav">
            <li className="current"><a className="smoothscroll"  href="#home" title="home">Home</a></li>
            <li><a className="smoothscroll"  href="#about" title="about">About</a></li>
            <li><a className="smoothscroll"  href="#works" title="works">Works</a></li>
            <li><a className="smoothscroll"  href="#blog" title="blog">Blog</a></li>
            <li><a className="smoothscroll"  href="#contact" title="contact">Contact</a></li>
        </ul>
    </nav>
)

export default Navbar