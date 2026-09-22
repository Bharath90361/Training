document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    //back
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "../profile/profile.html?id=" + userId;
    });
    //fetching friends
    async function getUserData() {
        if (!userId) {
            console.log("User ID not found");
            return;
        }
        console.log("Fetching data for user ID:", userId);
        try {
            const response = await fetch(`friend.php?id=${userId}`);

            const data = await response.json();
            console.log(data);
            console.log(typeof data.user);
            console.log(Array.isArray(data.user));

            if (data.success) {
                const container = document.getElementById("friends");

                data.user.forEach(function (user) {
                    const anchor = document.createElement("a");
                    const div = document.createElement("div");
                    anchor.textContent = user.Name;
                    anchor.href = `../friendProfile/freind_profile.html?friend_id=${user.user_id}`;
                    div.appendChild(anchor);
                    container.appendChild(div);
                    const br = document.createElement("br");
                    container.appendChild(br);
                });
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    getUserData();
});
