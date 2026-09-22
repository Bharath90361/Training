document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "../profile/profile.html?id=" + userId;
    });
    //fetching user posts
    async function getUserData() {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");

        if (!userId) {
            console.log("User ID not found");
            return;
        }
        console.log("Fetching data for user ID:", userId);
        try {
            const response = await fetch(`posts.php?id=${userId}`);

            const data = await response.json();

            if (data.success) {
                data.user.forEach(function (user) {
                    const tr = document.createElement("tr");
                    const td = document.createElement("td");
                    td.innerText = user.posting_date;
                    tr.appendChild(td);
                    const td2 = document.createElement("td");
                    td2.innerText = user.post;
                    tr.appendChild(td2);
                    const table = document.getElementById("post_table");
                    table.appendChild(tr);
                });
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    getUserData();
    //submiting post using ajax
    const submitButton = document.getElementById("submit_post");
    submitButton.addEventListener("click", function () {
        const postContent = document
            .getElementById("post_content")
            .value.trim();
        function addPost(callback) {
            if (postContent === "") {
                callback({ success: false, message: "Post cannot be empty" });
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    const data = JSON.parse(xhr.responseText);
                    console.log("data is " + data.posts.post);
                    callback(data);
                }
            };
            xhr.open("POST", "add_post.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ user_id: userId, post: postContent }));
        }

        //call back function
        addPost(function (data) {
            const message = document.createElement("div");
            message.style.position = "fixed";
            message.style.top = "10px";
            message.style.left = "50%";
            message.style.border = "1px solid #ccc";
            message.style.padding = "10px 20px";
            if (data.success) {
                message.innerText = "Post added successfully";
                message.style.color = "green";
            } else {
                message.innerText = data.message;
                message.style.color = "red";
            }
            document.body.appendChild(message);
            setTimeout(function () {
                message.remove();
                if (data.success) {
                    console.log("Post added successfully");
                    console.log("data is " + data.posts);

                    const tr = document.createElement("tr");
                    const td = document.createElement("td");
                    td.innerText = data.posts.posting_date;
                    tr.appendChild(td);
                    const td2 = document.createElement("td");
                    td2.innerText = data.posts.post;
                    tr.appendChild(td2);
                    const table = document.getElementById("post_table");
                    table.insertBefore(tr, table.rows[1]);
                } else {
                    console.log(data.message);
                }
            }, 1000);
        });
    });
});
