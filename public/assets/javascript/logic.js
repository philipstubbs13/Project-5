// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQM9J6UPcXMX3Y-l_pWLnZ4N94HEdSpNk",
  authDomain: "code-portfolio.firebaseapp.com",
  databaseURL: "https://code-portfolio.firebaseio.com",
  projectId: "code-portfolio",
  storageBucket: "code-portfolio.appspot.com",
  messagingSenderId: "254125652507"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, phone, message);

   // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
   }, 5000);

   // Clear form
   document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id){
 return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
    var  newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}




        