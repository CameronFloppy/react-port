import React from "react";
import ghubmark from "../../images/githubsmall.png";
import twtmark from "../../images/twittersmall.png"
import inmark from "../../images/LI-In-Bug.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footlinks">
                <a href="https://github.com/jayford45" target="_blank" rel="noreferrer"><img src={ghubmark} alt="" className="footlogo" /></a>
                <a href="https://www.linkedin.com/in/jay-ford-580a02225/" target="_blank" rel="noreferrer"><img src={inmark} alt="" className="footlogo"></img></a>
                <a href="https://twitter.com/jayforddev" target="_blank" rel="noreferrer" className="resume-link"><img src={twtmark} alt="" className="footlogo"></img></a>
            </div>
            <div className="footcopy">&copy;2022 by Jay Ford</div>
        </footer>
    )
}