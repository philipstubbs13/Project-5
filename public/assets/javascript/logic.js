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

//Google MAPS API
function initMap(){
    // Map options
    var options = {
        zoom: 8,
        center: {lat:44.9778,lng:-93.2650}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Array of markers
    var markers = [
        {
            coords:{lat:44.7677,lng:-93.2777},
            iconImage: '',
            content: '<h3>Burnsville, MN</h3>'
        }
    ];

    // Loop throug markers
    for(var i=0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map: map,
            // icon: props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
            //Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
} 

// Facebook Login Stuff
window.fbAsyncInit = function() {
    FB.init({
    appId      : '1214903891982606',
    cookie     : true,
    xfbml      : true,
    version    : 'v3.1'
    });
         
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });        
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
    if(response.status === 'connected'){
        console.log('Logged in and authenticated');
    } else {
        console.log('Not authenticated');
    }
}

function checkLoginState() {
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
}



        