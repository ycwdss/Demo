/**
 * Created by wangzan on 2015/12/27.
 */
define(['jquery1.8.0','model/totop'], function () {
    $(document).ready(function(){
        var arr=[1,2,3,4,5,6,7];
        $.each(arr,function () {
            var arrthis=this;
            $('.culture'+arrthis).hover(function () {
                $('.culture_img').attr("class", "").addClass('culture_img').addClass('active'+arrthis);
                return false;
            });
        });
        var time = null;
        $('.imgcon').hover(function () {
            var i = 0;
            var n = $.inArray(this,$('.imgcon'));

            time = setInterval(function(){
                i+=1;
                if(i == 2){
                    $('.imgcon').eq(n).children().fadeIn(500);
                    i = 0;
                }
            },100)
            //$(this).children().fadeIn(800).parents('.imgcon').siblings().children().fadeOut(800);
        },function(){
            clearInterval(time);
            var n = $.inArray(this,$('.imgcon'));
            $('.imgcon').eq(n).children().fadeOut(500);
        });
    });
    //�ı���ɫ
    //var whiteDiv = ['slogan','wedo','culture_img'];
    //
    //var whiterRange = new Array();
    //for(var i = 0;i<whiteDiv.length;i++){
    //    var $div = $('.' + whiteDiv[i]);
    //    whiterRange.push([
    //        $($div).position().top,
    //        $($div).position().top+$($div).height()
    //    ])
    //}
    //
    //$(window).scroll(function(){
    //    var color = getColor();
    //
    //});
    //
    //function getColor(){
    //    var scrollTop = $(window).scrollTop();
    //    for(var i = 0;i<whiterRange.length;i++){
    //        if(scrollTop>=whiterRange[i][0] && scrollTop<whiterRange[i][1]){
    //            $('.header').removeClass('header_black').addClass('header_white');
    //            return false;
    //        }
    //    }
    //    $('.header').removeClass('header_white').addClass('header_black');
    //
    //}

})