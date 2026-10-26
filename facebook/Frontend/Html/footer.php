<style>
    /* footer styling */
    .footer-content {
        display: flex;
        align-items: center;
        padding-left: 15px;
        flex-wrap: wrap;
        gap: 2px 5px;
        line-height: 16px;
    }

    .common-footer {
        padding-top: 10px;
        width: 100%;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        line-height: 16px;
    }

    .footer-content a {
        display: inline-flex;
        align-items: center;
        color: #65676b;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        white-space: nowrap;
    }

    .footer-content a:hover {
        text-decoration: underline;
    }

    .footer-content span {
        color: #65676b;
        font-size: 12px;
    }

    .footer-content svg {
        width: 12px;
        height: 12px;
        color: #65676b;
        flex-shrink: 0;
    }
</style>

<!-- footer content -->

<footer class="common-footer">
    <div class="footer-content">
        <a href="">Privacy</a>
        <span>.</span>
        <a href="">Terms</a>
        <span>.</span>
        <a href="">Advertising</a>
        <span>.</span>
        <a href="">
            Ad choices
            <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor" aria-hidden="true">
                <path
                    d="M10.063 5.892a.125.125 0 0 1 0 .216L5.63 8.668V7a.625.625 0 1 0-1.25 0v1.884c0 .866.937 1.407 1.687.974l4.62-2.667a1.375 1.375 0 0 0 0-2.382L3.188.48a1.375 1.375 0 0 0-2.062 1.19v8.66a1.375 1.375 0 0 0 2.063 1.191l.398-.23a.625.625 0 0 0-.625-1.082l-.398.23a.125.125 0 0 1-.188-.109V1.67c0-.096.104-.156.188-.108l7.5 4.33z">
                </path>
                <path d="M5 5.75A.625.625 0 1 0 5 4.5a.625.625 0 0 0 0 1.25z"></path>
            </svg>
        </a>
        <span>.</span>
        <a href="">Cookies</a>
        <span>.</span>
        <a href="">More</a>
    </div>
</footer>