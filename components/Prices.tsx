import '../styles/prices.scss'

const Prices = () => {
    return ( 
        <>
            <div id='pricing' className="prices">
                <div className="prices-wrapper">
                    <div className="prices-title">
                        <h1>Our Pricing</h1>
                        <div className="line"></div>
                        <p>Transparent rates. Real value.</p>
                    </div>
                    <div className="pricebox-container">
                        <div className="pricebox">
                            <div className="pricebox-header">
                                <h1>Service Type</h1>
                            </div>
                            <div className="pricebox-details">
                                <p>1. Short Ad / Promo video <br/>(30-90 sec)</p>
                            </div>
                            <div className="pricebox-details">
                                <p>2. Medium-Length Brand Video <br />
                                (2–5 min)</p>
                            </div>
                            <div className="pricebox-details">
                                <p>3. Corporate / Commercial Film <br />
                                (5–10 min)</p>
                            </div>
                            <div className="pricebox-details">
                                <p>4. Motion Graphic / Animated Video <br />
                                (30-90 sec)</p>
                            </div>
                            <div className="last-detail">
                                <p>5. Drone Shoot <br /> (separate order)</p>
                            </div>
                        </div>
                        <div className="pricebox">
                            <div className="pricebox-header">
                            <h1>Work Time</h1>
                            </div>
                            <div className="pricebox-details">
                                <p>1. 2 Shooting Days <br />
                                20-25 Hours of Post Production</p>                            </div>
                            <div className="pricebox-details">
                                <p>2. 3–4 Shooting Days <br /> 40+ Hours of Post-Production</p>
                            </div>
                            <div className="pricebox-details">
                                <p>3. +5 Shooting Days <br /> 60–80 Hours of Post-Production</p>
                            </div>
                            <div className="pricebox-details">
                                <p>4. 40–60 Hours of Work</p>
                            </div>
                            <div className="last-detail">
                                <p>5. 1-2 Shooting Day <br /> 12–24 Hours of Post-Production</p>
                            </div>
                        </div>
                        <div className="pricebox">
                            <div className="pricebox-header">
                            <h1>Final Price</h1>
                            </div>
                            <div className="pricebox-details">
                                <p>1. 2,500 - 5,000PLN</p>
                            </div>
                            <div className="pricebox-details">
                                <p>2. 4,000 - 6,000PLN</p>
                            </div>
                            <div className="pricebox-details">
                                <p>3. 10,000 - 15,000PLN</p>
                            </div>
                            <div className="pricebox-details">
                                <p>4. 2,000 - 5,000PLN</p>
                            </div>
                            <div className="last-detail">
                                <p>5. 2,000-  3,000PLN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Prices;