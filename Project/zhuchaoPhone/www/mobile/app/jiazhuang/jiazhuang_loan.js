/**
 * Created by wangzan on 2015/11/24.
 */
define(['zepto','fhlib/new_totop'],function() {
    $(function(){
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


        //弹出层
        var width=$('body').width();
        $('.loan_ask').click(function () {
            $('.mask').show();
            $('.alert').show();
            $('body').css({
                position:'fixed',
                left:'50%',
                marginLeft:-width/2
            });

        })
        $('.mask').click(function () {
            $(this).hide();
            $('.alert').hide();
            $('body').css({
                position:'',
                left:'',
                marginLeft:''
            });
        })
    });
})