document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    //fetching user details
    async function getUserData() {
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

            console.log(data);

            if (data.success) {
                console.log("Name:", data.user.Name);
                // console.log("Email:", data.user.email);

                document.getElementById("name").textContent =
                    "Name:" + data.user.Name;
                document.getElementById("email").textContent =
                    "Email:" + data.user.Email_id;
                document.getElementById("address").textContent =
                    "Address:" + data.user.Address;
                document.getElementById("phone").textContent =
                    "Phone:" + data.user.Phone;
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    getUserData();
    document.getElementById("update_profile_link").href =
        `../updateProfile/updateProfile.html?id=${userId}`;
});
