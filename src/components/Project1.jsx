import React, {useEffect} from "react";
import ProjectImage from "../assets/project_img_page.png";
import BackArrow from "../assets/back_arrow.png"
import "../styles/project.css";
import { Link } from "react-router-dom";

function Project1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-page">
            <div className="header-container">
                <div className="back-button">
                    <Link to="/">
                        <img src={BackArrow} alt="BackArrow"/>
                    </Link>
                </div>
                <div className="project-header">
                    <h1>Expenses Tracker App<span>.</span></h1>
                    <p>App makes ur life easier</p>
                </div>
            </div>
            <div className="project-content">
                <h1>The story of app<span>.</span></h1>
                <p>
                    Think of all the apps you've downloaded to complete daily tasks and achieve simple goals.
                    Now think of a single app that fulfills those needs—this project does. No matter where you are
                    or what you're doing, you can connect to providers in your area to get anything you need—from
                    a cab, to a plumber, to a store with the item you want.
                </p>
                <p>
                    Until now, users needed to have at least four or five different applications installed, or it was
                    just impossible for them. Customer offers the delivery of food and products from shops, restaurants,
                    markets, etc., as well as a wide catalogue of services from different specialists: hairdressers,
                    makeup
                    designers, photographers, gardeners, plumbers, etc.
                </p>
            </div>
            <div className="project-image">
                <img src={ProjectImage} alt="Project 1"/>
            </div>
            <div className="project-features">
                <h2>Key features<span>.</span></h2>
                <ul>
                    <li>This feature goes to this</li>
                    <li>This feature goes to this</li>
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
