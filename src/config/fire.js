// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAIBOnVWP_S0PJklxpkEzWOl3NGBSkyUqU",
	authDomain: "remarv-169fd.firebaseapp.com",
	projectId: "remarv-169fd",
	storageBucket: "remarv-169fd.appspot.com",
	messagingSenderId: "597329307155",
	appId: "1:597329307155:web:b2a0998e35b1df054901e6",
	measurementId: "G-N7QCVV9HVQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
