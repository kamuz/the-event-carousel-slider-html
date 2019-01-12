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
    
    $('.slider-wrap').hide();
    $('.slider-wrap:first-child').show();
    $('.vertical div a.event-item').click(function(e){
        e.preventDefault();
        var eventId = $(this).data('event-id');
        $('.slider-wrap').hide();
        $('#slider-' + eventId).show();
    });
});