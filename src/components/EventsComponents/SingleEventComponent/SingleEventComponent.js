import React, { useEffect, useState } from "react";
import "./SingleEventComponent.css";
import { Helmet } from "react-helmet";
import { db } from "../../../firebase";
import Moment from "moment";
import { useParams } from "react-router";
import { Fade } from "react-reveal";
import HeaderTitle from "../../HeaderComponents/HeaderTitle";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useAuth } from "../../../contexts/AuthContext";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";

const SingleEvent = () => {
  let history = useHistory();

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const { eventname } = useParams();

  // Fetch the event
  const [event, setEvent] = useState("");
  const ref = db.collection("Events").doc(eventname);
  useEffect(() => {
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setEvent({
          eventtitle: Test.eventtitle,
          eventimage: Test.eventimage,
          eventdate: Test.eventdate,
          eventcontent: Test.eventcontent,
        });
      }
    });
  }, []);

  const deleteEventModal = () => {
    showModal(
      <AlertModal
        message="Are you sure you want to delete the Event?"
        icon="delete"
        leftBtn="Delete"
        rightBtn="Cancel"
        action={onDeleteEvent}
        close={closeModal}
      />
    );
  };

  const onDeleteEvent = () => {
    db.collection("Events")
      .doc(eventname)
      .delete()
      .then(() => {
        history.push("/events");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const { currentUser, logout } = useAuth();

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

  const shareUrl = "http://technohubbit.in/events/" + eventname;
  const shareText =
    "\n\nCheck out this event on TechnoHub BIT's official website- " +
    event.eventtitle +
    "\n\n";

  return (
    <React.Fragment>
      {modal}
      <HeaderTitle
        heading={event.eventtitle}
        blogImage={event.eventimage}
        eventDate={Moment(event.eventdate).format("ll")}
      />
      <div className="singleEventCont">
        <div
          dangerouslySetInnerHTML={{
            __html: event.eventcontent,
          }}
          className="eventDetails"
        ></div>

        <div className="shareButtons">
          <h6>Share on:</h6>
          <FacebookShareButton url={shareUrl} quote={shareText}>
            <FacebookIcon size="32" round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={shareText}>
            <TwitterIcon size="32" round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={shareText}>
            <WhatsappIcon size="32" round={true} />
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl} title={shareText}>
            <TelegramIcon size="32" round={true} />
          </TelegramShareButton>
          <LinkedinShareButton url={shareUrl} title={shareText}>
            <LinkedinIcon size="32" round={true} />
          </LinkedinShareButton>
        </div>
        {profiles.id === 1 || profiles.id === 3 ? (
          <div>
            <a href={"/editevent/" + eventname} className="editBtn">
              <button type="button">
                <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit Event
              </button>
            </a>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteEventModal()}
              style={{ margin: "0 0 0 1em" }}
            >
              <i className="far fa-trash-alt"></i>&nbsp;&nbsp;Delete Event
            </button>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default SingleEvent;
