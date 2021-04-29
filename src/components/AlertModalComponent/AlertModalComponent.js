import React, { Component } from "react";
import "./AlertModalComponent.css";
import Successful from "../../img/successful.png";
import Failed from "../../img/failed.png";
import Delete from "../../img/delete.png";
import Question from "../../img/question.png";
import Exclamation from "../../img/exclamation.png";

class AlertModalComponent extends Component {
  state = {
    showModal: true,
    modalClass: "modalCont show",
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalClass: "modalCont",
    });
  };

  render() {
    let icon = this.props.icon;

    if (icon === "successful") icon = Successful;
    else if (icon === "failed") icon = Failed;
    else if (icon === "delete") icon = Delete;
    else if (icon === "question") icon = Question;
    else if (icon === "exclamation") icon = Exclamation;
    else icon = null;

    return (
      <React.Fragment>
        <div className={this.state.modalClass}>
          <div className="modalContent">
            <div className="modalBody">
              <img src={icon} alt="Status Icon" />
              <p>{this.props.message}</p>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => {
                    this.props.close();
                    this.props.action(this.props.actionParam);
                    if (this.props.reload != null) window.location.reload();
                    this.closeModal();
                  }}
                >
                  {this.props.leftBtn}
                </button>
                {this.props.rightBtn != null ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.closeModal();
                      this.props.close();
                    }}
                    style={{ marginLeft: "1em" }}
                  >
                    {this.props.rightBtn}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlertModalComponent;
