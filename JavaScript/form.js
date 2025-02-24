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
const submit = document.getElementById('submit');
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
        } else {
            whoInParty.style.display = "none";
            submit.style.display = "block"; // Show submit button if "No" is selected
        }
    }
}

// Attach event listener to check the name as user types
nameField.addEventListener('input', checkName);
attendInputs.forEach(radio => {
    radio.addEventListener('change', checkAttendance);
});