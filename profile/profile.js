$(document).ready(function () {
    //button for previous page

    let button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    let params = new URLSearchParams(window.location.search);
    let userId = params.get("id");
    //fetching user name and updating into the home page
    async function getUserData() {
        if (userId == null) {
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
    //fetching all friends
    async function getFriendsData() {
        if (userId == null) {
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
                    let div = document.createElement("div");
                    anchor.textContent = user.Name;
                    anchor.href = `../friendProfile/friend.html?id=${user.user_id}`;
                    div.appendChild(anchor);
                    container.appendChild(div);
                    let br = document.createElement("br");
                    container.appendChild(br);
                });
            } else {
            }
        } catch (error) {
            alert("Error occurred:", error);
        }
    }
    getFriendsData();

    //fetching all user posts
    async function getUserposts() {
        if (userId == null) {
            alert("user id cannot be null");
            return;
        }
        try {
            let response = await fetch(`posts.php?id=${userId}`);

            let data = await response.json();

            if (data.success) {
                data.user.forEach(function (user) {
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    td.innerText = user.posting_date;
                    tr.appendChild(td);
                    let td2 = document.createElement("td");
                    td2.innerText = user.post;
                    tr.appendChild(td2);
                    let table = document.querySelector(".js-post-table");
                    table.appendChild(tr);
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Error occurred:", error);
        }
    }
    getUserposts();

    //submiting post using ajax
    let submitButton = document.getElementById("submit_post");
    submitButton.addEventListener("click", function () {
        let postContent = document.getElementById("post_content").value.trim();
        function addPost(callback) {
            if (postContent === "") {
                callback({ success: false, message: "Post cannot be empty" });
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let data = JSON.parse(xhr.responseText);
                    callback(data);
                }
            };
            xhr.open("POST", "add_post.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ user_id: userId, post: postContent }));
        }

        //call back function
        addPost(function (data) {
            document.getElementById("post_content").value = "";
            let message = document.createElement("div");
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
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    td.innerText = data.posts.posting_date;
                    tr.appendChild(td);
                    let td2 = document.createElement("td");
                    td2.innerText = data.posts.post;
                    tr.appendChild(td2);
                    let table = document.querySelector(".js-post-table");
                    table.insertBefore(tr, table.rows[1]);
                }
            }, 1000);
        });
    });

    //updating the achor tag links to redirect to specific page with user id

    document.getElementById("user_name").href =
        `../viewProfile/viewProfile.html?id=${userId}`;
});
