import React from "react";
import headshot from '../Headshot.jpeg';


export default function About() {
    return (
        <div className="about-div">
            <img src={headshot} alt="Jay Ford" className="headshot"></img>
            <p className="about">
                My name is Jay Ford, I'm a full-stack web developer with a strong focus on Javascript and its various libraries. My skills range from basic front end Javascript, CSS and HTML, to routing back end databases Express.js and MySQL or MongoDB, and even creating responsive and 
                lightning fast applications with the full MERN stack.
                <br />
                I have a passion for learning and any day that I can learn something new is a good day. Whether it's as simple as a new keyboard shortcut or a whole new JS library, 
                and I love being able to use what I've learned in my current project and being able to share it with my teammates.
                <br />
                I am looking to shift my career into development with the skills I have learned through my bootcamp at The Ohio State University.
            </p>
            
        </div>
    )
}