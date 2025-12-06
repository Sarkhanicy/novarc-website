"use client";

import '../styles/prices.scss';
import {motion, useInView, AnimatePresence} from 'framer-motion';
import {useRef, useState, useEffect} from 'react';

const Prices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [expandedService, setExpandedService] = useState<number | null>(null);
    const accordionRef = useRef<HTMLDivElement>(null);

    // Data structure for mobile accordion
    const servicesData = [
        {
            id: 1,
            title: "Short Ad / Promo video",
            detail: "(30-90 sec)",
            workTime: "2 Shooting Days",
            workDetail: "20-25 Hours of Post Production",
            price: "2,500 - 5,000",
            currency: "PLN"
        },
        {
            id: 2,
            title: "Medium-Length Brand Video",
            detail: "(2–5 min)",
            workTime: "3–4 Shooting Days",
            workDetail: "40+ Hours of Post-Production",
            price: "4,000 - 6,000",
            currency: "PLN"
        },
        {
            id: 3,
            title: "Corporate / Commercial Film",
            detail: "(5–10 min)",
            workTime: "+5 Shooting Days",
            workDetail: "60–80 Hours of Post-Production",
            price: "10,000 - 15,000",
            currency: "PLN"
        },
        {
            id: 4,
            title: "Motion Graphic / Animated Video",
            detail: "(30-90 sec)",
            workTime: "40–60 Hours of Work",
            workDetail: "",
            price: "2,000 - 5,000",
            currency: "PLN"
        },
        {
            id: 5,
            title: "Drone Shoot",
            detail: "(separate order)",
            workTime: "1-2 Shooting Day",
            workDetail: "12–24 Hours of Post-Production",
            price: "2,000 - 3,000",
            currency: "PLN"
        }
    ];

    const handleServiceClick = (serviceId: number) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    // Close accordion when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
                setExpandedService(null);
            }
        };

        if (expandedService !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expandedService]);

    return ( 
        <>
            <div id='pricing' className="prices" ref={ref}>
                <motion.div 
                    className="prices-wrapper"
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="prices-title">
                        <div className="prices-badge">
                            <img src="/dot.svg" alt="" />
                            <p>Pricing</p>
                        </div>
                        <h1>Our Pricing</h1>
                        <p>Transparent rates. Real value.</p>
                        <div className="line"></div>
                    </div>
                    {/* Desktop View - 3 boxes side by side */}
                    <div className="pricebox-container desktop-view">
                        <motion.div 
                            className="pricebox"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="pricebox-header">
                                <h1>Service Type</h1>
                            </div>
                            <div className="pricebox-details">
                                <span className="service-number">1</span>
                                <p>Short Ad / Promo video <br/><span className="service-detail">(30-90 sec)</span></p>
                            </div>
                            <div className="pricebox-details">
                                <span className="service-number">2</span>
                                <p>Medium-Length Brand Video <br/><span className="service-detail">(2–5 min)</span></p>
                            </div>
                            <div className="pricebox-details">
                                <span className="service-number">3</span>
                                <p>Corporate / Commercial Film <br/><span className="service-detail">(5–10 min)</span></p>
                            </div>
                            <div className="pricebox-details">
                                <span className="service-number">4</span>
                                <p>Motion Graphic / Animated Video <br/><span className="service-detail">(30-90 sec)</span></p>
                            </div>
                            <div className="last-detail">
                                <span className="service-number">5</span>
                                <p>Drone Shoot <br/><span className="service-detail">(separate order)</span></p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="pricebox"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="pricebox-header">
                                <h1>Work Time</h1>
                            </div>
                            <div className="pricebox-details">
                                <p>2 Shooting Days <br/><span className="work-detail">20-25 Hours of Post Production</span></p>
                            </div>
                            <div className="pricebox-details">
                                <p>3–4 Shooting Days <br/><span className="work-detail">40+ Hours of Post-Production</span></p>
                            </div>
                            <div className="pricebox-details">
                                <p>+5 Shooting Days <br/><span className="work-detail">60–80 Hours of Post-Production</span></p>
                            </div>
                            <div className="pricebox-details">
                                <p>40–60 Hours of Work</p>
                            </div>
                            <div className="last-detail">
                                <p>1-2 Shooting Day <br/><span className="work-detail">12–24 Hours of Post-Production</span></p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="pricebox featured"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="pricebox-header">
                                <h1>Final Price</h1>
                            </div>
                            <div className="pricebox-details">
                                <p className="price-amount">2,500 - 5,000 <span className="currency">PLN</span></p>
                            </div>
                            <div className="pricebox-details">
                                <p className="price-amount">4,000 - 6,000 <span className="currency">PLN</span></p>
                            </div>
                            <div className="pricebox-details">
                                <p className="price-amount">10,000 - 15,000 <span className="currency">PLN</span></p>
                            </div>
                            <div className="pricebox-details">
                                <p className="price-amount">2,000 - 5,000 <span className="currency">PLN</span></p>
                            </div>
                            <div className="last-detail">
                                <p className="price-amount">2,000 - 3,000 <span className="currency">PLN</span></p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile View - Accordion */}
                    <div className="pricebox-container mobile-view">
                        <motion.div 
                            ref={accordionRef}
                            className="pricebox mobile-accordion"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="pricebox-header">
                                <h1>Service Type</h1>
                            </div>
                            {servicesData.map((service, index) => (
                                <div key={service.id}>
                                    <motion.div 
                                        className={`pricebox-details mobile-service-item ${expandedService === service.id ? 'expanded' : ''} ${index === servicesData.length - 1 ? 'last-detail' : ''}`}
                                        onClick={() => handleServiceClick(service.id)}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="service-number">{service.id}</span>
                                        <p>
                                            {service.title} <br/>
                                            <span className="service-detail">{service.detail}</span>
                                        </p>
                                        <span className="expand-icon">{expandedService === service.id ? '−' : '+'}</span>
                                    </motion.div>
                                    <AnimatePresence>
                                        {expandedService === service.id && (
                                            <motion.div
                                                className="mobile-expanded-content"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="expanded-work-time">
                                                    <h3>Work Time</h3>
                                                    <p>
                                                        {service.workTime}
                                                        {service.workDetail && (
                                                            <>
                                                                <br/>
                                                                <span className="work-detail">{service.workDetail}</span>
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="expanded-price">
                                                    <h3>Final Price</h3>
                                                    <p className="price-amount">
                                                        {service.price} <span className="currency">{service.currency}</span>
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
 
export default Prices;