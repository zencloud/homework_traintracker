
/* App Flow

    (Render Data)
    - Get array/info from database
    - Parse info, calculate, render to dom

    (Submit Data)
    - Get/Validate Input values
    - Format into package and send to database
*/

// Core App Data
const appData = {
    inputCollection: {},
    lastPackage: {}
}


// Let's get firebase up and running
const firebaseConfig = {
    apiKey: "AIzaSyCQIBA5r8sMhaoJVEL1h_L5QfUMTbdUHxo",
    authDomain: "class-test-698d4.firebaseapp.com",
    databaseURL: "https://class-test-698d4.firebaseio.com",
    projectId: "class-test-698d4",
    storageBucket: "class-test-698d4.appspot.com",
    messagingSenderId: "904233580187",
    appId: "1:904233580187:web:5580f75bfc7c8518"
};

// Configure db for easy access to core database
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

app_data_collect();