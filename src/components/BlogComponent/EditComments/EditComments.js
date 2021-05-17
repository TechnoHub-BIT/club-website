// import React, { useState,Component  } from "react";
// // import "./EditBlogComponent.css";
// import HeaderTitle from "../../HeaderComponents/HeaderTitle";
// import { Breadcrumb, BreadcrumbItem } from "../../BreadcrumbComponent/BreadcrumbComponent";
// import "../../input.css";
// import ReactSummernote from 'react-summernote';
// import 'react-summernote/dist/react-summernote.css';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';
// import { db } from "../../../firebase";
// import { Link } from 'react-router-dom';
// import { Helmet } from "react-helmet";
// import { render } from "@testing-library/react";
// import queryString from "../query";



// class EditComments extends Component {

//     //   ref = db.collection('Blogcategory');
//       state = {
//         key: '',
//         comment: '',
//         date: '',

//     };

//  date = new Date().toLocaleDateString();
// onEdit = (id) => {
//     const ref =  db.collection("NewBlogcategory")
//     .doc(this.props.match.params.blogcategory)
//     .collection("CBlogs")
//     .doc(this.props.match.params.id)
//     .collection("Comments")
//     .doc(id);
//     ref.get().then((doc) => {
//         if (doc.exists) {
//             const Blogcategory = doc.data();
//             this.setState({
//                 key: doc.id,
//                 comment: Blogcategory.comment,
//                 date: Blogcategory.date,
//                 // fullname: Blogcategory.fullname,
//                 // photourl: Blogcategory.photourl,
//             });
//         } else { 
//             console.log("No such document!");
//         }
//     });
// }

// onChange = (e) => {
//     const state = this.state
//     state[e.target.name] = e.target.value;
//     this.setState({ Blogcategory: state });
// }


// onSubmit = (e) => {
//     e.preventDefault();
//     const {  comment, date } = this.state;
//     const updateRef =  db.collection("NewBlogcategory")
//     .doc(this.props.match.params.blogcategory)
//     .collection("CBlogs")
//     .doc(this.props.match.params.id)
//     .collection("Comments")
//     .doc(id);
//     updateRef.update({
//                comment,
//                 date,
                
//     }).then((docRef) => {
//         this.setState({
//             key: '',
//             comment: '',
//             date: '',


//         });
//       //  this.props.history.push("/editblogcategory/" + this.props.match.params.blogcategory)
//     })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });
//     }

  
//     render() {
//       return (
//         <form>
//         <div className="input-group">
//             <input type="text" name="author" id="author" onChange={this.onChange} name="comment" value={this.state.comment} placeholder="comment" required />
//             <label for="author">Category Name</label>
//         </div>
//         <div className="input-group w50p">
//             <button type="submit" onClick={this.onSubmit}>Update Category</button>
//         </div>
//     </form>
//       );
//     }
//   }
  
//   export default  EditComments;








