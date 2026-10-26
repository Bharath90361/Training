$(document).ready(function () {
    //redirect to particular section after click through profile page
    const section = window.location.hash;

    if (section) {
        const tab = document.querySelector(
            `.nav-button[data-bs-target="${section}"]`
        );
        if (tab) {
            bootstrap.Tab.getOrCreateInstance(tab).show();
        }
    }

    $(".nav-button").on("shown.bs.tab", function () {
        const target = $(this).attr("data-bs-target");

        if (target) {
            history.replaceState(null, "", target);
        }
    });

    let counter = 1;
    let user = null;
    //load the all the posts from the database and display them on the page
    async function loadPosts() {
        try {
            let response = await fetch("../../Backend/getPosts.php", {});
            let data = await response.json();
            if (data.success) {
                //adding posts to the page
                let container = document.querySelector(
                    ".center-center-createstory",
                );
                data.post.forEach((post) => {
                    container.insertAdjacentHTML("afterend", createPost(post));
                });
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    loadPosts();

    // Store the buttons and remove them initially
    let hideElements = $(".js-hide-element").detach();

    $(".js-last-element").on("click", function () {
        if (counter == 1) {
            // Add hidden buttons before See more
            $(this).closest("button").before(hideElements);
            $("#last_element").html(`
                <svg viewBox="0 0 20 20" width="20" height="20"
                    fill="currentColor" aria-hidden="true">
                    <path d="M8.586 12.5a2 2 0 0 0 2.828 0l2.543-2.543a1 1 0 0 0-1.414-1.414L10 11.086 7.457 8.543a1 1 0 1 0 1.414 1.414L8.586 12.5z"></path>
                </svg>
            `);

            $("#last_element").html(`
                <svg viewBox="0 0 20 20" width="20" height="20"
                    fill="currentColor" aria-hidden="true">
                    <path d="M8.586 7.5a2 2 0 0 1 2.828 0l2.543 2.543a1 1 0 1 1-1.414 1.414L10 8.914 7.457 11.457a1 1 0 1 1-1.414 1.414L8.586 7.5z"></path>
                </svg>
            `);

            $(".js-last-element-content").text("See less");

            counter = 0;
        } else {
            // Remove the buttons again
            hideElements = $(".js-hide-element").detach();
            $("#last_element").html(`
                <svg viewBox="0 0 20 20" width="20" height="20"
                    fill="currentColor" aria-hidden="true">
                    <path d="M8.586 12.5a2 2 0 0 0 2.828 0l2.543-2.543a1 1 0 0 0-1.414-1.414L10 11.086 7.457 8.543a1 1 0 1 0 1.414 1.414L8.586 12.5z"></path>
                </svg>
            `);

            $(".js-last-element-content").text("See more");

            counter = 1;
        }
    });
    //return a html structure for a post with the given data
    function createPost(post) {
        const postId = escapeHtml(post.post_id);
        const postingDate = formatPostDate(post.posting_date);
        const posterName = escapeHtml(post.poster_name);
        const posterIcon = escapeHtml(post.post_icon);
        const postImage = escapeHtml(post.post_image);
        const content = escapeHtml(post.post_content);
        const likes = formatCount(post.likes);
        const comments = formatCount(post.comments);
        const shares = formatCount(post.shares);
        const views = formatCount(post.views);

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
                            <div class="other-count-item">
                                <span>${views}</span>
                                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"
                                    class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                    style="--x-color: var(--secondary-icon);">
                                    <path
                                        d="M8 4.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM6.25 8a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0z">
                                    </path>
                                    <path
                                        d="M8 2C5.807 2 4.096 3.03 2.875 4.172 1.658 5.312.882 6.604.536 7.252a1.58 1.58 0 0 0 0 1.496c.346.648 1.122 1.94 2.339 3.08C4.095 12.97 5.807 14 8 14s3.904-1.03 5.125-2.172c1.217-1.14 1.993-2.432 2.339-3.08a1.58 1.58 0 0 0 0-1.496c-.346-.648-1.122-1.94-2.339-3.08C11.905 3.03 10.193 2 8 2zM1.86 7.959c.305-.574.99-1.709 2.04-2.692C4.947 4.287 6.31 3.5 8 3.5c1.69 0 3.053.787 4.1 1.767 1.05.983 1.735 2.118 2.04 2.692.01.017.012.03.012.041 0 .01-.002.024-.011.041-.306.574-.99 1.709-2.041 2.692-1.047.98-2.41 1.767-4.1 1.767-1.69 0-3.053-.787-4.1-1.767C2.85 9.75 2.165 8.615 1.86 8.04A.087.087 0 0 1 1.847 8c0-.01.002-.024.011-.041z">
                                    </path>
                                </svg>
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
    //it will escape the html characters in the given string to prevent xss attacks
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
    //converting number to a compact format like 1.2k, 1.5M etc
    function formatCount(number) {
        return new Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(number);
    }
    //changing the date format
    function formatPostDate(dateString) {
        const date = new Date(dateString.replace(" ", "T"));

        if (isNaN(date.getTime())) {
            return dateString;
        }

        const day = date.getDate();
        const month = date.toLocaleString("en-GB", { month: "long" });
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day} ${month} at ${hours}:${minutes}`;
    }
    //like and unlike a post
    $(document).on("click", ".user-action-like", function () {

        const postId = $(this).attr("data-post-id");

        if (!$(this).hasClass("unliked")) {
            $(this).addClass("unliked");
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
                xhr.send(JSON.stringify({ post_id: postId, result: "like",table:"posts"}));
            }
            //call back function

            addPost(function (data) {
                let current_likes = formatCount(data.likes - 1);

                $(`.js-likes[data-post-id="${postId}"]`)
                    .text(`you and ${current_likes} others`);

                let likes = $(`.user-action-like[data-post-id="${postId}"]`);

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
                xhr.send(JSON.stringify({ post_id: postId, result: "unlike",table:"posts" }));
            }
            //call back function


            addPost(function (data) {
                let current_likes = formatCount(data.likes);

                // Select the Like button for this specific post
                let likes = $(`.user-action-like[data-post-id="${postId}"]`);

                // Update the likes count
                // This assumes you add data-post-id to the js-likes span
                $(`.js-likes[data-post-id="${postId}"]`)
                    .text(current_likes);

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
});
