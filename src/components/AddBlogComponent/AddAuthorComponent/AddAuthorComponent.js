// import React, { Component } from "react";
// import "../../input.css";
// import { db } from "../../../firebase";

// class AddAuthorComponent extends Component {
//     state = {
//         fullname: ''
//     }

//     componentDidMount() {
//         // db.collection('members')
//         //     .get()
//         //     .then(snapshot => {
//                 db.collection("members").orderBy("fullname")
//                 .get()
//                 .then((querySnapshot) => {
//                   const data = querySnapshot.docs.map((doc) => doc.data());

//                 // const Blogcategorytype = []
//                 // snapshot.forEach(doc => {
//                 //     const data = doc.data()
//                 //     Blogcategorytype.push(data)
              
//                 this.setState({ blogauthor : fullname })
//             })
//             .catch(error => console.log(error))
//     }

//     render() {
//         let i = 0;

//         return (
//             <React.Fragment>
//                 <input list="authors" name="author" id="author" onChange={this.props.author} value={this.props.blogauthor} />
//                 <datalist id="authors">
//                     <option value="">--Select Category--</option>
//                     {
//                         this.state.fullname && this.state.fullname.map(Blogcategorytype => {
//                             i++;
//                             return (
//                                 <option key={i}>{Blogcategorytype.fullname}</option>
//                             );
//                         })
//                     }
//                 </datalist> 
//             </React.Fragment>
//         );         
//     }
    
// }

// export default AddAuthorComponent;