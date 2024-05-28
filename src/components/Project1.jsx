import React from "react";
import ProjectImage from "../assets/project_image.png";
import "../styles/project.css";

function Project1() {
    return (
        <div className="project-page">
            <div className="project-header">
                <h1>Expenses Tracker App</h1>
                <p>App makes our life easier</p>
            </div>
            <div className="project-content">
                <h2>The story of app.</h2>
                <p>
                    Think of all the apps you've downloaded to complete daily tasks and achieve simple goals.
                    Now think of a single app that fulfills those needs—this project does. No matter where you are
                    or what you're doing, you can connect to providers in your area to get anything you need—from
                    a cab, to a plumber, to a store with the item you want.
                </p>
                <p>
                    Until now, users needed to have at least four or five different applications installed, or it was
                    just impossible for them. Customer offers the delivery of food and products from shops, restaurants,
                    markets, etc., as well as a wide catalogue of services from different specialists: hairdressers, makeup
                    designers, photographers, gardeners, plumbers, etc.
                </p>
            </div>
            <div className="project-image">
                <img src={ProjectImage} alt="Project 1" />
            </div>
            <div className="project-features">
                <h2>Key features.</h2>
                <ul>
                    <li>This feature goes to this</li>
                    <li>This feature goes to this</li>
                    <li>This feature goes to this</li>
                    <li>This feature goes to this</li>
                </ul>
            </div>
        </div>
    );
}

export default Project1;
