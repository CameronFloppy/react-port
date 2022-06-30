import React from "react";
import deepthoughts from "../images/DeepThoughtsSS.png";
import fitdish from "../images/FitdishSS.png"
import foodly from "../images/FoodlySS.png"
import social from "../images/SocialSS.png"
import github from "../images/GitHub_Logo.png"


export default function Works() {
    return (
        <div>
            <div>
                <h1 className="section-header">My Work</h1>
            </div>
            <div className="works-div">
                <div className="work">
                    <h2 className="work-header">MERN Stack</h2>
                    <div className="center">
                        <a href="https://thawing-crag-63557.herokuapp.com/" target="_blank" rel="noreferrer"><img src={deepthoughts} alt="Screenshot of a project" className="works-img"></img></a>
                    </div>
                    <br />
                    <p className="blurb">This project uses the full MERN stack to create a "social media" site. You can click on the  screenshot to go to the deployed application, or click below to go to the GitHub repo.</p>
                    <div className="center">
                        <a href="https://github.com/jayford45/deep-thoughts" target="_blank" rel="noreferrer"><img src={github} className="github" alt=""></img></a>
                    </div>
                </div>
                <div className="work">
                    <h2 className="work-header">Handlebars.js</h2>
                    <div className="center">
                        <a href="https://foodly2022.herokuapp.com/" target="_blank" rel="noreferrer"><img src={foodly} alt="Screenshot of a project" className="works-img"></img></a>
                    </div>
                    <br />
                    <p className="blurb"> This was a group project to create a full stack application that used Handlebars.js with an Express.js back-end and   MySQL for the database. 
                    You can click on the screenshot to go to the deployed application, or click below to go to the GitHub repo. </p>
                    <div className="center">
                        <a href="https://github.com/bonomichael98/foodly2022" target="_blank" rel="noreferrer"><img src={github} className="github" alt=""></img></a>
                    </div>
                </div>
                <div className="work">
                    <h2 className="work-header">Web APIs</h2>
                    <div className="center">
                        <a href="https://jayford45.github.io/fit-dish/" target="_blank" rel="noreferrer"><img src={fitdish} alt="Screenshot of a project" className="works-img"></img></a>
                    </div>
                    <br />
                    <p className="blurb">This was also a group project that asked us to design an interactive front-end and use a 3rd party API to populate our data. You can click on the screenshot to go to the deployed application,
                    or click below to go to the GitHub repo.</p>
                    <div className="center">
                        <a href="https://github.com/jayford45/fit-dish" target="_blank" rel="noreferrer"><img src={github} className="github" alt=""></img></a>
                    </div>
                </div>
                <div className="work">
                    <h2 className="work-header">MongoDB</h2>
                    <div className="center">
                        <a href="https://drive.google.com/file/d/1tNa-M2eSxuPd-CzS_tpOyjAQW8vAaU_9/view" target="_blank" rel="noreferrer"><img src={social} alt="Screen shot of code editor for a project" className="works-img"></img></a>
                    </div>
                    <br />
                    <p className="blurb">This project was to designn a backend API for a theoretical social media site using MongoDB and Mongoose ODM. You can click on the screenshot to view a video showing the
                     application endpoints working in Insomnia, or click below to visit the GitHub Repo.</p>
                    <div className="center">
                        <a href="https://github.com/jayford45/social-api" target="_blank" rel="noreferrer"><img src={github} className="github" alt=""></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}