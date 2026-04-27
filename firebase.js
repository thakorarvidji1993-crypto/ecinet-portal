// 🔥 Replace config
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function saveApplication(data){
 return db.collection("applications").add(data);
}

function updateStatus(id,status){
 return db.collection("applications").doc(id).update({status});
}
