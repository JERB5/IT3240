// Helper function to get elements by ID
var $ = function (id) {
    return document.getElementById(id);
};

// Array to store volunteer records, persisted with localStorage
let volunteerArray = JSON.parse(localStorage.getItem("volunteers")) || [];

/**
 * Save the volunteer array to localStorage for persistence.
 */
function saveVolunteers() {
    localStorage.setItem("volunteers", JSON.stringify(volunteerArray));
}

/**
 * Display the volunteers dynamically with index numbers.
 */
function displayVolunteers() {
    const volunteerList = $("volunteerList");
    volunteerList.innerHTML = ""; // Clear the existing list

    volunteerArray.forEach((volunteer, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${volunteer.firstName} ${volunteer.lastName}`;
        volunteerList.appendChild(listItem);
    });
}

/**
 * Add a new volunteer to the array and update the display.
 */
function addVolunteer(event) {
    event.preventDefault(); // Prevent form refresh

    const firstName = $("first_name").value.trim();
    const lastName = $("last_name").value.trim();

    if (firstName && lastName) {
        const newVolunteer = { firstName, lastName };
        volunteerArray.push(newVolunteer);
        saveVolunteers();
        displayVolunteers();
        clearFormFields();
        alert(`${firstName} ${lastName} Thank you for Volunteering you have been added to the volunteer list.`);
    } else {
        alert("Please enter both first and last names.");
    }
}

/**
 * Delete a specific volunteer with confirmation.
 */
function deleteVolunteer() {
    const firstName = $("first_name").value.trim();
    const lastName = $("last_name").value.trim();
    const fullName = `${firstName} ${lastName}`;

    const index = volunteerArray.findIndex(
        (volunteer) => volunteer.firstName === firstName && volunteer.lastName === lastName
    );

    if (index !== -1) {
        const confirmation = confirm(`Are you sure you want to remove ${fullName}?`);
        if (confirmation) {
            volunteerArray.splice(index, 1);
            saveVolunteers();
            displayVolunteers();
            alert(`${fullName} was successfully removed.`);
        }
    } else {
        alert("Volunteer not found.");
    }
}

/**
 * Clear all volunteers with confirmation.
 */
function clearVolunteers() {
    if (confirm("Are you sure you want to clear the entire volunteer list?")) {
        volunteerArray = [];
        saveVolunteers();
        displayVolunteers();
    }
}

/**
 * Clear input fields in the form.
 */
function clearFormFields() {
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
}

/**
 * Sort the volunteer list by last name and display the sorted list.
 */
function sortVolunteers() {
    volunteerArray.sort((a, b) =>
        a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName)
    );
    saveVolunteers();
    displayVolunteers();
}

// Attach event handlers when the page loads
window.onload = function () {
    $("add_button").onclick = addVolunteer;
    $("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearVolunteers;
    $("sort_button").onclick = sortVolunteers;
    displayVolunteers(); // Display volunteers on load
};
