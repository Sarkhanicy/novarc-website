"use client";
import '../styles/contact.scss';
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {motion} from 'framer-motion';


const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        (e.target as HTMLFormElement).reset(); // Clear form
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setLoading(false);
      });
    };
  
    return (
        <>
            <div id='contact' className="contact">
                <div className="contact-wrapper">
                    <div className="contact-title">
                        <h1>Ready to bring your vision to life? Get in touch.</h1>
                        <div className="line"></div>
                        <p>Average Response Time: 1hr</p>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input name="name" placeholder="Name" required  />
                            <input name="email" type="email" placeholder="Email" required  />
                            <input name="phone" type="tel" placeholder="Phone"  />
                            <textarea name="message" placeholder="Message" required />
                            <motion.button 
                                whileHover={{color:"#000", backgroundColor:"#fff"}}
                                type="submit" disabled={loading}
                            >
                            {loading ? "Sending..." : "Send Message"}
                            </motion.button>
                            {sent &&  <p>Message sent successfully ✔</p>}
                        </form>
                    </div>

                </div>
            </div>
      </>
    );
}
 
export default Contact;