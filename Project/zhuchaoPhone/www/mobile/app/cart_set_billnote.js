/**
 * Created by wangzan on 2015/11/2.
 */
/**
 * Created by wangzan on 2015/11/2.
 */
define(['zepto','fhlib/new_totop'],function() {

    $(function () {

        $('.set_note .select_which_way ul li a').click(function(){
            $(this).children('.check').show();
            $(this).addClass('on').parent('li').siblings().children('a').removeClass('on').children('.check').hide();
            return false;
        })
        $('.note_bd ul li').click(function(){
            $(this).children('.checkbox_container').addClass('checked').parent().siblings().children('.checkbox_container').removeClass('checked');
        });
    })
});