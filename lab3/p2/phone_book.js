var contacts = [
    {
        name: "",
        phone: ""
    }
]

contConfirm = true;
while (contConfirm) {
    let choice = prompt(`Choose "add" or "search"`);
    switch (choice) {
        case "add":
            addContact();
            console.log(contacts);
            break;

        case "search":
            searchContact();
            console.log(contacts);
            break;
    }
    contConfirm = confirm("Do You Want To Continue?");
}
function addContact() {
    var newContact = {};
    newContact.name = prompt("Enter Contact Name");
    newContact.phone = prompt("Enter Contact Phone");
    contacts.push(newContact);
}

function searchContact() {
    searchProperty = prompt("Enter Name or Phone");
    for (let i = 0; i < contacts.length; i++) {
        var currentContact = contacts[i];
        if (searchProperty == currentContact.name || searchContact == currentContact.phone) {
            alert("name = " + currentContact.name + "\nphone = " + currentContact.phone);
        }
    }
}