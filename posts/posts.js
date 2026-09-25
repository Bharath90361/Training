$(document).ready(function () {
    let params = new URLSearchParams(window.location.search);
    let userId = params.get("id");
    //button for previous page
    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "../profile/profile.html?id=" + userId;
    });
    //fetching all user posts
    async function getUserData() {
        let params = new URLSearchParams(window.location.search);
        let userId = params.get("id");

        if (userId==null) {
            alert("user id cannot be null");
            return;
        }
        try {
            let response = await fetch(`posts.php?id=${userId}`);

            let data = await response.json();

            //creating the post
            if (data.success) {
                let container = document.querySelector(".js-user-posts");

                data.user.forEach(function (user) {
                    let eachPost = document.createElement("div");
                    eachPost.classList.add("post-container");

                    let name = document.createElement("h3");
                    name.textContent = user.post;
                    eachPost.appendChild(name);
                    let date = document.createElement("h3");
                    date.textContent = user.posting_date;
                    eachPost.appendChild(date);
                    container.appendChild(eachPost);
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
