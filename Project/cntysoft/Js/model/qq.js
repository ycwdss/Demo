/**
 * Created by Administrator on 2016/2/19.
 */
define(['jquery'], function () {
    $(function () {
        var qq_html = "<a class='qq_connect' target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin=2788984873&site=qq&menu=yes'>" +
            "<img border='0' src='Images/icon_qq.png'alt='点击这里给我发消息' title='点击这里联系我们'/></a>";
        $('body').prepend(qq_html);
        $('.qq_connect img').css({'width': '95px', 'height': '150px'});
        $('.qq_connect').css({
            'position': 'fixed', 'top': "20%", 'right': '20px', 'z-index': '999999', 'background': 'none',
            'borderRadius': '4px',
            'overflow': 'hidden'
        });
        //Images/icon_qq.png


    })
})