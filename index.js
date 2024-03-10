// Function to initialize Google Sign-In
function init() {
    gapi.load('auth2', function() {
        var auth2 = gapi.auth2.init({
            client_id: '509346360505-3np7pn849nskuercs5dqad9sgqooksod.apps.googleusercontent.com',
            // Specify your login endpoint
            login_hint: '',
            // Add any additional options here if needed
        });

        // Get reference to your sign-in button
        var signInButton = document.getElementById('g_id_signin');

        // Attach click event listener to sign-in button
        signInButton.addEventListener('click', function() {
            // Trigger Google Sign-In process
            auth2.signIn().then(onSuccess).catch(onFailure);
        });
    });
}

// Function to handle successful sign-in
function onSuccess(user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
    window.location.href = "patientmenu.html";
}

// Function to handle sign-in failure
function onFailure(error) {
    console.error('Sign-in failed:', error);
}
