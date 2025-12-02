import '../styles/targetedads.scss';

const TargetedAds = () => {
    return (
        <>
            <div id='targetedads' className="targetads">
                <div className="targetads-wrapper">
                    <div className="targetads-title">
                        <h1>Targeted Ads Management</h1>
                        <div className="line"></div>
                        <p>Strategic ad management designed to convert attention into action</p>
                    </div>
                    <div className="targetads-infobox">
                        <div className="targetads-iconbox">
                            <div className="targetads-icons">
                                <img id="insta" src="./instagram.svg" alt="" />
                                <img id="tiktok" src="./tiktok.svg" alt="" />
                            </div>
                            <div className="targetads-icons">
                                <img id="linkedin" src="./linkedin.svg" alt="" />
                                <img id="google" src="./google.svg" alt="" />
                            </div>
                        </div>

                        <div className="targetads-detailswrapper">
                            <div className="targetads-details-container">
                                <div className="targetads-details">

                                    <div className="targetads-detailbox">
                                        <div className="details-title">
                                            <h1>Instagram Ads Management</h1>
                                            <p>2,500 PLN / month</p>
                                        </div>
                                        <div className="details-info">
                                            <p>Ad strategy & audience targeting</p>
                                            <p>Creative visual & caption optimization</p>
                                            <p>Weekly performance monitoring</p>
                                            <p>Basic campaign optimization</p>
                                            <p>Report at the end of the month</p>
                                        </div>
                                    </div>
                                    <div className="targetads-detailbox">
                                        <div className="details-title">
                                            <h1>TikTok Ads Management</h1>
                                            <p>2,700 PLN / month</p>
                                        </div>
                                        <div className="details-info">
                                            <p>Trend-based content strategy</p>
                                            <p>Targeting & hashtag research</p>
                                            <p>Ad setup + ongoing optimization</p>
                                            <p>Weekly analytics check</p>
                                            <p>End-of-month performance report</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="targetads-details2">

                                    <div className="targetads-detailbox">
                                        <div className="details-title">
                                            <h1>LinkedIn Ads Management</h1>
                                            <p>3,200 PLN / month</p>
                                        </div>
                                        <div className="details-info">
                                            <p>Professional audience targeting</p>
                                            <p>Ad copy & creative preparation</p>
                                            <p>Lead generation campaigns</p>
                                            <p>Weekly performance tracking</p>
                                            <p>Monthly insights & suggestions</p>
                                        </div>
                                    </div>
                                    <div className="targetads-detailbox">
                                        <div className="details-title">
                                            <h1>Google Ads Management</h1>
                                            <p>3,500 PLN / month</p>
                                        </div>
                                        <div className="details-info">
                                            <p>Keyword research and setup</p>
                                            <p>Search + Display ads</p>
                                            <p>Ad optimization (CPC/CTR/ROAS)</p>
                                            <p>Weekly analytics review</p>
                                            <p>Monthly performance report</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default TargetedAds;