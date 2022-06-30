import React from "react";
import headshot from '../images/Headshot.jpeg';


export default function About() {
    return (
        <div>
            <div>
                <h1 className="section-header">About Me</h1>
            </div>
            <div className="about-div">
            <img src={headshot} alt="Jay Ford" className="headshot"></img>
            <p className="about">
                My name is Jay, I'm a full-stack web developer with a strong focus on Javascript and its various libraries. My skills range from basic front end Javascript, CSS and HTML, to routing back end databases with Express.js and MySQL, and even creating responsive and 
                lightning fast applications with the full MERN stack.
                <br />
                I love the ever changing world of development, because it lets me learn new things all the time. Whether its as simple as a new keyboard shortcut or as expansive as a whole new library,
                learning new things is one of the most exciting parts of my day.
                <br />
                After completing the full-stack web development course at The Ohio State University, I am now looking to switch into a career that lets me put all my knowledge to good use.
            </p>
            <div>
                <h2 className="skillHeader">My Skills</h2>
            </div>
            <div className="skills-div">
                <div className="front">
                    <h3 className="center">Front-End</h3>
                    <ol>
                        <li className="center">HTML</li>
                        <li className="center">CSS</li>
                        <li className="center">Javascript</li>
                        <li className="center">Bootstrap</li>
                        <li className="center">Using REST APIs</li>
                        <li className="center">React.js</li>
                    </ol>
                </div>
                <div className="back">
                    <h3 className="center">Back-End</h3>
                    <ol>
                        <li className="center">Node.js</li>
                        <li className="center">Express.js</li>
                        <li className="center">MySQL and Sequelize.js</li>
                        <li className="center">MongoDB and Mongoose</li>
                        <li className="center">GraphQL</li>
                        <li className="center">Apollo Server</li>
                    </ol>
                </div>
                
            </div>
            </div>
            
        </div>
    )
}