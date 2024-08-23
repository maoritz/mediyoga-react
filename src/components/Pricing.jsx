

function Pricing() {
  return (
    <section className="pricing-section js--pricing-section">
    <h4 className="pricing-headings-queries">Pricing</h4>
    <h2 className="pricing-headings-queries">Our Pricing Plans</h2>
    <div className="pricing-container">
        <div className="plans-boxes">
            <h4>Pricing</h4>
            <h2>Our Pricing Plans</h2>
            <div>
                <div className="price-box-container">
                    <div className="plan-icon">
                    <div className="i-icon">
                      <ion-icon name="reorder-two-outline" ></ion-icon>
                    </div>
                    </div>
                    <div className="plan-type">
                        <h5>Standard</h5>
                        <div className="plan-advantages">
                            <div className="plan-advantage">
                                <div className="checkmark-container">
                                   <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <span>Pay as you go</span>
                            </div>
                            <div className="plan-advantage">
                                <div className="checkmark-container">
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <span>Perfect for non-residence</span>
                            </div>
                        </div>
                    </div>
                    <div className="enroll-plan">
                        <div className="price-per-week">
                            <span className="price">$30</span><span className="per-week">/per week</span>
                        </div>
                        <div className="enroll-now">
                            <a href="#" className="btn">Enroll Now</a>
                        </div>
                    </div>
                </div>
                <div className="price-box-container">
                    <div className="plan-icon">
                        <div className="i-icon">
                            <ion-icon name="reorder-three-outline" className="i-icon"></ion-icon>
                        </div>
                    </div>
                    <div className="plan-type">
                        <h5>Professional</h5>
                        <div className="plan-advantages">
                            <div className="plan-advantage">
                                <div className="checkmark-container">
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <span>Short-term commitment</span>
                            </div>
                            <div className="plan-advantage">
                                <div className="checkmark-container">
                                   <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <span>Online yoga for $5/month</span>
                            </div>
                        </div>
                    </div>
                    <div className="enroll-plan">
                        <div className="price-per-week">
                            <span className="price">$120</span><span className="per-week">/per week</span>
                        </div>
                        <div className="enroll-now">
                            <a href="#" className="btn">Enroll Now</a>
                        </div>
                    </div>
                </div>
                <div className="price-box-container">
                    <div className="plan-icon">
                        <div className="i-icon">
                           <ion-icon name="reorder-four-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="plan-type">
                        <h5>Private</h5>
                        <div className="plan-advantages">
                            <div className="plan-advantage">
                                <div className="checkmark-container">
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <span>Long-term commitment</span>
                            </div>
                            <div className="plan-advantage">
                                <div className="checkmark-container">
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <span>Online yoga for free</span>
                            </div>
                        </div>
                    </div>
                    <div className="enroll-plan">
                        <div className="price-per-week">
                            <span className="price">$250</span><span className="per-week">/per week</span>
                        </div>
                        <div className="enroll-now">
                            <a href="#" className="btn">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Pricing