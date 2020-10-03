export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;

// import React,{useEffect, useState} from "react";
// import {firebaseApp} from './firebase';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [pending, setPending] = useState(true);

// useEffect(()=>{
//     firebaseApp.auth().onAuthStateChanged((user)=>{
//         setCurrentUser(user)
//         setPending(false)
//     });
// }, []);

//     if(pending){
//         return <>Loading ... </>
//     }

//     return (
//         <AuthContext.Provider
//         value={{
//             currentUser
//         }}
//         >
//             {children}
//         </AuthContext.Provider>
//     )

// };
