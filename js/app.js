var hem_menu = document.querySelector("#hem-menu");
var close_btn = document.querySelector("#close");
var yes = document.querySelector("#yes");
hem_menu.addEventListener(
    "click",
     function () {
        yes.style.left=0;
     }
)
close_btn.addEventListener(
    "click",
    function () {
        yes.style.left="";
    }
)