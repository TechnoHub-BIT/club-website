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
import Moment from "moment";
import { Link, useParams } from "react-router-dom";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Fade } from "react-reveal";
import { useAuth } from "../../contexts/AuthContext";
import { doc } from "prettier";
import EditComments from "./EditComments/EditComments";
import firebase from "firebase";
import ProfileImage from "../../img/profile-user.svg";

const BlogComponent = () => {
  const { blogcategory, blogname } = useParams();

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

  const [show, setShow] = useState(false);
  const [blogExists, setBlogExists] = useState(true);

  // fetching the blog
  const [authorid, setAuthorId] = useState("");
  const [blogedit, setblogs] = useState("");
  const ref = db.collection("Blogs").doc(blogname);
  useEffect(() => {
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setAuthorId(Test.blogauthorid);
        setblogs({
          blogtitle: Test.blogtitle,
          blogauthor: Test.blogauthor,
          blogauthorid: Test.blogauthorid,
          blogimageurl: Test.blogimageurl,
          blogdate: Test.blogdate,
          blogcontent: Test.blogcontent,
          like: Test.like,
        });
      } else setBlogExists(false);
    });
  }, []);

  //Deleting blog
  const onDeleteBlog = () => {
    db.collection("Blogs")
      .doc(blogname)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

  let fullname = null;
  let photourl = null;
  if (currentUser) {
    fullname = currentProfile.fullname;
    photourl = currentUser.photoURL;
  }

  const date = new Date().toLocaleString();

  const [comment, setComment] = useState([]);
  const Ucomment = (e) => {
    setComment(e.target.value);
  };

  // storing comments in firestore
  const onSubmit = () => {
    console.log(authorid);
    db.collection("Blogs").doc(blogname).collection("Comments").add({
      fullname: fullname,
      photourl: photourl,
      comment: comment,
      date: date,
    });
  };

  // fetching the comment from firestore
  const [blogcomment, setBlogComment] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("Blogs")
      .doc(blogname)
      .collection("Comments").orderBy("date","asc")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogComment(data);
      });
    return unsubscribe;
  }, []);

  // Delete comments
  const onDeleteComment = (id) => {
    db.collection("Blogs")
      .doc(blogname)
      .collection("Comments")
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

  //edit comments
  // const onEdit = () => {
  //   db.collection("Blogs")
  //     .doc(blogname)
  //     .collection("Comments")
  //     .onSnapshot(function (doc) {
  //       const data = doc.data();
  //       setCurrentProfile(data);
  //     });
  // }

  const shareUrl = "http://technohubbit.in/" + blogcategory + "/" + blogname;
  const shareText =
    "\n\nCheck out this blog post by " +
    blogedit.blogauthor +
    ' on "' +
    blogedit.blogtitle +
    '"\n\n';

  return (
    <React.Fragment>
      <div>
        <HeaderTitle
          heading={blogedit.blogtitle}
          blogImage={blogedit.blogimageurl}
          author={blogedit.blogauthor}
          date={Moment(blogedit.blogdate).format("ll")}
        />
        <div className="blogContainer">
          <div className="blogContents">
            <Fade>
              <div
                dangerouslySetInnerHTML={{
                  __html: blogedit.blogcontent,
                }}
                className="blogDetails"
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
            </Fade>
            {/* <div>
                  no.of likes
                  <Button type="submit" color="primary" onClick={incrementLike}>
                    {blogedit.like} 👏
                  </Button>
                </div> */}
            {currentUser ? (
              <div className="addComment">
                <div className="left">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      className="profileImage"
                      alt="Profile"
                    />
                  ) : (
                    <img
                      src={ProfileImage}
                      className="profileImage"
                      alt="Profile"
                    />
                  )}
                </div>
                <div className="right">
                  <textarea
                    type="text"
                    onChange={Ucomment}
                    value={comment}
                    placeholder="Type your comment here"
                  ></textarea>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onSubmit}
                  >
                    Add comment
                  </button>
                </div>
              </div>
            ) : null}

            <div className="commentsList">
              {blogcomment.map((user, index) => {
                return (
                  <div className="singleComment" key={index}>
                    <div className="left">
                      {user.photourl ? (
                        <img
                          src={user.photourl}
                          className="profileImage"
                          alt="Profile"
                        />
                      ) : (
                        <img
                          src={ProfileImage}
                          className="profileImage"
                          alt="Profile"
                        />
                      )}
                    </div>
                    <div className="right">
                      {user.fullname === currentProfile.fullname ? (
                        <h5>
                          {user.fullname}
                          {show ? (
                            <span className="comment">
                              <input>{user.comment}</input>
                            </span>
                          ) : (
                            <span className="comment">{user.comment}</span>
                          )}
                        </h5>
                      ) : (
                        <h5>
                          {user.fullname}
                          <span className="comment">{user.comment}</span>
                        </h5>
                      )}
                      <div className="date">
                        {Moment(user.date).format("ll")}
                        {user.fullname === currentProfile.fullname ? (
                          <span className="actionBtns">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => setShow(!show)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => onDeleteComment(user.id)}
                            >
                              Delete
                            </button>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {currentProfile.id === 1 || currentProfile.id === 3 ? (
          <div>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={onDeleteBlog}
            >
              <i className="far fa-trash-alt"></i>&nbsp;&nbsp;Delete Blog
            </button>
            <a href={"/editblog/" + blogcategory + "/" + blogname}>
              <button type="button" className="btn btn-primary">
                <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
              </button>
            </a>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default BlogComponent;
