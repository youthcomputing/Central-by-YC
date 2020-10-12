import { createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import * as CONFIG from "../Constants/Config";

const firebaseAuthConfig = {
  apiKey: CONFIG.FIREBASE_AUTH_API_KEY,
  authDomain: CONFIG.FIREBASE_AUTH_DOMAIN,
  databaseURL: CONFIG.FIREBASE_DATABASE_URL,
  projectId: CONFIG.FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseAuthConfig);
const auth = firebase.auth();
const persistence = firebase.auth.Auth.Persistence;
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const FirebaseContext = createContext({ auth, persistence, googleProvider, facebookProvider });
