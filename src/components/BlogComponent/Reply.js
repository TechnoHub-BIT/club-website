import React, { useState, useEffect } from "react";
import "./BlogComponent.css";
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

import { db } from "../../firebase";
import queryString from "./query";
import { Alert, Button, ButtonToggle } from "reactstrap";
import Moment from "moment";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Zoom, Fade } from "react-reveal";
import { useAuth } from "../../contexts/AuthContext";
import LikeButton from "./LikeButton";
import { doc } from "prettier";

function Reply(props) {
  const { currentUser } = useAuth();
  const [currentProfile, setCurrentProfile] = useState("");
  if (currentUser) {
    db.collection("members")
      .doc(currentUser.uid)
      .onSnapshot(function (doc) {
        const data = doc.data();
        setCurrentProfile(data);
      });
  }

  const fullname = currentProfile.fullname;
  const photourl = currentUser.photoURL;
  const date = new Date().toLocaleDateString();

  const [reply, setReply] = useState([]);
  const Rcomment = (e) => {
    setReply(e.target.value);
  };

  // storing the reply of comment in firestore
  const onRSubmit = () => {
    db.collection("NewBlogcategory")
      .doc(props.match.params.blogcategory)
      .collection("CBlogs")
      .doc(props.match.params.id)
      .collection("Comments")
      .doc(props.match.params.users)
      .collection("Replys")
      .add({
        fullname: fullname,
        photourl: photourl,
        reply: reply,
        date: date,
      });
  };

  // fetching the reply from firestore
  const [commentReply, setCommentReply] = useState([]);
  useEffect(() => {
    db.collection("NewBlogcategory")
      .doc(props.match.params.blogcategory)
      .collection("CBlogs")
      .doc(props.match.params.id)
      .collection("Comments")
      .doc(props.match.params.users)
      .collection("Replys")
      .get()
      .then((response) => {
        const fetchReplys = [];
        response.forEach((document) => {
          const fetchReply = {
            id: document.id,
            ...document.data(),
          };
          fetchReplys.push(fetchReply);
        });
        setCommentReply(fetchReplys);
      });
  }, []);

  // getting length of replies
  const [quesLength, setLength] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("NewBlogcategory")
        .doc(props.match.params.blogcategory)
        .collection("CBlogs")
        .doc(props.match.params.id)
        .collection("Comments")
        .doc(props.match.params.users)
        .collection("Replys")
        .get()
        .then(function (querySnapshot) {
          setLength(querySnapshot.size);
        });
    };
    fetchdata();
  }, []);
  return (
    <React.Fragment>
      <div>
        <h1>All {quesLength} replies</h1>
        <div>
          {commentReply.map((item) => {
            return (
              <div>
                <div>{item.fullname}</div>
                <div>{item.date}</div>
                <div>
                  {item.photoURL ? (
                    <img
                      src={item.photoURL}
                      className="profileImage"
                      alt="Profile"
                    />
                  ) : (
                    <img
                      src="./assets/images/profile-user.svg"
                      className="profileImage"
                      alt="Profile"
                    />
                  )}
                </div>
                <div>{item.reply}</div>
              </div>
            );
          })}
        </div>
        <input
          type="text"
          onChange={Rcomment}
          value={reply}
          placeholder={"reply "}
        />
        <button type="submit" onClick={onRSubmit}>
          add reply
        </button>
      </div>
    </React.Fragment>
  );
}

export default Reply;
