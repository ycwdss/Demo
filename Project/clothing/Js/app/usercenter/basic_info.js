/**
 * Created by Administrator on 2016/2/15.
 */
define(['jquery','module/totop','module/drop'], function () {
    $(document).ready(function () {
        $(function(){
            $('.info_nav span').click(function(){
                var n = $.inArray(this,$('.info_nav span'));
                $('.info_box').hide().eq(n).show();
            })
        })
    });
});