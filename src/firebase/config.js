import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {

    apiKey: "AIzaSyC1u3QBLVW9tfjb6bnVhbhiaFhK3PRv7BI",
  
    authDomain: "personalgallery-1c69b.firebaseapp.com",
  
    projectId: "personalgallery-1c69b",
  
    storageBucket: "personalgallery-1c69b.appspot.com",
  
    messagingSenderId: "135956737050",
  
    appId: "1:135956737050:web:68213ed6b1c321e2e1f5a3"
  
  };
  export default firebase.initializeApp(firebaseConfig)