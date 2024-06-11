import React from "react";
import FacultyIcon from "../assets/faculty_icon.png";
import TeamPhoto1 from "../assets/team_photo_1.png";
import TeamPhoto2 from "../assets/team_photo_2.png";
import TeamPhoto3 from "../assets/team_photo_3.png";
import ProjectImage from "../assets/project_image.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="header">
                <div className="header-content">
                    <div className="faculty-info">
                        <img src={FacultyIcon} alt="Faculty Icon" height="50px" />
                        <p>Faculty of Information Technologies and Systems</p>
                    </div>
                    <div className="actions">
                        <div className="gallery">
                            <p>Gallery</p>
                        </div>
                        <div className="dropdown">
                            <label>
                                <select>
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
                    <h2>Hello, this is the site of PZ-2104</h2>
                </div>
                <p className="description">
                    Our group of students at the university is characterized by a high level of enthusiasm and commitment to achieving high results in the field of information technology. We not only learn, but also actively apply our knowledge to create innovative solutions that contribute to the development of the university environment and enrich the learning experience.
                </p>
            </div>

            <div className="about-team">
                <h2 className="our-team">Our Team<span>.</span></h2>
                <p className="team-slogan">It's a team because our work is play.</p>
                <div className="text-photo">
                    <div className="text-photo-1">
                        <div className="team-text-1">
                            <p>
                                We support each other, we love what we do, and we’re really good at it. That’s why we’ve been able to attract the best people in UX/UI design, motion graphics, mobile tech, project management, and quality assurance. It’s also why the size of our team doubles every two years. But it’s not summer camp. Our staff are professionals who can and often do work closely with our clients’ own developers. Delivering on time and on spec is just a matter of course.
                            </p>
                        </div>
                        <div className="team-photo-1">
                            <img src={TeamPhoto1} alt="Team Photo 1" />
                        </div>
                    </div>
                    <div className="text-photo-2">
                        <div className="team-text-2">
                            <p>
                                We support each other, we love what we do, and we’re really good at it. That’s why we’ve been able to attract the best people in UX/UI design, motion graphics, mobile tech, project management, and quality assurance. It’s also why the size of our team doubles every two years. But it’s not summer camp. Our staff are professionals who can and often do work closely with our clients’ own developers. Delivering on time and on spec is just a matter of course.
                            </p>
                        </div>
                        <div className="team-photo-2">
                            <img src={TeamPhoto2} alt="Team Photo 2" />
                        </div>
                    </div>
                    <div className="text-photo-3">
                        <div className="team-text-3">
                            <p>
                                We support each other, we love what we do, and we’re really good at it. That’s why we’ve been able to attract the best people in UX/UI design, motion graphics, mobile tech, project management, and quality assurance. It’s also why the size of our team doubles every two years. But it’s not summer camp. Our staff are professionals who can and often do work closely with our clients’ own developers. Delivering on time and on spec is just a matter of course.
                            </p>
                        </div>
                        <div className="team-photo-3">
                            <img src={TeamPhoto3} alt="Team Photo 3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-projects">
                <h2><span>Our</span> Projects</h2>
                <div className="project-cards">
                    <div className="project-card-1">
                        <Link to="/project1">
                            <img src={ProjectImage} alt="Project" />
                            <h3>Expenses Tracker</h3>
                            <p>Finance, Tracker, Money</p>
                        </Link>
                    </div>
                    <div className="project-card-2">
                        <Link to="/project2">
                            <img src={ProjectImage} alt="Project" />
                            <h3>Expenses Tracker</h3>
                            <p>Finance, Tracker, Money</p>
                        </Link>
                    </div>
                    <div className="project-card-3">
                        <Link to="/project3">
                            <img src={ProjectImage} alt="Project" />
                            <h3>Expenses Tracker</h3>
                            <p>Finance, Tracker, Money</p>
                        </Link>
                    </div>
                    <div className="project-card-4">
                        <Link to="/project4">
                            <img src={ProjectImage} alt="Project" />
                            <h3>Expenses Tracker</h3>
                            <p>Finance, Tracker, Money</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;