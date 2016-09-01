/**
 * Created by Administrator on 2016/2/17 .
 */
define(['jquery','module/recommend','module/totop','module/change_img','module/search','module/base'],function(){
    $(function(){
        $('.evaluate_nav span').click(function(){
            if(!$(this).hasClass('main')){
                var n = $.inArray(this,$('.evaluate_nav span'));
                $(this).siblings('span').removeClass('main main_border');
                $(this).addClass('main main_border');
                $('.evaluate_content').hide();
                $('.evaluate_content').eq(n).show();
            }
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
    })
})