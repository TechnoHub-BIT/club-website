// import React, { useState, useEffect } from "react";
// import "./BlogComponent.css";
// import {
//     FacebookShareButton,
//     FacebookIcon,
//     LinkedinShareButton,
//     LinkedinIcon,
//     TelegramShareButton,
//     TelegramIcon,
//     TwitterShareButton,
//     TwitterIcon,
//     WhatsappShareButton,
//     WhatsappIcon,
// } from "react-share";

// import { db } from "../../firebase";
// import queryString from "./query";
// import { Alert, Button, ButtonToggle } from 'reactstrap';
// import Moment from 'moment';
// import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom';
// import HeaderTitle from "../HeaderComponents/HeaderTitle";
// import { Zoom, Fade } from 'react-reveal';
// import { useAuth } from "../../contexts/AuthContext";
// import LikeButton from './LikeButton'

// function BlogComponent(props) {

//     const { currentUser } = useAuth();
//     const [currentProfile, setCurrentProfile] = useState('');
//     if (currentUser) {
//         db.collection("members")
//             .doc(currentUser.uid)
//             .onSnapshot(function (doc) {
//                 const data = doc.data();
//                 setCurrentProfile(data);
//             });
//     }
//     const qur = queryString("blog");

//     const [blogedit, setblogs] = useState([]);

//     useEffect(() => {
//         const fetchdata = async () => {
//             db.collection("Blogs")
//                 .onSnapshot(function (data) {
//                     setblogs(data.docs.map(doc => ({
//                         ...doc.data(), id: doc.id
//                     })));

//                 })
//         }
//         fetchdata();
//     }, []);

//     function onDelete(id) {
//         db.collection('Blogs').doc(id).delete()
//             .catch((err) => {
//                 console.error(err);
//             })
//     }

//     const setCharAt = (str, index, chr) => {
//         if (index > str.length - 1) return str;
//         return (str.substring(0, index) + chr + str.substring(index + 1));
//     }

//     const getIndices = (str) => {
//         let indices = [];

//         for (let i = 0; i < str.length; i++) {
//             let char = str.charAt(i);

//             if (char === " ")
//                 indices.push(i);
//         }
//         return indices;
//     }

//     let checkTitle = qur[0].replace(/-/g, " ");

//     for (let i = 0; i < getIndices(qur[0]).length; i++) {
//         checkTitle = setCharAt(checkTitle, getIndices(qur[0])[i], "-");
//     }

//     const checkAuthor = qur[1].replace(/-/g, " ");

//     let counter = 0;

//     return (
//         <React.Fragment>
//             <div>
//             {blogedit &&
//                 blogedit.map(Blogs => {

//                     if (Blogs.blogtitle === checkTitle && Blogs.blogauthor === checkAuthor) {
//                         counter++;

//                         const blogTitle = Blogs.blogtitle.replace(/-/g, "%20");
//                         const newTitle = blogTitle.replace(/ /g, "-");

//                         const blogAuthor = Blogs.blogauthor.replace(/-/g, "%20");
//                         const newAuthor = blogAuthor.replace(/ /g, "-");

//                         const shareUrl = "http://technohubbit.in/blogpost?title=" + newTitle + "&author=" + newAuthor;
//                         const shareText = "\n\nHere's TechnoHub's blog post on \"" + Blogs.blogtitle + "\" by " + Blogs.blogauthor + ".\n\n";

//                         return (
//                             <div>
//                                 <HeaderTitle heading={Blogs.blogtitle} blogImage={Blogs.blogimageurl} author={Blogs.blogauthor} date={Moment(Blogs.blogdate).format('ll')} />
//                                 <div className="blogContainer">
//                                     <div className="blogContents">
//                                         <div>
//                                             <Fade>
//                                                 <div
//                                                     dangerouslySetInnerHTML={{
//                                                         __html: Blogs.blogcontent
//                                                     }}
//                                                     className="blogDetails"
//                                                 >
//                                                 </div>
// <div>
// </div>

//                                                 <div className="shareButtons">
//                                                     <h6>Share on:</h6>
//                                                     <FacebookShareButton url={shareUrl} quote={shareText}>
//                                                         <FacebookIcon size="32" round={true} />
//                                                     </FacebookShareButton>
//                                                     <TwitterShareButton url={shareUrl} title={shareText}>
//                                                         <TwitterIcon size="32" round={true} />
//                                                     </TwitterShareButton>
//                                                     <WhatsappShareButton url={shareUrl} title={shareText}>
//                                                         <WhatsappIcon size="32" round={true} />
//                                                     </WhatsappShareButton>
//                                                     <TelegramShareButton url={shareUrl} title={shareText}>
//                                                         <TelegramIcon size="32" round={true} />
//                                                     </TelegramShareButton>
//                                                     <LinkedinShareButton url={shareUrl} title={shareText}>
//                                                         <LinkedinIcon size="32" round={true} />
//                                                     </LinkedinShareButton>
//                                                 </div>
//                                             </Fade>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     }
//                 })
//             }
//             {
//                 counter === 0 ?
//                     <div className="errorMessage">
//                         <Helmet>
//                             <title>Blogs | TechnoHub BITD</title>
//                         </Helmet>
//                         <Zoom>
//                             <Alert color="danger" style={{ textAlign: "center" }}>
//                                 Oops! Looks like this blog does not exist.
//                                 <br />
//                                 <a href="/blog"><ButtonToggle color="danger">Go Back</ButtonToggle></a>
//                             </Alert>
//                         </Zoom>
//                     </div>
//                     :
//                     <Helmet>
//                         <title>Blog post by {checkAuthor} | TechnoHub BITD</title>
//                         <meta name="title" content={checkTitle} />
//                     </Helmet>
//             }
//             </div>
//         </React.Fragment>
//     );
// }

