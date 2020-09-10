//new
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
      firebaseApp.database().ref("members").on("value", snapshot => {
        let memberlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            memberlist.push(snap.val());
        });
        this.setState({ memberslist: memberlist });
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
         {/* <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">Account</th>
      <th scope="col">Due Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Period</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">Visa - 3412</td>
      <td data-label="Due Date">04/01/2016</td>
      <td data-label="Amount">$1,190</td>
      <td data-label="Period">03/01/2016 - 03/31/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Visa - 6076</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$2,443</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Corporate AMEX</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$1,181</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Acount">Visa - 3412</td>
      <td data-label="Due Date">02/01/2016</td>
      <td data-label="Amount">$842</td>
      <td data-label="Period">01/01/2016 - 01/31/2016</td>
    </tr>
  </tbody>
</table> */}
          
     </div>
    </div>
  );
}
}
export default Member;