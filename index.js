function signInWithGoogle() {
    // Trigger the Google sign-in process
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function(googleUser) {
      var profile = googleUser.getBasicProfile();
      window.location.href = "patientmenu.html";
    });
  }
