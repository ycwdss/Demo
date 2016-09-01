/**
 * Created by jiayin on 2016/3/28.
 */
define(['zepto','swiper','module/totop'],function(){
    $(function(){

        //广告
        var Ad = new Swiper('.module_ad3',{
            pagination : '.swiper-pagination',
            autoplay : 3000,
            speed:300,
            loop:true
        });

       //查看详情
        $('.read_more').tap(function(){
            $(this).hide();
            $('.pro_info_items').removeClass('hide');
        });
        //产品介绍
        $('.item_box').tap(function(){
            var that=$(this);
            if(that.hasClass('current')){
                $(this).removeClass('current');
            }
            else{
                $(this).addClass('current').siblings().removeClass('current');
            }
        });
        
        //图片放大
        // $('.module_ad_img').tap(function () {
        //     for(var i = 1; i<  $('.module_ad_img').size()-2;i++){
        //         console.log(i);
        //         $('.out_img >div').append("<div class='swiper-slide'><img src='"+ $('module_ad_img').eq(i).css('background')+"' ></div>" )
        //     }
        //
        //     var img_count = $('.out_img img').size();
        //     $('.out_title em').eq(1).html(img_count);
        //     var out = new Swiper('.out_img',{
        //         loop:true,
        //         speed:300,
        //         onSlideChangeStart: function(swiper){
        //             console.log(swiper.activeIndex)
        //             if(swiper.activeIndex > img_count ){
        //                 $('.out_title em').eq(0).html(1);
        //             }
        //             else{
        //                 $('.out_title em').eq(0).html(swiper.activeIndex);
        //             }
        //         }
        //
        //     });
        //
        // })
        

    });

});