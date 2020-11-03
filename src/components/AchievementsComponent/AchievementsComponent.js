import React from "react";
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import SingleAchievement from "./SingleAchievementComponent/SingleAchievement";
import HeaderTitle from "../HeaderComponents/HeaderTitle";

import "./Achievements.css";

const achievements = (props) => {
    return(
        <React.Fragment>    
            <div className="achievementsCont">
                <HeaderTitle heading="ACHIEVEMENTS" />
                <Breadcrumb>
                    <BreadcrumbItem title="Home" path="/" />
                    <BreadcrumbItem title="Achievements" status="active" />
                </Breadcrumb>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <SingleAchievement path="./assets/images/achievements/eogsea.jpeg">
                                It is a matter of pride and honor that one of the team
                                members of TechnoHub competed in the Global Student
                                Entrepreneurship Award (GSEA) with well-known
                                entrepreneurs and won the cash prize worth Rs.1 Lakh. The
                                winning members moved forward to the regionals which was
                                held at Coimbatore.
                            </SingleAchievement>
                        </div>
                        <div className="col-md-6">
                            <SingleAchievement path="./assets/images/achievements/EyantraBhupesh.jpg">
                                Seriate to the event was EYANTRA which is an initiative to
                                spread education in Embedded systems and Robotics by IIT
                                Bombay sponsored by Ministry of Human Resource
                                Development through the National Mission on Education
                                through ICT (NMEICT). And it gives us immense pleasure
                                and exaltation that more than 30+ teams registered for
                                EYANTRA after promotions were done by TechnoHub in our
                                institute. This year a team from TechnoHub managed
                                successfully cracking ahead into the semis and showcases
                                their project.
                            </SingleAchievement>
                        </div>
                        <div className="col-md-6">
                            <SingleAchievement path="./assets/images/achievements/Drone.jpg">
                                Aerial Painting Drone is one of the major projects in which
                                few of the most talented and hardworking TechnoHub
                                members are working. It is all about a simple drone which is
                                capable of painting at any surface. It works on the simple
                                principles of drone. And this drone was funded worth
                                Rs.30,000 by the university. Seeing upon the progress, the
                                university will fund more up to Rs.50,000.
                            </SingleAchievement>
                        </div>
                        <div className="col-md-6">
                            <SingleAchievement path="./assets/images/achievements/KuldeepMIT.jpg">
                                One of our member Kuldeep Patel of 5th Semester from Electrical 
                                and Electronics Department has won the MIT COVID-19 Challenge .
                                Which is a hackathon organised by MIT,Massachusetts.
                            </SingleAchievement>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default achievements;