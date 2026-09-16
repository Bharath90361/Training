$(document).ready(function () {
    /** Finds the maximum of two numbers. */
    function MaxValue() {
        let firstNumber = document.getElementById("first_value").value;
        let secondNumber = document.getElementById("second_value").value;

        // Validate both values.
        if (firstNumber === "" || secondNumber === "") {
            document.getElementById("max_validation").innerHTML =
                "Enter both values";
            document.getElementById("max_validation").style.color = "red";
            return null;
        }
        document.getElementById("max_validation").innerHTML = "";
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        // Validate that both values are numbers.
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            document.getElementById("maximum_result").innerHTML =
                "Enter valid numbers";
            return null;
        }
        //comparing values
        if (firstNumber > secondNumber) {
            document.getElementById("maximum_result").innerHTML = firstNumber;
        } else {
            document.getElementById("maximum_result").innerHTML = secondNumber;
        }

        document.getElementById("first_value").value = "";
        document.getElementById("second_value").value = "";
    }

    /**
     * Reverses a string.
     */
    function reverseString() {
        let inputString = document.getElementById("input_string").value;
        inputString = inputString.trim();
        // Validate the string.
        if (inputString === "") {
            document.getElementById("reverse_validation").innerText =
                "Enter proper string";
            document.getElementById("reverse_validation").style.color = "red";
            return null;
        }
        document.getElementById("reverse_validation").innerText = "";
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
        document.getElementById("reverse_result").innerText = reversedString;
        document.getElementById("input_string").value = "";
    }

    /**
     * Finds the largest string from the given strings.
     */
    function largeString() {
        let inputStrings = document.getElementById("input_strings").value;

        // Validate the input string.
        if (inputStrings === "") {
            document.getElementById("largest_string_validation").innerText =
                "Enter proper string";
            document.getElementById("largest_string_validation").style.color =
                "red";
            return null;
        }
        document.getElementById("largest_string_validation").innerText = "";
        let stringArray = inputStrings.split(",");
        let largestString = "";

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

        document.getElementById("largest_string_result").innerText =
            largestString;
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
        const phoneNumberPattern = /^[1-9]\d{9}$/;

        if (!phoneNumberPattern.test(phoneNumber)) {
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
    document.getElementById("max_btn").addEventListener("click", MaxValue);
    document
        .getElementById("reverse_btn")
        .addEventListener("click", reverseString);
    document.getElementById("large_btn").addEventListener("click", largeString);
    document.getElementById("save_btn").addEventListener("click", store);

    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");

    if (toastTrigger) {
        const toastBootstrap =
            bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener("click", () => {
            toastBootstrap.show();
        });
    }
    // footer animation
    $("#mypage_footer").hide();
    $("#mypage_footer").slideDown(10000, function () {
        let modalElement = document.getElementById("myModal");

        let modal = new bootstrap.Modal(modalElement);

        modal.show();
    });
    let leftNavButtons = document.querySelectorAll("#mypage_leftnav button");
    let topTabs = document.querySelectorAll(".nav-tabs button");

    leftNavButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            topTabs[index].click();
        });
    });
    //autocomplete
    let allSkills = [];
    $("#skills p").each(function () {
        let text = $(this).text();

        let values = text.split(":")[1].split(",");

        values.forEach(function (value) {
            allSkills.push(value.trim());
        });
    });
    $("#strs").autocomplete({
        source: allSkills,
    });
});
