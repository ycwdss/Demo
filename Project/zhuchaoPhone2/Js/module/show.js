/**
 * Created by Administrator on 2016/4/8.
 */
define(['zepto','swiper'],function () {
   ;(function ($) {
        $.fn.show = function (options) {
            var setting = {
                index:1
            };
            $.extend(setting,options);
            if ($('#showImage').length == 0) {
                var length = this.find('img').size();

                //添加html
                $("body").append("<div class='out ' id='showImage'><h4><i class='icon-fanhuijian'></i><span>1</span>/<span>"+length+"</span></h4></i>"+
                                    "<div class='out_box'> <div class='swiper-wrapper'></div></div></div>");
                for (var i = 0; i < length; i++) {
                    var slide = "<div class='swiper-slide'><img src='" + $('img').eq(i).attr('src') + "'></div>"
                    $('.out .swiper-wrapper').append(slide);
                }


            }
            //调用swiper
            var out = new Swiper('#showImage .out_box',{
                loop:true,
                initialSlide :setting.index,
                onSlideChangeEnd: function(swiper){
                    if(swiper.activeIndex > length){
                        $(".out span").eq(0).html(1);
                    }else{
                        $(".out span").eq(0).html(swiper.activeIndex);
                    }
                }
            });
            $('.out h4 >i').click(function () {
                $('#showImage').addClass('hide');
            });
        };
    })(Zepto)
})