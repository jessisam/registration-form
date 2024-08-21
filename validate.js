function validateFirstName() {
    var input = document.getElementsByName('fn')[0];
    var value = input.value;
    var newValue = "";

    // Loop through each character in the input value
    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);

        // Check if the character is a letter
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            newValue += char;
        } else {
            alert("Please enter only alphabets in the First Name field.");
        }
    }

    // Set the input value to the new value without non-alphabetic characters
    input.value = newValue;
}

function validateLastName() {
    var input = document.getElementsByName('ln')[0];
    var value = input.value;
    var newValue = "";

    // Loop through each character in the input value
    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);

        // Check if the character is a letter
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            newValue += char;
        } else {
            alert("Please enter only alphabets in the Last Name field.");
        }
    }

    // Set the input value to the new value without non-alphabetic characters
    input.value = newValue;
}

function validateEmail() {
    var input = document.getElementsByName('mail')[0];
    var value = input.value;

    // Simple pattern to check if "@" is present
    if (value.indexOf('@') === -1) {
        // Show alert if "@" is missing
        alert("Invalid email address. The '@' symbol is missing.");
    }
}

function validateContact() {
    var input = document.getElementsByName('No')[0];
    var value = input.value;
    var newNo = "";

    // Loop through each character in the input value
    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);

        // Check if the character is a letter
        if (char >= 0 && char <= 9) {
            newNo += char;
        } else {
            alert("Please enter only numbers.");
        }
    }

    if (newNo.length > 10) {
        alert("Invalid: Number length exceeds 10 digits.");
        input.value = ""; 
    
    } else {
        input.value = newNo; 
    }

}

function validateDateOfBirth() {
    var input = document.getElementsByName('dob')[0];
    var value = input.value;
    var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    // Check if the value matches the date format
    if (value && !dateRegex.test(value)) {
        alert("Date of Birth should be in the format dd/mm/yyyy.");
        input.value = ""; // Clear the input
    }
}


function validateDiagnosis() {
    var input = document.getElementsByName('daig')[0];
    var value = input.value;
    var newValue = "";

    // Loop through each character in the input value
    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);

        // Check if the character is a letter
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            newValue += char;
        } else {
            alert("Please enter only alphabets.");
        }
    }

    // Set the input value to the new value without non-alphabetic characters
    input.value = newValue;
}

function validateDocName() {
    var input = document.getElementsByName('dn')[0];
    var value = input.value;
    var newValue = "";

    // Loop through each character in the input value
    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);

        // Check if the character is a letter
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            newValue += char;
        } else {
            alert("Please enter only alphabets.");
        }
    }

    // Set the input value to the new value without non-alphabetic characters
    input.value = newValue;
}