// export default BlogComponent;










// new blogs

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
import { Link, useParams } from "react-router-dom";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Zoom, Fade } from "react-reveal";
import { useAuth } from "../../contexts/AuthContext";
import LikeButton from "./LikeButton";
import { doc } from "prettier";
import EditComments from "./EditComments/EditComments";

function BlogComponent(props) {
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

  // fetching the blog
  const [authorid, setAuthorId] = useState("");
  const [blogedit, setblogs] = useState("");
  const ref = db
    .collection("NewBlogcategory")
    .doc(blogcategory)
    .collection("CBlogs")
    .doc(blogname);
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
        });
      }
    });
  }, []);

  function onDeleteComment(id) {
    db.collection("NewBlogcategory")
      .doc(blogcategory)
      .collection("CBlogs")
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

  // db.collection("members").doc(authorid).collection("notifications").add({
  //   fullname: fullname,
  // });

  // storing comments in firestore
  const onSubmit = () => {
    console.log(authorid);
    db.collection("NewBlogcategory")
      .doc(blogcategory)
      .collection("CBlogs")
      .doc(blogname)
      .collection("Comments")
      .add({
        fullname: fullname,
        photourl: photourl,
        comment: comment,
        date: date,
      });

    db.collection("members")
      .doc(authorid)
      .collection("notifications")
      .doc()
      .set({
        fullname: fullname,
        photourl: photourl,
      });
  };

  // fetching the comment from firestore
  // const [blogcomment,setBlogComment] = useState([]);
  // useEffect(() => {
  //   db.collection("NewBlogcategory")
  //     .doc(blogcategory)
  //     .collection("CBlogs")
  //     .doc(blogname)
  //     .collection("Comments")
  //     .get()
  //     .then((response) => {
  //       const fetchComments = [];
  //       response.forEach((document) => {
  //         const fetchComment = {
  //           id: document.id,
  //           ...document.data(),
  //         };
  //         fetchComments.push(fetchComment);
  //       });
  //       setBlogComment(fetchComments);
  //     });
  // }, []);

  const [blogcomment, setBlogComment] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("NewBlogcategory")
      .doc(blogcategory)
      .collection("CBlogs")
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
  // const [reply, setReply] = useState([]);
  // const Rcomment = (e) => {
  //   setReply(e.target.value);
  // };

  // const [show, setShow] = useState(false);
  // // storing the reply of comment in firestore
  // const onRSubmit = (id) => {
  //   db.collection("NewBlogcategory")
  //     .doc(props.match.params.blogcategory)
  //     .collection("CBlogs")
  //     .doc(props.match.params.id)
  //     .collection("Comments")
  //     .doc(id)
  //     .collection("Replys")
  //     .add({
  //       fullname: fullname,
  //       photourl: photourl,
  //       reply: reply,
  //       date: date,
  //     });
  // };

  // function onVR(id) {
  //   db.collection("NewBlogcategory")
  //     .doc(props.match.params.blogcategory)
  //     .collection("CBlogs")
  //     .doc(props.match.params.id)
  //     .collection("Comments")
  //     .doc(id)
  //     .collection("Replys")
  //     .get()
  //     .then((response) => {
  //       const fetchReplys = [];
  //       response.forEach((document) => {
  //         const fetchReply = {
  //           id: document.id,
  //           ...document.data(),
  //         };
  //         fetchReplys.push(fetchReply);
  //       });
  //       setCommentReply(fetchReplys);
  //     });
  // }

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

  // fetching the reply from firestore
  // const [commentReply, setCommentReply] = useState([]);
  // useEffect((id) => {
  //   db.collection("NewBlogcategory")
  //     .doc(props.match.params.blogcategory)
  //     .collection("CBlogs")
  //     .doc(props.match.params.id)
  //     .collection("Comments")
  //     .doc(id)
  //     .collection("Replys")
  //     .get()
  //     .then((response) => {
  //       const fetchReplys = [];
  //       response.forEach((document) => {
  //         const fetchReply = {
  //           id: document.id,
  //           ...document.data(),
  //         };
  //         fetchReplys.push(fetchReply);
  //       });
  //       setCommentReply(fetchReplys);
  //     });
  // }, []);

  // getting length of replies
  // const [quesLength, setLength] = useState();
  // useEffect((id) => {
  //   const fetchdata = async () => {
  //     db.collection("NewBlogcategory")
  //       .doc(props.match.params.blogcategory)
  //       .collection("CBlogs")
  //       .doc(props.match.params.id)
  //       .collection("Comments")
  //       .doc(id)
  //       .collection("Replys")
  //       .get()
  //       .then(function (querySnapshot) {
  //         setLength(querySnapshot.size);
  //       });
  //   };
  //   fetchdata();
  // }, []);

  let counter = 0;

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

                  {/* <div className="shareButtons">
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
                                                </div> */}
                </Fade>
                <div>
                  <input type="text" onChange={Ucomment} value={comment} />
                  <button type="submit" onClick={onSubmit}>
                    Add comment
                  </button>
                </div>
                <div>
                  {blogcomment.map((user) => {
                    const users = user.id;
                    if (user.fullname === currentProfile.fullname) {
                      return (
                        <div>
                          <div>{user.fullname}</div>
                          <div>{user.date}</div>
                          <div>
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
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
                          <div>
                            {/* <button onClick={() => onEdit(user.id)}>
                Edit
              </button> */}
                          </div>
                          <div>
                            <button onClick={() => onDeleteComment(user.id)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <div>{user.fullname}</div>
                          <div>{user.date}</div>
                          <div>
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
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
                        </div>
                      );
                    }
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
      </div>
    </React.Fragment>
  );
}

export default BlogComponent;
