/**
 * Created by guan on 2015/10/22.
 */
define(['jquery','slick','fhlib/totop',
    'lazyload','fhlib/imglazy'],function() {
    $('#focus_box1').on('init',function(){
        $('#focus_box1').removeClass('show_lazy');
    });
    var sliderFor = $('div[slider-for^="slider-for"]');
    for (var i = 1; i < sliderFor.length + 1; i++) {
        $('div[slider-for^="slider-for' + i + '"]').slick({
            slidesToShow: 1,
            dots: true,
            dotsClass:'banner_bottom_btn',
            focusOnSelect: true,
            prevArrow: 'span[left_button=left' + i + ']',
            nextArrow: 'span[right_button=right' + i + ']'
        });
    }
    $(document).ready(function(){
        $(".index_top_banner1").css("overflow","visible")
    });
});
