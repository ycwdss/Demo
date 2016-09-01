
/**
 * Created by Administrator on 2016/2/17.
 */
define(['jquery','module/totop','module/recommend','module/drop','module/base'], function () {
    $(document).ready(function () {
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
        //评论字数限制
        $('.evaluate_chars').each(function () {
            var length=$(this).val().length;
            $('.evaluate_tips em').html(length);
            $(this).keyup(function () {
                var new_length=$(this).val().length;
                $('.evaluate_tips em').html(new_length);
                if(new_length>=500){
                    $(this).val($(this).val().substring(0,500));
                    $('.evaluate_tips b').show();
                }else {
                    $('.evaluate_tips b').hide();
                }
            });
        });
    });
});