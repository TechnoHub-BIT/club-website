import React from "react";
import "./TEDxBITDComponent.css";

const tedxbitdComponent = () => {
    return(
        <React.Fragment>
            <div className="container d-flex flex-column align-items-center">
                <img src="./assets/images/events_img/tedxbitd.jpg" alt="TEDxBITD 2021" />
                <h4 className="align-self-start">What is TEDxBITD?</h4>
                <p>
                    The idea of a day with insightful stories, compelling talks, and inspiring conversations itself sounds intriguing, doesn’t it? BIT Durg plans to bring you the greatest experience of the year 2021. TEDxBITD is a platform provided to BIT Durg to host a TEDx event with amazing speakers, a live audience, and much more.
                    <br /><br />
                    BIT Durg aims to spark and generate TED IDEAS WORTH SPREADING, amongst the students and audience. We are looking forward to creating a unique gathering to unleash hidden ideas and make the day memorable. Unpacking some great memories, TEDxBITD is inviting speakers from different disciplines of life, presenting multiple issues to be addressed. After all, there are numerous ideas worth spreading!
                    <br /><br />
                    We believe that ordinary people have ordinary struggles, but bring about great changes! TEDxBITD is an attempt to enlighten the fact that anyone from any corner of the world can make a difference. One needs to imagine ideas, innovate those, and through the journey, intend to inspire people.
                </p>
            </div>
            <div className="container mt-5">
                <h4>Mission</h4>
                <p>
                    The main aim of TEDxBITD is to spark meaningful conversation and generate ideas worth spreading among the students, pertaining to the theme of TEDxBITD, i.e; “Imagine, Invent, Inspire”. This will be achieved by inviting different personalities as speakers, who have brought about changes in the society, or have achieved extraordinary feats in their lives that are otherwise difficult to accomplish. Maximum efforts will be put so that ideas and talks from a plethora of fields can be brought for the students by the medium of TEDxBITD.
                </p>
            </div>
            <div className="container mt-5">
                <h4>Connect Now-</h4>
                <div className="socialMedia">
                    <a href="http://tedxbitd.in" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe-asia"></i></a>
                    <a href="https://instagram.com/tedxbitd" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/TEDxBITD" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com/TEDxBITD" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://linkedin.com/company/tedxbitd" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default tedxbitdComponent;