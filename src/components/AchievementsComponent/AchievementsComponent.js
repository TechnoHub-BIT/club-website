import React from "react";
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import SingleAchievement from "./SingleAchievementComponent/SingleAchievement";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Helmet } from "react-helmet";
import "./Achievements.css";
import { Zoom } from "react-reveal";

const achievements = (props) => {
    return(
        <React.Fragment>    
            <Helmet>
                <title>Achievements | TechnoHub BITD</title>
                <meta name="description" content="Features accomplishments of our peers from TechnoHub BITD to acknowledge their attainment in countless states. This also serves a purpose of setting up an example to the enthusiasts." />
            </Helmet>
            <HeaderTitle heading="ACHIEVEMENTS" image="achievements.jpg" />
            <div className="achievementsCont">
                <Breadcrumb>
                    <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                    <BreadcrumbItem icon="fas fa-award" title="Achievements" status="active" />
                </Breadcrumb>
                <div className="container-fluid">
                    <div className="row">
                        <Zoom>
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
                                <SingleAchievement path="./assets/images/achievements/hult-prize.jpg">
                                    Sachet Sabarad got selected as the Campus Director of the Hult Prize for the BIT, Durg campus for the 2021 On-Campus Round  competing among 44 engineering colleges.
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
                                <SingleAchievement>
                                    Sachet Sabarad got selected for the GGMUN 3.0 Malaysia 2020 summit.
                                </SingleAchievement>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <SingleAchievement path="./assets/images/achievements/hult-prize.jpg">
                                    Agney Deshkar got selected as the Campus Director of the Hult Prize for the BIT, Durg campus for the 2021 On-campus Round competing among 44 engineering colleges.
                                </SingleAchievement>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <SingleAchievement path="./assets/images/achievements/hult-prize-2021.jpeg">
                                    Team Barleyn led by Anubhav Bhatt won the Hult Prize 2021 On Campus Challenge.
                                </SingleAchievement>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <SingleAchievement path="./assets/images/achievements/akshay-sharma.jpeg">
                                    Hero App Designing Champ!
                                    Hero Motor Corp organized a competition to design a UI for their existing customer app. Technohub congratulates AKSHAY SHARMA On clearing round one. He was selected in the top 40 among 3800+ participants!
                                </SingleAchievement>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <SingleAchievement path="./assets/images/achievements/anurag-sharma.png">
                                    IEEE Bombay along with IEEE BIT-Durg and others conducted an online Electric Circuit Designing Competition. Participants had to design in TinkerCAD, while staying online in the meet, in the span of an hour. Amongst 48 Participants, Anurag Sharma, secured 3rd position! He was also awarded a cash prize of 2000 Rupees!
                                </SingleAchievement>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <SingleAchievement >
                                	Team Barleyn led by Anubhav Bhatt and Team Aminochains led by Sija Badgaiyan represented BIT, Durg at Hult Prize Impact Summit Mumbai and Punjab respectively.
                                </SingleAchievement>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <SingleAchievement >
                                	Team Annapurna led by Vinayak Rawat won the state level innovation business plan competition held on 9/3/21 conducted by Institute Innovation Cell, BIT, Durg.
                                </SingleAchievement>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default achievements;