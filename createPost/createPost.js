document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });

    const postButton = document.getElementById("submit_post");

    postButton.addEventListener("click", async function () {
        const post = document.getElementById("post_content").value;

        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");

        if (post === "") {
            console.log("Post cannot be empty");
            return;
        }

        try {
            const response = await fetch("add_post.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userId,
                    post: post,
                }),
            });

            const data = await response.json();

            console.log(data);

            if (data.success) {
                console.log("Post added successfully");
                window.location.href = "../profile/profile.html?id=" + userId;
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    });
});
