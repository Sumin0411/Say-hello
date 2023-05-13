// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNil9-0jCUukkVfaYPhjEfiRH60-hUT5U",
  authDomain: "say-hello-69b0f.firebaseapp.com",
  databaseURL: "https://say-hello-69b0f-default-rtdb.firebaseio.com",
  projectId: "say-hello-69b0f",
  storageBucket: "say-hello-69b0f.appspot.com",
  messagingSenderId: "622645430907",
  appId: "1:622645430907:web:85a623c9208fe6540a70de",
  measurementId: "G-F1ZFYD72NK"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


// module export 방법 찾기