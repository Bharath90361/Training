$(document).ready(function () {
    //button for previous page

    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    //fill the form with existing user data
    async function getUserData() {
        let params = new URLSearchParams(window.location.search);
        let userId = params.get("id");

        if (userId==null) {
            alert("user id cannot be null")
            return;
        }
        try {
            let response = await fetch(
                `../profile/get_user.php?id=${userId}`,
            );

            let data = await response.json();
            //loading the existing data
            if (data.success) {
                document.querySelector(".js-user-name").value = data.user.Name;
                document.querySelector(".js-user-email").value = data.user.Email_id;
                document.querySelector(".js-user-phone").value = data.user.Phone;
                document.querySelector(".js-user-address").value = data.user.Address;
                document.querySelector(".js-user-password").value = data.user.Password;
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Error occurred: " + error);
        }
    }
    getUserData();

    //update profile after form submission
    let form = document.getElementById("update_profile");
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        let name = document.querySelector(".js-user-name").value.trim();
        let email = document.querySelector(".js-user-email").value.trim();
        let password = document.querySelector(".js-user-password").value.trim();
        let address = document.querySelector(".js-user-address").value.trim();
        let phone = document.querySelector(".js-user-phone").value;

        let params = new URLSearchParams(window.location.search);
        let userId = params.get("id");
        //validating the input data
        if (name === "" || email === "" || password === "") {
            return;
        }
        //sending data to backend 
        try {
            let response = await fetch("update_profile.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userId,
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    address: address,
                }),
            });

            let data = await response.json();

            if (data.success) {
                window.location.href = "../profile/profile.html?id=" + userId;
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Error occurred:", error);
        }
    });
});
