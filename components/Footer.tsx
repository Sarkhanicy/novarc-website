"use client";

import '../styles/footer.scss';
import {motion, useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

    return (
        <>
            <div className="footer" ref={ref}>
                <motion.div 
                    className="footer-wrapper"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="footer-upper">
                        <div className="logo-sub">
                            <img src="./logo.svg" alt="" />
                            <p>Cinematic storytelling that elevates brands beyond the ordinary.</p>
                        </div>

                        <div className="services">
                            <h1>Services</h1>
                            <p>Script Writing</p>
                            <p>Filmmaking & Production</p>
                            <p>Editing & Animation</p>
                            <p>Targeted Ads</p>
                        </div>

                        <div className="connect">
                            <h1>Connect</h1>
                            <a href="mailto:info@novarcmedia.com">info@novarcmedia.com</a>
                            <a href="tel:+48571517075">+48 571 517 075</a>
                            <a href="tel:+48571500895">+48 571 500 895</a>
                            <p>Warsaw, Poland</p>
                        </div>

                        <div className="images">
                            <img src="./sarkhy.jpeg" alt="" />
                            <img src="./qusik.JPG" alt="" />
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="footer-lower">
                        <div className="rights">
                            <p>© 2025 NOVARC Media. All rights reserved.</p>
                        </div>
                        <div className="policies">
                            <a href="#" onClick={(e) => { e.preventDefault(); setPrivacyOpen(true); }}>Privacy Policy</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); setTermsOpen(true); }}>Terms of Service</a>
                        </div>
                        <div className="socials">
                            <a href="https://www.instagram.com/novarcmedia" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/company/novarcmedia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.tiktok.com/@novarc.media" target="_blank" rel="noopener noreferrer">TikTok</a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
            <TermsOfService isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
        </>
    );
}
 
export default Footer;