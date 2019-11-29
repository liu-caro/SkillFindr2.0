import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZ_jHaMNAK3Zbo60JFmmmyXGD03exOZNw",
    authDomain: "skillfindr2.firebaseapp.com",
    databaseURL: "https://skillfindr2.firebaseio.com",
    projectId: "skillfindr2",
    storageBucket: "skillfindr2.appspot.com",
    messagingSenderId: "530350125523",
    appId: "1:530350125523:web:274113d40a9b2f1e66bf26",
    measurementId: "G-TD2KWLX1GQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;