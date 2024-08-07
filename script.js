const passwordInput=document.querySelector('#password')
const toggle=document.getElementById('btnToggle')
const icon=document.getElementById('icon');

function togglePassword(){
    if(passwordInput.type === 'password'){
        passwordInput.type='text';
        icon.classList.add("fa-eye-slash")
        icon.classList.remove("fa-eye")
    }else{
        passwordInput.type='password';
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    }
}

toggle.addEventListener('click', togglePassword, false)

function validateForm(){
    let email=document.querySelector('input[type="email"]').value
    let password=document.getElementById("password").value
    let emailErrorElement=document.getElementById('emailError')
    let passwordErrorElement=document.getElementById('passwordError')
    const generalErrorElement = document.getElementById('error');
    
    const validEmail=validateEmail(email)
    const validPassword=validatePassword(password)
    if (!email.trim() || !password.trim()) {
        generalErrorElement.textContent = 'Please enter your email and password.';
        return;
      }
    console.log(email)
    console.log(password)
    if(!validEmail){
        emailErrorElement.textContent='Invalid email format.'
    }
    if(!validPassword){
        passwordErrorElement.textContent='Password must be 6-11 characters long'
    }
    // if(validEmail && validPassword){
    //     sessionStorage.setItem('email', email);
    //     sessionStorage.setItem('password', password);
    //     window.location.href='otp.html'
    // }
    // Check if credentials match any user in localStorage
    let storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
        // Credentials are correct, proceed to home page
        sessionStorage.setItem('email', email);
        window.location.href = 'home.html';
    } else {
        // Invalid credentials
        generalErrorElement.textContent = 'Invalid email or password.';
    }

}
document.getElementById('email').addEventListener('focus', function() {
    document.getElementById('emailError').textContent = '';
    document.getElementById('error').textContent = '';
    
});
  
    document.getElementById('password').addEventListener('focus', function() {
    document.getElementById('passwordError').textContent = '';
    document.getElementById('error').textContent = '';
});

function validateEmail(email){
    // const emailPattern=/^[^/s@]+@[^\s@]+\.(com|in)$/
    const emailPattern=/@.*\.(com|in)$/
    return emailPattern.test(email);
}

function validatePassword(password){
    return password.length>5 && password.length<12;
}

function signIn() {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    let params = {
        "client_id": "725021247209-t0qq5jpudu70ge2h50c869amr0ssvmvf.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5500/home.html", // Replace with your correct redirect URI
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
        "include_granted_scopes": "true",
        "state": "pass-through-value"
    };

    let url = `${oauth2Endpoint}?${new URLSearchParams(params).toString()}`;
    window.location = url; // Redirect to Google's OAuth 2.0 server
}

// //GoogleLogin
// function signIn(){
//     let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

//     let form=document.createElement('form')
//     form.setAttribute('method','GET')
//     form.setAttribute('action',oauth2Endpoint)

//     let params = {
//         "client_id": "725021247209-t0qq5jpudu70ge2h50c869amr0ssvmvf.apps.googleusercontent.com",
//         "redirect_uri": "http://127.0.0.1:5500/home.html",
//         "response_type": "token",
//         "scope": "https://www.googleapis.com/auth/userinfo.profile",
//         "include_granted_scopes":"true",
//         "state": 'pass-through-value'
//     }

//     for(var p in params){
//         let input=document.createElement('input')
//         input.setAttribute('type','hidden')
//         input.setAttribute('name',p)
//         input.setAttribute('value',params[p])
//         form.appendChild(input)
//     }

//     document.body.appendChild(form)
    
//     form.submit()
// }

// // Google OAuth login initiation
// function signIn() {
//     let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
//     let params = {
//         "client_id": "725021247209-t0qq5jpudu70ge2h50c869amr0ssvmvf.apps.googleusercontent.com",
//         "redirect_uri": "http://127.0.0.1:5500/home.html",
//         "response_type": "token",
//         "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//         "include_granted_scopes": "true",
//         "state": "pass-through-value"
//     };

//     // Create the OAuth login URL
//     let oauthUrl = oauth2Endpoint + '?' + new URLSearchParams(params).toString();
//     // Redirect to Google OAuth login
//     window.location.href = oauthUrl;
// }
// // Fetch Google user info using the access token
// function fetchGoogleUserInfo(token) {
//     fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
//     .then(response => response.json())
//     .then(info => {
//         // Store user info in local storage
//         localStorage.setItem('googleUser', JSON.stringify(info));
//         // Redirect to home page
//         window.location.href = 'home.html';
//     })
//     .catch(error => {
//         console.error('Error fetching Google user info:', error);
//         // Handle error (optional: redirect to an error page or show an error message)
//     });
// }























