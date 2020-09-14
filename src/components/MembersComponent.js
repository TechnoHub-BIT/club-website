import React from 'react';

import '../App.css';

//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';

//css
import '../styles/MembersList.css';

//Calling Firebase config setting to call the data
import {firebaseApp} from '../firebase';


class Member extends React.Component {

constructor(props) {
    
    super(props);
   
    this.state = {
        memberslist : [],
    }
    // this.open = false;
    }
  
    //Fetching for firebase realtime database
  componentDidMount() {
      // console.log("\n\n\n\n\n\n"+this.open+"\n\n\n\n\n")

      let memberlist = [];
      firebaseApp.database().ref("members").on("value", snapshot => {
        
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          this.setState({
            memberslist:[...this.state.memberslist,snap.val()]
          })
            // memberlist.push(snap.val());
        })

      });
 }

///////////////////
//firestore retrivel
// getUsers=async()=>{
//   console.log("hello");
//   let memberlist = [];
//   await firebaseApp.firestore().collection('members').get()
//   .then((snapshot) => {
//     //console.log(snapshot);
//     snapshot.forEach((doc) => {

//       memberlist.push({fullname:doc.data().fullname,branch:doc.data().branch,semester:doc.data().semester,skills:doc.data().skills});

//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });
//email : 
//abcd@abcd.abcd
//password : 
//abcdabcd
//  }


  render(){

    const tableStyle = {
      objectFit:"contain",
      overflow:"hidden"

    }

  return (
    <div className="MainDiv">    
      <div className="container">
        
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" >Full Name</th>
                    <th scope="col" >Branch</th>
                    <th scope="col" >Semester</th>
                    <th scope="col" >Skills</th>
                </tr>
            </thead>
            <tbody>
            {this.state.memberslist.map((data,i) => {
                
                return (
                    <tr key={i}>     
                    <td data-label="Full Name" >{data.fullname}</td>
                    <td data-label="Branch" >{data.branch}</td>
                    <td data-label="Semester" >{data.semester}</td>
                    <td data-label="Skills" >{data.skills}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
                
     </div>
    </div>
  );
}
}
export default Member;