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

function BlogComponent(props) {
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

  const tu = props.match.params.blogcategory;
  const bu = props.match.params.id;

  // console.log(tu);
  // console.log(bu);
  // fetching the blog
  const [blogedit, setblogs] = useState("");
  const ref = db
    .collection("NewBlogcategory")
    .doc(tu)
    .collection("CBlogs")
    .doc(bu);
  useEffect(() => {
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setblogs({
          blogtitle: Test.blogtitle,
          blogauthor: Test.blogauthor,
          blogimageurl: Test.blogimageurl,
          blogdate: Test.blogdate,
          blogcontent: Test.blogcontent,
        });
      }
    });
  }, []);

  const fullname = currentProfile.fullname;
  const photourl = currentUser.photoURL;
  const date = new Date().toLocaleDateString();

  const [comment, setComment] = useState([]);
  const Ucomment = (e) => {
    setComment(e.target.value);
  };

  // storing comments in firestore
  const onSubmit = () => {
    db.collection("NewBlogcategory")
      .doc(props.match.params.blogcategory)
      .collection("CBlogs")
      .doc(props.match.params.id)
      .collection("Comments")
      // .doc(currentProfile.email)
      .add({
        fullname: fullname,
        photourl: photourl,
        comment: comment,
        date: date,
      });
  };

  // fetching the comment from firestore
  const [blogcomment, setBlogComment] = useState([]);
  useEffect(() => {
    db.collection("NewBlogcategory")
      .doc(props.match.params.blogcategory)
      .collection("CBlogs")
      .doc(props.match.params.id)
      .collection("Comments")
      .get()
      .then((response) => {
        const fetchComments = [];
        response.forEach((document) => {
          const fetchComment = {
            id: document.id,
            ...document.data(),
          };
          fetchComments.push(fetchComment);
        });
        setBlogComment(fetchComments);
      });
  }, []);

  //   function onDelete(id) {
  //     db.collection("Blogs")
  //       .doc(id)
  //       .delete()
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }

  // const setCharAt = (str, index, chr) => {
  //     if (index > str.length - 1) return str;
  //     return (str.substring(0, index) + chr + str.substring(index + 1));
  // }

  // const getIndices = (str) => {
  //     let indices = [];

  //     for (let i = 0; i < str.length; i++) {
  //         let char = str.charAt(i);

  //         if (char === " ")
  //             indices.push(i);
  //     }
  //     return indices;
  // }

  // let checkTitle = qur[0].replace(/-/g, " ");

  // for (let i = 0; i < getIndices(qur[0]).length; i++) {
  //     checkTitle = setCharAt(checkTitle, getIndices(qur[0])[i], "-");
  // }

  // const checkAuthor = qur[1].replace(/-/g, " ");

  let counter = 0;

  return (
    <React.Fragment>
      <div>
        {/* {
                blogedit.map(Blogs => {
                    
                    if (Blogs.blogtitle === checkTitle && Blogs.blogauthor === checkAuthor) {
                       
                        counter++;
                        const blogTitle = Blogs.blogtitle.replace(/-/g, "%20");
                        const newTitle = blogTitle.replace(/ /g, "-");

                        const blogAuthor = Blogs.blogauthor.replace(/-/g, "%20");
                        const newAuthor = blogAuthor.replace(/ /g, "-");

                        const shareUrl = "http://technohubbit.in/blogpost?title=" + newTitle + "&author=" + newAuthor;
                        const shareText = "\n\nHere's TechnoHub's blog post on \"" + Blogs.blogtitle + "\" by " + Blogs.blogauthor + ".\n\n"; */}

        {/* return ( */}
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
                  <div>
                    <input type="text" onChange={Ucomment} value={comment} />
                    <button type="submit" onClick={onSubmit}>
                      Add comment
                    </button>
                    {/* {currentProfile.id === 1 ? (
                                                //   Edit and Delete Blog Buttons 
                                                 <div>
                                                 <Link to={"/editblog?id=" + Blogs.id}>Edit</Link>
                                                {
                                                    <Button color="danger" onClick={() => onDelete(Blogs.id)}>Delete Blog Permanently</Button>
                                                }
                                                <LikeButton like={Blogs} /> 
                                                </div>
                                                ) : null} */}
                  </div>
                  <div>
                    {blogcomment.map((user) => {
                      const users = user.id;
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
                          <a
                            href={
                              "/blog/" +
                              props.match.params.blogcategory +
                              "/" +
                              props.match.params.id +
                              "/" +
                              users
                            }
                          >
                            <button>view reply</button>
                          </a>
                        </div>
                      );
                    })}
                  </div>

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
              </div>
            </div>
          </div>
        </div>
        {/* )
                    // }
                })
            } */}
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
