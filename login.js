document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user_validate");
    const error = document.getElementById("error");

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
                // alert("correct");
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
