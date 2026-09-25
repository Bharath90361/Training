$(document).ready(function () {
    //button for previous page
    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });

    //submitting the post
    let postButton = document.getElementById("submit_post");

    postButton.addEventListener("click", async function () {
        let post = document.getElementById("post_content").value;

        let params = new URLSearchParams(window.location.search);
        let userId = params.get("id");

        //checking post content is empty or not
        if (post === "") {
            alert("post cannot be a empty");
            return;
        }

        try {
            //sending post content to backend
            let response = await fetch("add_post.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userId,
                    post: post,
                }),
            });

            //data received from backend
            let data = await response.json();
            //data succesfully stored
            if (data.success) {
                window.location.href = "../profile/profile.html?id=" + userId;
            }

            //data not stored
            else {
                alert(data.message);
            }
        } catch (error) {
            alert("Error occurred:", error);
        }
    });
});
