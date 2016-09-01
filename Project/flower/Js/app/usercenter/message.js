/**
 * Created by Administrator on 2016/2/18.
 */
define(['jquery','module/recommend','module/totop',
    'module/change_img','module/search','module/msg_tip','module/base'],function(){
    $(function(){
        $('.msg_del_btn').tip();
        //$('.msg_del_btn').click(function(e){
        //    if($(this).siblings('.msg_tip').hasClass('hide')){
        //        $('.msg_tip').hide();
        //        $(this).siblings('.msg_tip').show();
        //    }
        //    e.stopPropagation();
        //});
        //$('html,body').click(function(){
        //  $('.msg_tip').hide();
        //}
        //)
    })
});