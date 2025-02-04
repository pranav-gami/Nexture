document.addEventListener("DOMContentLoaded", function () {

    const btnNav = document.querySelector(".sidebar_button")
    const menubtn = document.querySelector(".nav-menu");
    const clsbtn = document.querySelector(".nav-close");
    const navbar = document.querySelector(".navigation_block")

    // FOR BUTTON CLICK
    btnNav.addEventListener("click", function () {
        const menuIsOpen = navbar.classList.toggle("navigation_block-active");
        // console.log("Hello")
        if (menuIsOpen) {
            menubtn.style.display = "none";
            clsbtn.style.display = "block";
        }
        else {
            menubtn.style.display = "block";
            clsbtn.style.display = "none";
        }
    });

    // FOR ITEMS CLICKS
    const menu_items = document.querySelectorAll(".navigation_list");

    menu_items.forEach((item) => {
        item.addEventListener("click", function () {
            const menucls = navbar.classList.toggle("navigation_block-active");
            if (menucls) {
                menubtn.style.display = "none";
                clsbtn.style.display = "block";
            } else {
                menubtn.style.display = "block";
                clsbtn.style.display = "none";
            }
        });
    });

});
