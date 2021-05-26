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

  const fullname = currentProfile.fullname;
  const photourl = currentUser.photoURL;
  const date = new Date();

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
      date: new Date(),
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

  const [addreply, setAddReply] = useState(false);
  const [replies, setCommentReply] = useState([
    {
      reply: "",
      fullname: "",
      photourl: "",
      date: "",
    },
  ]);
  const handleReply = (e) => {
    setCommentReply(e.target.value);
  };
  // const handleReply = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...replies];
  //   list[index][name] = value;
  //   setCommentReply(list);
  // };

  const addReply = () => {
    setCommentReply([
      {
        reply: "",
        fullname: "",
        photourl: "",
        date: "",
      },
    ]);
  };

  // storing the reply of comment in firestore
  // const onRSubmit = (id) => {
  //   db.collection("Blogs").doc(blogname).collection("Comments").doc(id).add({
  //     replies: replies,
  //   });
  // };

  const onRSubmit = (id) => {
    db.collection("Blogs")
      .doc(blogname)
      .collection("Comments")
      .doc(id)
      .update({
        replies: firebase.firestore.FieldValue.arrayUnion({
          // reply: reply,
          fullname: fullname,
          photourl: photourl,
          date: date,
        }),
      });
  };

  const [show, setShow] = useState(false);
  const onVR = (id) => {
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
  };

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
  const onDeleteBlog = () => {
    db.collection("Blogs")
      .doc(blogname)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

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
            <div className="addComment">
              <input type="text" onChange={Ucomment} value={comment} />
              <button type="button" onClick={onSubmit}>
                Add comment
              </button>
            </div>
            <div className="commentsList">
              {blogcomment.map((user, index) => {
                const users = user.id;
                console.log(user.date);

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
                      <h5>
                        {user.fullname}
                        <span className="comment">{user.comment}</span>
                      </h5>

                      <div className="date">
                        {Moment(user.date).format("ll")}
                        {user.fullname === currentProfile.fullname ? (
                          <span className="actionBtns">
                            {/* <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => onEdit(user.id)}
                              >
                                Edit
                              </button> */}
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

                    {/* {addreply ? (
                        <div>
                          <input
                            type="text"
                            name="reply"
                            onChange={(e) => handleReply(e)}
                            value={reply}
                            placeholder={"reply "}
                          />
                          <button
                            type="submit"
                            onClick={() => onRSubmit(users)}
                          >
                            submit reply
                          </button>
                        </div>
                      ) : null}
                      <div>
                        <button onClick={() => setAddReply(!addreply)}>
                          Add reply
                        </button>
                      </div>
                      <div>
                        <button onClick={() => setShow(!true)}>
                        <button onClick={() => onVR(user.id)}>
                          view reply
                        </button>
                        {show ? (
                          <div>
                            <div>
                              {replies &&
                                replies.map((item) => {
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
                      </div> */}
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
