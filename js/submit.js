
var config = {
  apiKey: "AIzaSyD3Xqmh2HZNAuUYeVv7BB_kI0fZC51UDjs",
  authDomain: "impactful-hawk-359509.firebaseapp.com",
  projectId: "impactful-hawk-359509",
  storageBucket: "impactful-hawk-359509.appspot.com",
  messagingSenderId: "230259727048",
  appId: "1:230259727048:web:f517e56295355b44d023fd"
};
firebase.initializeApp(config);
window.onload = function () {
    document.getElementById('myform').addEventListener("submit", submitForm);
}

var db_ref = firebase.database().ref('records');

function getInput(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    e.preventDefault();
    saveRec(getInput('name_field'), getInput('email_field'), getInput('subject_field'), getInput('message_field'));
    document.getElementById("myform").reset();
}
function saveRec(name, email, subject, message) {
    var newRec = db_ref.push();
    newRec.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}
