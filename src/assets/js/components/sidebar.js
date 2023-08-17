document.addEventListener("DOMContentLoaded", () => {
    const sidebar_background = document.getElementById("sidebar_background");
    const sidebar = document.getElementById('sidebar');
    const float_menu = document.getElementById('float_menu');
    const menu_icon = document.getElementById('menu_icon');
    sidebar.addEventListener("animationend", toggle);
    menu_icon.addEventListener("animationend", () => {
        if(menu_icon.classList.contains("close")) {
            menu_icon.classList.remove("close");
        }
    });
    float_menu.addEventListener("click", () => {
        float_menu.disabled = true;
        if(sidebar.classList.contains("sidebar-toggle")) {
            sidebar.classList.add("sidebar-collapse");
            menu_icon.classList.add('close');
            menu_icon.classList.remove('open');
            sidebar.classList.remove("sidebar-toggle");
        } else {
            sidebar_background.style.display = "flex";
            sidebar.classList.add('sidebar-toggle');
            menu_icon.classList.add('open');
        }
        
    });
});

const toggle = () => {
    const float_menu = document.getElementById('float_menu');
    const sidebar_background = document.getElementById("sidebar_background");
    const sidebar = document.getElementById('sidebar');
    if(sidebar.classList.contains("sidebar-collapse")) {
        sidebar_background.style.display = null;
        sidebar.classList.remove("sidebar-collapse");
    }
    float_menu.disabled = false;
}