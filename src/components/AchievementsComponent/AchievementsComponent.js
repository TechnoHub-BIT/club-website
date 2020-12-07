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
                    <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                    <BreadcrumbItem icon="fas fa-award" title="Achievements" status="active" />
                </Breadcrumb>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/gsea.jpeg">
                                It is a matter of pride and honor that one of the team
                                members of TechnoHub competed in the Global Student
                                Entrepreneurship Award(GSEA) with well-known
                                entrepreneurs and won the cash prize worth Rs. 1 Lakh. The
                                winning members moved forward to the regionals which was
                                held at Coimbatore.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/e-yantra.jpg">
                                Seriate to the event was EYANTRA which is an initiative to
                                spread education in Embedded systems and Robotics by IIT
                                Bombay sponsored by Ministry of Human Resource
                                Development through the National Mission on Education
                                through ICT(NMEICT) and it gives us immense pleasure
                                and exaltation that more than 30+ teams registered for
                                EYANTRA after promotions were done by TechnoHub in our
                                institute. This year a team from TechnoHub managed
                                successfully cracking ahead into the semis and showcase
                                their project.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/Drone.jpg">
                                Aerial Painting Drone is one of the major projects in which
                                few of the most talented and hardworking TechnoHub
                                members are working. It is all about a simple drone which is
                                capable of painting at any surface. It works on the simple
                                principles of drone and this drone was funded worth
                                Rs. 30,000 by the university. Seeing upon the progress, the
                                university will fund more upto Rs. 50,000.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/kuldeep-mit.jpg">
                                One of our members, Kuldeep Patel of 5th Semester from Electronics 
                                and Telecommunications Department, has won the MIT COVID-19 Challenge,
                                which is a hackathon organised by MIT, Massachusetts.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/hult-prize-january.jpg">
                                Team Jaivik led by Kartikey Rawat won the Hult Prize On-Campus 2020 Challenge and represented BIT Durg in Vietnam Regional Finals.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/sih.jpg">
                                Abhishek Agrawal and team represented BIT Durg at a national level in Smart India Hackathon Software Edition & Aman Mandal and team represented BIT Durg at a national level in Smart India Hackathon Hardware Edition.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/thagda-dam.jpg">
                                Akshay Sharma’s 3D modeling of Thagda Dam park and recreation got approved by the CMO of Chhattisgarh for use in the upcoming project.
                            </SingleAchievement>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement path="./assets/images/achievements/hult-prize-2021.jpeg">
                                Team Barleyn led by Anubhav Bhatt won the Hult Prize 2021 On Campus Challenge.
                            </SingleAchievement>
                        </div>
                        {/*<div className="col-lg-4 col-md-6 col-sm-12">
                            <SingleAchievement>
                                Aman Mandal and team represented BIT Durg at a national level in Smart India Hackathon Hardware Edition.
                            </SingleAchievement>
                        </div>*/}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default achievements;