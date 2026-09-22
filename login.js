document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user_validate");
    const error = document.getElementById("error");
    const userInput = document.getElementById("user");

    //suggestions
    userInput.addEventListener("keyup", function () {
        console.log("User input changed:", userInput.value);
        const userInputValue = userInput.value.trim();
        const suggestion = document.getElementById("suggestion");
        function guessName() {
            if (userInputValue == "") {
                suggestion.innerText = "";
            } else {
                suggestion.innerText = "";
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        const data = JSON.parse(xhr.responseText);
                        if (!data.success) {
                            suggestion.innerText = "No suggestions found";
                            return;
                        }
                        const arr = data.user;

                        for (let i = 0; i < arr.length; i++) {
                            const s = document.createElement("p");
                            s.innerText = arr[i].Name;
                            suggestion.appendChild(s);
                        }
                    }
                };
                xhr.open(
                    "GET",
                    "guess.php?name=" + encodeURIComponent(userInputValue),
                    true,
                );
                xhr.send();
            }
        }
        guessName();
    });
    //login
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const userInput = document.getElementById("user").value.trim();

        error.innerText = "";

        if (userInput === "") {
            error.innerText = "Please enter a name";
            error.style.color = "red";

            return;
        }

        try {
            console.log("Sending request to login.php with name:", userInput);

            const response = await fetch("login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: userInput,
                }),
            });

            const data = await response.json();

            console.log(data);

            if (data.success) {
                window.location.href =
                    "profile/profile.html?id=" + data.user_id;
            } else {
                error.innerText = "Enter correct name";
                error.style.color = "red";
            }
        } catch (err) {
            console.error("Error occurred:", err);

            error.innerText = "Something went wrong.";
            error.style.color = "red";
        }
    });
});
