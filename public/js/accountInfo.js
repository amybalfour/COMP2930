var database = firebase.database();

// logging out of account
function logOut(){

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href="./index.html";
    window.alert("Log out successful");
  }).catch(function(error) {
    // An error happened.
    window.alert("\nError code: " + errorCode + "\n" + errorMessage);
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      document.getElementById('newUser').style.display="none";
      document.getElementById('oldUser').style.display="block";

  } else {
    document.getElementById('oldUser').style.display="none";
    document.getElementById('newUser').style.display="block";
    // No user is signed in.
  }
});
