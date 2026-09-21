document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    //fill the form with existing user data
    async function getUserData() {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");

        if (!userId) {
            console.log("User ID not found");
            return;
        }
        console.log("Fetching data for user ID:", userId);
        try {
            const response = await fetch(
                `../profile/get_user.php?id=${userId}`,
            );

            const data = await response.json();

            if (data.success) {
                document.getElementById("name").value = data.user.Name;
                document.getElementById("email").value = data.user.Email_id;
                document.getElementById("phone").value = data.user.Phone;
                document.getElementById("address").value = data.user.Address;
                document.getElementById("password").value = data.user.Password;
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    getUserData();

    //update profile form submission
    let form = document.getElementById("update_profile");
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const address = document.getElementById("address").value.trim();
        const phone = document.getElementById("phone").value;

        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");

        if (name === "" || email === "" || password === "") {
            console.log("All fields are required");
            return;
        }

        try {
            console.log("Sending update request for user ID:", userId);
            const response = await fetch("update_profile.php", {
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

            const data = await response.json();

            console.log(data);

            if (data.success) {
                console.log("Profile updated successfully");
                window.location.href = "../profile/profile.html?id=" + userId;
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    });
});
