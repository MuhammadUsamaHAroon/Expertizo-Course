// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import swal from "sweetalert";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9Gibyk3RETQxk7r9Mce4feS8W35gD1Fw",
  authDomain: "quiz-app-33ce8.firebaseapp.com",
  projectId: "quiz-app-33ce8",
  storageBucket: "quiz-app-33ce8.appspot.com",
  messagingSenderId: "378525389419",
  appId: "1:378525389419:web:28d9ba7ca5f7016622172e",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
// connectAuthEmulator(auth, "http://localhost:9099");

const registerUser = async (userDetails, signUpToLogin) => {
  const { firstName, lastName, email, password, number } = userDetails;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = await addDoc(collection(db, "users"), {
    firstName,
    lastName,
    number,
  })
    .then(() => {
      console.log(userCredential.user);
      swal({
        title: "SignUp Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal({
        title: "SignUp Failed",
        text: errorMessage,
        icon: "error",
      });
    });
};

const loginUser = async (loginDetails) => {
  const { email, password } = loginDetails
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
    .then(() => {
      // console.log(userCredential.user);
      swal({
        title: "Login Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal({
        title: "Login Failed",
        text: errorMessage,
        icon: "error",
      });
    });
};

const getData = async () => {
  const q = query(collection(db, "users"));
  let data = []
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  data = [...data, doc.data()]
  console.log(doc.id, " => ", data);
});
return data
}

export { registerUser, loginUser, getData };
