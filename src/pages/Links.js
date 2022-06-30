import React from "react";

import linkedin from "../images/LI-Logo.png";
import github from "../images/GitHub_Logo.png";
import twitter from "../images/2021 Twitter logo - blue.png"


export default function Links() {
    return (
        <div>
            <div>
                <h1 className="section-header">My Links</h1>
            </div>
            <div>
                <div className="center link-div">
                    <a href="https://github.com/jayford45" target="_blank" rel="noreferrer"><img src={github} alt="" className="link-logo" /></a>
                </div>
                <div className="center link-div">
                    <a href="https://www.linkedin.com/in/jay-ford-580a02225/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" className="link-logo"></img></a>
                </div>
                <div className="center link-div">
                    <a href="https://twitter.com/jayforddev" target="_blank" rel="noreferrer" className="resume-link"><img src={twitter} alt="" className="link-logo"></img></a>
                </div>
                <div className="center link-div">
                    <a href="https://drive.google.com/file/d/120uLLEZg2VTOzJH7fuZMEVbZhHN_UBlL/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-link"><h2>My Resume</h2></a>
                </div>
            </div>
        </div>
    )
}