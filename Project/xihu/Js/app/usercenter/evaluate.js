/**
 * Created by Administrator on 2016/2/17.
 */
define(['jquery','slick','module/recommend','module/base'], function () {
    $(function () {
        //$('.usercenter_right h3 span').click(function(){
        //    if(!$(this).hasClass('main')){
        //        var n = $.inArray(this,$('.usercenter_right h3 span'));
        //        $(this).siblings('span').removeClass('main');
        //        $(this).addClass('main');
        //        $('.evaluate_content').hide();
        //        $('.evaluate_content').eq(n).show();
        //    }
        //});
        $('.to_evaluate_btn').click(function(){
            $(this).siblings('ul').toggleClass('no_bb');
            $(this).parents('.order_ele').siblings('.evaluate_container').slideToggle();
        });
        $('.score_star i').click(function(){
            var n = $.inArray(this,$('.score_star i'));
            for(i=0;i<$('.score_star i').size();i++){
                if(i <= n){
                    $('.score_star i').eq(i).addClass('main')
                }
                else{
                    $('.score_star i').eq(i).removeClass('main')
                }
            }
            $('.score_star span').html((n+1)+"分");
        })
    });
});