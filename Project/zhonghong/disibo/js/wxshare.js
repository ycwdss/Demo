/**
 * Created by Administrator on 2016/12/8 0008.
 */


//普通分享
function wxshare(ut) {
    //分享操作
    var jsTicket = '';
    $.ajax({
        url: http+_data.getTicket,
        type: "POST",
        async: false,
        dataType: "json",
        success: function (data) {
            if(data.code==100){
                jsTicket = data.data;
            }
        },
        error: function () {

        }
    });

    var domain = window.location.host;
    var shareUrl = http+_data.authIndex;
    var shareImg = webHttp+"images/phone.png";
    var shareText = "这是一个有奖的探秘活动";
    var shareDesc = "这是一个有奖的探秘活动";
    var appId = "wxd7e1ae873110dd0e";//测试
    // var appId = "wxb590db7d5ff2aeab";//正式
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
                hdFuc(ut);
            } catch (err) {

            }
        });
        wx3Tool.shareToFriend(shareText, shareDesc, shareUrl, shareImg, "", "", function () {
            try {
                // wx3Tool.pvCounter("2", "help", 0);
                hdFuc(ut);
            } catch (err) {

            }
        });
    });
}





// 回掉函数 添加分享记录
function hdFuc(ut){
    $.ajax({
        url: http+_data.addShare,
        dataType: "json",
        data: {
            ut:ut
        },
        type: "POST",
        async: false,
        success: function (data) {

        },
        error: function () {

        }
    });
}