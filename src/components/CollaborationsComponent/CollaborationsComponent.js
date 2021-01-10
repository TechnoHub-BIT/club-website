import React from "react";
import "./CollaborationsComponent.css";

const collaborations = () => {
    return(
        <React.Fragment>
            <div className="collabContainer">
                <div className="landing">
                    <div className="content">
                        <div className="heading">Ideas and<br/>Collaborations</div>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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