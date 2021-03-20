import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBTQoc26NKp7p0VaN1OGlZdKDbVqqKE0P0",
    authDomain: "login-bcbf2.firebaseapp.com",
    projectId: "login-bcbf2",
    storageBucket: "login-bcbf2.appspot.com",
    messagingSenderId: "1092837170145",
    appId: "1:1092837170145:web:9fa4f6392a1fd16c8f50a0"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;