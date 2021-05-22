import React, { Component } from "react";
import HeaderTitle from "../../HeaderComponents/HeaderTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../BreadcrumbComponent/BreadcrumbComponent";
import "../../input.css";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";
import "bootstrap/dist/css/bootstrap.css";
import { db } from "../../../firebase";

import { Helmet } from "react-helmet";
import { render } from "@testing-library/react";
import { resetWarningCache } from "prop-types";

class EditEvent extends Component {
  state = {
    key: "",
    eventtitle: "",
    eventdate: "",
    eventimage: "",
    eventcontent: "",
    eventtype: "",
  };

  componentDidMount() {
    const ref = db.collection("Events").doc(this.props.match.params.eventname);
    ref.get().then((doc) => {
      const event = doc.data();
      this.setState({
        key: doc.id,
        eventtitle: event.eventtitle,
        eventdate: event.eventdate,
        eventimage: event.eventimage,
        eventcontent: event.eventcontent,
        eventtype: event.eventtype,
      });
    });
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ Blogs: state });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const {
      eventtitle,
      eventdate,
      eventimage,
      eventcontent,
      eventtype,
    } = this.state;

    const updateRef = db
      .collection("Events")
      .doc(this.props.match.params.eventname);
    updateRef
      .set({
        eventtitle,
        eventdate,
        eventimage,
        eventcontent,
        eventtype,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          eventtitle: "",
          eventdate: "",
          eventimage: "",
          eventcontent: "",
          eventtype: "",
        });

        this.props.history
          .push("/events/")
          .then(() => {
            alert("Event Updated");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  contentChange = (value) => {
    const currentState = this.state;
    currentState.blogcontent = value;
    this.setState(currentState);
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Edit Blog | TechnoHub BITD</title>
        </Helmet>
        <HeaderTitle heading="EDIT BLOG" />
        <div class="editBlogContainer">
          <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem
              icon="fas fa-pencil-alt"
              title="Edit Blog"
              status="active"
            />
          </Breadcrumb>
          <div className="formsCont">
            <form>
              <div className="title">
                <h3>Edit Event</h3>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  name="eventtitle"
                  onChange={this.onChange}
                  value={this.state.eventtitle}
                  placeholder="Event Title"
                  required
                />
                <label for="title">Event Title</label>
              </div>
              <div className="input-group">
                <select
                  name="eventtype"
                  id="eventtype"
                  onChange={this.onChange}
                  value={this.state.eventtype}
                  required
                >
                  <option value="">--Event Type--</option>
                  <option value="Upcoming Event">Upcoming Event</option>
                  <option value="Past Event"> Past Event</option>
                </select>
              </div>
              <div className="input-group">
                <input
                  type="date"
                  name="eventdate"
                  id="eventdate"
                  onChange={this.onChange}
                  value={this.state.eventdate}
                  placeholder="Event Date"
                  required
                />
                <label for="Date">Event Date</label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="image"
                  id="image"
                  onChange={this.onChange}
                  name="eventimage"
                  value={this.state.eventimage}
                  placeholder="Event Imageurl"
                  required
                />
                <label for="image">Event Image Drive ID(1920x1080)</label>
              </div>
              <div className="summernote">
                <ReactSummernote
                  value={this.state.eventcontent}
                  options={{
                    lang: "en-US",
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                      ["font", ["bold", "underline"]],
                      ["para", ["ul", "ol", "paragraph"]],
                      ["insert", ["link", "picture"]],
                      ["view", ["codeview"]],
                    ],
                  }}
                  name="eventcontent"
                  onChange={this.contentChange}
                />
              </div>
              <div className="input-group w50p">
                <button type="submit" onClick={this.onSubmit}>
                  Update Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditEvent;
