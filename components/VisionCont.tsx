import '../styles/visioncont.scss'

const VisionCont = () => {
    return (
        <>
            <div className="visioncont">
                <div className="visioncont-wrapper">
                    <div className="visioncont-info-wrapper">
                        <div className="visioncont-textbox">
                            <div className="visioncont-textbox-wrapper">
                                <div className="service-box">
                                    <div className="title">
                                        <h3>Impactful Storytelling</h3>
                                    </div>
                                    <div className="line"></div>
                                    <p>Our goal is to create content that inspires action, sparks conversation, and drives results</p>
                                </div>
                                <div className="service-box">
                                    <div className="title">
                                        <h3>Collaboration & Partnership:</h3>
                                    </div>
                                    <div className="line"></div>
                                    <p>We work closely with brands to understand their vision and bring it to life with precision and care</p>
                                </div>
                                <div className="service-box">
                                    <div className="title">
                                        <h3>Excellence & Integrity</h3>
                                    </div>
                                    <div className="line"></div>
                                    <p>Every piece of media we produce reflects our commitment to quality, professionalism, and ethical storytelling</p>
                                </div>


                                {/* <h3><span>Creativity with Purpose:</span> We strive to craft media that not only looks stunning but also tells a meaningful story</h3>
                                <h3><span>Audience Connection:</span> Every project is designed to engage and emotionally connect with the right audience</h3>
                                <h3><span>Innovation & Growth:</span> We embrace new tools, techniques, and ideas to stay ahead in the ever-evolving media landscape</h3> */}
                            </div>
                        </div>
                        <div className="visioncont-imgbox">
                            <img src="./sarkhy.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default VisionCont;