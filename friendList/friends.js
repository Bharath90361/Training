$(document).ready(function () {
    let params = new URLSearchParams(window.location.search);
    let userId = params.get("id");
    //button for previous page
    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "../profile/profile.html?id=" + userId;
    });
    //fetching all friends
    async function getUserData() {
        if (userId==null) {
            alert("user id cannot be null");
            return;
        }
        try {
            let response = await fetch(`friend.php?id=${userId}`);

            let data = await response.json();

            if (data.success) {
                let container = document.querySelector(".js-friend-name");

                //creating achor tag for each friend
                data.user.forEach(function (user) {
                    let anchor = document.createElement("a");
                    anchor.textContent = user.Name;
                    anchor.href = `../friendProfile/freind_profile.html?friend_id=${user.user_id}`;
                    container.appendChild(anchor);
                    let br = document.createElement("br");
                    container.appendChild(br);
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Error occurred:", error);
        }
    }
    getUserData();
});
