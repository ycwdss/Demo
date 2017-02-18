/**
 * Created by Administrator on 2016/12/12 0012.
 */
var jsTicket = '';
$.ajax({
    url: "http://hersheys.wehuge.com/diy/act/data/getTicket.wx",
    type: "POST",
    async: false,
    success: function (data) {
        jsTicket = data.data;
    },
    error: function () {

    }
});
var domain = window.location.host;
var shareUrl = "http://hersheys.wehuge.com/diy/act/skip/index.wx";
var shareImg = "http://qianduan.wehuge.com/hs_puzzle/images/wx.png";
var shareText = "快来破解我的好时KISSES拼图大作";
var shareDesc = "激萌的马卡龙色KISSES，边吃边玩DIY拼图游戏吧！";
var appId = "wx353161beffd4ee7e";
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
