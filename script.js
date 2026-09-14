$(document).ready(function () {
    /**
     * Finds the maximum of two numbers.
     */
    function MaxValue() {
        let firstNumber = document.getElementById("first_value").value;
        let secondNumber = document.getElementById("second_value").value;

        // Validate both values.
        if (firstNumber === "" || secondNumber === "") {
            document.getElementById("maximum_result").innerHTML =
                "Enter both values";
            return null;
        }

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        // Validate that both values are numbers.
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            document.getElementById("maximum_result").innerHTML =
                "Enter valid numbers";
            return null;
        }

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
            document.getElementById("reverse_result").innerText =
                "Enter proper string";
            return null;
        }
        let stringArray = inputString.split("");
        let startIndex = 0;
        let endIndex = stringArray.length - 1;

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
            document.getElementById("largest_string_result").innerText =
                "Enter proper string";
            return null;
        }

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
    // Handle the maximum value button click.
    document
        .getElementById("maximum_button")
        .addEventListener("click", MaxValue);

    // Handle the reverse string button click.
    document
        .getElementById("reverse_button")
        .addEventListener("click", reverseString);

    // Handle the largest string button click.
    document
        .getElementById("largest_string_button")
        .addEventListener("click", largeString);

    // Handle the cookie storage button click.
    document.getElementById("store_button").addEventListener("click", store);

    // Apply jQuery styling and effects to the page.
    $("#tbl").css("color", "#CC0000");
    $("#tbl").css("border-color", "#FF1A00");
    $("input").css({
        "background-color": "#FFFF88",
        border: "none",
    });
    //jquery footer hide and append the references
    $("#mypage_footer").hide();
    $("#mypage_footer").before("<div id='references'></div>");
    $("#references").append("<p>reference 1:Jquery documentation</p>");
    $("#references").append("<p>reference 2:java script documentation</p>");
    //header expand when mouse over on header
    $("#mypage_header").css({
        height: "10px",
        overflow: "hidden",
        "background-color": "#FFFF88",
    });

    $("#mypage_header").hover(
        function () {
            $(this).stop().animate(
                {
                    height: "50px",
                },
                500,
            );
        },
        function () {
            $(this).stop().animate(
                {
                    height: "10px",
                },
                500,
            );
        },
    );
    //footer animation
    $("#mypage_footer").slideDown(10000, function () {
        alert("10s completed footer is visible");
    });
});
