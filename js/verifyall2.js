// JavaScript validation for the registration form
function validateForm() {
    "use strict";
    
    // Capture user input from the form fields
    const firstName = document.getElementById('name').value.trim();
    const lastName = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Clear previous warnings
    clearErrors();

    // First Name validation
    if (firstName === "") {
        showError("nameError", "First Name is required.");
        isValid = false;
    }

    // Last Name validation
    if (lastName === "") {
        showError("surnameError", "Last Name is required.");
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError("emailError", "Valid Email is required.");
        isValid = false;
    }

    // Phone validation (optional, must be 10 digits if provided)
    if (phone && !/^\d{10}$/.test(phone)) {
        showError("phoneError", "Phone number must be 10 digits.");
        isValid = false;
    }

    // Password validation
    if (password === "") {
        showError("passwordError", "Password is required.");
        isValid = false;
    }

    // If form is valid, redirect to confirm2.html with URL parameters
    if (isValid) {
        const params = new URLSearchParams({
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            password: password
        });
        window.location.href = `comfirm2.html?${params.toString()}`;
    }

    return false; // Prevents form from actually submitting
}

// Helper function to display error messages
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Helper function to clear error messages
function clearErrors() {
    document.querySelectorAll(".warning").forEach(element => element.textContent = "");
}
