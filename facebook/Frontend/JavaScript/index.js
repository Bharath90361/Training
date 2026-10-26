$(document).ready(function () {
    $("#eye_icon").hide();

    //validate login form
    $("#login_button").off("click");
    $("#login_button").on("click", async function () {
        var credential = $("#credential").val().trim();
        var password = $("#password").val().trim();
        var element = document.querySelector(".js-error-message");


        if (element) {
            element.remove();
        }
        //credential and password validation
        if (credential == "") {
            var element1 = document.querySelector(".js-login-error");

            if (element1) {
                element1.remove();
            }
            if (!document.querySelector(".js-error-message")) {
                var message = document.createElement("p");

                message.innerText =
                    "The email address or mobile number you entered isn't connected to an account.";
                message.classList.add("js-error-message");
                var credential = document.getElementById("credential_block");
                credential.classList.add("js-error-input");
                credential.after(message);
            }

            return;
        }
        if (password == "") {
            var element1 = document.querySelector(".js-login-error");

            if (element1) {
                element1.remove();
            }
            var element = document.querySelector(".js-error-message");

            if (element) {
                element.remove();
            }
            var credential = document.getElementById("credential");
            credential.classList.remove("js-error-input");
            var message = document.createElement("p");

            message.innerText = "The password you've entered is incorrect.";

            message.classList.add("js-error-message");
            var password = document.getElementById("password_block");
            password.classList.add("js-error-input");
            password.after(message);
            return;
        }
        //send login request to backend
        try {
            var response = await fetch("../../Backend/login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ credential, password }),
            });
            var data = await response.json();
            if (data.success) {
                window.location.href = "../Html/home.php";
            } else {
                if (!document.querySelector(".js-login-error")) {
                    var element = document.querySelector(".js-error-message");

                    if (element) {
                        element.remove();
                    }
                    var credential =
                        document.getElementById("credential_block");
                    credential.classList.remove("js-error-input");
                    var message = document.createElement("p");
                    var div = document.createElement("div");
                    message.innerText =
                        "The login information you entered is incorrect. ";
                    div.appendChild(message);
                    div.classList.add("js-login-error");
                    credential.before(div);
                }
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    });
    //show and hide password
    var counter = 0;
    $("#password").off("input");
    $("#password").on("input", function () {
        if ($(this).val().length > 0) {
            $("#eye_icon").show();
        } else {
            $("#eye_icon").hide();
        }
    });
    $("#eye_icon").off("click");
    $("#eye_icon").on("click", function () {
        if (counter === 0) {
            $("#password").attr("type", "text");
            $("#eye_icon i").removeClass("fa-eye-slash");
            $("#eye_icon i").addClass("fa-eye");
            counter = 1;
        } else {
            $("#password").attr("type", "password");
            $("#eye_icon i").removeClass("fa-eye");
            $("#eye_icon i").addClass("fa-eye-slash");

            counter = 0;
        }
    });
});
