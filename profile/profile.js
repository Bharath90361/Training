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
    async function getFriendsData() {
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
                    let div = document.createElement("div");
                    anchor.textContent = user.Name;
                    anchor.href = `profile.html?id=${user.user_id}`;
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
        let params = new URLSearchParams(window.location.search);
        let userId = params.get("id");

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
                    let table = document.querySelector(".js-post-table")
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

    //updating the achor tag links to redirect to specific page with user id

    document.getElementById("create_post_link").href =
        `../createPost/createPost.html?id=${userId}`;

    document.getElementById("user_name").href =
        `../viewProfile/viewProfile.html?id=${userId}`;
});
