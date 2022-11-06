import firebase from "firebase/app";
import "firebase/auth"


 const app=firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRBASE_PROJECTED_ID,
    storageBucket: process.env.REACT_APP_FIRBASE_STOARGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRBASE_MASSAGING_SENDING_ID,
    appId: process.env.REACT_APP_FIRBASE_APP_ID
})


export const auth= app.auth()
export default app