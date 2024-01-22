import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKZq5Lro5vRQujOReRGqqLhiIFCzFMGJ8",
  authDomain: "pokowebapp.firebaseapp.com",
  projectId: "pokowebapp",
  storageBucket: "pokowebapp.appspot.com",
  messagingSenderId: "898771520496",
  appId: "1:898771520496:web:4f8957185c8bd72f052b35",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
