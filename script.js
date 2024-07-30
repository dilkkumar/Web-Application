// script.js

function validateForm(event) {
    const form = document.getElementById("registrationForm");
    let isValid = true;

    for (let i = 0; i < form.elements.length - 1; i++) {
        if (form.elements[i].value.trim() === "") {
            isValid = false;
            alert(`Please fill in the ${form.elements[i].name} field`);
            break; // Stop checking further fields
        }
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        showSuccessMessage();
        form.reset();
    }
}

function showSuccessMessage() {
    const form = document.getElementById("registrationForm");
    const successMessage = document.createElement("div");
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "green";
    form.parentNode.insertBefore(successMessage, form.nextSibling);
}

// script.js

function addService(button) {
    // Placeholder function for adding a service
    alert("Service added!");
}

function deleteService(button) {
    // Placeholder function for deleting a service
    alert("Service deleted!");
}



