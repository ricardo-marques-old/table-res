import * as firebase from "firebase/app"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyBnODCqpAe9R8XFoU_tKWadRX4P8dKynO0",
  authDomain: "table-res.firebaseapp.com",
  databaseURL: "https://table-res.firebaseio.com",
  projectId: "table-res",
  storageBucket: "table-res.appspot.com",
  messagingSenderId: "794155729581"
})

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
