import '../styles/vision.scss'

const Vision = () => {
    return (
        <>
            <div className="vision">
                <div className="vision-wrapper">
                    <div className="vision-title">
                        <h1>What do we aim for?</h1>
                    </div>
                    <div className="vision-info-wrapper">
                        <div className="vision-imgbox">
                            <img src="./qusik.JPG" alt="" />
                        </div>
                        <div className="vision-textbox">
                            <div className="vision-textbox-wrapper">
                                <div className="service-box">
                                    <div className="title">
                                        <h3>Creativity with Purpose</h3>
                                    </div>
                                    <div className="line"></div>
                                    <p>We strive to craft media that not only looks stunning but also tells a meaningful story</p>
                                </div>
                                <div className="service-box">
                                    <div className="title">
                                        <h3>Audience Connection</h3>
                                    </div>
                                    <div className="line"></div>
                                    <p>Every project is designed to engage and emotionally connect with the right audience</p>
                                </div>
                                <div className="service-box">
                                    <div className="title">
                                        <h3>Innovation & Growth</h3>
                                    </div>
                                    <div className="line"></div>
                                    <p>We embrace new tools, techniques, and ideas to stay ahead in the ever-evolving media landscape</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Vision;