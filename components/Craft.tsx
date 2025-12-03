"use client";

import '../styles/craft.scss';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';


const Craft = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('portfolio');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <div id='services' className="craft" ref={ref}>
                <motion.div 
                    className="craft-wrapper"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="services">
                        <div className="info-box">
                            <div className="craft-box">
                                <img src="/dot.svg" alt="" />
                                <p>Main focuses</p>
                            </div>
                            <div className="craft-text-box">
                                <h1>Services</h1>
                                <p>Professional media crafted to inspire, engage, and drive real results.</p>
                            </div>
                            <div className="parag-box">
                                <p>Professional</p>
                                <p>Creative</p>
                                <p>Impactful</p>
                                <p>Artistic</p>
                                <p>Cinematic</p>
                            </div>
                            <div className="craft-button-box">
                                <motion.button
                                    initial={{opacity:0, scale:0.9}} 
                                    animate={{opacity:1, scale:1}} 
                                    transition={{duration: 0.8}}
                                    onClick={scrollToContact}
                                >
                                    Book a Free Call
                                </motion.button>
                                <motion.button
                                    initial={{opacity:0, scale:0.9}} 
                                    animate={{opacity:1, scale:1}} 
                                    transition={{duration: 0.8}}
                                    onClick={scrollToPricing}
                                >
                                    See Our Work
                                </motion.button>
                            </div>
                        </div>
                        <div className="craft-image-box">
                            <img src="/craft.png" alt="" />
                        </div>
                    </div>
                    <div className="services-box-container">
                        <div className="service-box">
                            <div className="title">
                                <img src="/script.svg" alt="" />
                                <h3>Script Writing & Storytelling</h3>
                            </div>
                            <div className="line"></div>
                            <p>We craft engaging scripts and build stories that connect emotionally with your audience and convey your message clearly.</p>
                        </div>
                        <div className="service-box">
                            <div className="title">
                                <img src="/filmmaking.svg" alt="" />
                                <h3>Filmmaking & Cinematic Production</h3>
                            </div>
                            <div className="line"></div>
                            <p>Full-scale video production with cinematic visuals, smooth camera work, and aerial drone filming for stunning perspectives.</p>
                        </div>
                    </div>
                    <div className="services-box-container">
                        <div className="service-box">
                            <div className="title">
                                <img src="/editing.svg" alt="" />
                                <h3>Professional Editing & Animations</h3>
                            </div>
                            <div className="line"></div>
                            <p>Clean, creative editing with motion graphics and animations that elevate your visuals and bring ideas to life.</p>
                        </div>
                        <div className="service-box">
                            <div className="title">
                                <img src="/ads.svg" alt="" />
                                <h3>Targeted Ads Management</h3>
                            </div>
                            <div className="line"></div>
                            <p>Strategic ad campaigns optimized for your audience to increase visibility, clicks, and conversions across digital platforms.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
 
export default Craft;