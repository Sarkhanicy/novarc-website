"use client";

import Navbar from "@/components/Navbar";
import '../styles/main.scss';
import {motion} from 'framer-motion';
import Craft from "@/components/Craft";
import Cursor from "@/cursor/Cursor";
import Prices from "@/components/Prices";
import TargetedAds from "@/components/TargetedAds";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const textVariants: any = {
  initial:{
      x:-500,
      opacity: 0,
  },
  animate:{
      x: 0,
      opacity: 1,
      transition:{
          duration: 1,
          staggerChildren: 0.1,
      },
  },

  scrollButton:{
      opacity: 0,
      y: 10,
      transition:{
          duration:2,
          repeat:Infinity
      }
  }
};

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <Cursor/>
      {/* navbar */}
      <Navbar/> 

      <div 
        id="home"
        className="main"
      >

      {/* hero */}
          <div className="hero-wrapper">
              <motion.button 
                  initial={{opacity:0, scale:0.5}} 
                  animate={{opacity:1, scale:1}} 
                  transition={{duration: 0.7}}
                  id="fixed"
                >
                <img src="./dot.svg" alt="" />
                <p>Crafting Unique Brand Identities</p>
              </motion.button>
              <motion.div 
                className="text-box"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h1 variants={textVariants}>Artistic and Cinematic Storytelling for Brands</motion.h1>
                <motion.p variants={textVariants}>Every frame is crafted with purpose — combining artistry, narrative, and brand strategy.</motion.p>
              </motion.div>
              <div className="button-box">
                <motion.button 
                    initial={{opacity:0, scale:0.9}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration: 0.7}}
                    whileHover={{color:"#000", backgroundColor:"#ffffff"}}
                    onClick={scrollToContact}
                  >
                    Book a free Call 
                  </motion.button>
                <motion.button 
                    initial={{opacity:0, scale:0.9}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration: 0.8}}
                    whileHover={{color:"#000", backgroundColor:"#ffffff"}}
                  >
                    See More
                  </motion.button>
              </div>
              <div className="scroll-box">
                <p>Scroll down</p>
                <div className="line"></div>
                <motion.img src="/mouse.svg" alt="" />
                <div className="line"></div>
                <p>to see more</p>
              </div>
          </div>
      </div>
      <Craft/>
      <Prices/>
      <TargetedAds/>
      <Contact/>
      <Footer/>
    </>
  );
}
