"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import '../styles/navbar.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return ( 
        <>
            <motion.div 
                className="navbar"
                initial={{opacity:0, scale:0.9}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration: 0.7}}
            >
                <div className="navbar-wrapper">
                    <a href="#home"> <img
                        src="./logo.svg" alt="" 
                    />
                    </a>
                    {/* Hamburger Menu Button */}
                    <button 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Desktop & Mobile Links */}
                    <div className={`links ${isMenuOpen ? 'active' : ''}`}>
                        <div className="mobile-brand">
                            <a href="#home" onClick={() => setIsMenuOpen(false)}>
                                <img src="/logo.svg" alt="Novarc Media" />
                            </a>
                        </div>
                        <ul>
                            <li onClick={() => setIsMenuOpen(false)}><a href="#services">Services</a></li>
                            <li onClick={() => setIsMenuOpen(false)}><a href="#pricing">Pricing</a></li>
                            <li onClick={() => setIsMenuOpen(false)}><a href="#targetedads">Ads Management</a></li>
                            <a href="#contact"> 
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <img src="./star.svg" alt="" />
                                    Collaborate
                                </button>
                            </a>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
 
export default Navbar;