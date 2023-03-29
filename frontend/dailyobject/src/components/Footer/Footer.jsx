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
                        <ul>
                            <li>About DailyObjects</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Helpdesk</h4>
                        <ul>
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
                        <ul>
                            <li>Contact Us</li>
                            <li>Corporate Gifting</li>
                        </ul>
                    </div>
                </div>
                <div className="five_two">
                    <h3>FOLLOW US ON</h3>
                    <div className="five_icon">
                        <div>
                            <BsInstagram style={{ fontSize: "35px" }} />
                        </div>
                        <div>
                            <BsFacebook style={{ fontSize: "35px" }} />
                        </div>
                        <div>
                            <BsYoutube style={{ fontSize: "35px" }} />
                        </div>
                        <div>
                            <BsTwitter style={{ fontSize: "35px" }} />
                        </div>

                        <div>
                            <BsPinterest style={{ fontSize: "35px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
