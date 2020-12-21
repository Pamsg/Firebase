import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCLmlOFaweQ2DsDQ_86rkuEtXLqrQGkx8I",
    authDomain: "nyous-a245e.firebaseapp.com",
    projectId: "nyous-a245e",
    storageBucket: "nyous-a245e.appspot.com",
    messagingSenderId: "116699014642",
    appId: "1:116699014642:web:157dd5a4e63f48e10cb76b",
    measurementId: "G-P4VFSPKRRG"
};

//Recebe informações do initializeApp, retorna as info
const app = firebase.initializeApp(firebaseConfig);

//Para utilizar o firestore nas páginas
export const db = app.firestore();

export default firebaseConfig;