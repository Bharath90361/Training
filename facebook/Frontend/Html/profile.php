<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Facebook</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous" />

    <link rel="stylesheet" href="../Css/profile.css">
    <link rel="stylesheet" href="../Css/home.css">
</head>

<body>
    <!-- header part -->
    <?php require_once 'header.php' ?>
    <!-- profile -->
    <div class="profile-center">
        <div class="upper-part">
            <!-- cover page -->
            <div class="cover-page">
                <div class="cover-page-img">
                    <img src="../images/coverpage.png" alt="">
                </div>
            </div>
            <!-- user information -->
            <div class="user-content-bc">
                <div class="user-info">
                    <!--user icon -->
                    <div class="profile-icon">
                        <img src="../images/mark.png" alt="" class="js-change-href-icon">
                    </div>
                    <!-- user name and details -->
                    <div class="user-info-text">
                        <div class="user-info-content">
                            <div class="user-name-followers">
                                <div class="user-name">
                                    <span>
                                        <div class="js-change-name">Mark Zuckerberg</div><svg viewBox="0 0 24 24"
                                            width="24" height="24" fill="currentColor" role="img"
                                            title="Verified account"
                                            class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                            style="--x-color: var(--accent);">
                                            <title>Verified account</title>
                                            <path
                                                d="M8.004 1.183a1.5 1.5 0 0 1 2.049-.55L12 1.759 13.947.634a1.5 1.5 0 0 1 2.05.549L17.045 3H19.5A1.5 1.5 0 0 1 21 4.5v2.453l1.817 1.05a1.5 1.5 0 0 1 .55 2.049L22.241 12l1.124 1.947a1.5 1.5 0 0 1-.55 2.05L21 17.044V19.5a1.5 1.5 0 0 1-1.5 1.5h-2.454l-1.05 1.817a1.5 1.5 0 0 1-2.048.549L12 22.241l-1.948 1.125a1.5 1.5 0 0 1-2.049-.549L6.955 21H4.5A1.5 1.5 0 0 1 3 19.5v-2.455l-1.817-1.049a1.5 1.5 0 0 1-.549-2.049L1.758 12 .634 10.053a1.5 1.5 0 0 1 .549-2.05L3 6.954V4.5A1.5 1.5 0 0 1 4.5 3h2.454l1.05-1.817zm9.703 9.024a1 1 0 0 0-1.414-1.414l-5.44 5.44a.5.5 0 0 1-.707 0l-2.439-2.44a1 1 0 0 0-1.414 1.414l2.44 2.44a2.5 2.5 0 0 0 3.535 0l5.44-5.44z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <a href="">

                                    <div>
                                        <span class="followers">121M
                                            followers</span>
                                    </div>
                                </a>

                            </div>
                            <div class="user-button-functions">
                                <div class="user-buttons follow-blue-button">
                                    <img src="../images/follow.png" alt="">
                                    <span>Follow</span>
                                </div>
                                <div class="user-buttons">
                                    <img src="../images/search.png" alt="">
                                    <span>Search</span>
                                </div>
                                <div class="user-action-button">
                                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"
                                        aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style="--x-color: var(--primary-icon);">
                                        <path
                                            d="M6.94 10.354a1.5 1.5 0 0 0 2.12 0l2.647-2.647a1 1 0 0 0-1.414-1.414L8 8.586 5.707 6.293a1 1 0 0 0-1.414 1.414l2.646 2.647z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="user-about">
                            Bringing the world closer together.
                        </div>
                        <div class="user-info-elements-container">
                            <span class="user-info-elements">
                                <img src="../images/public.svg" alt="">
                                <span class="user-info-elements-text">Public figure</span>

                            </span>
                            <span class="user-info-elements-dot">
                                ·
                            </span>
                            <span class="user-info-elements">
                                <img src="../images/locationicon.svg" alt="">
                                <span>Palo Alto, CA</span>
                            </span>
                            <span class="user-info-elements-dot">
                                ·
                            </span>
                            <span class="user-info-elements">
                                <img src="../images/meta.svg" alt="">
                                <span>Meta</span>
                            </span>
                            <span class="user-info-elements-dot">
                                ·
                            </span>
                            <span class="user-info-elements">
                                <img src="../images/harward.svg" alt="">
                                <span>Harvard University</span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- horizantal line -->
                <div class="horizantal-line">
                    <hr>
                </div>
                <div class="navbar-marker"></div>
                <!-- navbar tabs -->
                <div class="navbar-tabs js-show-tabs">
                    <ul class="nav nav-tabs gap-1">
                        <!-- all tab -->
                        <li class="nav-item nav-item-hover">
                            <a href="#all" class="nav-link active" data-bs-toggle="tab">
                                <div class="nav-item-elements all-item-one">
                                    <span>All</span>
                                </div>

                            </a>

                        </li>
                        <!-- about tab -->
                        <li class="nav-item nav-item-hover">
                            <a href="#about" class="nav-link " data-bs-toggle="tab">
                                <div class="nav-item-elements">
                                    <span>About</span>
                                </div>
                            </a>

                        </li>
                        <!-- reels tab -->
                        <li class="nav-item nav-item-hover">
                            <a href="#reels" class="nav-link " data-bs-toggle="tab">
                                <div class="nav-item-elements">
                                    <span>Reels</span>
                                </div>
                            </a>

                        </li>
                        <!-- photo tab -->
                        <li class="nav-item nav-item-hover">
                            <a href="#photos" class="nav-link " data-bs-toggle="tab">
                                <div class="nav-item-elements">
                                    <span>Photos</span>
                                </div>
                            </a>

                        </li>
                        <!-- friend tab -->
                        <li class="nav-item nav-item-hover">
                            <a href="#friends" class="nav-link " data-bs-toggle="tab">
                                <div class="nav-item-elements">
                                    <span>Friends</span>
                                </div>
                            </a>

                        </li>
                        <!-- more tab -->
                        <li class="nav-item dropdown nav-item-hover">
                            <button class="nav-link" id="moreBtn" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <div class="nav-item-elements">
                                    <span>More</span><span><svg viewBox="0 0 20 20" width="16" height="16"
                                            fill="currentColor" aria-hidden="true"
                                            class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                            style="--x-color: var(--secondary-icon);">
                                            <path
                                                d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z">
                                            </path>
                                        </svg></span>
                                </div>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="moreBtn">
                                <a class="dropdown-item" href="#events">Events</a>
                                <a class="dropdown-item" href="#checkins">Check-ins</a>
                            </div>
                        </li>

                    </ul>
                    <div class="help-desk">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"
                            class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                            style="--x-color: var(--primary-icon);">
                            <circle cx="12" cy="12" r="2.5"></circle>
                            <circle cx="19.5" cy="12" r="2.5"></circle>
                            <circle cx="4.5" cy="12" r="2.5"></circle>
                        </svg>
                    </div>
                </div>
                <!-- compact navbar after scroll it visible -->
                <div class="compact-navbar">

                    <div class="compact-profile-info">
                        <img src="../images/profile.jpg" alt="Profile picture" class="js-change-href-icon">
                        <span class="js-change-name">Mark Zuckerberg</span>
                    </div>

                    <div class="help-desk">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"
                            class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                            style="--x-color: var(--primary-icon);">
                            <circle cx="12" cy="12" r="2.5"></circle>
                            <circle cx="19.5" cy="12" r="2.5"></circle>
                            <circle cx="4.5" cy="12" r="2.5"></circle>
                        </svg>
                    </div>


                </div>
            </div>
        </div>

        <!-- navbar tabs contents -->
        <div class="lower-part tab-content">

            <!-- all tab content -->
            <div id="all" class="lower-part-content tab-pane fade show active">
                <div class="lower-part-left">
                    <div class="personal-details common-cards">
                        <div class="personal-details-cards">
                            <div class="personal-details-personal"><span>Personal details</span></div>
                            <div class="personal-details-common">
                                <img height="24" width="24"
                                    class="xz74otr x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 xep6ejk" alt=""
                                    aria-hidden="true" referrerpolicy="origin-when-cross-origin"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M12 5.499a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z'/%3E %3Cpath d='M12 .5a9 9 0 0 0-9 9c0 2.64 1.351 5.422 2.859 7.736 1.529 2.347 3.325 4.37 4.418 5.522a2.365 2.365 0 0 0 3.446 0c1.093-1.152 2.89-3.175 4.418-5.522C19.65 14.922 21 12.14 21 9.5a9 9 0 0 0-9-9Zm-7 9a7 7 0 0 1 14 0c0 2.036-1.077 4.408-2.535 6.645-1.435 2.204-3.14 4.128-4.192 5.236a.365.365 0 0 1-.546 0c-1.051-1.108-2.757-3.032-4.192-5.236C6.077 13.908 5 11.535 5 9.5Z'/%3E %3C/svg%3E">
                                <span>Lives in palo alto,california</span>
                            </div>
                            <div class="personal-details-common">
                                <img src="../images/home.svg" alt="">
                                <span>From Dobbs Ferry,new york</span>
                            </div>
                            <div class="personal-details-common">
                                <img src="../images/dateofbirth.svg" alt="">
                                <span>14 may 1984</span>
                            </div>
                            <div class="personal-details-function">
                                <span>see more personal details</span>
                            </div>
                        </div>
                        <div class="personal-details-cards">
                            <div class="personal-details-personal">
                                <span>Communities</span>
                            </div>


                            <div class="personal-details-common">
                                <img src="../images/metachannel.svg" alt="">
                                <span>Meta channel</span>
                            </div>
                        </div>
                        <div class="personal-details-cards">
                            <div class="personal-details-personal">
                                <span>Work</span>
                            </div>
                            <div class="personal-details-common personal-details-common-founder">
                                <img src="../images/metalogo.png" alt="">
                                <div class="personal-details-work">
                                    <span>Meta</span>
                                    <span>Founder and CEO</span>
                                </div>
                            </div>
                            <div class="personal-details-function">
                                <span>see more work</span>
                            </div>
                        </div>
                        <div class="personal-details-cards">
                            <div class="personal-details-personal">
                                <span>Education</span>
                            </div>
                            <div class="personal-details-common personal-details-common-education">
                                <img src="../images/harvard.png" alt="">
                                <div class="personal-details-work">
                                    <span>Harvard University</span>
                                    <span>30 August 2002 - 30 April 2004</span>
                                </div>
                            </div>
                            <div class="personal-details-function">
                                <span>see more education</span>
                            </div>
                        </div>
                    </div>
                    <div class="photos-block common-cards">
                        <div class="photos-block-content">
                            <span>photos</span>
                            <div>see all photos</div>
                        </div>
                        <div class="photos-block-photos">
                            <div class="photos-block-photos-each">
                                <img src="../images/coverpage.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post1.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post2.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post3.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post4.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post5.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post6.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post7.png" alt="">
                            </div>
                            <div class="photos-block-photos-each">
                                <img src="../../posts/post8.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <?php include 'footer.php'; ?>
                    </div>
                </div>
                <div class="lower-part-right">
                    <div class="create-post common-cards">


                        <div class="create-post-card">

                            <!-- Top section -->
                            <div class="create-post-top">

                                <a href="#" class="create-post-profile">
                                    <img src="../images/mark.png" alt="Profile picture">
                                </a>

                                <button type="button" class="create-post-input">
                                    What's on your mind?
                                </button>

                            </div>

                            <!-- Bottom action buttons -->
                            <div class="create-post-actions">

                                <button type="button" class="post-action">
                                    <img src="../images/livevideo.png" alt="">
                                    <span>Live video</span>
                                </button>

                                <button type="button" class="post-action">
                                    <img src="../images/video.png" alt="">
                                    <span>Photo/video</span>
                                </button>

                                <button type="button" class="post-action">
                                    <img src="../images/flag.png" alt="">
                                    <span>Life update</span>
                                </button>

                            </div>

                        </div>
                        <div class="create-post-overlay"></div>
                        <div class="create-post-appear">
                            <div class="create-post-appear-upper">
                                <div>Create Post</div>
                                <div class="create-post-appear-upper-icon">
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                                        aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style="--x-color: var(--secondary-icon);">
                                        <path
                                            d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <hr>
                            <div class="create-post-appear-middle">
                                <div class="profile">
                                    <div class="profile-picture">
                                        <a href="#" class="create-post-profile">
                                            <img src="../images/mark.png" alt="Profile picture">
                                        </a>
                                    </div>
                                    <div class="profile-content">
                                        <div class="profile-content-name js-change-name">
                                            user
                                        </div>
                                        <div class="profile-content-buttons">
                                            <div class="profile-content-buttons-elements">
                                                <img src="../images/friends.png" alt="">
                                                <span>Friends</span>
                                                <span><i data-visualcompletion="css-img"
                                                        class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 xep6ejk"
                                                        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -831px; background-size: auto; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i></span>
                                            </div>
                                            <div class="profile-content-buttons-elements-two">
                                                <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor"
                                                    aria-hidden="true"
                                                    class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                                    style="--x-color: var(--primary-icon);">
                                                    <path
                                                        d="M6 .25a5.75 5.75 0 1 0 0 11.5A5.75 5.75 0 0 0 6 .25zM6 3a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 6 3z">
                                                    </path>
                                                </svg>
                                                <span>AI Label off</span>
                                                <span><i data-visualcompletion="css-img"
                                                        class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499 xep6ejk"
                                                        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yH/r/1RsW4JFjPX8.webp&quot;); background-position: 0px -831px; background-size: auto; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-area">
                                    <textarea name="" id="" placeholder="What's on your mind?"
                                        class="post_content"></textarea>
                                </div>
                                <div class="create-post-appear-middle-icons">
                                    <div class="icon-one">
                                        <img src="../images/Aa.png" alt="">
                                    </div>
                                    <div class="icon-two">
                                        <i data-visualcompletion="css-img" aria-label="Emoji"
                                            class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499" role="img"
                                            style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yU/r/w9zlAF3rnY1.webp&quot;); background-position: 0px -137px; background-size: auto; width: 24px; height: 24px; background-repeat: no-repeat; display: inline-block;"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="add-to-post">

                                        <div class="add-to-post-title">
                                            Add to your post
                                        </div>

                                        <div class="add-to-post-actions">

                                            <!-- Photo / Video -->
                                            <label class="add-post-action photo-video">
                                                <input type="file" accept="image/*,video/*" multiple hidden>
                                                <img src="https://static.xx.fbcdn.net/rsrc.php/yX/r/8_VnccIZfRa.webp"
                                                    alt="">
                                            </label>

                                            <!-- Tag People -->
                                            <button type="button" class="add-post-action tag-people">
                                                <img src="https://static.xx.fbcdn.net/rsrc.php/yO/r/UnRgJelt7Mg.webp"
                                                    alt="">
                                            </button>

                                            <!-- Feeling / Activity -->
                                            <button type="button" class="add-post-action feeling">
                                                <img src="https://static.xx.fbcdn.net/rsrc.php/ya/r/XlpCJi9w2HF.webp"
                                                    alt="">
                                            </button>

                                            <!-- Check In -->
                                            <button type="button" class="add-post-action check-in">
                                                <img src="https://static.xx.fbcdn.net/rsrc.php/yC/r/glLNpLPayUm.webp"
                                                    alt="">
                                            </button>

                                            <!-- GIF -->
                                            <button type="button" class="add-post-action gif">
                                                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/pfuEaSjPXaI.webp"
                                                    alt="">
                                            </button>

                                            <!-- More Options -->
                                            <button type="button" class="add-post-action more-options">
                                                <i data-visualcompletion="css-img"
                                                    class="x15mokao x1ga7v0g x16uus16 xbiv7yw x1b0d499"
                                                    style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/yU/r/w9zlAF3rnY1.webp&quot;); background-position: 0px -112px; background-size: auto; width: 24px; height: 24px; background-repeat: no-repeat; display: inline-block;"></i>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="create-post-appear-bottom">
                                <button class="user-submit-post js-submit-post">Post</button>
                            </div>
                        </div>


                    </div>
                    <div class="all-posts common-cards">
                        <div class="all-posts-content">Posts</div>
                        <div class="all-posts-filter"><svg viewBox="0 0 16 16" width="16" height="16"
                                fill="currentColor" aria-hidden="true"
                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                style="--x-color: var(--primary-icon);">
                                <path
                                    d="M2.614 5.75H1.75a.75.75 0 0 1 0-1.5h.864a2.501 2.501 0 1 1 0 1.5zM11 8.5c1.12 0 2.067.736 2.386 1.75h.864a.75.75 0 0 1 0 1.5h-.864A2.501 2.501 0 1 1 11 8.5zM7.5 11a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h5A.75.75 0 0 0 7.5 11zm1.75-6.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5z">
                                </path>
                            </svg>Filters</div>
                    </div>
                    <!-- user added posts -->
                    <div class="user-own-posts">

                    </div>
                    <div class="user-all-posts-mz">


                    </div>
                </div>
            </div>
            <!-- about tab content -->
            <div id="about" class="lower-part-content tab-pane fade">
                <div class="lower-part-content-about">
                    <div class="about-navbar">
                        <div class="about-navbar-about">
                            <span>About</span>
                        </div>
                        <div class="navbar-tabs navbar-tabs-about d-flex flex-row flex-lg-column overflow-auto">
                            <ul class="nav nav-tabs gap-2">
                                <li class="nav-item">
                                    <button class="active btn btn-primary" data-bs-toggle="tab" data-bs-target="#intro"
                                        type="button">
                                        <div class="nav-item-elements">
                                            <span>Intro</span>
                                        </div>
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" data-bs-toggle="tab" data-bs-target="#Category"
                                        type="button">
                                        <div class="nav-item-elements">
                                            <span>Category</span>
                                        </div>

                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" data-bs-toggle="tab"
                                        data-bs-target="#Personaldetails" type="button">
                                        <div class="nav-item-elements">
                                            <span>Personal details</span>
                                        </div>

                                    </button>

                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" data-bs-toggle="tab" data-bs-target="#work"
                                        type="button">
                                        <div class="nav-item-elements">
                                            <span>Work</span>
                                        </div>

                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" data-bs-toggle="tab" data-bs-target="#education"
                                        type="button">
                                        <div class="nav-item-elements">
                                            <span>Eduaction</span>
                                        </div>

                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary" data-bs-toggle="tab" data-bs-target="#privacy"
                                        type="button">
                                        <div class="nav-item-elements">
                                            <span>privacy and legal</span>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-content tab-content">

                        <div id="intro" class="about-content-item tab-pane fade show active">
                            <div class="intro-heading">
                                <span>Bio</span>
                            </div>

                            <div class="intro-content">
                                <img src="../images/intro.svg" alt="">
                                <span>Bringing the world closer together.</span>
                            </div>
                        </div>

                        <div id="Category" class="about-content-item tab-pane fade">
                            <div class="intro-heading">
                                <span>Bio</span>
                            </div>
                            <div class="intro-content">
                                <img src="../images/category.svg" alt="">
                                <span>Public figure</span>
                            </div>

                        </div>

                        <div id="Personaldetails" class="about-content-item tab-pane fade">
                            <div class="intro-heading">
                                <span>Location</span>
                            </div>
                            <div class="intro-content intro-content-images">
                                <img src="../images/aboutlocation.png" alt="">
                                <div>
                                    <div>Palo Alto, California</div>
                                    <div>Current town/city</div>
                                </div>

                            </div>
                            <div class="intro-heading">
                                <span>Home town</span>
                            </div>
                            <div class="intro-content intro-content-images">
                                <img src="../images/aboutlocation.png" alt="">
                                <div>
                                    <div>Dobbs Ferry, New York</div>
                                    <div>Home town</div>
                                </div>

                            </div>
                            <div class="intro-heading">
                                <span>Date of birth</span>
                            </div>
                            <div class="intro-content">
                                <img src="../images/dateofbirth.svg" alt="">
                                <div>
                                    <div>14 May 1984</div>
                                    <div>Date of birth</div>
                                </div>

                            </div>
                        </div>

                        <div id="work" class="about-content-item tab-pane fade">
                            <div class="intro-heading">
                                <span>Work</span>
                            </div>

                            <div class="intro-content">
                                <img src="../images/metalogo.png" alt="">
                                <div>
                                    <div>Founder and CEO at Meta</div>
                                    <div>4 February 2004 - Present · Palo Alto, California</div>
                                </div>
                            </div>
                            <div class="intro-content">
                                <img src="../images/biohub.png" alt="">
                                <div>
                                    <div>Works at Biohub</div>
                                    <div>1 December 2015 - Present</div>
                                </div>
                            </div>
                        </div>

                        <div id="education" class="about-content-item tab-pane fade">
                            <div class="intro-heading">
                                <span>University</span>
                            </div>
                            <div class="intro-content">
                                <img src="../images/harvard.png" alt="">
                                <div>
                                    <div>Studied Computer Science and Psychology at Harvard University</div>
                                    <div>30 August 2002 - 30 April 2004</div>
                                </div>
                            </div>
                        </div>

                        <div id="privacy" class="about-content-item tab-pane fade">
                            <div class="intro-heading">
                                <span>Description</span>
                            </div>
                            <div class="intro-content">
                                <img src="../images/description.svg" alt="">
                                <span>I'm trying to make the world a more open place.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- reels tab content -->
            <div id="reels" class="lower-part-content tab-pane fade">
                <div class="lower-part-content-reels">
                    <div><span>Reels</span></div>
                    <div class="navbar-tabs">
                        <ul class="nav nav-tabs gap-2">
                            <li class="nav-item">
                                <a href="" class="nav-link active nav-reels" data-bs-toggle="tab">
                                    <div class="nav-item-elements">
                                        <span>Mark's Reels</span>
                                    </div>

                                </a>

                            </li>
                        </ul>
                    </div>
                    <div class="reels-section">
                        <img src="../../posts/post1.png" alt="">
                        <img src="../../posts/post2.png" alt="">
                        <img src="../../posts/post3.png" alt="">
                        <img src="../../posts/post4.png" alt="">
                        <img src="../../posts/post5.png" alt="">
                        <img src="../../posts/post6.png" alt="">
                        <img src="../../posts/post7.png" alt="">
                        <img src="../../posts/post8.png" alt="">
                        <img src="../../posts/post9.png" alt="">
                        <img src="../../posts/post10.png" alt="">
                        <img src="../../posts/post11.png" alt="">

                    </div>

                </div>

            </div>
            <!-- photos tab content -->
            <div id="photos" class="lower-part-content tab-pane fade">
                <div class="lower-part-content-photos">
                    <div><span>Photos</span></div>
                    <div class="navbar-tabs">
                        <ul class="nav nav-tabs gap-2">
                            <li class="nav-item">
                                <a href="" class="nav-link active nav-reels" data-bs-toggle="tab">
                                    <div class="nav-item-elements">
                                        <span>Mark's photos</span>
                                    </div>

                                </a>

                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link nav-reels" data-bs-toggle="tab">
                                    <div class="nav-item-elements">
                                        <span>photos of mark</span>
                                    </div>

                                </a>

                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link nav-reels" data-bs-toggle="tab">
                                    <div class="nav-item-elements">
                                        <span>Albums</span>
                                    </div>

                                </a>

                            </li>
                        </ul>
                    </div>
                    <div class="reels-section">
                        <img src="../../posts/post1.png" alt="">
                        <img src="../../posts/post2.png" alt="">
                        <img src="../../posts/post3.png" alt="">
                        <img src="../../posts/post4.png" alt="">
                        <img src="../../posts/post5.png" alt="">
                        <img src="../../posts/post6.png" alt="">
                        <img src="../../posts/post7.png" alt="">
                        <img src="../../posts/post8.png" alt="">
                        <img src="../../posts/post9.png" alt="">
                        <img src="../../posts/post10.png" alt="">
                        <img src="../../posts/post11.png" alt="">

                    </div>

                </div>
            </div>
            <!-- friend tab content -->
            <div id="friends" class="lower-part-content tab-pane fade">
                <div class="lower-part-content-friends">
                    <div class="lower-part-content-friends-content">
                        <div>
                            <span>Friends</span>
                        </div>

                        <div class="lower-part-content-friends-input">
                            <svg viewBox="0 0 16 16" width="16" height="16" fill="#76797d" aria-hidden="true"
                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                style="--x-color: var(--placeholder-icon);">
                                <path
                                    d="M7.5 1a6.5 6.5 0 1 0 3.835 11.749l1.958 1.958a1 1 0 0 0 1.414-1.414l-1.958-1.958A6.5 6.5 0 0 0 7.5 1zM3 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z">
                                </path>
                            </svg>
                            <input type="text" placeholder="search" id="search-friends" name="search-friends">
                        </div>

                    </div>
                    <div class="lower-part-content-friends-functions">
                        <div class="navbar-tabs">
                            <ul class="nav nav-tabs gap-2">
                                <li class="nav-item">
                                    <a href="" class="nav-link active nav-followers" data-bs-toggle="tab">
                                        <div class="nav-item-elements">
                                            <span>Followers</span>
                                        </div>

                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="lower-part-content-friends-users">

                    </div>

                </div>
            </div>

        </div>
    </div>

    <!-- java script -->
    <script>
        let userId = <?= json_encode($userId) ?>;
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="../JavaScript/profile.js"></script>
    <script src="../JavaScript/fetchUser.js"></script>
</body>

</html>