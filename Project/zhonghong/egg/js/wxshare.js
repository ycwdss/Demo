/**
 * Created by Administrator on 2016/12/8 0008.
 */

//助力分享
function wxshare(openId,ut) {
    //分享操作
    var jsTicket = '';
    $.ajax({
        url:_data.getTicket,
        type: "POST",
        async: false,
        dataType: "json",
        success: function (data) {
            jsTicket = data.data;
        },
        error: function () {

        }
    });

    var domain = window.location.host;
    var shareUrl =_data.authHelp+openId;
    var shareImg = webHttp+"images/help.jpg";
    var shareText = "好信召“吉”令！呼叫小伙伴帮忙啦！";
    var shareDesc = "新春大礼近在咫尺，宝宝的礼物就靠你了，你也记得一起来玩噢！";
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
                hdFuc(ut);
                // window.location.href=http+_data.authIndex;
            } catch (err) {

            }
        });
        wx3Tool.shareToFriend(shareText, shareDesc, shareUrl, shareImg, "", "", function () {
            try {
                // wx3Tool.pvCounter("2", "help", 0);
                hdFuc(ut);
                // window.location.href=http+_data.authIndex;
            } catch (err) {

            }
        });
    });
}


//普通分享
function wxshare2(ut) {
    //分享操作
    var jsTicket = '';
    $.ajax({
        url:_data.getTicket,
        type: "POST",
        async: false,
        dataType: "json",
        success: function (data) {
            jsTicket = data.data;
        },
        error: function () {

        }
    });

    var domain = window.location.host;
    var shareUrl =_data.authIndex;
    var shareImg = webHttp+"images/pushare.jpg";
    var shareText = "好信召“吉”令！好信侠“吉”年大变身！";
    var shareDesc = "好信贺新春！好信好礼好“吉”年！好信大礼迫不及待的要上门拜年啦！";
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


// 添加分享记录
function hdFuc(ut){
    $.ajax({
        url:_data.addShare,
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