// import React, { useState } from "react";
// import { storage } from "../../firebase";

// export default function App() {
//   const [file, setFile] = useState(null);
//   const [url, setURL] = useState("");

//   function handleChange(e) {
//     setFile(e.target.files[0]);
//   }

//   function handleUpload(e) {
//     e.preventDefault();
//     const uploadTask = storage.ref(`/images/${file.name}`).put(file);
//     uploadTask.on("state_changed", console.log, console.error, () => {
//       storage
//         .ref("images")
//         .child(file.name)
//         .getDownloadURL()
//         .then((url) => {
//           setFile(null);
//           setURL(url);
//         });
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleUpload}>
//         <input type="file" onChange={handleChange} />
//         <button disabled={!file}>upload to firebase</button>
//       </form>
//       <img src={url} alt="" />
//     </div>
//   );
// }

// REACT_APP_FIREBASE_API_KEY=AIzaSyDHtL3pN1p8KzvI24Bp40YUpHR4uKs3PGw
// REACT_APP_FIREBASEZ_AUTH_DOMAIN=technohub-web.firebaseapp.com
// REACT_APP_FIREBASE_DATABASE_URL=https://technohub-web.firebaseio.com
// REACT_APP_FIREBASE_PROJECT_ID=technohub-web
// REACT_APP_FIREBASE_STORAGE_BUCKET=technohub-web.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=112818585976
// REACT_APP_FIREBASE_APP_ID=1:112818585976:web:5016a114ee83613709c88d
// REACT_APP_FIREBASE_MEASUREMENT_ID=G-0QLV7TLK08g