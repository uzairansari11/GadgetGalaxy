import React from "react";
import Style from "./Style.css";
import {
    BsInstagram,
    BsYoutube,
    BsFacebook,
    BsTwitter,
    BsPinterest,
} from "react-icons/bs";

const Footer = () => {
    return (
        <div className="foot_main">
            <div className="foot_one">
                <h3>
                    GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS &amp; SURPRISE
                    TREATS
                </h3>
                <input type="email" id="" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
            <div className="foot_two">
                <h3>FEATURED IN</h3>
                <img
                    src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1"
                    alt=""
                />
            </div>
            <div className="foot_three">
                <h3>HONEST REVIEWS. NOTHING ELSE.</h3>
                <img
                    src="https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1"
                    alt=""
                />
            </div>
            <div className="foot_four">
                <div className="four_one">
                    <div>
                        <img
                            style={{
                                marginRight: "20px",
                                // width: "40px",
                                height: "40px",
                            }}
                            src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
                            alt="quick-delivery.svg"
                        />
                        <span className="conformance-text">Quick Delivery</span>
                    </div>

                    <div>
                        <img
                            style={{
                                marginRight: "20px",
                                // width: "40px",
                                height: "40px",
                            }}
                            src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
                            alt="easy-returns.svg"
                        />
                        <span className="conformance-text">Easy Returns</span>
                    </div>

                    <div>
                        <img
                            style={{
                                marginRight: "20px",
                                // width: "40px",
                                height: "40px",
                            }}
                            src="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
                            alt="quality-assured.svg"
                        />
                        <span className="conformance-text">
                            Quality Assured
                        </span>
                    </div>
                </div>
            </div>
            <div className="foot_five">
                <div className="five_one">
                    <div>
                        <h4>Know US</h4>
                        <ul className="footer_ul">
                            <li>About DailyObjects</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Helpdesk</h4>
                        <ul className="footer_ul">
                            <li>Terms Of Use</li>
                            <li>Warranty Policy</li>
                            <li>Shipping Policy</li>
                            <li>Cancellation Policy</li>
                            <li>Return and Exchange Policy</li>
                            <li>Privacy & Security Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Network</h4>
                        <ul className="footer_ul">
                            <li>Contact Us</li>
                            <li>Corporate Gifting</li>
                        </ul>
                    </div>
                </div>
                <div className="five_two">
                    <div className="social">
                        <h3>FOLLOW US ON</h3>
                        <div className="five_icon">
                            <div>
                                <BsInstagram style={{ fontSize: "20px" }} />
                            </div>
                            <div>
                                <BsFacebook style={{ fontSize: "20px" }} />
                            </div>
                            <div>
                                <BsYoutube style={{ fontSize: "20px" }} />
                            </div>
                            <div>
                                <BsTwitter style={{ fontSize: "20px" }} />
                            </div>

                            <div>
                                <BsPinterest style={{ fontSize: "20px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="five_three">
                        <h3>Download our app</h3>
                        <div className="ads">
                            <img
                                style={{ cursor: "pointer" }}
                                src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"
                                alt=""
                            />
                            <img
                                style={{ cursor: "pointer" }}
                                src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot_six">
                <h4>100% SECURE PAYMENT</h4>
                <div className="pay_img">
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                    <img
                        src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,dpr-1"
                        alt=""
                    />
                </div>
            </div>
            <div className="foot_seven">
                <div className="seven_one">
                    <h4>Gifts</h4>
                </div>
                <div className="seven_two">
                    <h5>Gifts by Occasions</h5>
                    <div>
                        <p>Propose Day Gifts</p>
                        <p>Valentine Day Gifts</p>
                        <p>Doctors Day Gifts</p>
                        <p>Christmas Gifts</p>
                        <p>New Year Gifts</p>
                    </div>
                </div>
                <div className="seven_two">
                    <h5>Gifts by Relationships</h5>
                    <div>
                        <p>Gifts for Men</p>
                        <p>Gifts for Her</p>
                        <p>Gifts for Parents</p>
                        <p>Gifts for Boyfriend</p>
                        <p>Gifts for Girlfriend</p>
                    </div>
                </div>
                <div className="seven_two">
                    <h5>Gifts by Persona</h5>
                    <div>
                        <p>Gifts for Anime Lover</p>
                        <p>Gifts for Coffee Lover</p>
                        <p>Gifts for Car Lover</p>
                        <p>Gifts for Cricket Lover</p>
                        <p>Gifts for iPhone Lover</p>
                    </div>
                </div>
                <div className="seven_two">
                    <h5>Gifts by Budget</h5>
                    <div>
                        <p>Gifts under 500</p>
                        <p>Gifts under 1000</p>
                        <p>Gifts under 2000</p>
                        <p>Gifts under 3000</p>
                        <p>Gifts under 4000</p>
                    </div>
                </div>
            </div>
            <div className="foot_eight">
                <h4>© 2012 - 2023 Firki Wholesale Pvt.Ltd</h4>
            </div>
        </div>
    );
};

export default Footer;
