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
import { Alert, Button, ButtonToggle } from "reactstrap";
import Moment from "moment";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Zoom, Fade } from "react-reveal";
import { useAuth } from "../../contexts/AuthContext";
import { doc } from "prettier";
import EditComments from "./EditComments/EditComments";

const BlogComponent = (props) => {
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

  function onDeleteComment(id) {
    db.collection("Blogs")
      .doc(blogname)
      .collection("Comments")
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  const fullname = currentProfile.fullname;
  const photourl = currentUser.photoURL;
  const date = new Date().toLocaleDateString();

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

    // db.collection("members")
    //   .doc(authorid)
    //   .collection("notifications")
    //   .doc()
    //   .set({
    //     fullname: fullname,
    //     photourl: photourl,
    //   });
  };

  // fetching the comment from firestore
  const [blogcomment, setBlogComment] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("Blogs")
      .doc(blogname)
      .collection("Comments")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogComment(data);
      });
    return unsubscribe;
  }, []);

  const [reply, setReply] = useState([]);
  const Rcomment = (e) => {
    setReply(e.target.value);
  };
  const [replies, setReplies] = useState([
    {
      reply: "",
      fullname: "",
      photourl: "",
      date: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...replies];
    list[index][name] = value;
    setReplies(list);
  };

  const addReply = () => {
    setReplies([
      {
        reply: "",
        fullname: "",
        photourl: "",
        date: "",
      },
    ]);
  };
  
  // storing the reply of comment in firestore
  const onRSubmit = (id) => {
    db.collection("Blogs").doc(blogname).collection("Comments").doc(id).update({
      replies: replies,
    });
  };

  const [commentReply, setCommentReply] = useState([]);
  const [show, setShow] = useState(false);
  function onVR(id) {
    db.collection("Blogs")
      .doc(blogname)
      .collection("Comments")
      .doc(id)
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
  }

  // function onEdit(id) {
  //   const ref = db
  //     .collection("NewBlogcategory")
  //     .doc(this.props.match.params.blogcategory)
  //     .collection("CBlogs")
  //     .doc(this.props.match.params.id)
  //     .collection("Comments")
  //     .doc(id);
  //   ref.get().then((doc) => {
  //     if (doc.exists) {
  //       const Blogcategory = doc.data();
  //       this.setState({
  //         key: doc.id,
  //         comment: Blogcategory.comment,
  //         date: Blogcategory.date,
  //         // fullname: Blogcategory.fullname,
  //         // photourl: Blogcategory.photourl,
  //       });
  //     } else {
  //       console.log("No such document!");
  //     }
  //   });
  // }

  const [like, setLike] = useState();
  // const incrementLike = ()=> {
  //    const ref =  db.collection("NewBlogcategory").doc(blogcategory).collection("CBlogs").doc(blogname)
  //  // setLike(like+1);
  //  ref.get().then(doc => {
  //   let updatedLike = like;
  //   updatedLike.like = updatedLike.like + 1;
  //   ref.update(updatedLike);
  //   setLike(updatedLike);
  //  })
  // }
  const incrementLike = () => {
    const ref = db.collection("Blogs").doc(blogname);
    ref.onSnapshot((doc) => {
      const data = doc.data().like;
      console.log(data);
      // setLike(data + 1);
    });
  };

  // useEffect(() => {
  //   db.collection("NewBlogcategory")
  //     .doc(blogcategory)
  //     .collection("CBlogs")
  //     .doc(blogname)
  //     .get().then((doc) => {
  //         const blog = doc.data();
  //         setLike({
  //           like: blog.like
  //         });
  //       })
  // }, []);

  //Deleting blog
  function onDeleteBlog() {
    db.collection("Blogs")
      .doc(blogname)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  let counter = 0;

  const shareUrl = "..";
  const shareText = "..";

  return (
    <React.Fragment>
      <div>
        <div>
          <HeaderTitle
            heading={blogedit.blogtitle}
            blogImage={blogedit.blogimageurl}
            author={blogedit.blogauthor}
            date={Moment(blogedit.blogdate).format("ll")}
          />
          <div className="blogContainer">
            <div className="blogContents">
              <div>
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
                <div>
                  no.of likes
                  <Button type="submit" color="primary" onClick={incrementLike}>
                    {blogedit.like} 👏
                  </Button>
                </div>
                <div>
                  <input type="text" onChange={Ucomment} value={comment} />
                  <button type="submit" onClick={onSubmit}>
                    Add comment
                  </button>
                </div>
                <div>
                  {blogcomment.map((user) => {
                    const users = user.id;
                    return (
                      <div>
                        <div>{user.fullname}</div>
                        <div>{user.date}</div>
                        <div>
                          {user.photourl ? (
                            <img
                              src={user.photourl}
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
                        <div>{user.comment}</div>
                        {user.fullname === currentProfile.fullname ? (
                          <div>
                            <div>
                              <button onClick={() => onDeleteComment(user.id)}>
                                Delete
                              </button>
                            </div>
                            {/* <div>
                            <button onClick={() => onEdit(user.id)}>
                              Edit
                            </button>
                          </div> */}
                          </div>
                        ) : null}
                        <div>
                          <input
                            type="text"
                            name="reply"
                            // onChange={(e) => handleChange(e, index)}
                            // value={reply}
                            placeholder={"reply "}
                          />
                          <button type="submit" onClick={() => addReply(users)}>
                            add reply
                          </button>
                        </div>
                        <div>
                          {/* <button onClick={() => setShow(!true)}> */}
                          <button onClick={() => onVR(user.id)}>
                            view reply
                          </button>
                          {show ? (
                            <div>
                              <div>
                                {commentReply.map((item) => {
                                  return (
                                    <div>
                                      <div>{item.fullname}</div>
                                      <div>{item.date}</div>
                                      <div>
                                        {currentUser.photoURL ? (
                                          <img
                                            src={currentUser.photoURL}
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
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {counter === 0 ? (
          <div className="errorMessage">
            <Helmet>
              <title>Blogs | TechnoHub BITD</title>
            </Helmet>
            <Zoom>
              <Alert color="danger" style={{ textAlign: "center" }}>
                Oops! Looks like this blog does not exist.
                <br />
                <a href="/blog">
                  <ButtonToggle color="danger">Go Back</ButtonToggle>
                </a>
              </Alert>
            </Zoom>
          </div>
        ) : (
          <Helmet>
            <title>Blog post by {blogedit.blogauthor} | TechnoHub BITD</title>
            <meta name="title" content={blogedit.blogtitle} />
          </Helmet>
        )}
        {/* <button type="submit" onClick={onDeleteBlog}> Delete Blog</button> */}
        <a href={"/editblog/" + blogcategory + "/" + blogname}>
          <button type="button">Edit</button>
        </a>
      </div>
    </React.Fragment>
  );
};

export default BlogComponent;
