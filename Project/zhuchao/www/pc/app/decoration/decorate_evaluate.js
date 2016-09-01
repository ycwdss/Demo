/**
 * Created by wangzan on 2015/10/21.
 */

define(['../../lib/jquery','fhlib/totop','lazyload','fhlib/imglazy'],function() {
    $(document).ready(function (){
        $(".eval_result ul li").click(function () {
            $(this).siblings().children('input').attr('checked',false);
            $(this).children("input").attr("checked",true);
            $(".main_box").eq($(this).index()).show().siblings().hide();
        });
    })
});