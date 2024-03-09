function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".main").css("display","none");
  alert('User signed in.');
  
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert('User signed out.');
    $(".main").css("display","none");
  });
}