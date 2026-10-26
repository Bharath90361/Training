$(document).ready(function () {
    // Initially hide popup and overlay c reate post div
    $(".create-post-appear").hide();
    $(".create-post-overlay").hide();
    //fetching urluserId from url
    var urlParams = new URLSearchParams(window.location.search);
    var urluserId = urlParams.get("id");
    //show the create post div only to friends
    if (userId != urluserId) {
        async function check() {
            try {
                var response = await fetch("../../Backend/isFriend.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        friendId: urluserId,
                        userId: userId,
                    }),
                });

                var data = await response.json();

                if (data.success) {
                    if (data.isFriend) {
                        $(".create-post").show();
                    } else {
                        $(".create-post").hide();
                    }
                } else {
                    alert("Error: " + data.message);
                }
            } catch (error) {
                alert("Error: " + error.message);
            }
        }

        check();
    }

    // Opening a create post div when click
    $(".create-post-input").off("click");
    $(".create-post-input").on("click", function (event) {
        event.stopPropagation();

        $(".create-post-overlay").fadeIn(150);
        $(".create-post-appear").fadeIn(150);

        $("body").addClass("modal-open");
    });

    // Prevent clicks inside popup from closing it
    $(".create-post-appear").off("click");
    $(".create-post-appear").on("click", function (event) {
        event.stopPropagation();
    });

    // Close using X icon
    $(".create-post-appear-upper-icon").on("click", function () {
        closeCreatePost();
    });

    // Close by clicking outside
    $(".create-post-overlay").on("click", function () {
        closeCreatePost();
    });

    // Close popup function
    function closeCreatePost() {
        $(".create-post-appear").fadeOut(150);
        $(".create-post-overlay").fadeOut(150);

        $("body").removeClass("modal-open");
    }

    // Make all header tabs inactive initially for profile page
    $(".nav-button").removeClass("active");

    //click on the particular tab redirect to home page to that tab
    $(".nav-button").off("click");
    $(".nav-button").on("click", function (event) {
        event.preventDefault();

        var target = $(this).data("bs-target");

        if (target) {
            window.location.href = "home.php" + target;
        }
    });
    //load the common posts
    async function loadPosts() {
        try {
            var response = await fetch("../../Backend/getUserPosts.php", {});
            var data = await response.json();
            if (data.success) {
                //adding posts to the page
                var container = document.querySelector(".user-all-posts-mz");
                data.post.forEach((post) => {
                    container.insertAdjacentHTML("beforeend", createPost(post));
                });
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    loadPosts();
    //function return the html stucture for each post
    function createPost(post) {
        var postId = escapeHtml(post.post_id);
        var postingDate = formatPostDate(post.posting_date);
        var posterName = escapeHtml(post.poster_name);
        var posterIcon = escapeHtml(post.post_icon);
        var postImage = escapeHtml(post.post_image);
        var content = escapeHtml(post.post_content);
        var likes = formatCount(post.likes);
        var comments = formatCount(post.comments);
        var shares = formatCount(post.shares);

        return `
        <div class="center-center-element center-center-post">
                    <div class="center-center-post-heading">
                        <div class="post-user-icon">
                            <img src="../../posts/${posterIcon}" alt="">
                        </div>
                        <div class="post-user-info">
                            <div class="post-user-name">${posterName}</div>
                            <div class="post-date">${postingDate}</div>
                        </div>
                        <div class="post-user-function">
                            <div>
                                <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"
                                    class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                    style="--x-color: var(--secondary-icon);">
                                    <g fill-rule="evenodd" transform="translate(-446 -350)">
                                        <path
                                            d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"
                                    class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                    style="--x-color: var(--secondary-icon);">
                                    <path
                                        d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="post-text">
                        <p>${content}</p>
                    </div>
                    <div class="see-translation">
                        <a href="">see translation</a>
                    </div>
                    <div class="post-image">
                        <img src="../../posts/${postImage}" alt="">
                    </div>
                    <div class="current_data">
                        <div class="likes-count">

                            <div class="like-image">
                                <img src="../images/like.svg" alt="">

                            </div>
                            <span class="js-likes" data-post-id="${postId}">${likes}</span>


                        </div>
                        <div class="other-count">
                            <div class="other-count-item">
                                <span>${comments}</span>
                                <i data-visualcompletion="css-img"
                                    class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                    style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -758px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                            </div>
                            <div class="other-count-item">
                                <span>${shares}</span>
                                <i data-visualcompletion="css-img"
                                    class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                    style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -775px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                            </div>
                            

                        </div>
                    </div>
                    <div class="user-actions">
                        <div class="user-action-element user-action-like" data-post-id="${postId}">
                            <span class="js-change-icon">
                                <i data-visualcompletion="css-img" class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -441px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                            </span>
                            <span>
                                Like
                            </span>
                        </div>
                        <div class="user-action-element">
                            <span>
                                <i data-visualcompletion="css-img" class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp');background-position:0 -231px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                            </span>
                            <span>
                                Comment
                            </span>
                        </div>
                        <div class="user-action-element">
                            <span>
                                <i data-visualcompletion="css-img" class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp');background-position:0 -567px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                            </span>
                            <span>
                                Share
                            </span>
                        </div>
                    </div>
                </div>
        `;
    }
    function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            }[char];
        });
    }
    //converting number to compact form like 1.2k, 1.5M etc
    function formatCount(number) {
        return new Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(number);
    }
    //changing the date format
    function formatPostDate(dateString) {
        var date = new Date(dateString.replace(" ", "T"));

        if (isNaN(date.getTime())) {
            return dateString;
        }

        var day = date.getDate();
        var month = date.toLocaleString("en-GB", { month: "long" });
        var hours = String(date.getHours()).padStart(2, "0");
        var minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day} ${month} at ${hours}:${minutes}`;
    }

    //like functionality on post
    $(document).off("click");
    $(document).on("click", ".user-action-like", function () {
        var postId = $(this).attr("data-post-id");

        if (!$(this).hasClass("unliked")) {
            $(this).addClass("unliked");
            function addPost(callback) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var data = JSON.parse(xhr.responseText);
                        callback(data);
                    }
                };
                xhr.open("POST", "../../Backend/add_like.php", true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(
                    JSON.stringify({
                        post_id: postId,
                        result: "like",
                        table: "userPosts",
                    }),
                );
            }
            //call back function

            addPost(function (data) {
                var current_likes = formatCount(data.likes - 1);

                $(`.js-likes[data-post-id="${postId}"]`).text(
                    `you and ${current_likes} others`,
                );

                var likes = $(`.user-action-like[data-post-id="${postId}"]`);

                // Add class to the Like button
                likes.addClass("js-liked");

                // Update only this button's icon
                likes.find(".js-change-icon").html(`
    <i data-visualcompletion="css-img"
       class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 xq8hly8"
       style="background-image: url('https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp');
              background-position: 0px -357px;
              background-size: auto;
              width: 20px;
              height: 20px;
              background-repeat: no-repeat;
              display: inline-block;">
    </i>
