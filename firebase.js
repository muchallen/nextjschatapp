import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhCQWytehDmYmHmfdgSXs0JpZ1iH5Wkeo",
    authDomain: "chat-app-whatsapp-web.firebaseapp.com",
    projectId: "chat-app-whatsapp-web",
    storageBucket: "chat-app-whatsapp-web.appspot.com",
    messagingSenderId: "939258751958",
    appId: "1:939258751958:web:b0c4195ed993e4be1d9277",
    measurementId: "G-NX46PR030F"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db =  app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db , auth, provider}