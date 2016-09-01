/**
 * Created by jiayin on 2016/2/22.
 */
define(['jquery'], function () {
    $(function () {
        //点击搜索
        $('.icon_search').click(function () {
            $('.search_box').slideToggle(200);
        });
        //成功加入购物车
        $('.coupon_btn a').click(function () {
            $('.success_coupon').fadeIn(200);
            return false;
        });
        $('.close').click(function () {
            $('.popup_box').fadeOut(200);
        });
    });
});