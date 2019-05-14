var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var fb = database.ref();
    var user = firebase.auth().currentUser;
    //let user = Auth.auth().currentUser
    let email = user.email;

    document.getElementById('accountName').innerHTML = email;
  }
});

// logging out of account
function logOut(){

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href="Home Page V3 - No Login.html.html";
    window.alert("Log out successful");
  }).catch(function(error) {
    // An error happened.
    window.alert("\nError code: " + errorCode + "\n" + errorMessage);
  });
}
