// JavaScript validation for the contact form
function validateForm() {
    "use strict";

    // Capturing user input from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Clearing previous warnings
    document.querySelectorAll('.warning').forEach(w => w.textContent = '');

    // Name validation: must not be empty
    if (name === "") {
        document.getElementById('nameWarning').textContent = "Name is required.";
        isValid = false;
    }

    // Email validation: simple regex to ensure valid email format
    const emailRegex = /^\w+@\w+\.\w{2,3}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailWarning').textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Phone validation: optional but should match common formats
    const phoneRegex = /^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (phone && !phoneRegex.test(phone)) {
        document.getElementById('phoneWarning').textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    // Subject validation: must not be empty
    if (subject === "") {
        document.getElementById('subjectWarning').textContent = "Subject is required.";
        isValid = false;
    }

    // Message validation: must not be empty
    if (message === "") {
        document.getElementById('messageWarning').textContent = "Message is required.";
        isValid = false;
    }

    return isValid; // If valid, the form will submit; otherwise, it won't
}
