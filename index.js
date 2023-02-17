const navButton = document.querySelector(".nav_button");
const links = document.querySelector(".show_nav_mobile_about");
const navMobile = document.querySelector(".nav_mobile");
navMobile.style.boxShadow = "-2px 0 12px #000";

navButton.addEventListener("click", function(){
    if(links.classList.contains("nav_mobile_about")){
        links.classList.remove("nav_mobile_about");
        navMobile.style.boxShadow = ""
        navMobile.style.transition = "250ms"
    } else {
        links.classList.add("nav_mobile_about");
        navMobile.style.boxShadow = "-2px 0 12px #000";
        navMobile.style.transition = "250ms"
    }
}); 

