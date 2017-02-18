// 获取浏览器参数值
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}


// 禁止滑动事件
$('body').on('touchmove', function (event) {
    event.preventDefault();
});

//添加页面访问记录
function addAccess(ut, type) {
    $.ajax({
        url: http + _data.addAccess,
        data: "ut=" + ut + "&type=" + type,
        type: "POST",
    });
}

//微信分享参数
//游戏
function wxshare1(ut) {
    //分享操作
    var jsTicket = '';
    $.ajax({
        url: http+_data.getTicket,
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
    var shareUrl = http+_data.indexwx;
    var shareImg = webHttp+"images/rock.jpg";
    var shareText = "我要祝福";
    var shareDesc = "我要祝福";
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
//写祝福
function wxshare2(ut) {
    //分享操作
    var jsTicket = '';
    $.ajax({
        url: http+_data.getTicket,
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
    var shareUrl = http+_data.indexwx2;
    var shareImg = webHttp+"images/rock.jpg";
    var shareText = "玩游戏";
    var shareDesc = "玩游戏";
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