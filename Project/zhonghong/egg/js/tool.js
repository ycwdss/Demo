
// 获取浏览器参数值
function GetUT(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}

// 获取用户信息
function GetUserInfo(ut) {
    $.ajax({
        url:_data.getUserInfo,
        data: {
            ut: ut
        },
        dataType: 'json', //服务器返回json格式数据
        type: "POST",
        async: false,
        success: function (data) {

            if (data.code >= 100) {
                playNum = data.playNum;
                helpCount = data.helpCount;
                openId = data.openId;
                isTel = data.isTel;
                qword = data.qword;
                hword = data.hword;
                zword = data.zword;
                xword = data.xword;
            }
        },
        error: function () {
            alert("网络异常，请稍后再试");
        }
    });
}

//分享 用完机会弹窗
var ut = GetUT('ut'); //获取ut
function SetPopup() {
    //分享弹窗
    $('.share-btn').on('click',function () {
        $('.share').hide();
        $('.share-text').show();
        wxshare(openId, ut);
    });
    $('.share-text').on('click',function () {
        $(this).hide();
    });
    $('.over-btn').on('click',function () {
        $('.over').hide();
    });
    $('.over').on('click',function () {
        $(this).hide();
    });
}


// 添加访问记录
function addAccess(ut, url) {
    $.ajax({
        url: _data.addAccess,
        data: {
            ut: ut,
            type: url
        },
        dataType: 'json', //服务器返回json格式数据
        type: "POST",
        async: false,
        success: function () {

        },
        error: function () {

        }
    });
}


// 禁止滑动事件
$('body').on('touchmove', function (event) {
    event.preventDefault();
});







