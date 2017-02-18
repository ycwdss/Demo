/**
 * Created by Administrator on 2016/11/21 0021.
 */

/*-----选择巧克力排图案-----*/

var utStr = href.substring(href.indexOf("ut=") + 3);
//var utStr = "ad293cd9eb554b6ab02fd09ff9d0de51";

var allArr = [];
//进入游戏后弹窗
/*var timer = setTimeout(function () {
    $('.tips').show();
    $('.tips .popup-inner').addClass('popup-scale').show();
}, 300);*/
//生成160个div
var tpl = '';
for (var i = 0; i < 160; i++) {
    tpl += "<div class=''></div>"
}
$('.game-area').html(tpl);
//选择不同颜色巧克力
$('.game-select ul li').on('touchstart', function () {
    if (!$(this).hasClass('on')) {
        $(this).addClass('on').siblings().removeClass('on');
    } else {
        $(this).removeClass('on');
    }
});
//放巧克力组成图案
$('.game-area div').on('touchstart', function () {
    var $this = $(this);
    $('.game-select ul li').each(function (i, t) {
        if ($(this).hasClass('on')) {
            var num = $(this).index();
            var choco = 'choco' + num;
            if ($this.hasClass(choco)) {
                $this.removeClass();
            } else {
                $this.removeClass().addClass(choco);
            }
        }
    });
});
//重置
$('.operate-btn a:eq(0)').on('touchstart', function () {
    $('.game-area div').attr('class', '');
    $('.game-select ul li').removeClass('on');
});
//铺满
$('.operate-btn a:eq(1)').on('touchstart', function () {
    $('.game-select ul li').each(function (i, t) {
        var $this = $(this);
        if ($this.hasClass('on')) {
            var num = $(this).index();
            var choco = 'choco' + num;
            $('.game-area div').each(function (gi, gt) {
                var _this = $(this);
                if (!_this.attr('class')) {
                    _this.addClass(choco);
                }
            })
        }
    });
});
//提交作品
$('.operate-btn a:eq(2)').on('touchstart', function () {
    var clen = $(".game-area div[class^='choco']").length;
    var alen = $('.game-area div').length;
    if (clen == alen) {
        //填写作品名字
        $('.fillname').show();
    } else {
        //没有填满，重新填
        $('.noover').show();
    }
});

//点去我的作品
var dotArr = [];
var choArr = '';
var storage = window.sessionStorage;
$('.operate-btn a:gt(2)').click(function () {
        var clen = $(".game-area div[class^='choco']").length;
        var alen = $('.game-area div').length;
        //没有拼满且有拼图
        if (clen !== alen && clen !== 0) {
            for (var i = 0; i < alen; i++) {
                dotArr.push($('.game-area div').eq(i).attr('class'));
            }
            $('.game-select ul li').each(function (i, t) {
                if ($(t).attr("class") == "on") {
                    choArr = $(this).index();
                    storage.setItem("choNum", choArr);
                }
            })
            storage.setItem("dotNum", dotArr);
        } else {
            window.sessionStorage.clear();
        }
    }
);
//点返回到游戏页显示原来制作
if (storage.getItem("dotNum") !== null && storage.getItem("choNum") !== null) {
    var backArr = window.sessionStorage.getItem("dotNum").split(",");
    var backStr = window.sessionStorage.getItem("choNum");
/*    clearTimeout(timer);*/
    for (var i = 0; i < backArr.length; i++) {
        $('.game-area div').eq(i).attr("class", backArr[i]);
    }
    $('.game-select ul li').eq(parseInt(backStr)).addClass('on').siblings().removeClass();
}


//作品有没有填写名字
$('.fillname .popup-sure').on('touchstart', function () {
    var valText = $('.fillname-content input').val();
    if (valText == '') {
        $('.fillname-content  p').addClass('error');
        return false;
    } else if (valText.length > 20) {
        $('.fillname-content  p').html("名字超过20个字符，请重新输入！").addClass('error');
        return false;
    } else {

        //提交成功
        $('.game-area div').each(function (ni, nt) {
            allArr.push($(nt).attr('class').substr(5));
        });
        sendNum(valText);
        //提交成功
        var newUrl = basicUrl + "end.html?ut=" + utStr + "&id=" + sendId;
        $(this).attr('href', newUrl);
    }
});
//输入框焦点去除
$('.fillname-content input').focus(function () {
    $('.fillname-content  p').removeClass('error');
});
//字符超过20个
$('.fillname-content input').keyup(function () {
    var valText = $('.fillname-content input').val();
    if (valText.length > 20) {
        $('.fillname-content  p').html("名字超过20个字符，请重新输入！").addClass('error');
    } else {
        $('.fillname-content  p').html("请为您的大作起个名字吧！").removeClass('error');
    }
});
$('.popup-close').on('touchstart', function () {
    $('.fillname-content  p').removeClass('error');
});


//拼图所用不同巧克力数量
function sendNum(opts) {
    //提交上传数据
    var u = utStr;
    var s = allArr.join(",");
    var n = opts;
    $.ajax({
        url: "http://hersheys.wehuge.com/diy/act/data/submitDiy.wx",
        type: 'POST',
        data: "ut=" + u + "&types=" + s + "&name=" + n + "",
        async: false,
        success: function (data) {
            sendId = data.id;
            if (-200 < data.code <= -100) {
                layer.open({
                    content: '参数错误，请稍后再试！'
                    , shade: false
                    , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                    , time: 3
                });
            }
            if (data.code <= -200) {
                layer.open({
                    content: '系统错误，请稍后再试！'
                    , shade: false
                    , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                    , time: 3
                });
            }
        },
        error: function () {
            layer.open({
                content: '系统错误，请稍后再试！'
                , shade: false
                , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                , time: 3
            });
        }
    });
}
//关闭弹窗
$('.popup-close,.tips .popup-sure,.noover .popup-sure').on('touchstart', function () {
    $('.popup-rotate').hide();
    $('.fillname').hide();
});

//分享
$('.end-sharebtn').on('touchstart', function () {
    $('.end-share').show();
    $('.end-share img').addClass('popup-scale').show();
});


//去我的作品
$('.toworks').on('touchstart', function () {
    //提交成功
    var newUrl = basicUrl + "works-tpl.html?ut=" + utStr + "&hd=works";
    $(this).attr('href', newUrl);
});

//去模板

$('.tomodule').on('touchstart', function () {
    //提交成功
    var newUrl = basicUrl + "works-tpl.html?ut=" + utStr + "&hd=tpl";
    $(this).attr('href', newUrl);
});

//竖屏横屏显示
function orient() {
    if (window.orientation == 90 || window.orientation == -90) {
        //横屏
        $("body").attr("class", "landscape");
        orientation = 'landscape';
        $('.tips').show().addClass('popup').removeClass('popup-rotate');
        $('.tips-content').html('为了使您获得更好的游戏体验，<br>建议您关闭屏幕旋转功能。');
        $('.tips .popup-sure,.tips .popup-close').click(function () {
            $('.tips').hide();
        });
        return false;
    } else if (window.orientation == 0 || window.orientation == 180) {
        //竖屏
        $("body").attr("class", "portrait");
        orientation = 'portrait';
        $('.tips').show().addClass('popup-rotate').removeClass('popup');

        $('.tips-content').html('选取喜爱的颜色点击画板进行填充，<br>再次点击可取消选择。<br>即刻开启你的好时KISSES创意之旅吧！');
        return false;
    }
}
//页面加载时调用
$(function() {
    orient();
});
//用户变化屏幕方向时调用
$(window).bind('orientationchange', function(e) {
    orient();
});