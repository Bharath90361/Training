$(document).ready(function () {
    //button for previous page
    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    let params = new URLSearchParams(window.location.search);
    let userId = params.get("id");
    //fetching user deails and updating to the html page
    async function getUserData() {
        if (userId==null) {
            alert("user id cannot be null");
            return;
        }
        try {
            let response = await fetch(
                `../profile/get_user.php?id=${userId}`,
            );

            let data = await response.json();
            //updating the user information into the html page
            if (data.success) {
                document.querySelector(".js-name").textContent = data.user.Name;
                document.querySelector(".js-email").textContent =data.user.Email_id;
                document.querySelector(".js-address").textContent =data.user.Address;
                document.querySelector(".js-phone").textContent = data.user.Phone;
            } else {
                alert(data.message);

            }
        } catch (error) {
            alert("Error occurred: " + error);
        }
    }
    getUserData();
    document.getElementById("update_profile_link").href =
        `../updateProfile/updateProfile.html?id=${userId}`;
});
