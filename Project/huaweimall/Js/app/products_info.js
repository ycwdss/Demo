/**
 * Created by wangzan on 2015/12/13.
 */
define(['jquery','jqzoom','../model/head','../model/totop','slick'],function(){

    $(document).ready(function () {
        //鼠标经过预览图片

        $('.view_items .ge a img').hover(function () {
            $(".view_img .jqzoom img").attr("src",$(this).attr("src"));
            $(".view_img .jqzoom img").attr("jqimg",$(this).attr("bimg"));
        });
        //==============放大镜小图上一张下一张======================

        $('.view_items').slick({
            dots:false,
            arrows:true,
            slidesToShow:5,
            slidesToScroll:1,
            infinite: true,
            draggable:true,
            speed:500,
            prevArrow:'.prev',
            nextArrow:'.next'
        });
        //图片放大镜效果
        $('.jqzoom').jqueryzoom({
            xzoom: 400, //放大图的宽度(默认是 200)
            yzoom: 400, //放大图的高度(默认是 200)
            offset: 10, //离原图的距离(默认是 10)
            position: "right", //放大图的定位(默认是 "right")
            preload: 1
        });
        //商品简介---------
        $('.select_wrap  li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            var text=$('.select_wrap .current').text();
            $('.sale_info em').text(text)
        })


        //点击数量增加减
        $('.add').click(function () {
            var t=$(this).prev();
            t.val(parseInt(t.val())+1);
            if(isNaN(t.val())){
                t.val(1);
            }
        })
        $('.min').click(function () {
            var t=$(this).next();
            t.val(parseInt(t.val())-1);
            if(parseInt(t.val())<=0 || isNaN(t.val())){
                t.val(1);
            }
        })
        //点击加入购物车弹出层
        $('.plus_cart a').click(function () {
            $('.popup_wrap').show();
        })
        $('.sucess_info .close').click(function () {
            $('.popup_wrap').hide();
        })
        //============浏览历史记录点击删除============
        $('.history_see .hd i').click(function () {
           $('.history_see').hide();
        });
        //滚动鼠标 商品详情导航条定位到顶部
        var hight=$('.main_right .hd').offset().top
        $(window).scroll(function () {
            if($(document).scrollTop()>=hight){
                $('.main_right .hd').css({
                    'position':'fixed',
                    'top':'0'
                });
                $('.fill_cart').show();
            }else{
                $('.main_right .hd').css({
                    'position':'static',
                    'top':''
                });
                $('.fill_cart').hide();
            }
        })
        //评价切换-----
        $('.evaluate_tab ul li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            $('.evalutate_info').children().eq($(this).index()).show().siblings().hide();
        })
        //总体切
        $('.main_right .hd ul li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            $('.main_right .bd').children().eq($(this).index()).show().siblings().hide();
        })
    });

});
