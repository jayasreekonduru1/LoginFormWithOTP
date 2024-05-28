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
function checkInput(){

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
    if(validEmail && validPassword){
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        window.location.href='otp.html'
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























