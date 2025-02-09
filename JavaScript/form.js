import guests from './guestList';

let nameField = document.getElementById('fullName');
const attend = document.getElementById('attend');

const checkName = () => {
    let found = false; // Flag to track if name is found
    let inputName = nameField.value.toLowerCase().trim();

    console.log("User Input:", inputName); // Debugging

    for (let i = 0; i < guests.length; i++) {
        for (let j = 0; j < guests[i].guest.length; j++) {
            console.log("Checking against:", guests[i].guest[j]); // Debugging
            if (inputName === guests[i].guest[j]) {
                found = true;
                break; // Stop looping once a match is found
            }
        }
    }

    // Toggle display based on match result
    attend.style.display = found ? "block" : "none";
};

nameField.addEventListener('input', checkName);