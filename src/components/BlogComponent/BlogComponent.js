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
import { Alert, Button, ButtonToggle } from 'reactstrap';
import Moment from 'moment';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Zoom, Fade } from 'react-reveal';
import { useAuth } from "../../contexts/AuthContext";
import LikeButton from './LikeButton'

function BlogComponent(props) {


    const { currentUser } = useAuth();
    const [currentProfile, setCurrentProfile] = useState('');
    if (currentUser) {
        db.collection("members")
            .doc(currentUser.uid)
            .onSnapshot(function (doc) {
                const data = doc.data();
                setCurrentProfile(data);
            });
    }
    const qur = queryString("blog");

    const [blogedit, setblogs] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            db.collection("Blogs")
                .onSnapshot(function (data) {
                    
                    setblogs(data.docs.map(doc => ({
                        ...doc.data(), id: doc.id
                  
                    })));
                  
                })
        }
        fetchdata();
    }, []);

    function onDelete(id) {
        db.collection('Blogs').doc(id).delete()
            .catch((err) => {
                console.error(err);
            })
    }

    const setCharAt = (str, index, chr) => {
        if (index > str.length - 1) return str;
        return (str.substring(0, index) + chr + str.substring(index + 1));
    }

    const getIndices = (str) => {
        let indices = [];

        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);

            if (char === " ")
                indices.push(i);
        }
        return indices;
    }

    let checkTitle = qur[0].replace(/-/g, " ");

    for (let i = 0; i < getIndices(qur[0]).length; i++) {
        checkTitle = setCharAt(checkTitle, getIndices(qur[0])[i], "-");
    }

    const checkAuthor = qur[1].replace(/-/g, " ");

    let counter = 0;

    return (
        <React.Fragment>
            <div>
            {blogedit &&
                blogedit.map(Blogs => {
                    
                    if (Blogs.blogtitle === checkTitle && Blogs.blogauthor === checkAuthor) {
                        counter++;

                        const blogTitle = Blogs.blogtitle.replace(/-/g, "%20");
                        const newTitle = blogTitle.replace(/ /g, "-");

                        const blogAuthor = Blogs.blogauthor.replace(/-/g, "%20");
                        const newAuthor = blogAuthor.replace(/ /g, "-");

                        const shareUrl = "http://technohubbit.in/blogpost?title=" + newTitle + "&author=" + newAuthor;
                        const shareText = "\n\nHere's TechnoHub's blog post on \"" + Blogs.blogtitle + "\" by " + Blogs.blogauthor + ".\n\n";

                        return (
                            <div>
                                <HeaderTitle heading={Blogs.blogtitle} blogImage={Blogs.blogimageurl} author={Blogs.blogauthor} date={Moment(Blogs.blogdate).format('ll')} />
                                <div className="blogContainer">
                                    <div className="blogContents">
                                        <div>
                                            <Fade>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: Blogs.blogcontent
                                                    }}
                                                    className="blogDetails"
                                                >
                                                </div>
<div>
</div>

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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {
                counter === 0 ?
                    <div className="errorMessage">
                        <Helmet>
                            <title>Blogs | TechnoHub BITD</title>
                        </Helmet>
                        <Zoom>
                            <Alert color="danger" style={{ textAlign: "center" }}>
                                Oops! Looks like this blog does not exist.
                                <br />
                                <a href="/blog"><ButtonToggle color="danger">Go Back</ButtonToggle></a>
                            </Alert>
                        </Zoom>
                    </div>
                    :
                    <Helmet>
                        <title>Blog post by {checkAuthor} | TechnoHub BITD</title>
                        <meta name="title" content={checkTitle} />
                    </Helmet>
            }
            </div>
        </React.Fragment>
    );
}

export default BlogComponent;































// new blogs
// import React, { useState, useEffect } from "react";
// import "./BlogComponent.css";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   LinkedinShareButton,
//   LinkedinIcon,
//   TelegramShareButton,
//   TelegramIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
// } from "react-share";

// import { db } from "../../firebase";
// import queryString from "./query";
// import { Alert, Button, ButtonToggle } from "reactstrap";
// import Moment from "moment";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import HeaderTitle from "../HeaderComponents/HeaderTitle";
// import { Zoom, Fade } from "react-reveal";
// import { useAuth } from "../../contexts/AuthContext";
// import LikeButton from "./LikeButton";
// import { doc } from "prettier";
// import EditComments from "./EditComments/EditComments";

// function BlogComponent(props) {
//   const { currentUser } = useAuth();
//   const [currentProfile, setCurrentProfile] = useState("");
//   if (currentUser) {
//     db.collection("members")
//       .doc(currentUser.uid)
//       .onSnapshot(function (doc) {
//         const data = doc.data();
//         setCurrentProfile(data);
//       });
//   }

//   const tu = props.match.params.blogcategory;
//   const bu = props.match.params.id;

//   // console.log(tu);
//   // console.log(bu);
//   // fetching the blog
//   const [blogedit, setblogs] = useState("");
//   const ref = db
//     .collection("NewBlogcategory")
//     .doc(tu)
//     .collection("CBlogs")
//     .doc(bu);
//   useEffect(() => {
//     ref.get().then((doc) => {
//       if (doc.exists) {
//         const Test = doc.data();
//         setblogs({
//           blogtitle: Test.blogtitle,
//           blogauthor: Test.blogauthor,
//           blogimageurl: Test.blogimageurl,
//           blogdate: Test.blogdate,
//           blogcontent: Test.blogcontent,
//         });
//       }
//     });
//   }, []);

//   const fullname = currentProfile.fullname;
//   const photourl = currentUser.photoURL;
//   const date = new Date().toLocaleDateString();

//   const [comment, setComment] = useState([]);
//   const Ucomment = (e) => {
//     setComment(e.target.value);
//   };

//   // storing comments in firestore
//   const onSubmit = () => {
//     db.collection("NewBlogcategory")
//       .doc(props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(props.match.params.id)
//       .collection("Comments")
//       // .doc(currentProfile.email)
//       .add({
//         fullname: fullname,
//         photourl: photourl,
//         comment: comment,
//         date: date,
//       });
//   };

//   // fetching the comment from firestore
//   const [blogcomment, setBlogComment] = useState([]);
//   useEffect(() => {
//     db.collection("NewBlogcategory")
//       .doc(props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(props.match.params.id)
//       .collection("Comments")
//       .get()
//       .then((response) => {
//         const fetchComments = [];
//         response.forEach((document) => {
//           const fetchComment = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchComments.push(fetchComment);
//         });
//         setBlogComment(fetchComments);
//       });
//   }, []);

//   function onDeleteComment(id) {
//     db.collection("NewBlogcategory")
//       .doc(props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(props.match.params.id)
//       .collection("Comments")
//       .doc(id)
//       .delete()
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   const [reply, setReply] = useState([]);
//   const Rcomment = (e) => {
//     setReply(e.target.value);
//   };

//   const [show, setShow] = useState(false);
//   // storing the reply of comment in firestore
//   const onRSubmit = (id) => {
//     db.collection("NewBlogcategory")
//       .doc(props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(props.match.params.id)
//       .collection("Comments")
//       .doc(id)
//       .collection("Replys")
//       .add({
//         fullname: fullname,
//         photourl: photourl,
//         reply: reply,
//         date: date,
//       });
//   };

//   function onVR(id) {
//     db.collection("NewBlogcategory")
//       .doc(props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(props.match.params.id)
//       .collection("Comments")
//       .doc(id)
//       .collection("Replys")
//       .get()
//       .then((response) => {
//         const fetchReplys = [];
//         response.forEach((document) => {
//           const fetchReply = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchReplys.push(fetchReply);
//         });
//         setCommentReply(fetchReplys);
//       });
//   }

//   function onEdit(id) {
//     const ref = db
//       .collection("NewBlogcategory")
//       .doc(this.props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(this.props.match.params.id)
//       .collection("Comments")
//       .doc(id);
//     ref.get().then((doc) => {
//       if (doc.exists) {
//         const Blogcategory = doc.data();
//         this.setState({
//           key: doc.id,
//           comment: Blogcategory.comment,
//           date: Blogcategory.date,
//           // fullname: Blogcategory.fullname,
//           // photourl: Blogcategory.photourl,
//         });
//       } else {
//         console.log("No such document!");
//       }
//     });
//   }
//   // fetching the reply from firestore
//   const [commentReply, setCommentReply] = useState([]);
//   // useEffect((id) => {
//   //   db.collection("NewBlogcategory")
//   //     .doc(props.match.params.blogcategory)
//   //     .collection("CBlogs")
//   //     .doc(props.match.params.id)
//   //     .collection("Comments")
//   //     .doc(id)
//   //     .collection("Replys")
//   //     .get()
//   //     .then((response) => {
//   //       const fetchReplys = [];
//   //       response.forEach((document) => {
//   //         const fetchReply = {
//   //           id: document.id,
//   //           ...document.data(),
//   //         };
//   //         fetchReplys.push(fetchReply);
//   //       });
//   //       setCommentReply(fetchReplys);
//   //     });
//   // }, []);

//   // getting length of replies
//   // const [quesLength, setLength] = useState();
//   // useEffect((id) => {
//   //   const fetchdata = async () => {
//   //     db.collection("NewBlogcategory")
//   //       .doc(props.match.params.blogcategory)
//   //       .collection("CBlogs")
//   //       .doc(props.match.params.id)
//   //       .collection("Comments")
//   //       .doc(id)
//   //       .collection("Replys")
//   //       .get()
//   //       .then(function (querySnapshot) {
//   //         setLength(querySnapshot.size);
//   //       });
//   //   };
//   //   fetchdata();
//   // }, []);

//   // const setCharAt = (str, index, chr) => {
//   //     if (index > str.length - 1) return str;
//   //     return (str.substring(0, index) + chr + str.substring(index + 1));
//   // }

//   // const getIndices = (str) => {
//   //     let indices = [];

//   //     for (let i = 0; i < str.length; i++) {
//   //         let char = str.charAt(i);

//   //         if (char === " ")
//   //             indices.push(i);
//   //     }
//   //     return indices;
//   // }

//   // let checkTitle = qur[0].replace(/-/g, " ");

//   // for (let i = 0; i < getIndices(qur[0]).length; i++) {
//   //     checkTitle = setCharAt(checkTitle, getIndices(qur[0])[i], "-");
//   // }

//   // const checkAuthor = qur[1].replace(/-/g, " ");

//   let counter = 0;

//   return (
//     <React.Fragment>
//       <div>
//         {/* {
//                 blogedit.map(Blogs => {
                    
//                     if (Blogs.blogtitle === checkTitle && Blogs.blogauthor === checkAuthor) {
                       
//                         counter++;
//                         const blogTitle = Blogs.blogtitle.replace(/-/g, "%20");
//                         const newTitle = blogTitle.replace(/ /g, "-");

//                         const blogAuthor = Blogs.blogauthor.replace(/-/g, "%20");
//                         const newAuthor = blogAuthor.replace(/ /g, "-");

//                         const shareUrl = "http://technohubbit.in/blogpost?title=" + newTitle + "&author=" + newAuthor;
//                         const shareText = "\n\nHere's TechnoHub's blog post on \"" + Blogs.blogtitle + "\" by " + Blogs.blogauthor + ".\n\n"; */}

//         {/* return ( */}
//         <div>
//           <HeaderTitle
//             heading={blogedit.blogtitle}
//             blogImage={blogedit.blogimageurl}
//             author={blogedit.blogauthor}
//             date={Moment(blogedit.blogdate).format("ll")}
//           />
//           <div className="blogContainer">
//             <div className="blogContents">
//               <div>
//                 <Fade>
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: blogedit.blogcontent,
//                     }}
//                     className="blogDetails"
//                   ></div>
//                   <div>
//                     <input type="text" onChange={Ucomment} value={comment} />
//                     <button type="submit" onClick={onSubmit}>
//                       Add comment
//                     </button>
//                     {/* {currentProfile.id === 1 ? (
//                                                 //   Edit and Delete Blog Buttons 
//                                                  <div>
//                                                  <Link to={"/editblog?id=" + Blogs.id}>Edit</Link>
//                                                 {
//                                                     <Button color="danger" onClick={() => onDelete(Blogs.id)}>Delete Blog Permanently</Button>
//                                                 }
//                                                 <LikeButton like={Blogs} /> 
//                                                 </div>
//                                                 ) : null} */}
//                   </div>
//                   <div>
//                     {blogcomment.map((user) => {
//                       const users = user.id;
//                       if (user.fullname === currentProfile.fullname) {
//                         return (
//                           <div>
//                             <div>{user.fullname}</div>
//                             <div>{user.date}</div>
//                             <div>
//                               {user.photoURL ? (
//                                 <img
//                                   src={user.photoURL}
//                                   className="profileImage"
//                                   alt="Profile"
//                                 />
//                               ) : (
//                                 <img
//                                   src="./assets/images/profile-user.svg"
//                                   className="profileImage"
//                                   alt="Profile"
//                                 />
//                               )}
//                             </div>
//                             <div>{user.comment}</div>
//                             <div>
//                               {/* <EditComments onClick={() => onEdit(user.id)} >Edit </EditComments> */}
//                               <button onClick={() => onEdit(user.id)}>
//                                 Edit
//                               </button>
//                               {/* <div className="input-group">
//             <input type="text" name="author" id="author" onChange={Ucomment} name="comment" value={comment} placeholder="comment" required />
//             <label for="author">Edit Comment</label>
//             <button type="submit" onClick={onSubmit}>update comment</button>
//         </div> */}
//                             </div>
//                             <div>
//                               <button onClick={() => onDeleteComment(user.id)}>
//                                 Delete
//                               </button>
//                             </div>
//                             {/* <a
//                               href={
//                                 "/blog/" +
//                                 props.match.params.blogcategory +
//                                 "/" +
//                                 props.match.params.id +
//                                 "/" +
//                                 users
//                               }
//                             > */}
//                             <div>
//                               {/* <button onClick={() => setShow(!true)}> */}
//                               <button onClick={() => onVR(user.id)}>
//                                 view reply
//                               </button>
//                               {/* </a> */}
//                               {/* { show ?  */}
//                               <div>
//                                 <div>
//                                   {commentReply.map((item) => {
//                                     return (
//                                       <div>
//                                         <div>{item.fullname}</div>
//                                         <div>{item.date}</div>
//                                         <div>
//                                           {item.photoURL ? (
//                                             <img
//                                               src={item.photoURL}
//                                               className="profileImage"
//                                               alt="Profile"
//                                             />
//                                           ) : (
//                                             <img
//                                               src="./assets/images/profile-user.svg"
//                                               className="profileImage"
//                                               alt="Profile"
//                                             />
//                                           )}
//                                         </div>
//                                         <div>{item.reply}</div>
//                                       </div>
//                                     );
//                                   })}
//                                 </div>
//                                 <input
//                                   type="text"
//                                   onChange={Rcomment}
//                                   value={reply}
//                                   placeholder={"reply "}
//                                 />
//                                 <button
//                                   type="submit"
//                                   onClick={() => onRSubmit(users)}
//                                 >
//                                   add reply
//                                 </button>
//                               </div>
//                               {/* : null} */}
//                             </div>
//                             {/* </a> */}
//                           </div>
//                         );
//                       } else {
//                         return (
//                           <div>
//                             <div>{user.fullname}</div>
//                             <div>{user.date}</div>
//                             <div>
//                               {user.photoURL ? (
//                                 <img
//                                   src={user.photoURL}
//                                   className="profileImage"
//                                   alt="Profile"
//                                 />
//                               ) : (
//                                 <img
//                                   src="./assets/images/profile-user.svg"
//                                   className="profileImage"
//                                   alt="Profile"
//                                 />
//                               )}
//                             </div>
//                             <div>{user.comment}</div>
//                             {/* <a
//                               href={
//                                 "/blog/" +
//                                 props.match.params.blogcategory +
//                                 "/" +
//                                 props.match.params.id +
//                                 "/" +
//                                 users
//                               }
//                             > */}
//                             <button onClick={() => onVR(user.id)}>
//                               view  reply
//                             </button>
//                             {/* </a> */}
//                             {show ? (
//                               <div>
//                                 <div>
//                                   {commentReply.map((item) => {
//                                     return (
//                                       <div>
//                                         <div>{item.fullname}</div>
//                                         <div>{item.date}</div>
//                                         <div>
//                                           {item.photoURL ? (
//                                             <img
//                                               src={item.photoURL}
//                                               className="profileImage"
//                                               alt="Profile"
//                                             />
//                                           ) : (
//                                             <img
//                                               src="./assets/images/profile-user.svg"
//                                               className="profileImage"
//                                               alt="Profile"
//                                             />
//                                           )}
//                                         </div>
//                                         <div>{item.reply}</div>
//                                       </div>
//                                     );
//                                   })}
//                                 </div>
//                                 <input
//                                   type="text"
//                                   onChange={Rcomment}
//                                   value={reply}
//                                   placeholder={"reply "}
//                                 />
//                                 <button
//                                   type="submit"
//                                   onClick={() => onRSubmit(users)}
//                                 >
//                                   add reply
//                                 </button>
//                               </div>
//                             ) : null}
//                           </div>
//                         );
//                       }
//                     })}
//                   </div>

//                   {/* <div className="shareButtons">
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
//                                                 </div> */}
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* )
//                     // }
//                 })
//             } */}
//         {counter === 0 ? (
//           <div className="errorMessage">
//             <Helmet>
//               <title>Blogs | TechnoHub BITD</title>
//             </Helmet>
//             <Zoom>
//               <Alert color="danger" style={{ textAlign: "center" }}>
//                 Oops! Looks like this blog does not exist.
//                 <br />
//                 <a href="/blog">
//                   <ButtonToggle color="danger">Go Back</ButtonToggle>
//                 </a>
//               </Alert>
//             </Zoom>
//           </div>
//         ) : (
//           <Helmet>
//             <title>Blog post by {blogedit.blogauthor} | TechnoHub BITD</title>
//             <meta name="title" content={blogedit.blogtitle} />
//           </Helmet>
//         )}
//       </div>
//     </React.Fragment>
//   );
// }

// export default BlogComponent;
