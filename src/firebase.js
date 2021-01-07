import firebase from "firebase/app" 
import "firebase/auth"
 
const app = firebase.initializeApp({ 
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, 
    databaseurl: process.env.REACT_APP_FIREBASE_DATABASE_URL, 
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
    appId: process.env.REACT_APP_FIREBASE_APP_ID, 
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT 
}) 
 
export const auth = app.auth() 
export default app