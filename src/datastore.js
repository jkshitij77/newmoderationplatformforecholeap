import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy8Wttj52crFopAzsnlopn8BQPiab-s4w",
  authDomain: "echoleap-dd329.firebaseapp.com",
  databaseURL: "https://echoleap-dd329.firebaseio.com",
  projectId: "echoleap-dd329",
  storageBucket: "echoleap-dd329.appspot.com",
  messagingSenderId: "792852640197",
  appId: "1:792852640197:web:5b4482812d60fa284d1bac",
  measurementId: "G-GQNEVSM04B",
};

var app = firebase.initializeApp(firebaseConfig);
const ourAuth = firebase.auth();
const db = firebase.firestore(app);
var storageRef = firebase.storage().ref();

export function signOut() {
  ourAuth.signOut().catch(function (error) {
    console.log("error creating user and password");
  });
}

export function signIn(email, password) {
  ourAuth.signInWithEmailAndPassword(email, password).then(function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Welcome!");
        console.log(user.email);
      }
    });
  });
}

export function addNewPost(Title, Body, CreatedOn, LinkMap, Url) {
  db.collection("posts")
    .add({
      title: Title,
      body: Body,
      createdOn: CreatedOn,
      links: LinkMap,
      imageUrl: Url,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

export async function uploadImage(file, metadata) {
  console.log("IN DS UPLOAD");
  var uploadTask = storageRef.child(file.name).put(file, metadata);
  await uploadTask.then();
  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
        default:
          console.log("DEFAULT");
      }
    },
    function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          console.log("Unauthorized to upload");
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log("Unknown error");
          break;
        default:
      }
    },
    function () {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log("File available at", downloadURL);
      });
    }
  );

  let url = await uploadTask.snapshot.ref.getDownloadURL();

  return url;
}

export async function getWritersDocument() {
  var docRef = db.collection("writers").doc("WRITERS");
  let docSnapshot = await docRef.get();
  return docSnapshot.data().idArray;
}

export async function getModeratorsDocument(){
  var docRef = db.collection("moderators").doc("MODERATORS");
  let docSnapshot = await docRef.get();
  return docSnapshot.data().idArray;

}
