$(document).ready(function () {

    let form = document.getElementById("user_validate");
    let error = document.getElementById("error");

    //taking the form data and checking the user present database or not
   $(form).on("submit", async function (event) {
        event.preventDefault();

        let userInput = document.getElementById("user").value.trim();

        error.innerText = "";
        //valiadating the user input empty or not 
        if (userInput === "") {
            error.innerText = "Please enter a name";
            error.style.color = "red";

            return;
        }

        try {
            let response = await fetch("login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: userInput,
                }),
            });

            let data = await response.json();

            if (data.success) {
                window.location.href =
                    "profile/profile.html?id=" + data.user_id;
            } else {
                error.innerText = "Enter correct name";
                error.style.color = "red";
            }
        } catch (err) {

            error.innerText = "Something went wrong.";
            error.style.color = "red";
        }
    });
});
