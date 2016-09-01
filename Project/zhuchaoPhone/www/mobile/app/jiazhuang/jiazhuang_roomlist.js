/**
 * Created by wangzan on 2015/11/21.
 */

define(['zepto','swiper','fhlib/new_totop'],function() {
    $(function(){
        //”“≤‡∞¥≈•
        $("#icon_more_link").bind('click', function() {

            if($('.m_topSubnav').hasClass('hidden')){
                $("#m_topSubnav").removeClass('hidden');
                return false;
            }
            else{
                $("#m_topSubnav").addClass('hidden');
                return false;
            }

        });

        $('body').bind('click',function(){
            $("#m_topSubnav").addClass('hidden');
        });

        var zhuchaoList = new Swiper('#zhuchaoList',{
            scrollbar:'#zhuchaoListScrollBar',
            scrollbarHide:false
        });
        var currentnav = $('#zhuchaoNav');
        $(currentnav).find('li').click(function () {
            var indexA = $(this).index();
            zhuchaoList.slideTo(indexA);
            return false;
        });
//ª¨∂Ø----------
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            width :142,
            height:88,
            slidesPerView : 'auto',
            loopedSlides :4,
            })

    });
})