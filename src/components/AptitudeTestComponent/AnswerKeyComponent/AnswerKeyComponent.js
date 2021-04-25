// import React, { useState, useEffect } from "react";
// import { db } from "../../../firebase";
// import { useAuth } from "../../../contexts/AuthContext";

// const AnswerKey = (props) => {
//   const [tests, setTest] = useState(['']);
//   useEffect(() => {
//       db.collection("members")
//       .doc(currentUser.uid)
//       .collection("tests").doc(props.match.param.id)
//       .get()
//       .then((response) => {
//         const fetchResults = [];
//         response.forEach((document) => {
//           const fetchResult = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchResults.push(fetchResult);
//         });
//         setTest(fetchResults);
//       });
//   }, []);

//   const { currentUser, logout } = useAuth();
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
//   return <React.Fragment>
//     {tests.answers} 
//   </React.Fragment>;
// };

// export default AnswerKey;
