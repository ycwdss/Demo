/**
 * Created by Administrator on 2016/2/2.
 */
define(['jquery','layer','module/recommend','module/totop','module/drop','module/change_img','module/search','module/base'],function(){
    $(function(){
        $('.new_addr_btn').click(function(){
            $('.new_addr').show();
        });
        $('.addr_cancel').click(function(){
            $('.new_addr').hide();
        });
        $('.del_addr').click(function(){
            $(this).parents('.addr_ele').remove();
        });
        $('.drop_menu').drop();
        /*弹窗样式*/
        layer.config({
            extend: ['../../Css/app/mylayer.css'], //加载您的扩展样式
            skin: 'layer-ext-myskin'
        });
        //新增收货地址
        $('.edit_addr').click(function () {
            layer.confirm('您是如何看待前端开发？', {
                btn: ['重要','奇葩'] //按钮
            }, function(){
                layer.msg('的确很重要', {icon: 1});
            }, function(){
                layer.msg('也可以这样', {
                    time: 20000, //20s后自动关闭
                    btn: ['明白了', '知道了']
                });
            });
        });
    })
});