var clicked = false;
var fb = firebase.database();
var xpValue;
var user = firebase.auth().currentUser;

function exp() {
  if (user) {
    var exp = 3;
    if (clicked) {
      window.alert("You've already gained exp for that.")
    }
    if (!clicked) {
      fb.ref('Users/user1/xp').once('value', function(snapshot) {
        xpValue = snapshot.val();
      }).then(function() {
      fb.ref("Users/user1").update({ xp: xpValue +3 });
        window.alert("You've gained "+exp+" EXP!");
        clicked = true;
      });
    }
  } else {
    $('#NoUserModal').modal('show');
    //window.alert("You need to create an account to earn exp!");
  }
}