/**
 * Created by Administrator on 2016/4/12.
 */
define(['jquery','slick','module/totop','module/banner'],function () {
    $(function () {
        $(".case_box").slick({
            infinite: true,   
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:2500,
            arrows:true,
            prevArrow:".case_prev", 
            nextArrow:'.case_next'
        });

        $('.why_title_btn span').click(function(){
            var indexA=$(this).index();
            $(this).addClass('main_bg').siblings().removeClass('main_bg');
            $('.why_content').find('.why_list').eq(indexA).removeClass('hide').siblings('.why_list').addClass('hide');
        })
    })
});