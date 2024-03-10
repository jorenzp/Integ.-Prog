function onSignIn(googleUser) {
    // Handle the sign-in process, you can send the user's credentials to your backend for further authentication
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send this directly to your server!
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
}

function renderButton() {
    gapi.signin2.render('google-signin-button', {
        'scope': 'email',
        'width': 200,
        'height': 40,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': onSignIn
    });
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}