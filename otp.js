document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    const verifyButton = document.getElementById('verifyOtpBtn');
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
    const otpText = document.getElementById('toast-body');
    let generatedOtp = '';

    // Enable and focus the first input on page load
    window.addEventListener('load', () => {
        inputs[0].removeAttribute('disabled');
        inputs[0].focus();
    });

    // Handle OTP inputs
    inputs.forEach((input, index) => {
        input.addEventListener('keyup', (e) => {
            const currentInput = input;
            const nextInput = input.nextElementSibling;
            const prevInput = input.previousElementSibling;

            // If value has more than 1 character, clear it
            if (currentInput.value.length > 1) {
                currentInput.value = '';
                return;
            }

            // Enable the next input if current value is not empty
            if (nextInput && currentInput.value !== '') {
                nextInput.removeAttribute('disabled');
                nextInput.focus();
            }

            // Handle backspace
            if (e.key === 'Backspace') {
                inputs.forEach((input, idx) => {
                    if (index <= idx && prevInput) {
                        input.setAttribute('disabled', true);
                        input.value = '';
                        prevInput.focus();
                    }
                });
            }

            // Check if all inputs are filled to activate the verify button
            if (!inputs[3].disabled && inputs[3].value !== '') {
                verifyButton.classList.add('active');
                return;
            }
            verifyButton.classList.remove('active');
        });
    });

    // Handle OTP generation and display in toast
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
            generatedOtp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
            otpText.textContent = generatedOtp;
            console.log('Generated OTP:', generatedOtp);
        });
    }
    function clearInputs() {
        inputs.forEach((input, index) => {
            input.value = '';
            input.setAttribute('disabled', true); // Disable all inputs
        });
        inputs[0].removeAttribute('disabled'); // Enable the first input
        inputs[0].focus(); // Focus on the first input
        verifyButton.classList.remove('active'); // Deactivate the button
    }
    // Handle OTP verification
    verifyButton.addEventListener('click', () => {
        const enteredOtp = Array.from(inputs).map(input => input.value).join('');
        if (enteredOtp === generatedOtp) {
            alert('OTP verified successfully! Redirecting to homepage...');
            window.location.href = 'home.html';// Change to your homepage URL
            // Clear inputs after verification attempt
            clearInputs();
        } else {
            alert('Incorrect OTP. Please try again.');
            clearInputs();
        }
    });
});
