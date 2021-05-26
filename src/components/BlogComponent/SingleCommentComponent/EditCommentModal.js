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
              <textarea
                value={this.props.comment}
                onChange={(e) => this.props.onChangeEdit(e)}
              ></textarea>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => {
                    this.props.close();
                    this.props.onSave();
                    this.closeModal();
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.closeModal();
                    this.props.close();
                  }}
                  style={{ marginLeft: "1em" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditCommentModal;
