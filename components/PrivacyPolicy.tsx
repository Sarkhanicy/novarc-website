"use client";

import {motion, AnimatePresence} from 'framer-motion';
import '../styles/policy-modal.scss';

interface PrivacyPolicyProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicy = ({ isOpen, onClose }: PrivacyPolicyProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="modal-header">
                            <h1>Privacy Policy</h1>
                            <button className="close-button" onClick={onClose}>
                                ✕
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="policy-section">
                                <h2>1. Information We Collect</h2>
                                <p>We collect information that you provide directly to us, including:</p>
                                <ul>
                                    <li>Name and contact information (email, phone number)</li>
                                    <li>Company name (if provided)</li>
                                    <li>Message content and project details</li>
                                    <li>Call scheduling preferences (if requested)</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>2. How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul>
                                    <li>Respond to your inquiries and provide our services</li>
                                    <li>Schedule and conduct calls as requested</li>
                                    <li>Send you updates about our services (with your consent)</li>
                                    <li>Improve our website and services</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>3. Data Protection</h2>
                                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                            </div>

                            <div className="policy-section">
                                <h2>4. Data Retention</h2>
                                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
                            </div>

                            <div className="policy-section">
                                <h2>5. Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access your personal information</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Object to processing of your personal information</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>6. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                                <p><strong>Email:</strong> info@novarcmedia.com</p>
                                <p><strong>Phone:</strong> +48 571 517 075</p>
                                <p><strong>Phone:</strong> +48 571 500 895</p>
                            </div>

                            <div className="policy-section">
                                <p className="last-updated">Last updated: January 2025</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PrivacyPolicy;

