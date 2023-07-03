import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  databaseURL: "https://fir-test-b45a9-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase(app);
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : [
        imageUrl, 
        "bgbfg", 
        "vfdvfdv", 
        "vfvfd"
    ]
  });
}

writeUserData(2, 'Grrrrr', 'grrrrr@gmail.com', '/m.png');

const db = getDatabase(app);
const idRef = ref(db, 'users/' + 2);
onValue(idRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data);
})