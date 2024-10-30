/* The script to dynamically update the invitation */

// This function is invoked when the page is fully loaded
window.onload = init;

function init() {
    const submit = document.getElementById("submit");

    // When the user clicks the submit button
    submit.onclick = function () {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;

        // Update the placeholders with user input
        document.getElementById("outputName").innerText = name;
        document.getElementById("outputSurname").innerText = surname;
    };
}
