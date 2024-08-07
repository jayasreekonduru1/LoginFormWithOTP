// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form values
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     //const gender = document.getElementById('gender').value;
//     const gender=document.querySelector('input[name="gender"]:checked').value;
//     const age = document.getElementById('age').value;
//     const dob = document.getElementById('dob').value;
//     const state = document.getElementById('state').value;
//     //const stateValue=document.getElementById('.state').textContent=state
//     const address = document.getElementById('address').value;
//     const mobile = document.getElementById('mobile').value;
//     const agree = document.getElementById('agree').checked;
//     const profileImageError = document.getElementById('profileImageError');
//     const signupToast=document.getElementById('liveSignupToastBtn')
//     const liveToastExample=document.getElementById('liveToast')

//     // Error elements
//     const usernameError = document.getElementById('usernameError');
//     const emailError = document.getElementById('emailError');
//     const passwordError = document.getElementById('passwordError');
//     const mobileError = document.getElementById('mobileError');
//     const agreeError = document.getElementById('agreeError');
    

//     // Clear previous error messages
//     usernameError.textContent = '';
//     emailError.textContent = '';
//     passwordError.textContent = '';
//     mobileError.textContent = '';
//     agreeError.textContent = '';
//     profileImageError.textContent = '';
//     // Validation flags
//     let isValid = true;

//     // Validate username
//     if (username.length <= 4) {
//         usernameError.textContent = 'Username must be greater than 4 characters';
//         isValid = false;
//     }

//     // Validate email
//     if (!email.includes('@') || !email.includes('.com')) {
//         emailError.textContent = 'Email must contain "@" and ".com"';
//         isValid = false;
//     }

//     // Validate password
//     if (password.length <= 6 || password.length >= 15) {
//         passwordError.textContent = 'Password must be greater than 6 and less than equal to 15';
//         isValid = false;
//     }

//     // Validate mobile number
//     if (mobile.length !== 10 || isNaN(mobile)) {
//         mobileError.textContent = 'Mobile number must be 10 digits';
//         isValid = false;
//     }

//     // Validate agree checkbox
//     if (!agree) {
//         agreeError.textContent = 'You must agree to the terms';
//         isValid = false;
//     }

//     // If all validations pass
//     if (isValid) {
//         // Store user details in local storage
//         const userDetails = {
//             username,
//             email,
//             password,
//             gender,
//             age,
//             dob,
//             state,
//             address,
//             mobile,
//             profilePicture,
//             agree
//         };

//         localStorage.setItem(email, JSON.stringify(userDetails));
//         sessionStorage.setItem('email', email);

//         const liveToastExample = document.getElementById('liveToast');
//         const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToastExample);
//         toastBootstrap.show();

        
//         setTimeout(() => {
//             // Navigate to OTP page
//             window.location.href = 'otp.html';
//         }, 3000);

//         // Navigate to OTP page
//         //window.location.href = 'otp2.html';
//     }
// });



document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const state = document.getElementById('state').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;
    const agree = document.getElementById('agree').checked;
    const profileImageInput = document.getElementById('profileImage');

    // Error elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const mobileError = document.getElementById('mobileError');
    const agreeError = document.getElementById('agreeError');
    const profileImageError = document.getElementById('profileImageError');

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    mobileError.textContent = '';
    agreeError.textContent = '';
    profileImageError.textContent = '';

    // Validation flags
    let isValid = true;

    // Validate username
    if (username.length <= 4) {
        usernameError.textContent = 'Username must be greater than 4 characters';
        isValid = false;
    }

    // Validate email
    if (!email.includes('@') || !email.includes('.com')) {
        emailError.textContent = 'Email must contain "@" and ".com"';
        isValid = false;
    }

    // Validate password
    if (password.length <= 6 || password.length >= 15) {
        passwordError.textContent = 'Password must be greater than 6 and less than equal to 15 characters';
        isValid = false;
    }

    // Validate mobile number
    if (mobile.length !== 10 || isNaN(mobile)) {
        mobileError.textContent = 'Mobile number must be 10 digits';
        isValid = false;
    }

    // Validate agree checkbox
    if (!agree) {
        agreeError.textContent = 'You must agree to the terms';
        isValid = false;
    }

    // Validate profile image
    let profileImage = '';
    if (profileImageInput.files.length > 0) {
        const file = profileImageInput.files[0];
        if (!file.type.startsWith('image/')) {
            profileImageError.textContent = 'Only image files are allowed';
            isValid = false;
        } else {
            // Convert image to base64
            const reader = new FileReader();
            reader.onload = function(event) {
                profileImage = event.target.result;

                // Proceed with storing the user details including the image
                if (isValid) {
                    const userDetails = {
                        username,
                        email,
                        password,
                        gender,
                        age,
                        dob,
                        state,
                        address,
                        mobile,
                        agree,
                        profileImage
                    };
                    localStorage.setItem(email, JSON.stringify(userDetails));
                    sessionStorage.setItem('email', email);

                    // Show toast notification
                    const toastElement = document.getElementById('liveToast');
                    const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
                    toast.show();

                    // Redirect to OTP page
                    setTimeout(() => {
                        window.location.href = 'otp.html';
                    }, 3000);
                }
            };
            reader.readAsDataURL(file); // Convert file to base64
        }
    } else {
        profileImageError.textContent = 'Please upload a profile image';
        isValid = false;
    }
});
