// import React, { useState, useEffect } from "react";
// import ReactSummernote from "react-summernote";
// import "react-summernote/dist/react-summernote.css";
// import { useAuth } from "../../../contexts/AuthContext";
// import { db } from "../../../firebase";
// import AlertModal from "../../AlertModalComponent/AlertModalComponent";
// import { useHistory } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import { Fade } from "react-reveal";
// import HeaderTitle from "../../HeaderComponents/HeaderTitle";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
// } from "../../BreadcrumbComponent/BreadcrumbComponent";

// const AddAchievement = () => {
//   let history = useHistory();

//   //Modal
//   const [modal, showModal] = useState("");

//   const closeModal = () => {
//     showModal("");
//   };

//   //Current User Details
//   const { currentUser } = useAuth();
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     if (currentUser) {
//       db.collection("members")
//         .doc(currentUser.uid)
//         .onSnapshot(function (doc) {
//           const data = doc.data();
//           setProfiles(data);
//         });
//     }
//   }, [currentUser]);

//   const [achievementUrl, setAchievementUrl] = useState("");

//   const [achievementcontent, setAchievementContent] = useState("");
//   const content = (param) => {
//     setAchievementContent(param);
//   };
//   const onChange = (value) => {
//     content(value);
//   };

//   const handleSubmit = (e) => {
//     if (achievementUrl !== "" && achievementcontent !== "") {
//       e.preventDefault();
//       db.collection("Achievements")
//         .add({
//           achievementUrl: achievementUrl,
//           achievementcontent: achievementcontent,
//         })
//         .then(() => {
//           showModal(
//             <AlertModal
//               message="Achievement has been added successfully!"
//               icon="successful"
//               leftBtn="Okay"
//               action={() => {
//                 history.push("/achievements");
//               }}
//               close={closeModal}
//             />
//           );
//         })
//         .catch((error) => {
//           alert(error.message);
//         });
//     } else
//       showModal(
//         <AlertModal
//           message="Please fill in all the details!"
//           icon="exclamation"
//           leftBtn="Okay"
//           action={closeModal}
//           close={closeModal}
//         />
//       );
//   };

//   return (
//     <React.Fragment>
//       {modal}
//       <Helmet>
//         <title>Add Achievement | TechnoHub BITD</title>
//       </Helmet>
//       <HeaderTitle heading="ADD EVENT" />
//       <Breadcrumb>
//         <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
//         <BreadcrumbItem icon="fas fa-plus" title="Add Event" status="active" />
//       </Breadcrumb>
//       {profiles.id === 1 ? (
//         <Fade up>
//           <div className="addEventForm">
//             <form onSubmit={handleSubmit}>
//               <div className="title">
//                 <h3>Add Achievement</h3>
//               </div>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="image"
//                   id="image"
//                   onChange={(e) => setAchievementUrl(e.target.value)}
//                   value={achievementUrl}
//                   placeholder="Achievement Image"
//                   required
//                 />
//                 <label for="image">Achievement Image Drive ID(1920x1080)</label>
//               </div>
//               <div className="summernote">
//                 <ReactSummernote
//                   value={achievementcontent}
//                   options={{
//                     lang: "en-US",
//                     height: 350,
//                     dialogsInBody: true,
//                     toolbar: [
//                       ["font", ["bold", "underline"]],
//                       ["para", ["ul", "ol", "paragraph"]],
//                       ["insert", ["link", "picture"]],
//                       ["view", ["codeview"]],
//                     ],
//                   }}
//                   onChange={onChange}
//                 />
//               </div>
//               <div className="input-group w50p">
//                 <button type="submit">Add Achievement</button>
//               </div>
//             </form>
//           </div>
//         </Fade>
//       ) : (
//         <AlertModal
//           message="You aren't authorized to access this page!"
//           icon="exclamation"
//           leftBtn="Go to Home"
//           rightBtn="View Achievements"
//           action={() => {
//             history.push("/home");
//           }}
//           close={() => {
//             history.push("/achievements");
//           }}
//         />
//       )}
//     </React.Fragment>
//   );
// };

// export default AddAchievement;
