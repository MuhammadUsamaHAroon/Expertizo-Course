// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import swal from "sweetalert";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgqXsgkeWdmgAOFBqM0lteFQNhAk17nFM",
  authDomain: "olx-ads-data.firebaseapp.com",
  projectId: "olx-ads-data",
  storageBucket: "olx-ads-data.appspot.com",
  messagingSenderId: "578611134277",
  appId: "1:578611134277:web:6e37ae573a41a9b0cf082c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
// connectAuthEmulator(auth, "http://localhost:9099");
const storage = getStorage(app);

const registerUser = async (userDetails) => {
  const { firstName, lastName, email, password, number } = userDetails;
  // const { price } = adsDetails
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  // console.log(userCredential.user.uid)
  const uid = await userCredential.user.uid
  await setDoc(doc(db, "users", uid), {
   firstName,
   lastName,
   number,
   uid
  })
    .then(() => {
      // console.log(userCredential.user);
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

const adsData = async (adsDetails) => {
  console.log('config----->', adsDetails)
  const { title, description, price } = adsDetails
  console.log(auth.currentUser.uid)
  const uid = auth.currentUser.uid
  const ads = await setDoc(doc(db, "olxUsers", uid), {
    title,
    description,
    price,
    uid
  });
}
const getData = async () => {
  const q = query(collection(db, "olxUsers"));
  let data = []
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots 
  data = [...data, doc.data()]
  console.log(doc.id, " => ", data);
});
return data
}

const uploadImage = async (file) => {
  console.log('file---->', file)
  const imageRef = ref(storage, 'images/' + file.name);
  const uploadedImage = await uploadBytes(imageRef, file)
  const url = await getDownloadURL(uploadedImage.ref)
  console.log(url)
  return url
}

export { registerUser, loginUser, adsData, getData, uploadImage };
