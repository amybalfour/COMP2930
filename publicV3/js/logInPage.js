var database = firebase.database();

//Logs in into firebase authentication
function logIn(){
  var userEmail = document.getElementById('email').value;
  var userPassword = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function() {
    window.location.href="profilePage.html";
	window.alert("Login successful!");
  
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("\nError code: " + errorCode + "\n" + errorMessage);
    window.location.href="logInPage.html";
  }); 
}