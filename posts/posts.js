document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const button = document.getElementById("back_button");
    button.addEventListener("click", function () {
        window.location.href = "../profile/profile.html?id=" + userId;
    });
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
            console.log(data);
            console.log(typeof data.user);
            console.log(Array.isArray(data.user));

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
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    getUserData();
});
