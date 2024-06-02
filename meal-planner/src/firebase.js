import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDhHRLlKMvBzjEH86L-aFywX6XjjOpm6vg",
  authDomain: "mealplanner-41914.firebaseapp.com",
  projectId: "mealplanner-41914",
  storageBucket: "mealplanner-41914.appspot.com",
  messagingSenderId: "331441849798",
  appId: "1:331441849798:web:ca03e6de5995833419dec7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app