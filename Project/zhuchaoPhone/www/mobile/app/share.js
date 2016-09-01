define(['zepto'],function() {
    $(function () {
        $('.top_share').click(function (e) {
            $('.l_share').show();
            e.stopPropagation();
        });
        $('body').click(function (e) {
            $('.l_share').hide();


        });
        $('.qq').click(function (e) {
            var shareqq = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + '凤凰筑巢' + '&url=' + document.location.href + '&pic=' + $('img').eq(0).attr('src');
            window.open(shareqq, 'newwindow', 'height=400', 'width=400', 'top=100', 'left=100');
            e.stopPropagation();
        });
        $('.sina').click(function (e) {
            var sharesina = 'http://v.t.sina.com.cn/share/share.php?title=' + '凤凰筑巢' + '&url=' + document.location.href + '&content=utf-8&sourceUrl=' + document.location.href + '&pic=' + $('img').eq(0).attr('src');
            window.open(sharesina, 'newwindow', 'height=400', 'width=400', 'top=100', 'left=100');
            e.stopPropagation();
        });
        $('.renren').click(function (e) {
            var sharerr = 'http://widget.renren.com/dialog/share?link=' + document.location.href + '&title' + '凤凰筑巢' + '&pic=' + $('img').eq(0).attr('src');
            window.open(sharerr, 'newwindow', 'height=400', 'width=400', 'top=100', 'left=100');
            e.stopPropagation();
        });
        //$('.weixin').click(function () {
        //    var weixin='https://open.weixin.qq.com/connect/oauth2/authorize?'
        //    var sharewx = 'http://mp.weixin.qq.com/share?title='+'sadfas'+'&url='+document.location.href;
        //    window.open(sharewx, 'newwindow', 'height=400', 'width=400', 'top=100', 'left=100');
        //})
    });
});
