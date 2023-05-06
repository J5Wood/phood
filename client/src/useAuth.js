// import { createContext, useContext, useState } from "react";

// const authContext = createContext();

// function useAuth() {
//   const [authed, setAuthed] = useState(false);

//   return {
//     authed,
//     authorize() {
//       return new Promise((res) => {
//         setAuthed(true);
//         res();
//       });
//     },
//     unAuthorize() {
//       return new Promise((res) => {
//         setAuthed(false);
//         res();
//       });
//     },
//   };
// }

// export function AuthProvider({ children }) {
//   const auth = useAuth();

//   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// export function AuthConsumer() {
//   return useContext(authContext);
// }
