/**
 * Finds the maximum of two numbers.
 */
function MaxValue() {
    document.getElementById("maximum_validation").innerText = "";
    document.getElementById("maximum_value_result").innerText = "";
    let firstNumber = document.getElementById("first_number").value;
    let secondNumber = document.getElementById("second_number").value;

    // Validate both values.
    if (firstNumber === "" || secondNumber === "") {
        document.getElementById("maximum_validation").innerText =
            "Enter both values";
        document.getElementById("maximum_validation").style.color = "red";
        return;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Validate that both values are numbers.
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("maximum_validation").innerText =
            "Enter valid values";
        document.getElementById("maximum_validation").style.color = "red";
        return;
    }
    //comparing values
    if (firstNumber > secondNumber) {
        document.getElementById("maximum_value_result").innerText = firstNumber;
    } else {
        document.getElementById("maximum_value_result").innerText =
            secondNumber;
    }
    document.getElementById("maximum_value_result").style.color = "blue";
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
}

/**
 * Reverses the given string.
 */
function reverseString() {
    let inputString = document.getElementById("input_string").value;
    document.getElementById("reverse_validation").innerText = "";
    document.getElementById("reversed_string_result").innerText = "";
    // Validate the string.
    if (inputString === "") {
        document.getElementById("reverse_validation").innerText =
            "Enter proper string";
        document.getElementById("reverse_validation").style.color = "red";
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
    document.getElementById("reversed_string_result").style.color = "blue";
    document.getElementById("input_string").value = "";
}

/**
 * Finds the largest string from the given strings.
 */
function largeString() {
    let inputString = document.getElementById("input_strings").value;
    document.getElementById("large_validation").innerText = "";
    document.getElementById("largest_string_result").innerText = "";
    // Validate the input string.
    if (inputString === "") {
        document.getElementById("large_validation").innerText =
            "Enter proper string";
        document.getElementById("large_validation").style.color = "red";
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
        document.getElementById("large_validation").innerText =
            "Enter proper string";
        document.getElementById("large_validation").style.color = "red";
        return null;
    }

    document.getElementById("largest_string_result").innerText = largestString;
    document.getElementById("largest_string_result").style.color = "blue";
    document.getElementById("input_strings").value = "";
}

/**
 * Stores the user's name and phone number in cookies.
 */
function store() {
    let userName = document.getElementById("user_name").value;
    let phoneNumber = document.getElementById("phone_number").value;
    document.getElementById("cookie_validation").innerText = "";

    // Validate name and phone number.
    if (userName === "" || phoneNumber === "") {
        document.getElementById("cookie_validation").innerText =
            "enter name and phone number";
        document.getElementById("cookie_validation").style.color = "red";
        return;
    }

    // Validate the name length.
    if (userName.length < 2 || userName.length > 50) {
        document.getElementById("cookie_validation").innerText =
            "enter proper name";
        document.getElementById("cookie_validation").style.color = "red";
        return;
    }

    // Validate the phone number.
    const mobileNumberPattern = /^[1-9]\d{9}$/;

    if (!mobileNumberPattern.test(phoneNumber)) {
        document.getElementById("cookie_validation").innerText =
            "enter proper number";
        document.getElementById("cookie_validation").style.color = "red";
        return;
    }

    document.cookie = "username=; max-age=0; path=/";
    document.cookie = "phone=; max-age=0; path=/";

    document.cookie = "username=" + userName + "; max-age=3600; path=/";
    document.cookie = "phone=" + phoneNumber + "; max-age=3600; path=/";
    alert("cookie saved");
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
