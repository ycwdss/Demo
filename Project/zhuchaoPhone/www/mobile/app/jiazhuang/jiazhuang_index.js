define(['zepto','swiper','fhlib/new_totop'],function(){

    //右侧按钮
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
//样板间
    for(var n=0;n<=3;n++){
        var room = new Swiper('#room'+n,{
            direction: 'horizontal',
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination'+n
        });
    }

});