/**
 * Created by ���� on 2015/12/3.
 */
define(['jquery','slick', 'lazyload', 'fhlib/imglazy'], function () {
    //所有的展示商品大图div
    var proBigBox = $('div[pro-big-box^="pro-big-box"]');

    //循环初始化每个展示商品
    for (var i = 1; i < proBigBox.length + 1; i++) {
        $('div[pro-big-box^="pro-big-box' + i + '"]').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: 'ul[pro-tab=pro-tab' + i + ']'
        });
        $('ul[pro-tab^="pro-tab' + i + '"]').slick({
            slidesToShow: 5,
            slidesToScroll:2,
            asNavFor: 'div[pro-big-box=pro-big-box' + i + ']',
            dots: false,
            infinite: false,
            focusOnSelect: true,
            prevArrow: 'a[left_button=left' + i + ']',
            nextArrow: 'a[right_button=right' + i + ']'
        });

        var hoverSlide = true;

        $('ul[pro-tab^="pro-tab' + i + '"]').find('li').hover(function(){
            var hoverIndex = $(this).attr('data-slick-index');
            var $this = $(this);
            hoverSlide = setTimeout(function(){
                $this.closest('.pro_small_box').siblings('.pro_big_box').slick('slickGoTo', hoverIndex);
            },200);
        },function(){
            clearTimeout(hoverSlide);
        });
    }

});