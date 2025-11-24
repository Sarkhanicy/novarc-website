import '../styles/footer.scss';


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-wrapper">
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
                            <p>info@novarcmedia.com</p>
                            <p>+48 571 517 075</p>
                            <p>+48 571 500 895</p>
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
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Service</a>
                        </div>
                        <div className="socials">
                            <a href="">Instagram</a>
                            <a href="">LinkedIn</a>
                            <a href="">TikTok</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;