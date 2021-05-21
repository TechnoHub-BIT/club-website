// import React, { useState, useEffect } from "react";
// import "./BlogComponent.css";
// import { db } from "../../firebase";
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

// const CommentComponent = (props) => {
//     const { currentUser } = useAuth();
//     const [currentProfile, setCurrentProfile] = useState("");
//     if (currentUser) {
//       db.collection("members")
//         .doc(currentUser.uid)
//         .onSnapshot(function (doc) {
//           const data = doc.data();
//           setCurrentProfile(data);
//         });
//     }



//   const fullname = currentProfile.fullname;
//   const photourl = currentUser.photoURL;
//   const date = new Date().toLocaleDateString();

//   const [comment, setComment] = useState([]);
//   const Ucomment = (e) => {
//     setComment(e.target.value);
//   };

//   // storing comments in firestore
//   const onSubmit = () => {
//     db.collection("members").doc(authorid).collection("notifications").add({
//       fullname: fullname,
//     });

//     db.collection("NewBlogcategory")
//       .doc(props.match.params.blogcategory)
//       .collection("CBlogs")
//       .doc(props.match.params.id)
//       .collection("Comments")
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
//   return (
//       <div>
//     <div>
//       <input type="text" onChange={Ucomment} value={comment} />
//       <button type="submit" onClick={onSubmit}>
//         Add comment
//       </button>
//     </div>
//     <div>
//     {blogcomment.map((user) => {
//       const users = user.id;
//       if (user.fullname === currentProfile.fullname) {
//         return (
//           <div>
//             <div>{user.fullname}</div>
//             <div>{user.date}</div>
//             <div>
//               {user.photoURL ? (
//                 <img
//                   src={user.photoURL}
//                   className="profileImage"
//                   alt="Profile"
//                 />
//               ) : (
//                 <img
//                   src="./assets/images/profile-user.svg"
//                   className="profileImage"
//                   alt="Profile"
//                 />
//               )}
//             </div>
//             <div>{user.comment}</div>
//             <div>
//               {/* <EditComments onClick={() => onEdit(user.id)} >Edit </EditComments> */}
//               <button onClick={() => onEdit(user.id)}>
//                 Edit
//               </button>
//               {/* <div className="input-group">
// <input type="text" name="author" id="author" onChange={Ucomment} name="comment" value={comment} placeholder="comment" required />
// <label for="author">Edit Comment</label>
// <button type="submit" onClick={onSubmit}>update comment</button>
// </div> */}
//             </div>
//             <div>
//               <button onClick={() => onDeleteComment(user.id)}>
//                 Delete
//               </button>
//             </div>
//             {/* <a
//               href={
//                 "/blog/" +
//                 props.match.params.blogcategory +
//                 "/" +
//                 props.match.params.id +
//                 "/" +
//                 users
//               }
//             > */}
//             <div>
//               {/* <button onClick={() => setShow(!true)}> */}
//               <button onClick={() => onVR(user.id)}>
//                 view reply
//               </button>
//               {/* </a> */}
//               {/* { show ?  */}
//               <div>
//                 <div>
//                   {commentReply.map((item) => {
//                     return (
//                       <div>
//                         <div>{item.fullname}</div>
//                         <div>{item.date}</div>
//                         <div>
//                           {item.photoURL ? (
//                             <img
//                               src={item.photoURL}
//                               className="profileImage"
//                               alt="Profile"
//                             />
//                           ) : (
//                             <img
//                               src="./assets/images/profile-user.svg"
//                               className="profileImage"
//                               alt="Profile"
//                             />
//                           )}
//                         </div>
//                         <div>{item.reply}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <input
//                   type="text"
//                   onChange={Rcomment}
//                   value={reply}
//                   placeholder={"reply "}
//                 />
//                 <button
//                   type="submit"
//                   onClick={() => onRSubmit(users)}
//                 >
//                   add reply
//                 </button>
//               </div>
//               {/* : null} */}
//             </div>
//             {/* </a> */}
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <div>{user.fullname}</div>
//             <div>{user.date}</div>
//             <div>
//               {user.photoURL ? (
//                 <img
//                   src={user.photoURL}
//                   className="profileImage"
//                   alt="Profile"
//                 />
//               ) : (
//                 <img
//                   src="./assets/images/profile-user.svg"
//                   className="profileImage"
//                   alt="Profile"
//                 />
//               )}
//             </div>
//             <div>{user.comment}</div>
//             {/* <a
//               href={
//                 "/blog/" +
//                 props.match.params.blogcategory +
//                 "/" +
//                 props.match.params.id +
//                 "/" +
//                 users
//               }
//             > */}
//             <button onClick={() => onVR(user.id)}>
//               view reply
//             </button>
//             {/* </a> */}
//             {show ? (
//               <div>
//                 <div>
//                   {commentReply.map((item) => {
//                     return (
//                       <div>
//                         <div>{item.fullname}</div>
//                         <div>{item.date}</div>
//                         <div>
//                           {item.photoURL ? (
//                             <img
//                               src={item.photoURL}
//                               className="profileImage"
//                               alt="Profile"
//                             />
//                           ) : (
//                             <img
//                               src="./assets/images/profile-user.svg"
//                               className="profileImage"
//                               alt="Profile"
//                             />
//                           )}
//                         </div>
//                         <div>{item.reply}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <input
//                   type="text"
//                   onChange={Rcomment}
//                   value={reply}
//                   placeholder={"reply "}
//                 />
//                 <button
//                   type="submit"
//                   onClick={() => onRSubmit(users)}
//                 >
//                   add reply
//                 </button>
//               </div>
//             ) : null}
//           </div>
//         );
//       }
//     })}
//   </div>
//   </div>
//   );
// };
// export default CommentComponent;
