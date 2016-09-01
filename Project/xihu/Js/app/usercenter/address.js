/**
 * Created by Administrator on 2016/2/2.
 */
define(['jquery','slick','module/recommend','module/drop','module/base'], function () {
    $(document).ready(function () {
        $('.add_addr_btn').click(function(){
            $('.new_addr').show();
        })
        $('.cancel_new_btn').click(function(){
            $('.new_addr').hide();
        })
    });
});