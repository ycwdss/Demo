/**
 * Created by Administrator on 2016/1/31.
 */
define(['jquery','module/totop','module/recommend','module/base'], function () {
    $(document).ready(function () {
        $('.img_box span').click(function () {
            $('.change_img ').fadeIn(200);
        });
        $('.close_window,.del_img ').click(function () {
            $('.change_img ').fadeOut(200);
        });
    });
});