document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("friend_id");
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.history.back();
    });
    async function getUserData() {
        if (!userId) {
            console.log("User ID not found");
            return;
        }
        console.log("Fetching data for user ID:", userId);
        try {
            const response = await fetch(`../posts/posts.php?id=${userId}`);

            const data = await response.json();
            console.log(data);
            console.log(typeof data.user);
            console.log(Array.isArray(data.user));
            const responseName = await fetch(
                `../profile/get_user.php?id=${userId}`,
            );

            const dataName = await responseName.json();

            if (data.success) {
                const container = document.getElementById("posts");

                data.user.forEach(function (user) {
                    const div = document.createElement("div");
                    div.classList.add("post-container");
                    const name = document.createElement("h3");
                    name.textContent = user.post;
                    div.appendChild(name);
                    const date = document.createElement("h3");
                    date.textContent = user.posting_date;
                    div.appendChild(date);
                    container.appendChild(div);
                    const br = document.createElement("br");
                    container.appendChild(br);
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