`);
            });
        } else {
            $(this).removeClass("unliked");
            // $(this).addClass("unliked");
            function addPost(callback) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        let data = JSON.parse(xhr.responseText);
                        callback(data);
                    }
                };
                xhr.open("POST", "../../Backend/add_like.php", true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(
                    JSON.stringify({
                        post_id: postId,
                        result: "unlike",
                        table: "userPosts",
                    }),
                );
            }
            //call back function

            addPost(function (data) {
                var current_likes = formatCount(data.likes);

                // Select the Like button for this specific post
                var likes = $(`.user-action-like[data-post-id="${postId}"]`);

                // Update the likes count
                // This assumes you add data-post-id to the js-likes span
                $(`.js-likes[data-post-id="${postId}"]`).text(current_likes);

                // Remove liked styling
                likes.removeClass("js-liked");

                // Restore the original Like icon
                likes.find(".js-change-icon").html(`
        <i data-visualcompletion="css-img"
           class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
           style="background-image: url('https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp');
                  background-position: 0px -441px;
                  background-size: auto;
                  width: 20px;
                  height: 20px;
                  background-repeat: no-repeat;
                  display: inline-block;">
        </i>
    `);
            });
        }
    });

    // load the user added posts
    async function loadUserPosts() {
        try {
            var response = await fetch(
                `../../Backend/posts.php?id=${urluserId}`,
            );

            var data = await response.json();

            var container = document.querySelector(".user-own-posts");

            data.posts.forEach(async (post) => {
                container.insertAdjacentHTML(
                    "beforeend",
                    await createUserPost(post, data.user.profile_icon),
                );
            });
        } catch (error) {
            alert("Error occurred: " + error.message);
        }
    }
    loadUserPosts();
    var username = null;
    var icon = null;
    //function for changing name dynamically
    async function changeName() {
        try {
            var response = await fetch("../../Backend/getUser.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: urluserId,
                }),
            });
            data = await response.json();
            if (data.success) {
                $(".js-change-name").text(data.user.Name);
                $(".js-change-href-icon").attr(
                    "src",
                    `../images/${data.user.profile_icon}`,
                );
                username = data.user.Name;
                icon = data.user.profile_icon;
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    changeName();
    //function for get a name based on id
    async function getName(param_id) {
        try {
            var response = await fetch("../../Backend/getUser.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: param_id,
                }),
            });
            data = await response.json();
            if (data.success) {
                return data.user;
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    //return the html structure for the user posts
    async function createUserPost(post, icon) {
        var postingDate = formatPostDate(post.posting_date);
        var content = escapeHtml(post.post);
        var postId = escapeHtml(post.post_id);
        var userId = escapeHtml(post.user_id);
        var friend_Name = await getName(post.friend_id);
        var friend_icon = await getName(post.friend_id);
        var nameHTML;
        var post_icon;
        if (post.friend_id != 0) {
            nameHTML = `<div class="post-user-name js-change-name">${friend_Name.Name}<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style="--x-color: var(--secondary-icon);"><path d="M6 11.292c0 1.114 1.346 1.672 2.134.884l2.94-2.94a1.75 1.75 0 0 0 0-2.474l-2.94-2.94C7.346 3.036 6 3.594 6 4.708v6.585z"></path></svg>${username}</div>`;
            post_icon = `<img src="../images/${friend_icon.profile_icon}" alt="">`;
        } else {
            nameHTML = `<div class="post-user-name js-change-name">${username}</div>`;
            post_icon = `<img src="../images/${icon}" alt="">`;
        }
        var currentTime = new Date();
        var dateHTML;
        var postTime = new Date(post.posting_date.replace(" ", "T"));
        var diff = (currentTime - postTime) / 1000;
        if (diff < 120) {
            dateHTML = `<div class="post-date">Just now</div>`;
        } else {
            dateHTML = `<div class="post-date">${postingDate}</div>`;
        }
        return `
            <div class="common-cards posted-by-user">
                        <div class="center-center-post-heading">
                            <div class="post-user-icon">
                                ${post_icon}
                            </div>
                            <div class="post-user-info">
                                ${nameHTML}
                                ${dateHTML}
                            </div>
                            <div class="post-user-function">
                                <div>
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                                        aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style="--x-color: var(--secondary-icon);">
                                        <g fill-rule="evenodd" transform="translate(-446 -350)">
                                            <path
                                                d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                                        aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style="--x-color: var(--secondary-icon);">
                                        <path
                                            d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="user-post-content">
                            ${content}
                        </div>
                        <div class="user-actions">
                            <div class="user-action-element " data-post-id="${postId}">
                                <span class="js-change-icon">
                                    <i data-visualcompletion="css-img"
                                        class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -441px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                                </span>
                                <span>
                                    Like
                                </span>
                            </div>
                            <div class="user-action-element">
                                <span>
                                    <i data-visualcompletion="css-img"
                                        class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                        style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp');background-position:0 -231px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                                </span>
                                <span>
                                    Comment
                                </span>
                            </div>
                            <div class="user-action-element">
                                <span>
                                    <i data-visualcompletion="css-img"
                                        class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                        style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp');background-position:0 -567px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                                </span>
                                <span>
                                    Share
                                </span>
                            </div>
                        </div>

                        <div class="comment-section">

                            <!-- Profile picture with dropdown -->
                            <div class="comment-profile">
                                <button type="button" class="comment-profile-button">
                                    <img src="../images/${icon}" alt="Profile picture">
                                    <span class="profile-dropdown-arrow">⌄</span>
                                </button>
                            </div>

                            <!-- Comment input -->
                            <div class="comment-main">

                                <div class="comment-input-wrapper">
                                    <textarea class="comment-input" placeholder="Write a comment..."
                                        rows="1"></textarea>

                                    <div class="comment-input-actions">
                                        <button type="button" title="Avatar sticker"><i data-visualcompletion="css-img"
                                                class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                                style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -588px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i></button>
                                        <button type="button" title="Emoji"><svg viewBox="0 0 16 16" width="16"
                                                height="16" fill="currentColor" aria-hidden="true"
                                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                                style="--x-color: var(--secondary-icon);">
                                                <path
                                                    d="M10.75 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM6.5 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM6 9.941a.75.75 0 0 0-1 1.118c.776.695 1.825 1.191 3 1.191s2.224-.496 3-1.191a.75.75 0 1 0-1-1.118c-.55.493-1.255.809-2 .809-.745 0-1.45-.316-2-.809z">
                                                </path>
                                                <path
                                                    d="M8 .5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8z">
                                                </path>
                                            </svg></button>

                                        <div class="comment-photo-button " title="Attach photo">
                                            <!-- <input type="file" accept="image/*,video/*" hidden> -->
                                            <i data-visualcompletion="css-img"
                                                class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                                style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -622px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                                        </div>

                                        <button type="button" title="GIF"><i data-visualcompletion="css-img"
                                                class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                                style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -639px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i></button>
                                        <button type="button" title="Sticker"><i data-visualcompletion="css-img"
                                                class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 x1d69dk1"
                                                style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -707px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i></button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
        `;
    }

    //submiting post using ajax
    var submitButton = document.querySelector(".user-submit-post");
    submitButton.addEventListener("click", function () {
        var postContent = document.querySelector(".post_content").value.trim();
        function addPost(callback) {
            if (postContent === "") {
                callback({ success: false, message: "Post cannot be empty" });
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    callback(data);
                }
            };
            xhr.open("POST", "../../Backend/add_post.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(
                JSON.stringify({
                    user_id: urluserId,
                    friendId: userId,
                    post: postContent,
                }),
            );
        }

        //call back function
        addPost(function (data) {
            var message = document.createElement("div");

            message.style.position = "fixed";
            message.style.top = "10px";
            message.style.left = "50%";
            message.style.transform = "translateX(-50%)";
            message.style.border = "1px solid #ccc";
            message.style.padding = "10px 20px";
            message.style.backgroundColor = "white";
            message.style.zIndex = "9999";

            if (data.success) {
                message.innerText = "Post added successfully";
                message.style.color = "green";

                document.querySelector(".post_content").value = "";
            } else {
                message.innerText = data.message || "Failed to add post";
                message.style.color = "red";
            }

            // Add the message to the page
            document.body.appendChild(message);

            setTimeout(async function () {
                message.remove();
                if (data.success) {
                    closeCreatePost();
                    var container = document.querySelector(".user-own-posts");
                    container.insertAdjacentHTML(
                        "afterbegin",
                        await createUserPost(data.posts, icon),
                    );
                }
            }, 1000);
        });
    });
    //load the user friends dynamically
    async function loadFriends() {
        try {
            var response = await fetch("../../Backend/getFriends.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: urluserId,
                }),
            });
            data = await response.json();
            if (data.success) {
                var container = document.querySelector(
                    ".lower-part-content-friends-users",
                );

                data.user.forEach((friend) => {
                    container.insertAdjacentHTML(
                        "beforeend",
                        createFriendPost(friend),
                    );
                });
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    loadFriends();
    //return the html structure for each friends
    function createFriendPost(friend) {
        return `
            <div class="lower-part-content-friends-users-element">
                            <div class="lower-part-content-friends-users-one">
                                <div class="lower-part-content-friends-users-icon">
                                <img src="../images/${friend.profile_icon}" alt="">
                                </div>
                                <div class="lower-part-content-friends-users-name">
                                 <a href="profile.php?id=${friend.user_id}">
                                   ${friend.Name}
                                </a>
                                </div>
                            </div>
                            <div class="lower-part-content-friends-users-button">
                                Following
                            </div>
                        </div>
        `;
    }

    function goToSection(id) {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    //nav bar div change when it scroll to its top
    var marker = document.querySelector(".horizantal-line");

    $(".compact-navbar").hide();

    window.addEventListener("scroll", () => {
        var bottom = marker.getBoundingClientRect().top;

        if (bottom <= 60) {
            $(".js-show-tabs").hide();
            $(".compact-navbar").show();
        } else {
            $(".compact-navbar").hide();
            $(".js-show-tabs").show();
        }
    });

    //more button drop down functionality for profile page
    var moreBtn = document.getElementById("moreBtn");

    moreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        var dropdown = bootstrap.Dropdown.getOrCreateInstance(moreBtn);
        const menu = moreBtn
            .closest(".dropdown")
            .querySelector(".dropdown-menu");

        if (menu.classList.contains("show")) {
            dropdown.hide();
        } else {
            dropdown.show();
        }
    });

    //search functionality for friends list
    $("#search-friends").off("input");
    $("#search-friends").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();
        $(".lower-part-content-friends-users-element").each(function () {
            var friendName = $(this)
                .find(".lower-part-content-friends-users-name a")
                .text()
                .toLowerCase();

            if (friendName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    // 

    //disable the submit button if the post content is empty
    $(".js-submit-post").prop("disabled", true);
    $(".js-submit-post").addClass("disabled-button");
    $(".post_content").off("input");
    $(".post_content").on("input", function () {
        console.log("Input detected in post content");
        var postContent = $(this).val();
        if (postContent.length > 0) {
            $(".js-submit-post").prop("disabled", false);
            $(".js-submit-post").removeClass("disabled-button");
        } else {
            $(".js-submit-post").prop("disabled", true);
            $(".js-submit-post").addClass("disabled-button");
        }
    });
});
