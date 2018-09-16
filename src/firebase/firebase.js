import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnw5iB2cvsi76008l-efKM-Punmk_iv64",
    authDomain: "expense-tracker-e9e55.firebaseapp.com",
    databaseURL: "https://expense-tracker-e9e55.firebaseio.com",
    projectId: "expense-tracker-e9e55",
    storageBucket: "expense-tracker-e9e55.appspot.com",
    messagingSenderId: "396396995862"
  };
  firebase.initializeApp(config);


  const database =firebase.database();
  //creating instance of Provider..provider is a way to provide authentication
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  

  export {googleAuthProvider, firebase, database as default};
  
  //instead of just dispatching the action, we will save the data to database and then dispatch the action
  // this will save the data even on full page refresh.

  //also we can add this logic into AddExpensePage component, but we dont want our components directly communicating to database
  //rather we want to use them only for presentational purposes.
  //so all this logic will be written into actions folder's respective export const
  