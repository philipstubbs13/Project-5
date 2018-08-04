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
        setElements(true);
        testAPI();
    } else {
        console.log('Not authenticated');
        setElements(false);
    }
}

function checkLoginState() {
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
}

function testAPI(){
    FB.api('/me?fields=name,email,birthday,location', function(response){
        if(response && !response.error){
            console.log(response);
            // buildProfile(response);
        }

        FB.api('/me/feed', function(response){
            if(response && !response.error){
                // buildFeed(response);
            }
        });
    })
}

// function buildProfile(user){
//     let profile = `
//         <h3>${user.name}</h3>
//         <ul class="list-group">
//             <li class="list-group-item">User ID: ${user.id}</li>
//             <li class="list-group-item">Email: ${user.email}</li>
//             <li class="list-group-item">Birthday: ${user.birthday}</li>
//             <li class="list-group-item">Location: ${user.location.name}</li>
//         </ul>
//     `;

//     document.getElementById('profile').innerHTML = profile;
// }

// function buildFeed(feed){
//     let output = '<h3>Latest Posts</h3>';
//     for(let i in feed.data){
//         if(feed.data[i].message){
//             output += `
//                 <div class="card">
//                     ${feed.data[i].message} <span>${feed.data[i].created_time}</span
//                 </div>
//             `;
//         }
//     }

//     document.getElementById('feed').innerHTML = output;
// }

const authContent = document.getElementsByClassName('authenticated');
const unauthContent = document.getElementsByClassName('not-authenticated');

function setElements(isLoggedIn){
    if(isLoggedIn){
        document.getElementById('logout').style.display = 'block';
        // document.getElementById('profile').style.display = 'block';
        // document.getElementById('feed').style.display = 'block';
        document.getElementById('fb-btn').style.display = 'none';
        document.getElementById('heading').style.display = 'none';
        for (i = 0; i < authContent.length; i++) {
            authContent[i].style.display = "block";
        }
        for (i = 0; i < unauthContent.length; i++) {
            unauthContent[i].style.display = "none";
        }

    } else {
        document.getElementById('logout').style.display = 'none';
        // document.getElementById('profile').style.display = 'none';
        // document.getElementById('feed').style.display = 'none';
        document.getElementById('fb-btn').style.display = 'block';
        document.getElementById('heading').style.display = 'block';
        for (i = 0; i < authContent.length; i++) {
            authContent[i].style.display = "none";
        }
        for (i = 0; i < unauthContent.length; i++) {
            unauthContent[i].style.display = "block";
        }

    }
}

function logout(){
    FB.logout(function(response){
        setElements(false);
    });
}