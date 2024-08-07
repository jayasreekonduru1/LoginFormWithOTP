

// document.addEventListener('DOMContentLoaded', function() {
//     const email = sessionStorage.getItem('email');
//     const userDetailsContainer = document.getElementById('userDetails');

//     if (email) {
//         const user = JSON.parse(localStorage.getItem(email));
//         userDetailsContainer.innerHTML = `
//             <p>Username: ${user.username}</p>
//             <p>Email: ${user.email}</p>
//             <p>Gender: ${user.gender}</p>
//             <p>Age: ${user.age}</p>
//             <p>Date of Birth: ${user.dob}</p>
//             <p>State: ${user.state}</p>
//             <p>Address: ${user.address}</p>
//             <p>Mobile: ${user.mobile}</p>
//             <img src="${user.profileImage}" alt="Profile Image" style="max-width: 150px; border-radius: 50%;">
//         `;
//     } else {
//         window.location.href = 'index.html';
//     }
// });

// // function logout() {
// //     sessionStorage.removeItem('email');
// //     window.location.href = 'index.html';
// // }

// //Logout function to clear session and redirect to login page
// function logout() {
//     sessionStorage.removeItem('email');
//     localStorage.removeItem('googleUser');
//     window.location.href = 'index.html';
// }

// let params={}
//         let regex=/([^&=]+)=([^&]*)/g,m
//         while(m=regex.exec(location.href)){
//             params[decodeURIComponent(m[1])]=decodeURIComponent(m[2])
//         }
//         if(Object.keys(params).length>0){
//             localStorage.setItem('authInfo', JSON.stringify(params))
//         }
//         //hide the access token
//         window.history.pushState({},document.title,"/"+"home.html")
//         let info=JSON.parse(localStorage.getItem('authInfo'))
//         console.log(JSON.parse(localStorage.getItem('authInfo')))
//         console.log(info['access_token'])
//         console.log(info['expires_in'])

//         fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
//             headers:{
//                 "Authorization":`Bearer ${info['access_token']}`
//             }
//         })
//         .then((data)=>data.json())
//         .then((info)=>{
//             console.log(info)
//             document.getElementById('name').innerHTML += info.name
//             document.getElementById('image').setAttribute('src',info.picture)
//         })

//         function logout(){
//             fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'],{
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/x-www-form-urlencoded'
//                 }
//             })
//             .then((data)=>{
//                 location.href="http://127.0.0.1:5500/index.html"
//             })
//         }





// // home.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Check for existing user details in session or local storage
//     const email = sessionStorage.getItem('email');
//     const googleUser = JSON.parse(localStorage.getItem('googleUser'));

//     const userDetailsContainer = document.getElementById('userDetails');

//     if (email) {
//         // Display details for standard login
//         const user = JSON.parse(localStorage.getItem(email));
//         if (user) {
//             userDetailsContainer.innerHTML = `
//                 <p>Username: ${user.username}</p>
//                 <p>Email: ${user.email}</p>
//                 <p>Gender: ${user.gender}</p>
//                 <p>Age: ${user.age}</p>
//                 <p>Date of Birth: ${user.dob}</p>
//                 <p>State: ${user.state}</p>
//                 <p>Address: ${user.address}</p>
//                 <p>Mobile: ${user.mobile}</p>
//             `;
//         }
//     } else if (googleUser) {
//         // Display details for Google login
//         userDetailsContainer.innerHTML = `
//             <p>Full Name: ${googleUser.name}</p>
//             <p>Email: ${googleUser.email}</p>
//             <img src="${googleUser.picture}" alt="Profile Picture">
//         `;
//     } else {
//         // No user is logged in, redirect to login page
//         window.location.href = 'index.html';
//     }
// });

// // Logout function to clear session and redirect to login page
// function logout() {
//     sessionStorage.removeItem('email');
//     localStorage.removeItem('googleUser');
//     window.location.href = 'index.html';
// }


document.addEventListener('DOMContentLoaded', function() {
    const userDetailsContainer = document.getElementById('userDetails');
    const profileContainer = document.getElementById('profileContainer');
    const profileImage = document.getElementById('profileImage');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const userActions = document.getElementById('userActions');

    userActions.addEventListener('change', function() {
        if (userActions.value === 'logout') {
            logout();
        }
    });
    // Check if redirected from Google with access token
    let params = {};
    let regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(location.hash.substring(1))) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    // If access token is present in URL, process it
    if (params['access_token']) {
        // Store the auth info in localStorage
        localStorage.setItem('authInfo', JSON.stringify(params));

        // Hide the access token from the URL
        window.history.pushState({}, document.title, "/home.html");

        // Fetch user info using the access token
        fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${params['access_token']}`
            }
        })
        .then(response => response.json())
        .then(user => {
            console.log(user); // Debug info
            profileImage.src = user.picture;
            usernameDisplay.textContent = user.name;
            // Display user info on the homepage
            // userDetailsContainer.innerHTML = `
            //     <p>Full Name: ${user.name}</p>
            //     <p>Email: ${user.email}</p>
            //     <img src="${user.picture}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;">
            // `;
            // Store user info for later use
            localStorage.setItem('googleUser', JSON.stringify(user));
        })
        .catch(error => console.error('Error fetching user info:', error));
    } else {
        // Check for stored user session
        const email = sessionStorage.getItem('email');
        const googleUser = JSON.parse(localStorage.getItem('googleUser'));

        if (email) {
            // Display details for standard login
            const user = JSON.parse(localStorage.getItem(email));
            if (user) {
                profileImage.src = user.profileImage;
                usernameDisplay.textContent = user.username;
                // userDetailsContainer.innerHTML = `
                //     <p>Gender: ${user.gender}</p>
                //     <p>Age: ${user.age}</p>
                //     <p>Date of Birth: ${user.dob}</p>
                //     <p>State: ${user.state}</p>
                //     <p>Address: ${user.address}</p>
                //     <p>Mobile: ${user.mobile}</p>
                // `;
                
            }
        } else if (googleUser) {
            // Display details for Google login
            profileImage.src = googleUser.picture;
            usernameDisplay.textContent = googleUser.name;
            // Display details for Google login
            // userDetailsContainer.innerHTML = `
            //     <p>Full Name: ${googleUser.name}</p>
            //     <p>Email: ${googleUser.email}</p>
            //     <img src="${googleUser.picture}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;">
            // `;
        } else {
            // No user is logged in, redirect to login page
            window.location.href = 'index.html';
        }
    }
});

// Logout function to clear session and redirect to login page
function logout() {
    sessionStorage.removeItem('email');
    localStorage.removeItem('googleUser');
    const authInfo = JSON.parse(localStorage.getItem('authInfo'));
    if (authInfo && authInfo['access_token']) {
        // Revoke the Google access token
        fetch("https://oauth2.googleapis.com/revoke?token=" + authInfo['access_token'], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(() => {
            localStorage.removeItem('authInfo');
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error revoking token:', error);
            window.location.href = 'index.html';
        });
    } else {
        window.location.href = 'index.html';
    }
}





