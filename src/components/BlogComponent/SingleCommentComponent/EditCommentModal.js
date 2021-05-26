import React, { Component } from "react";

class EditCommentModal extends Component {
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
    return (
      <React.Fragment>
        <div className={this.state.modalClass}>
          <div className="modalContent">
            <div className="modalBody">
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

export default EditCommentModal;
