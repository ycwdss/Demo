/**
 * Created by Administrator on 2016/12/20 0020.
 */
//分享出去的页面，再次点击进入首页

function shareIndex() {
    var jsTicket = '';
    $.ajax({
        url:"http://"+bgUrl+"/qhchristmasflow/getTicket.html",
        type: "post",
        async: false,
        success: function (data) {
            jsTicket = JSON.parse(data).data;
            console.log(jsTicket);
        },
        error: function () {

        }
    });
    var domain = window.location.host;
    var shareUrl = "http://"+bgUrl+"/qhchristmasflow/authIndex.html";
    var shareImg = webUrl+"/images/wxindex.jpg";
    var shareText = "平安夜大风雪，圣诞老人能否如约而至呢？";
    var shareDesc = "圣诞礼物近在咫尺，听说圣诞老人的礼物包里有一个JBL Pulse 2炫彩蓝牙音箱！！";
    var appId = "wx2f9b5feaa383c3b7";
    var ticket = jsTicket;

    var wx3Tool = new Wx3Tool(wx);
    var timestamp = wx3Tool.getCurrentSeconts();
    var nonceStr = wx3Tool.getNonceStr();
    var signature = wx3Tool.getSignature(ticket, nonceStr, timestamp);

    var jsApiList = [
        'hideOptionMenu',
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'showOptionMenu',
        'hideMenuItems'];
    wx3Tool.wxConfig(false, appId, timestamp, nonceStr, signature, jsApiList);
    wx.ready(function () {
        //wx3Tool.hideMenu();
        wx.showOptionMenu();
        wx3Tool.shareWechatModel();

        wx3Tool.shareToFriends(shareText, shareUrl, shareImg, function () {
            try {
                //分享成功

            } catch (err) {

            }
        });
        wx3Tool.shareToFriend(shareText, shareDesc, shareUrl, shareImg, "", "", function () {
            try {
                // wx3Tool.pvCounter("2", "help", 0);

            } catch (err) {

            }
        });
    });
}