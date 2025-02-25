/*import guests from './guestList';*/

const guests = [
    {
        guest: ['gayle pavao', 'tony pavao'],
        partyCount: 2 
    },
    {
        guest: ['coleen andersen', 'neil bahan', 'lyle keenan'],
        partyCount: 3,
    },
    {
        guest: ['karey keenan', 'alison keenan'],
        partyCount: 2
    },
    {
        guest: ['angelica barraza tran', 'marc tran'],
        partyCount: 2
    },
    {
        guest: ['grant abrams', 'lexie abrams'],
        partyCount: 3
    },
    {
        guest: ['spencer hermans'],
        partyCount: 1
    },
    {
        guest: ['dean rojas'],
        partyCount: 1
    },
    {
        guest: ['connor taylor', 'sheyenne taylor'],
        partyCount: 2
    },
    {
        guest: ['cason brinson', 'cailyn'],
        partyCount: 2
    },
    {
        guest: ['alex rossman', 'tom riddel'],
        partyCount: 2
    },
    {
        guest: ['catherine rossman', 'hunter tardiff'],
        partyCount: 2
    },
    {
        guest: ['david preciado'],
        partyCount: 1
    },
    {
        guest: ['frida mejia', 'matthew swedo'],
        partyCount: 2
    },
    {
        guest: ['adam milligan'],
        partyCount: 1
    }

]

let nameField = document.getElementById('fullName');
const attend = document.getElementById('attend');
const attendInputs = document.querySelectorAll('input[name="attend"]')
const whoInParty = document.getElementById('whoInParty');
const invitedGuests = document.getElementById('invitedGuests');
const submit = document.getElementById('submit');
const dietQuestion = document.getElementById('dietQuestion');
const photoQuestion = document.getElementById('photoQuestion');
let guestParty;

const checkName = () => {
    let inputName = nameField.value.toLowerCase().trim();
    let found = false; // Flag to track if name is found

    console.log("User Input:", inputName); // Debugging

    for (let i = 0; i < guests.length; i++) {
        for (let j = 0; j < guests[i].guest.length; j++) {
            let guestName = guests[i].guest[j].toLowerCase().trim();
            console.log("Checking against:", guestName); // Debugging

            if (inputName === guestName) {
                found = true;
                guestParty = i;
                break; // Stop looping once a match is found
            }
        }
        if (found) break; // Break outer loop as well
    }

    // Toggle display based on match result
    attend.style.display = found ? "block" : "none";
};

const checkAttendance = () => {
    const selectedOption = document.querySelector('input[name="attend"]:checked');

    if (selectedOption) { // Ensure a selection is made
        if (selectedOption.value === 'yes') {
            whoInParty.style.display = "block";
            submit.style.display = "none"; // Hide submit button until party is confirmed
            generateGuestCheckboxes(guestParty);
        } else {
            whoInParty.style.display = "none";
            submit.style.display = "block"; // Show submit button if "No" is selected
        }
    }
}

const generateGuestCheckboxes = (guestParty) => {
    invitedGuests.innerHTML = ""; // Clear existing checkboxes

    guests[guestParty].guest.forEach(guestName => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "guest";
        checkbox.value = guestName;
        checkbox.id = guestName.replace(/\s+/g, "-");

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = capitalizeWords(guestName);

        invitedGuests.appendChild(checkbox);
        invitedGuests.appendChild(label);
        invitedGuests.appendChild(document.createElement("br")); // Line break for better spacing
    });
};

function capitalizeWords(name) {
    return name.replace(/\b\w/g, char => char.toUpperCase());
}

const showDietAndPhoto = () => {
    dietQuestion.style.display = 'block';
    photoQuestion.style.display = 'block';
    submit.style.display = "block";
}

// Attach event listener to check the name as user types
nameField.addEventListener('input', checkName);
attendInputs.forEach(radio => {
    radio.addEventListener('change', checkAttendance);
});
invitedGuests.addEventListener('click', showDietAndPhoto);