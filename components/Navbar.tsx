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
                    <img
                        src="./logo.svg" alt="" 
                    />
                    
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
                        <ul>
                            <li onClick={() => setIsMenuOpen(false)}>Services</li>
                            <li onClick={() => setIsMenuOpen(false)}>Vision</li>
                            <li onClick={() => setIsMenuOpen(false)}>Pricing</li>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <img src="./star.svg" alt="" />
                                Collaborate
                            </button>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
 
export default Navbar;