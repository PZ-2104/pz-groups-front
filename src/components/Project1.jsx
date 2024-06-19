import React, {useEffect} from "react";
import ProjectImage from "../assets/project_img_page.png";
import BackArrow from "../assets/back_arrow.png"
import "../styles/project.css";
import { Link } from "react-router-dom";
import {useAtomValue} from "jotai";
import {localesAtom} from "../store/locales.js";
import localesData from "../../locales.json";

function Project1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const locale = useAtomValue(localesAtom)
    const texts = localesData[locale];


    return (
        <div className="project-page">
            <div className="header-container">
                <div className="back-button">
                    <Link to="/">
                        <img src={BackArrow} alt="BackArrow"/>
                    </Link>
                </div>
                <div className="project-header">
                    <h1>{texts.expensesTrackerApp}<span>.</span></h1>
                    <p>{texts.sloganProject}</p>
                </div>
            </div>
            <div className="project-content">
                <h1>{texts.appStory}<span>.</span></h1>
                <p>{texts.appDesc1}</p>
                <p>{texts.appDesc2}</p>
            </div>
            <div className="project-image">
                <img src={ProjectImage} alt="Project 1"/>
            </div>
            <div className="project-features">
                <h2>{texts.keyFeatures}<span>.</span></h2>
                <ul>
                    <li>{texts.appFeat}</li>
                    <li>{texts.appFeat}</li>
                    <li>{texts.appFeat}</li>
                    <li>{texts.appFeat}</li>
                    <li>{texts.appFeat}</li>
                    <li>{texts.appFeat}</li>
                </ul>
            </div>
        </div>
    );
}

export default Project1;
