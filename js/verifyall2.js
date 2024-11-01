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

    // If form is valid, store data in cookies and redirect to comfirm2.html
    if (isValid) {
        document.cookie = `firstName=${encodeURIComponent(firstName)}; path=/`;
        document.cookie = `lastName=${encodeURIComponent(lastName)}; path=/`;
        document.cookie = `email=${encodeURIComponent(email)}; path=/`;
        document.cookie = `phone=${encodeURIComponent(phone)}; path=/`;
        document.cookie = `password=${encodeURIComponent(password)}; path=/`;

        // Redirect to comfirm2.html
        window.location.href = "comfirm2.html";
    }

    return false; // Prevents default form submission
}

// Helper function to display error messages
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Helper function to clear error messages
function clearErrors() {
    document.querySelectorAll(".warning").forEach(element => element.textContent = "");
}
