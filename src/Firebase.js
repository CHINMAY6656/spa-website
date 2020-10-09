
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjZU6bvdMw57tfGkvW8_RcUKuQ40ALd8s",
    authDomain: "spa-a-ea00a.firebaseapp.com",
    databaseURL: "https://spa-a-ea00a.firebaseio.com",
    projectId: "spa-a-ea00a",
    storageBucket: "spa-a-ea00a.appspot.com",
    messagingSenderId: "761115804090",
    appId: "1:761115804090:web:c96d4a6d82eca2901c5d83",
    measurementId: "G-YDN8CREJEJ"
  };
  const StartApp = () => firebase.initializeApp(firebaseConfig);
  export default StartApp;