// script for new menu btn 
function myFunction(x) {
    x.classList.toggle("change");
}
// header scroll  
AOS.init({
    duration: 700
});

// shrink script for navbar
$(window).scroll(function() {
if ($(document).scrollTop() > 5) {
$('.navigation').addClass('navbar-scrolled');
} else {
$('.navigation').removeClass('navbar-scrolled');
}
});