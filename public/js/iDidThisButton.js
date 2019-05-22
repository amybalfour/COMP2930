var clicked = false;
var xpValue;

function exp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var gainedXp = 10;
            var user = firebase.auth().currentUser;
            var fb = firebase.database();
            if (clicked) {
                window.alert("You've already gained exp for that.")
            }
            if (!clicked) {
                fb.ref('users/' + user.uid + '/xp').once('value', function(snapshot) {
                    xpValue = snapshot.val();
                }).then(function() {
                fb.ref('users/' + user.uid).update({ xp: xpValue + gainedXp });
                window.alert("You've gained "+gainedXp+" EXP!");
                clicked = true;
                });
            }
        } else {
            $('#NoUserModal').modal('show');
        }
    })
}