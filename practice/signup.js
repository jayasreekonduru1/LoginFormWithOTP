const submitSignupForm=document.getElementById("signup-form")
submitSignupForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let isValid = true;
    
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const gender=document.querySelector('input[name="gender"]:checked');
    const age=document.getElementById('age').value;
    const dob=document.getElementById('date').value;
    const tel=document.getElementById('tel').value;
    const state=document.getElementById('state').value;
    const photo=document.querySelector('input[name="photo"]').files[0];
    const agree=document.querySelector('input[name="agree"]:checked');

    // console.log(username)
    // console.log(email)
    // console.log(password)
    // console.log(gender)
    // console.log(age)
    // console.log(dob)
    // console.log(tel)
    // console.log(state)
    // console.log(photo)
    // console.log(agree)

    if (username.length < 6 || username.length > 15)  {
        document.getElementById('username-error').textContent = "Password must be between 6 and 15 characters";
        isValid = false;
    } else {
        document.getElementById('username-error').textContent = "";
    }

    // Validate email
    if (!email.includes('@') || !email.includes('.com')) {
        document.getElementById('email-error').textContent = "Username must contain '@' and '.com'";
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = "";
    }

    // Validate password
    if (password.length < 6 || password.length > 15) {
        document.getElementById('password-error').textContent = "Password must be between 6 and 15 characters";
        isValid = false;
    } else {
        document.getElementById('password-error').textContent = "";
    }

    // // Validate gender
    // if (!gender) {
    //     alert("Please select a gender.");
    //     isValid = false;
    // }

    // Validate age
    if (age <= 18) {
        document.getElementById('age-error').textContent="Age Should be greater than 18";
        isValid = false;
    } else {
        document.getElementById('age-error').textContent = "";
    }

    // Validate mobile number
    if (tel.length !== 10 || isNaN(tel)) {
        document.getElementById('tel-error').textContent="Mobile Number should 10 digit";
        isValid = false;
    } else {
        document.getElementById('tel-error').textContent = "";
    }

    // Validate photo
    // if (!photo) {
    //     alert("Please upload a photo.");
    //     isValid = false;
    // }

    if (isValid) {
        const userDetails = {
            username,
            email,
            password,
            age,
            tel, 
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // const otp = Math.floor(1000 + Math.random() * 9000);
        // console.log("Generated OTP:", otp);
        // localStorage.setItem('otp', otp);

        window.location.href = 'otp.html';
    }


})