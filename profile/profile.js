$(document).ready(function () {
    //button for previous page

    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "/";
    });
    //fetching user name and updating into the home page
    async function getUserData() {
        let params = new URLSearchParams(window.location.search);
        let userId = params.get("id");

        if (userId==null) {
            alert("user id cannot be null");
            return;
        }
        try {
            let response = await fetch(`get_user.php?id=${userId}`);

            let data = await response.json();

            if (data.success) {
                document.getElementById("user_name").textContent =
                    data.user.Name;
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Error occurred:", error);
        }
    }
    getUserData();

    let params = new URLSearchParams(window.location.search);
    let userId = params.get("id");

    //updating the achor tag links to redirect to specific page with user id
    document.getElementById("friends_link").href =
        `../friendList/friends.html?id=${userId}`;

    document.getElementById("posts_link").href =
        `../posts/posts.html?id=${userId}`;
    document.getElementById("create_post_link").href =
        `../createPost/createPost.html?id=${userId}`;

    document.getElementById("user_name").href =
        `../viewProfile/viewProfile.html?id=${userId}`;
});
