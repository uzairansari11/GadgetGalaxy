import React from "react";
import "./navigatetoTop.css";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

const NavigatetoTop = () => {
    return (
        <div>
            <Link to={"navbar"} smooth duration={1500}>
                <div id="up">
                    <BsArrowUp />
                </div>
            </Link>
        </div>
    );
};

export default NavigatetoTop;
