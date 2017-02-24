/**
 * Created by Administrator on 2016/12/19 0019.
 */

var webUrl = "http://qianduan.vfengche.cn/wangzan/qianhai/";
var bgUrl = "actqy.vfengche.cn";
var href = window.location.href;
var utStr = href.substring(href.indexOf("ut=") + 3);


//index
$('.index-game').on('touchstart', function () {
    var newUrl = webUrl + "story.html?ut=" + utStr + "";
    $(this).attr('href', newUrl);
});


//game
//获取用户信息
var openId = '';
var helpCount;
var playCount;
$(function () {
    $.ajax({
        url: 'http://' + bgUrl + '/qhchristmasflow/getUserInfo.html',
        type: 'post',
        data: 'ut=' + utStr,
        async: false,
        success: function (data) {
            var data = JSON.parse(data);

            if (data.code >= 100) {
                helpCount = data.helpCount; //已经助力次数
                playCount = data.playCount;   //还剩余玩的次数
                openId = data.openId;
                console.log("已经助力：" + helpCount);
                console.log("还剩余次数：" + playCount);

                var powerImg = $('.power-show img');
                switch (helpCount) {
                    case 0:
                        powerImg.attr('src', "images/power-gray.png");
                        break;
                    case 1:
                        powerImg.eq(0).attr('src', "images/power-normal1.png");
                        break;
                    case 2:
                        powerImg.eq(0).attr('src', "images/power-normal1.png");
                        powerImg.eq(1).attr('src', "images/power-normal2.png");
                        break;
                    case 3:
                        powerImg.eq(0).attr('src', "images/power-normal1.png");
                        powerImg.eq(1).attr('src', "images/power-normal2.png");
                        powerImg.eq(2).attr('src', "images/power-normal3.png");
                        break;
                }

                if (playCount <= 0) {
                    $('.story-believeBtn').on('touchstart', function () {
                        $('.game-over').show();
                    });
                    $('.game-over .popup-inner div').on('touchstart', function () {
                        $('.game-over').hide();
                    });
                } else {
                    //story

                    $('.story-believeBtn').on('touchstart', function () {

                        var newUrl = webUrl + "game.html?ut=" + utStr + "";
                        $(this).attr('href', newUrl);
                    });
                }
            } else {
                /*layer.open({
                    content: '系统错误，请稍后再试！'
                    , shade: false
                    , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                    , time: 3
                });*/
            }

        },
        error: function () {
            layer.open({
                content: '网络异常，请稍后再试！'
                , shade: false
                , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                , time: 3
            });
        }
    })
})

//game 出发 添加游戏记录
$(function () {
    //显示主力次数
    $('.tool2 em').html(helpCount);
    //铲除大雪堆
    var shovelNum = helpCount;
    $('.tool2 em').html(shovelNum);
    $('.game-wrap').children('.b-snow:lt(' + shovelNum + ')').remove();
    $('.game-state .state-btn').click(function () {
        $.ajax({
            url: "http://" + bgUrl + "/qhchristmasflow/addPlayRecord.html",
            type: 'post',
            data: "ut=" + utStr,
            success: function (data) {
                pid = JSON.parse(data).pid;
              /*  if(JSON.parse(data).code<0){
                    window.location.href="http://" + bgUrl + "/qhchristmasflow/authIndex.html";
                }else {
                    pid = JSON.parse(data).pid;
                }*/
            },
            error: function () {

            }
        })
    });

})


//页面访问记录
function records(title) {
    $.ajax({
        url: "http://" + bgUrl + "/qhchristmasflow/addAccess.html",
        type: 'post',
        data: "ut=" + utStr + "&type=" + title,
    })
}

//finish 助力领流量

var province, operators, num;
$(function () {

    var flag=false;
    if(flag==false){
        flag=true;
        $('.success-input .input-btn').on('click', function () {
            var telEle = $('.success-input .input-tel input');
            var myreg = /(^1[3|4|5|7|8][0-9]{9}$)/;
            var telNum = telEle.val();
            if (!myreg.test(telNum)) {
                $('.success-input p').css('visibility', 'visible');
                telEle.keyup(function () {
                    $('.success-input p').css('visibility', 'hidden');
                });
            } else {
                /*验证手机号成功*/
                function checkTel(tel) {
                    $.ajax({
                        type: "get",
                        url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=' + tel,
                        dataType: "jsonp",
                        jsonp: "callback",
                        async: false,
                        success: function (data) {
                            province = data.province,//省份
                                operators = data.catName,//手机号类型
                                num = data.telString;//手机号码
                            $.ajax({
                                url: "http://" + bgUrl + "/qhchristmasflow/lottyPrize.html",
                                type: 'post',
                                data: "ut=" + utStr + "&tel=" + telNum + "&type=1" + "&operators=" + operators,
                                success: function (data) {
                                    var data=JSON.parse(data);
                                    if(data.code>=100){
                                        var flow = data.flow;
                                        $('.success-inner').hide();
                                        $('.success-result').show();
                                        if (flow == 0) {
                                           $('.result-title').html('哎呀~盒子空空如也。圣诞老人也有粗心的时候，努力为小伙伴助力，还有得到礼物的机会哦~');
                                        }else {
                                            $('.result-title').html('恭喜获得' + flow + 'M流量礼包').css('font-size', 48 + 'px');
                                        }

                                    }else {
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
                                        content: '网络异常，请稍后再试！'
                                        , shade: false
                                        , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                                        , time: 3
                                    });
                                }
                            })
                        },
                        error: function () {
                            /*   alert("手机号有误");*/
                        }
                    });
                }

                checkTel(telNum);


            }
        });
        flag=false;
    }


})






