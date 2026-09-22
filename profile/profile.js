document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "/";
    });
    //fetching user details
    async function getUserData() {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");

        if (!userId) {
            console.log("User ID not found");
            return;
        }
        console.log("Fetching data for user ID:", userId);
        try {
            const response = await fetch(`get_user.php?id=${userId}`);

            const data = await response.json();

            console.log(data);

            if (data.success) {
                console.log("Name:", data.user.Name);
                // console.log("Email:", data.user.email);

                document.getElementById("user_name").textContent =
                    data.user.Name;
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    getUserData();
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    //redirecting to different web pages
    document.getElementById("friends_link").href =
        `../friendList/friends.html?id=${userId}`;

    document.getElementById("posts_link").href =
        `../posts/posts.html?id=${userId}`;

    document.getElementById("user_name").href =
        `../viewProfile/viewProfile.html?id=${userId}`;
});
