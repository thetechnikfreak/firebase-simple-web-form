
var config = {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    databaseURL: "<your-database-url>",
    projectId: "<your-project-id>",
    storageBucket: "<your-storage_bucket>",
    messagingSenderId: "<your-message-sender-id>"
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