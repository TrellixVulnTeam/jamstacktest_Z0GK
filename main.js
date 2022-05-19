$(document).ready(function () {
    //hamburger functionality
    $(".ham").click(function () {
        $(".menu").toggle();
        $(this).toggleClass("cross");
    });
})