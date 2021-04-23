import React from "react";
import IconLink from "../buttons/IconLink";
import Github from "../../res/footer-github.png";
import YouTube from "../../res/footer-youtube.png";

const Footer = () => {
    return (
        <div className="footer">
            <span>
                Developed by Team Piggy Bank © 2021
            </span>
            <IconLink
                href={"https://github.com/shiru99/piggybank"}
                icon={Github}
                title="Github"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
            />
            <IconLink
                href={"https://youtube.com/channel/UC4laQXFW5Ivx2XcyMb_gmUw"}
                icon={YouTube}
                title="YouTube"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
            />
        </div>
    );
};

export default Footer;