"use client";

import '../styles/portfolio.scss';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

const Portfolio = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const projects = [
        { id: 1, title: "Novarc Media", category: "Advertisement", gif: "/novarcad.gif" },
        { id: 2, title: "Coze Bistro", category: "Advertisement", gif: "/cozead.gif" },
        { id: 3, title: "Hears Earplugs", category: "Advertisement", gif: "/hearsad.gif" },
    ];

    return (
        <>
            <div id='portfolio' className="portfolio" ref={ref}>
                <motion.div 
                    className="portfolio-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="portfolio-header">
                        <div className="portfolio-badge">
                            <img src="/dot.svg" alt="" />
                            <p>Our Work</p>
                        </div>
                        <h1>Previous Projects</h1>
                        <p className="portfolio-subtitle">Showcasing our creative excellence and cinematic storytelling</p>
                        <div className="portfolio-line"></div>
                    </div>

                    <div className="portfolio-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="portfolio-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: "easeOut" 
                                }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="portfolio-image-container">
                                    <img 
                                        src={project.gif} 
                                        alt={project.title}
                                        className="portfolio-image"
                                    />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info">
                                            <h3>{project.title}</h3>
                                            <p>{project.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Portfolio;

