$(document).ready(function () {
    //fetch the user details based on session userid
    var data = null;
    async function getUser() {
        try {
            var response = await fetch("../../Backend/getUser.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                }),
            });
            data = await response.json();
            if (data.success) {
                $(".js-center-left-elements").text(data.user.Name);
                user = data.user;
                $(".js-user-placeholder").text(
                    `What's on your mind,  ${data.user.Name}?`,
                );
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    getUser();
});
