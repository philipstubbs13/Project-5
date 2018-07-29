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

// scroll reveal
window.sr = ScrollReveal();

// scroll reveal effect for portfolio page
sr.reveal('.project-card', { duration: 1800, origin: 'bottom', distance: '80px', rotate: { x: 180, y: 180, z: 180 }, easing: 'ease-in-out', delay: 300 });

// scroll reveal effect for elements on the left side of the page.
sr.reveal('.page-left', {duration: 2000, origin: 'left', distance: '50%', useDelay: 'always', easing: 'ease-in-out', delay: 300, });

// scroll reveal effect for elements on the right side of the page.
sr.reveal('.page-right', {duration: 2000, origin: 'right', distance: '50%', useDelay: 'always', easing: 'ease-in-out', delay: 300, });

// scroll reveal effect for writing projects 
sr.reveal('.writing-type', { duration: 1800, origin: 'bottom', distance: '80px', rotate: { x: 180, y: 180, z: 180 }, easing: 'ease-in-out', delay: 300 });



        