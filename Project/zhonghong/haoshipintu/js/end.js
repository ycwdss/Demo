/**
 * Created by Administrator on 2016/12/7 0007.
 */


var endUt = href.substring((href.indexOf("?ut=") + 4), (href.indexOf("&id")));
var endId = href.substring(href.indexOf("id=") + 3);
window.sessionStorage.clear();
$.ajax({
    url: "http://hersheys.wehuge.com/diy/act/data/getDiyById.wx",
    data: "ut=" + endUt + "&id=" + endId + "",
    type: "POST",
    success: function (data) {
        var enddArr = data.data.types.split(",");
        //拼图完成重新生成图
        for (var i = 0; i < enddArr.length; i++) {
            $('#end .end-show div').eq(i).addClass("choco" + enddArr[i]);
        }

        var newArr = simArr(enddArr);
        var tmpl = '';
        for (var j = 0; j < newArr.length; j++) {
            console.log(newArr[j][0] + ":" + newArr[j][1]);
            var Src = "images/chocoNum" + newArr[j][0] + ".png";
            var bagNum=Math.ceil(newArr[j][1]/105);
            tmpl += "<li><img src='" + Src + "'><span>X<em>" + newArr[j][1] + "</em></span><span>(需要<em>"+bagNum+"</em>袋)</span></li>";
        }
        $('.choco-class').html(tmpl);
        var dtHight = $('.choco-class').height();
        $('.end-num dt').css("lineHeight", (dtHight + 20) + "px");

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



//我的作品
$('.tab-inner a:first-child').on('touchstart',function () {
    var newUrl = basicUrl + "works-tpl.html?ut=" + endUt+"&hd=works";
    $(this).attr('href', newUrl);
});

//模板
$('.tab-inner a:last-child').on('touchstart',function () {
    //提交成功
    var newUrl = basicUrl + "works-tpl.html?ut=" + endUt+"&hd=tpl";
    $(this).attr('href', newUrl);
});

//分享
$('.end-sharebtn a:first-child').on('click',function () {
    $('.end-share').show();
     wxshare(endId);

});
$('.end-share').on('click',function () {
    $(this).hide();
});

$('.go-jd .popup-close').on('touchstart',function () {
    $('.go-jd').hide();
});
