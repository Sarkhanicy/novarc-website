"use client";

import {motion, AnimatePresence} from 'framer-motion';
import '../styles/policy-modal.scss';

interface TermsOfServiceProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: TermsOfServiceProps) => {
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
                            <h1>Terms of Service</h1>
                            <button className="close-button" onClick={onClose}>
                                ✕
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="policy-section">
                                <h2>1. Acceptance of Terms</h2>
                                <p>By accessing and using NOVARC Media's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                            </div>

                            <div className="policy-section">
                                <h2>2. Services</h2>
                                <p>NOVARC Media provides the following services:</p>
                                <ul>
                                    <li>Script Writing & Storytelling</li>
                                    <li>Filmmaking & Cinematic Production</li>
                                    <li>Professional Editing & Animations</li>
                                    <li>Targeted Ads Management</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>3. Payment Terms</h2>
                                <p>Payment terms will be agreed upon in writing before the commencement of any project. All prices are in PLN unless otherwise specified.</p>
                            </div>

                            <div className="policy-section">
                                <h2>4. Intellectual Property</h2>
                                <p>Upon full payment, clients receive usage rights to the delivered content as specified in the project agreement. NOVARC Media retains the right to use completed projects for portfolio and promotional purposes unless otherwise agreed.</p>
                            </div>

                            <div className="policy-section">
                                <h2>5. Project Timeline</h2>
                                <p>Project timelines are estimates and may vary based on project complexity, client feedback cycles, and other factors. We will communicate any significant delays promptly.</p>
                            </div>

                            <div className="policy-section">
                                <h2>6. Revisions</h2>
                                <p>Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions may incur extra charges.</p>
                            </div>

                            <div className="policy-section">
                                <h2>7. Cancellation Policy</h2>
                                <p>If a project is cancelled after work has begun, payment is due for all work completed up to the cancellation date. A cancellation fee may apply as specified in the project agreement.</p>
                            </div>

                            <div className="policy-section">
                                <h2>8. Limitation of Liability</h2>
                                <p>NOVARC Media's liability is limited to the total project fee. We are not liable for indirect, incidental, or consequential damages.</p>
                            </div>

                            <div className="policy-section">
                                <h2>9. Contact Information</h2>
                                <p>For questions about these Terms of Service, please contact us:</p>
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

export default TermsOfService;

