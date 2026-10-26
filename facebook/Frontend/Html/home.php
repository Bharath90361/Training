<?php
session_start();
// fetching user id from sessions
if (!isset($_SESSION["user_id"])) {
    header("Location: index.php");
    exit();
}

$userId = $_SESSION["user_id"];
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Facebook</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous" />

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css" />
    <link rel="stylesheet" href="../Css/home.css" />
</head>

<body>
    <!-- header import -->
    <?php require_once 'header.php' ?>
    <!-- main content (left center right) content is there -->
    <div id="center_content" class="container-fluid">
        <!-- left content -->
        <div id="center_left" class="d-none d-lg-flex">
            <!-- user button -->
            <a href="profile.php" class="remove-text-decoration js-href-change">
                <button>
                    <div class="center-left-elements">
                        <div class="center-left-user">
                            <img src="../images/user.png" alt="">
                        </div>
                        <div class="center-left-elements-content js-center-left-elements">user</div>
                    </div>
                </button>
            </a>
            <!-- meta ai  -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yt/r/FubCAjH3_RH.webp&quot;);
                                    background-position: 0 0;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">Meta Ai</div>
                </div>
            </button>
            <!-- friends -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -814px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">Friends</div>
                </div>
            </button>
            <!-- memories  -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -1184px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">memories</div>
                </div>
            </button>
            <!-- saved -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -518px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">saved</div>
                </div>
            </button>
            <!-- groups -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -185px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">Groups</div>
                </div>
            </button>
            <!-- reels -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -111px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">Reels</div>
                </div>
            </button>
            <!-- marketplace -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -962px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">
                        Marketplace
                    </div>
                </div>
            </button>
            <!-- feeds -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <img draggable="false" height="36" width="36" class="xz74otr" alt=""
                            referrerpolicy="origin-when-cross-origin" src="../images/feeds.png" />
                    </div>
                    <div class="center-left-elements-content">Feeds</div>
                </div>
            </button>
            <!-- events -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -666px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">Events</div>
                </div>
            </button>
            <!-- ads manager -->
            <button>
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0 -407px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">
                        Ads Manager
                    </div>
                </div>
            </button>
            <!-- birthdays -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yC/r/FTKb61IRG16.webp&quot;);
                                    background-position: 0px 0px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">
                        Birthdays
                    </div>
                </div>
            </button>
            <!-- gaming video -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <img draggable="false" height="36" width="36" class="xz74otr" alt=""
                            referrerpolicy="origin-when-cross-origin" src="../images/gaming.png" />
                    </div>
                    <div class="center-left-elements-content">
                        Gaming video
                    </div>
                </div>
            </button>
            <!-- messanger -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yF/r/yUAAurE0b1h.webp&quot;);
                                    background-position: 0px 0px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">
                        messanger
                    </div>
                </div>
            </button>
            <!-- messanger kids -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <img draggable="false" height="36" width="36" class="xz74otr" alt=""
                            referrerpolicy="origin-when-cross-origin" src="../images/messanger.png" />
                    </div>
                    <div class="center-left-elements-content">
                        messanger kids
                    </div>
                </div>
            </button>
            <!-- orders and payments -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <img draggable="false" height="36" width="36" class="xz74otr" alt=""
                            referrerpolicy="origin-when-cross-origin" src="../images/orders.png" />
                    </div>
                    <div class="center-left-elements-content">
                        Orders and payments
                    </div>
                </div>
            </button>
            <!-- pages -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0px -333px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">Pages</div>
                </div>
            </button>
            <!-- play games -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <i data-visualcompletion="css-img" class="" style="
                                    background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yA/r/BY-cnZEKEQQ.webp&quot;);
                                    background-position: 0px -259px;
                                    background-size: auto;
                                    width: 36px;
                                    height: 36px;
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                "></i>
                    </div>
                    <div class="center-left-elements-content">
                        Play games
                    </div>
                </div>
            </button>
            <!-- Ray-Ban meta -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <img draggable="false" height="36" width="36" class="xz74otr" alt=""
                            referrerpolicy="origin-when-cross-origin" src="../images/rayban.png" />
                    </div>
                    <div class="center-left-elements-content">
                        Ray-Ban meta
                    </div>
                </div>
            </button>
            <!-- your activity -->
            <button class="js-hide-element">
                <div class="center-left-elements">
                    <div>
                        <img draggable="false" height="36" width="36" class="xz74otr" alt=""
                            referrerpolicy="origin-when-cross-origin" src="../images/ad.png" />
                    </div>
                    <div class="center-left-elements-content">
                        your activity
                    </div>
                </div>
            </button>
            <!-- see more or see less -->
            <button>
                <div class="center-left-elements js-last-element">
                    <!-- <div>
                        <div id="last_element">
                            <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style="--x-color: var(--primary-icon);"><path d="M8.586 7.5a2 2 0 0 1 2.828 0l2.543 2.543a1 1 0 0 1-1.414 1.414L10 8.914l-2.543 2.543a1 1 0 1 1-1.414-1.414L8.586 7.5z"></path></svg>
                        </div>
                    </div> -->

                    <div>
                        <div id="last_element">
                            <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"
                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                style="--x-color: var(--primary-icon)">
                                <path
                                    d="M8.586 12.5a2 2 0 0 0 2.828 0l2.543-2.543a1 1 0 0 0-1.414-1.414L10 11.086 7.457 8.543a1 1 0 0 0-1.414 1.414L8.586 12.5z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <div class="center-left-elements-content js-last-element-content">
                        See more
                    </div>
                </div>
            </button>
            <?php include 'footer.php'; ?>
        </div>
        <!-- center content -->
        <div id="center_center" class="tab-content">
            <!-- home tab -->
            <div id="home" class="tab-pane fade show active">
                <!-- center content 1st div  -->
                <div class="center-center-user center-center-element">
                    <div>
                        <a href="#" class="remove-text-decoration js-href-change">
                            <div class="center-left-user center-center-user-icon">
                                <img src="../images/user.png" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="user-mind">
                        <span class="js-user-placeholder"></span>
                    </div>
                    <div class="user-mind-functions">
                        <div class="user-mind-elements" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Live video">
                            <img height="24" width="24" class="xz74otr x15mokao x1ga7v0g x16uus16 xbiv7yw" alt=""
                                referrerpolicy="origin-when-cross-origin" src="../images/livevideo.png">
                        </div>
                        <div class="user-mind-elements" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Photo/Video">
                            <img height="24" width="24" class="xz74otr x15mokao x1ga7v0g x16uus16 xbiv7yw" alt=""
                                referrerpolicy="origin-when-cross-origin" src="../images/video.png">
                        </div>
                        <div class="user-mind-elements" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Feeling/activity">
                            <img height="24" width="24" class="xz74otr x15mokao x1ga7v0g x16uus16 xbiv7yw" alt=""
                                referrerpolicy="origin-when-cross-origin" src="../images/feeling.png">
                        </div>
                    </div>

                </div>
                <!-- center content 2nd div create story-->
                <div class="center-center-element center-center-createstory">
                    <div class="center-element-hover">
                        <div class="create-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"
                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                style="--x-color:var(--accent)">
                                <path
                                    d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z">
                                </path>
                            </svg>
                        </div>
                        <div class="center-center-c-s-content">
                            <div class="center-bold">
                                <p>Create story</p>
                            </div>
                            <div>
                                <p>Share a photo or video or write something</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- reels -->
            <div id="reels" class="tab-pane fade">
                <p>reels</p>
            </div>
            <!-- friends -->
            <div id="friends" class="tab-pane fade">
                <p>friends</p>
            </div>
            <!-- marketplace -->
            <div id="marketplace" class="tab-pane fade">
                <p>marketplace</p>
            </div>
            <!-- groups -->
            <div id="groups" class="tab-pane fade">
                <p>groups</p>
            </div>
        </div>
        <!-- group chat -->
        <div id="center_right">
            <div class="group-chat">
                <p class="mb-0">Groups chats</p>
            </div>
            <div class="create-group-icon">
                <div class="create-icon-group"><svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                        aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                        style="--x-color:var(--primary-icon)">
                        <path
                            d="M9 16.25a1 1 0 1 0 2 0V11h5.25a1 1 0 1 0 0-2H11V3.75a1 1 0 1 0-2 0V9H3.75a1 1 0 0 0 0 2H9v5.25z">
                        </path>
                    </svg></div>
                <div>
                    <p>create group chat</p>
                </div>

            </div>
        </div>
    </div>
    <script>
        // script to change the href of the profile link to the user id
        $(document).ready(function () {
            let userId = <?= json_encode($userId) ?>;

            $(".js-href-change").attr("href", "profile.php?id=" + userId);

        });
    </script>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../JavaScript/home.js"></script>
    <script src="../JavaScript/fetchUser.js"></script>
</body>

</html>