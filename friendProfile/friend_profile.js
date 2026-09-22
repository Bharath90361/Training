document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("friend_id");
    //back button
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    //fetching friends posts
    async function getUserData() {
        if (!userId) {
            console.log("User ID not found");
            return;
        }
        console.log("Fetching data for user ID:", userId);
        try {
            const response = await fetch(`../posts/posts.php?id=${userId}`);

            const data = await response.json();
            const responseName = await fetch(
                `../profile/get_user.php?id=${userId}`,
            );

            const dataName = await responseName.json();

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
            if (dataName.success) {
                document.getElementById("name").textContent =
                    dataName.user.Name;
            } else {
                console.log(dataName.message);
            }
        } catch (err) {
            console.error("Error occurred:", err);
        }
    }
    getUserData();
});
