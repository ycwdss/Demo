/**
 * Created by Administrator on 2016/2/17.
 */
define(['jquery','module/totop'], function () {
    $(document).ready(function () {
        $('.evaluate_fill .score i').click(function () {
            var index= $.inArray(this,$('.score i'));
            $('.score i').removeClass('main');
            $('.score em').html((index+1)+'分');
            for(var i = 0;i<=index;i++){
                $('.score i').eq(i).addClass('main');
            }
        });
        //评论字数限制
        $('.comment_chars').each(function () {
            var length=$(this).val().length;
            $('.comment_tips em').html(length);
            $(this).keyup(function () {
                var new_length=$(this).val().length;
                $('.comment_tips em').html(new_length);
                if(new_length>=500){
                    $(this).val($(this).val().substring(0,500));
                    $('.comment_tips b').show();
                }else {
                    $('.comment_tips b').hide();
                }
            });
        });
    });
});