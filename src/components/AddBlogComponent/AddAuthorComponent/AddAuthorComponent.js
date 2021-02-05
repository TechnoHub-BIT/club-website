// import React, { Component } from "react";
// import "../../input.css";
// import { db } from "../../../firebase";

// class AddAuthorComponent extends Component {
//     state = {
//         fullname : null
//     }

//     componentDidMount() {
//         db.collection('members')
//             .get()
//             .then(snapshot => {
       

//                 const Blogauthors = []
//                 snapshot.forEach(doc => {
//                     const data = doc.data()
//                     Blogauthors.push(data)
//                 })
//                 this.setState({ fullname: Blogauthors })
//             })
//             .catch(error => console.log(error))
//     }

//     render() {
//         let i = 0;

//         return (
//             <React.Fragment>
//                 <input list="authors" name="author" id="author" onChange={this.props.author} value={this.props.fullname} />
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