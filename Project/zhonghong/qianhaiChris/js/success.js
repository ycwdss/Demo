/**
 * Created by Administrator on 2016/12/20 0020.
 */
//finish 助力领流量
var webUrl = "http://qianduan.vfengche.cn/wangzan/qianhai/";
var bgUrl = "actqy.vfengche.cn";
var href = window.location.href;
var utStr = href.substring(href.indexOf("ut=") + 3);
var province, operators, num;
$(function () {
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
                            data: "ut=" + utStr + "&tel=" + telNum + "&type=2" + "&operators=" + operators,
                            success: function (data) {
                                var data=JSON.parse(data);
                                if(data.code>=100){
                                    var flow = data.flow;
                                    $('.success-inner').hide();
                                    $('.success-result').show();
                                    if (flow == 0) {
                                        $('.result-title').html('哎呀~盒子空空如也。圣诞老人也有粗心的时候，努力为小伙伴助力，还有得到礼物的机会哦~');
                                    } else {
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

                            }
                        })
                    },
                    error: function () {

                    }
                });
            }

            checkTel(telNum);


        }
    });

})