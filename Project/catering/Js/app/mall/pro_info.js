/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery','slick','cloudzoom','magnifying','module/totop','module/base'], function () {
    $(document).ready(function () {
        ////图片放大
        $('.img_small_inner').slick({
            arrows: true,
            infinite: true,
            prevArrow: '.left_btn',
            nextArrow: '.right_btn',
            easing: 'linear',
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: false
        });

        //CloudZoom.quickStart();

        $('.img_small img').hover(function () {
            var imgSrc = $(this).attr('src');
            var imgBigImg = $(this).attr('big-img');
            $('.img_big img').attr({
                "src": imgSrc,
                "origin-src": imgBigImg,
                "big-img": imgBigImg
            });
            $(this).parent('.same').addClass('main_border').siblings().removeClass('main_border');
        });

        //图片放大
        $('.img_big').magnify({
            magnifierSize: [500, 500],  //定义放大的显示区域大小
            multiple: 3,                          //放大倍数
            cursorShadeClass: '',        //给过滤镜添加自定义类,有些属性需要加important覆盖
            magnifierClass: 'magnifier'            //给放大显示区域添加自定义类
        });
        //商品详情导航
        $('.info_nav span').click(function(){
            var index = $.inArray(this,$('.info_nav span'));
            if(index!=0){
                $('.info_nav span').removeClass('main_border main');
                $('.info_nav').addClass('no_bb');
                $(this).addClass('main');
                $('.info_content').hide();
                $('.info_content').eq(index).show();
            }else{
                $('.info_nav span').removeClass(' main');
                $('.info_nav').removeClass('no_bb');
                $(this).addClass('main_border main ');
                $('.info_content').hide();
                $('.info_content').eq(index).show();
            }
        })
    });
    //增减商品数量
    $('.count_add').click(function(){
        var count=parseInt($(this).siblings('input').val());
        $(this).siblings('input').val(Math.min(count+1,$('.count_store i').html()));
    });
    $('.count_minus ').click(function(){
        var count=parseInt($(this).siblings('input').val());
        $(this).siblings('input').val(Math.max(count-1,0));
    });
    $('.pro_count_content input').keyup(function(){
        if(parseInt($(this).val()) < 0){
            $(this).val(0);
        }else if(parseInt($(this).val()) > $('.count_store i').html()){
        $(this).val($('.count_store i').html());
    }
    });
});