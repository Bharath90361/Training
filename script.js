/**
 * Finds the maximum of two numbers.
 */
function MaxValue() {
    let firstNumber = document.getElementById("first_number").value;
    let secondNumber = document.getElementById("second_number").value;

    // Validate both values.
    if (firstNumber === "" || secondNumber === "") {
        document.getElementById("maximum_value_result").innerText =
            "Enter both values";
        return;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Validate that both values are numbers.
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("maximum_value_result").innerText =
            "Enter valid numbers";
        return;
    }
    //comparing values
    if (firstNumber > secondNumber) {
        document.getElementById("maximum_value_result").innerText = firstNumber;
    } else {
        document.getElementById("maximum_value_result").innerText =
            secondNumber;
    }

    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
}

/**
 * Reverses the given string.
 */
function reverseString() {
    let inputString = document.getElementById("input_string").value;

    // Validate the string.
    if (inputString === "") {
        document.getElementById("reversed_string_result").innerText =
            "Enter proper string";
        return;
    }

    let stringArray = inputString.split("");
    let startIndex = 0;
    let endIndex = stringArray.length - 1;
    //reversing the string
    while (startIndex < endIndex) {
        let temporaryValue = stringArray[startIndex];
        stringArray[startIndex] = stringArray[endIndex];
        stringArray[endIndex] = temporaryValue;

        startIndex++;
        endIndex--;
    }

    let reversedString = stringArray.join("");

    document.getElementById("reversed_string_result").innerText =
        reversedString;
    document.getElementById("input_string").value = "";
}

/**
 * Finds the largest string from the given strings.
 */
function largeString() {
    let inputString = document.getElementById("input_strings").value;

    // Validate the input string.
    if (inputString === "") {
        document.getElementById("largest_string_result").innerText =
            "Enter proper string";
        return;
    }

    let stringArray = inputString.split(",");

    let largestString = "";
    //checking largest string
    for (let index = 0; index < stringArray.length; index++) {
        let currentString = stringArray[index].trim();

        if (currentString.length > largestString.length) {
            largestString = currentString;
        }
    }

    // Validate that at least one string is provided.
    if (largestString === "") {
        document.getElementById("largest_string_result").innerText =
            "Enter proper string";
        return null;
    }

    document.getElementById("largest_string_result").innerText = largestString;
    document.getElementById("input_strings").value = "";
}

/**
 * Stores the user's name and phone number in cookies.
 */
function store() {
    let userName = document.getElementById("user_name").value;
    let phoneNumber = document.getElementById("phone_number").value;

    // Validate name and phone number.
    if (userName === "" || phoneNumber === "") {
        alert("Enter name and phone number");
        return;
    }

    // Validate the name length.
    if (userName.length < 2 || userName.length > 50) {
        alert("Enter proper name");
        return;
    }

    // Validate the phone number.
    const mobileNumberPattern = /^[1-9]\d{9}$/;

    if (!mobileNumberPattern.test(phoneNumber)) {
        alert("Enter the proper phone number");
        return;
    }

    document.cookie = "username=; max-age=0; path=/";
    document.cookie = "phone=; max-age=0; path=/";

    document.cookie = "username=" + userName + "; max-age=3600; path=/";
    document.cookie = "phone=" + phoneNumber + "; max-age=3600; path=/";

    console.log("Cookie is " + document.cookie);
}

/**
 * Loads the saved user information from cookies.
 */
function loadCookies() {
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");

        if (key === "username") {
            document.getElementById("user_name").value = value;
        }

        if (key === "phone") {
            document.getElementById("phone_number").value = value;
        }
    }
}

loadCookies();

// Handle the maximum value button click.
document.getElementById("max_btn").addEventListener("click", MaxValue);

// Handle the reverse string button click.
document.getElementById("reverse_btn").addEventListener("click", reverseString);

// Handle the largest string button click.
document.getElementById("large_btn").addEventListener("click", largeString);

// Handle the cookie storage button click.
document.getElementById("save_btn").addEventListener("click", store);
