/**
 * Created by jiayin on 2016/2/19.
 */
define(['jquery','module/base'], function () {
    $(function () {
        //点击搜索
        $('.icon_search').click(function () {
            $('.search_box').slideToggle(200);
        });

        window._bd_share_config = {
            "common": {
                "bdSnsKey": {},
                "bdText": "",
                "bdMini": "2",
                "bdPic": "",
                "bdStyle": "0",
                "bdSize": "16"
            },
            "share": {},
            "image": {
                "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"],
                "viewText": "分享到：",
                "viewSize": "16"
            },
            "selectShare": {
                "bdContainerClass": null,
                "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
            }
        };
        with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

    })
});