import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../firebase";
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
  //Current User Details
  const { currentUser } = useAuth();
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [currentUser]);

  const [eventtitle, setEvenTtitle] = useState("");
  const title = (e) => {
    setEvenTtitle(e.target.value);
  };

  const [eventdate, setEventDate] = useState("");

  const [eventimage, setEventImage] = useState("");
  const image = (e) => {
    setEventImage(e.target.value);
  };

  const [eventtype, setEventType] = useState("");
  const type = (e) => {
    setEventType(e.target.value);
  };

  const [eventcontent, setEventContent] = useState("");
  const content = (param) => {
    setEventContent(param);
  };
  const onChange = (value) => {
    content(value);
  };

  const firestoremaisave = (e) => {
    if (
      eventtitle !== "" &&
      eventdate !== "" &&
      eventimage !== "" &&
      eventcontent !== "" &&
      eventtype !== ""
    ) {
      e.preventDefault();
      db.collection("Events")
        .add({
          eventtitle: eventtitle,
          eventdate: eventdate,
          eventimage: eventimage,
          eventcontent: eventcontent,
          eventtype: eventtype,
        })
        .then(() => {
          alert("Event Posted!");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in all the details!");
    }
  };

  return (
    <div className="formsCont">
      <form>
        <div className="title">
          <h3>Post Event</h3>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="title"
            id="title"
            onChange={title}
            value={eventtitle}
            placeholder="Event Title"
            required
          />
          <label for="title">Event Title</label>
        </div>
        <div className="input-group">
          <select
            name="privacy"
            id="privacy"
            onChange={type}
            value={eventtype}
            required
          >
            <option value="">--Event Type--</option>
            <option value="Upcoming Event">Upcoming Event</option>
            <option value="Past Event"> Past Event</option>
          </select>
        </div>
        {/* <div className="input-group"> */}
        <h3>Date</h3>
        <DatePicker
          selected={eventdate}
          onChange={(date) => setEventDate(date)}
          dateFormat="dd/MM/yyyy"
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
        {/* <div className="input-group">
          <input
            type="date"
            name="date"
            id="date"
            onChange={image}
            value={eventimage}
            placeholder="Event Date"
            required
          />
          <label for="date">Event Date</label>
        </div> */}
        <div className="input-group">
          <input
            type="text"
            name="image"
            id="image"
            onChange={image}
            value={eventimage}
            placeholder="Blog Image"
            required
          />
          <label for="image">Event Image Drive ID(1920x1080)</label>
        </div>
        <div className="summernote">
          <ReactSummernote
            value={eventcontent}
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
            onChange={onChange}
          />
        </div>
        <div className="input-group w50p">
          <button type="submit" onClick={firestoremaisave}>
            Post Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
