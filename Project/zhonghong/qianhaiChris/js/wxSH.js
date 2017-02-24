/**
 * Created by Administrator on 2016/12/12 0012.
 */


function wxSH() {
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
    var shareUrl = "http://"+bgUrl+"/qhchristmasflow/authHelp.html?innitOpenId="+openId;
    var shareImg = webUrl+"/images/wx.jpg";
    var shareText = "Help！圣诞老人寸步难行，呼叫小伙伴帮忙铲雪！";
    var shareDesc = "Whoops，漫天大风雪，麋鹿Deer很迷茫，求小伙伴帮忙铲雪，让圣诞老人再次启程……";
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
                $('.success-share').hide();
                $('.fail-share').hide();
                addShare();
            } catch (err) {

            }
        });
        wx3Tool.shareToFriend(shareText, shareDesc, shareUrl, shareImg, "", "", function () {
            try {
                // wx3Tool.pvCounter("2", "help", 0);
                $('.success-share').hide();
                $('.fail-share').hide();
                addShare();
            } catch (err) {

            }
        });
    });

}
//分享记录
function addShare() {
    $.ajax({
        url: "http://" + bgUrl + "/qhchristmasflow/addShare.html",
        type: 'post',
        data: "ut=" + utStr,
    })
}