<?php 
include_once '_partials/head.php';
?>

<body class="bootcamp-container">

    <button id="float_menu" class="sidebar-float-menu">
    <svg id="menu_icon" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#231f20"><rect class="middle-bar" height="2" rx=".95" width="18" x="3" y="11"/><rect class="bottom-bar" height="2" rx=".95" width="18" x="3" y="16"/><rect class="top-bar" height="2" rx=".95" width="18" x="3" y="6"/></g></svg>
</button>
    <?php include_once '_partials/sidebar.php' ?>
    <div class="content">
        <?php include_once $file_path ?>
    </div>
</body>

<?php

include_once '_partials/footer.php';