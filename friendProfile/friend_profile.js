$(document).ready(function () {
    let params = new URLSearchParams(window.location.search);
    let userId = params.get("friend_id");
    //button to the previous page
    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    //fetching friend posts
    async function getUserData() {
        if (userId==null) {
            alert("user id cannot be null");
            return;
        }
        
        try {
            let response = await fetch(`../posts/posts.php?id=${userId}`);

            let data = await response.json();
            let responseName = await fetch(
                `../profile/get_user.php?id=${userId}`,
            );

            let dataName = await responseName.json();

            if (data.success) {
                let container = document.querySelector(".js-friend-posts");
                //creating friend all posts
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
            if (dataName.success) {
                document.getElementById("name").textContent =
                    dataName.user.Name;
            } else {
                alert(dataName.message);
            }
        } catch (err) {
            alert("Error occurred:", err);
        }
    }
    getUserData();
});
