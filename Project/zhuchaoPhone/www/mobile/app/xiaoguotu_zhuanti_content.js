/**
 * Created by 佳音 on 2015/9/23.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        onSlideChangeEnd: function () {
            var $i = $('.swiper_page').find('i');
            $i.html(mySwiper.activeIndex + 1 + '/' + $i.attr('total'));
        }

    });
    var link = $('#icon_more_link');
    $(link).bind({
        'click': function (e) {
            $('#icon_more_content').show();
            if (window.event) {
                //e.returnValue=false;//阻止自身行为
                e.cancelBubble = true;//阻止冒泡
            } else if (e.preventDefault) {
                //e.preventDefault();//阻止自身行为
                e.stopPropagation();//阻止冒泡
            }
        }
    });

    $(document).click(function () {
        $('#icon_more_content').hide();
    });
});