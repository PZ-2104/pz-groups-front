import React from "react";
import FacultyIcon from "../assets/faculty_icon.png";
import TeamPhoto1 from "../assets/team_photo_1.png";
import TeamPhoto2 from "../assets/team_photo_2.png";
import TeamPhoto3 from "../assets/team_photo_3.png";
import ProjectImage from "../assets/project_image.png";
import { Link } from "react-router-dom";
import OurTeam from "../sections/OurTeam/OurTeam.jsx";
import { localesAtom } from "../store/locales.js";
import {useAtom} from "jotai";
import localesData from '../../locales.json';

function Home() {
    // const setLocales = useSetAtom(localesAtom);
    const [locale, setLocale] = useAtom(localesAtom)
    const texts = localesData[locale];

    const handleLocaleChange = (e) => {
        setLocale(e.target.value);
    };

    return (
        <div>
            <div className="header">
                <div className="header-content">
                    <div className="faculty-info">
                        <img src={FacultyIcon} alt="Faculty Icon" height="50px" />
                        <p>{texts.title}</p>
                    </div>
                    <div className="actions">
                        <div className="gallery">
                            <p>{texts.gallery}</p>
                        </div>
                        <div className="dropdown">
                            <label>
                                <select value={locale} onChange={handleLocaleChange}>
                                    <option value="en">EN</option>
                                    <option value="ua">UA</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-description">
                <div className="title">
                    <h2>{texts.greeting}</h2>
                </div>
                <p className="description">
                    {texts.description}
                </p>
            </div>

            <div className="about-team">
                <h2 className="our-team">{texts.ourTeam}<span>.</span></h2>
                <p className="team-slogan">{texts.slogan}</p>
                <div className="text-photo">
                    <div className="text-photo-1">
                        <div className="team-text-1">
                            <p>{texts.teamDesc1}</p>
                        </div>
                        <div className="team-photo-1">
                            <img src={TeamPhoto1} alt="Team Photo 1" />
                        </div>
                    </div>
                    <div className="text-photo-2">
                        <div className="team-text-2">
                            <p>{texts.teamDesc1}</p>
                        </div>
                        <div className="team-photo-2">
                            <img src={TeamPhoto2} alt="Team Photo 2" />
                        </div>
                    </div>
                    <div className="text-photo-3">
                        <div className="team-text-3">
                            <p>{texts.teamDesc1}</p>
                        </div>
                        <div className="team-photo-3">
                            <img src={TeamPhoto3} alt="Team Photo 3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-projects">
                <h2><span>{texts.our}</span> {texts.projects}</h2>
                <div className="project-cards">
                    <div className="project-card-1">
                        <Link to="/project1">
                            <img src={ProjectImage} alt="Project" />
                            <h3>{texts.expensesTracker}</h3>
                            <p>{texts.financeTrackerMoney}</p>
                        </Link>
                    </div>
                    <div className="project-card-2">
                        <Link to="/project2">
                            <img src={ProjectImage} alt="Project"/>
                            <h3>{texts.expensesTracker}</h3>
                            <p>{texts.financeTrackerMoney}</p>
                        </Link>
                    </div>
                    <div className="project-card-3">
                        <Link to="/project3">
                            <img src={ProjectImage} alt="Project"/>
                            <h3>{texts.expensesTracker}</h3>
                            <p>{texts.financeTrackerMoney}</p>
                        </Link>
                    </div>
                    <div className="project-card-4">
                        <Link to="/project4">
                            <img src={ProjectImage} alt="Project"/>
                            <h3>{texts.expensesTracker}</h3>
                            <p>{texts.financeTrackerMoney}</p>
                        </Link>
                    </div>
                </div>
            </div>
            <OurTeam/>
        </div>
    );
}

export default Home;
