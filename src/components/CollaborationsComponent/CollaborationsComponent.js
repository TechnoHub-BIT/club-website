import React from "react";
import "./CollaborationsComponent.css";

const collaborations = () => {
    return(
        <React.Fragment>
            <div className="collabContainer">
                <div className="landing">
                    <div className="content">
                        <div className="heading">Ideas and<br/>Collaborations</div>
                        <p className="text">
                            Technohub aims at providing  an enriching experience for ideas to grow in a realistic setting and hence we work towards it by collaborating with the concerned industries or individuals who assume same goals as we do so that we grow together. Our current and active collaborators are 36 ink and headstart and we plan on expanding the variety of industries we collaborate with in order to accommodate most areas of interest and give exposure to more diverse ideas.
                        </p>
                    </div>
                    <img src="./assets/images/collabs/background.jpg" alt="Collaborations" />
                </div>
                <hr class="hr-text" data-content="IN COLLABORATION WITH"></hr>
                <div className="partners">
                    <img src="./assets/images/collabs/36inc.png" alt="36Inc" />
                    <img src="./assets/images/collabs/headstart.png" alt="Headstart" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default collaborations;