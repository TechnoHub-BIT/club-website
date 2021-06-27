// import React, { Component } from "react";
// import HeaderTitle from "../../HeaderComponents/HeaderTitle";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
// } from "../../BreadcrumbComponent/BreadcrumbComponent";
// import "../../input.css";
// import ReactSummernote from "react-summernote";
// import "react-summernote/dist/react-summernote.css";
// import "bootstrap/js/dist/modal";
// import "bootstrap/js/dist/dropdown";
// import "bootstrap/js/dist/tooltip";
// import "bootstrap/dist/css/bootstrap.css";
// import { db } from "../../../firebase";
// import { Helmet } from "react-helmet";
// import { render } from "@testing-library/react";
// import { resetWarningCache } from "prop-types";
// import { useParams } from "react-router";

// class EditAchievement extends Component {
//   state = {
//     key: "",
//     achievementUrl: "",
//     achievementcontent: "",
//   };

//   componentDidMount() {
//     const ref = db.collection("Achievements").doc(this.props.achievementId);
//     ref.get().then((doc) => {
//       const event = doc.data();
//       this.setState({
//         key: doc.id,
//         achievementUrl: event.achievementUrl,
//         achievementcontent: event.achievementcontent,
//       });
//     });
//   }
//   onChange = (e) => {
//     const state = this.state;
//     state[e.target.name] = e.target.value;
//     this.setState({ Blogs: state });
//   };
//   contentChange = (value) => {
//     const currentState = this.state;
//     currentState.eventcontent = value;
//     this.setState(currentState);
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     const {
//         achievementUrl,
//         achievementcontent,
//     } = this.state;

//     const updateRef = db.collection("Achievements").doc(this.props.achievementId);
//     updateRef
//       .set({
//         achievementUrl,
//         achievementcontent,
//       })
//       .then((docRef) => {
//         this.setState({
//           key: "",
//           achievementUrl: "",
//           achievementcontent: "",
//         });
//         this.props.historyPush();
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <Helmet>
//           <title>Edit Achievement | TechnoHub BITD</title>
//         </Helmet>
//         <HeaderTitle heading="EDIT ACHIEVEMENT" />
//         <Breadcrumb>
//           <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
//           <BreadcrumbItem
//             icon="fas fa-pencil-alt"
//             title="Edit Achievement"
//             status="active"
//           />
//         </Breadcrumb>
//         <div class="addEventForm">
//           <form onSubmit={this.onSubmit}>
//             <div className="title">
//               <h3>Edit Achievement</h3>
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="achievementUrl"
//                 id="title"
//                 name="eventtitle"
//                 onChange={this.onChange}
//                 value={this.state.achievementUrl}
//                 placeholder="Event Title"
//                 required
//               />
//               <label for="title">Event Image Url</label>
//             </div>
//             <div className="summernote">
//               <ReactSummernote
//                 value={this.state.achievementcontent}
//                 options={{
//                   lang: "en-US",
//                   height: 350,
//                   dialogsInBody: true,
//                   toolbar: [
//                     ["font", ["bold", "underline"]],
//                     ["para", ["ul", "ol", "paragraph"]],
//                     ["insert", ["link", "picture"]],
//                     ["view", ["codeview"]],
//                   ],
//                 }}
//                 name="achievementcontent"
//                 onChange={this.contentChange}
//               />
//             </div>
//             <div className="input-group w50p">
//               <button type="submit">Update Achievement</button>
//             </div>
//           </form>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default EditAchievement;
