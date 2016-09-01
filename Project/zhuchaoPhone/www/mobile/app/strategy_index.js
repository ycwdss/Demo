define(['zepto','swiper','fhlib/new_totop'],function() {
    $(function () {
        var swiper = new Swiper('.container', {
            loop: true,
            autoplay: 2000,
            onSlideChangeStart: function (swiper) {
                var n = $('.swiper-slide-active').attr('data-swiper-slide-index');
                if (n == 1) {
                    $('.container').animate({height: "202px"}, 200);
                }
                else {
                    $('.container').animate({height: "101px"}, 200);
                }
                $('.zhuangxiu_title h4').removeClass('current');
                $('.zhuangxiu_title h4').eq(n).addClass('current');
            }
        });
        $(".zhuangxiu_title h4").click(function () {
            var n = $.inArray(this, $('.zhuangxiu_title h4'));
            if (n == 1) {
                $('.container').animate({height: "202px"}, 200);
            }
            else {
                $('.container').animate({height: "101px"}, 200);
            }
            swiper.slideTo(n + 1, 500, false);
            $('.zhuangxiu_title h4').removeClass('current');
            $(this).addClass('current');
        })
    });
});