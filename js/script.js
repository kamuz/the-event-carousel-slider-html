$(document).ready(function() {
    $('.horizontal').bxSlider({
        prevText: "",
        nextText: "",
    });
    $('.vertical').bxSlider({
        mode: 'vertical',
        minSlides: 4,
        pager: false,
        prevText: "",
        nextText: "",
        slideMargin: 15
    });
});