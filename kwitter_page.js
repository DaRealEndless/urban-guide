// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDSqnMZAxcawBFOC23o86OKrsfoz2ltBQ4",
    authDomain: "letschat-8d6c4.firebaseapp.com",
    databaseURL: "https://letschat-8d6c4-default-rtdb.firebaseio.com",
    projectId: "letschat-8d6c4",
    storageBucket: "letschat-8d6c4.appspot.com",
    messagingSenderId: "274465101869",
    appId: "1:274465101869:web:5e79c08e44a012253e40a4",
    measurementId: "G-6K8KQ091SL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}