/**
 * Created by wangzan on 2016/1/20.
 */
define(['jquery','module/base'],function(){
    $(document).ready(function () {
        $('.evaluate_fill .star').click(function () {
            var index= $.inArray(this,$('.star'));
            $('.star').removeClass('main');
            $('.score em').html((index+1)+'分');
            for(var i = 0;i<=index;i++){
                $('.star').eq(i).addClass('main');
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