/**
 * Created by Administrator on 2016/2/2.
 */
define(['jquery','module/totop','module/drop'], function () {
    $(document).ready(function () {
        $('.edit_addr_btn').click(function(e){
            $('.addr_window').show();
            e.stopPropagation();
        });
        $('html,body,.close_addr').click(function(e){
            $('.addr_window').hide();
            e.stopPropagation();
        });
        $('.addr_window').click(function(e){
            e.stopPropagation();
        });
    });
});