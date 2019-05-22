var database = firebase.database();

//Creates an account under certain restrictions
function createAccount(){
  var userEmail = document.getElementById('createEmail').value;
  var userPassword = document.getElementById('createPass').value;
  var passwordVerif = document.getElementById('passVerif').value;
  n = new Date();
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  var dateCreated = m + "/" + d + "/" + y;

  if(userPassword == passwordVerif){
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(function() {
		var user = firebase.auth().currentUser;
		firebase.database().ref("users/"+user.uid).update(
		{
         "email":user.email,
         "xp":0,
         "dateCreated":dateCreated,
		 "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        });
	  window.alert("Sign up successful!");
      window.location.href="profilePage.html";

    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;      
      window.alert("\nError code: " + errorCode + "\n" + errorMessage);
    });   
  } else {
    window.alert("passwords are not equal");
  }
}