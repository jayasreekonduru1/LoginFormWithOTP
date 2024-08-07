// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("name").textContent = profile.getName();
    document.getElementById("email").textContent = profile.getEmail();
    document.getElementById("image").src = profile.getImageUrl();
    document.querySelector(".data").style.display = "block";
    document.querySelector(".g-signin2").style.display = "none";
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert('You have been signed out successfully');
        document.querySelector(".g-signin2").style.display = "block";
        document.querySelector(".data").style.display = "none";
    });
}

//   function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     ${"#name"}.text(profile.getName());
//     ${"#email"}.text(profile.getEmail());
//     ${"#image"}.attribute('src'.profile.getImageUrl());
//     $(".data").css("display","block");
//     ${".g-signin2"}.css("display","none");
//   }


//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       alert('You have been signed out successfully');
//       ${".g-signin2"}.css("display","block");
//       $(".data").css("display","none");
//     });
//   }
