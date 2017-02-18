/**
 * Created by Administrator on 2016/12/7 0007.
 */
//拉取我的作品

//var utStr = href.substring(href.indexOf("ut=") + 3);
var utStr = href.substring((href.indexOf("?ut=") + 4), (href.indexOf("&hd")));
var mark = href.substring(href.indexOf("hd=") + 3);
var pageNum = 1;

if (mark == "works") {
    $('.works').show();
    $('.tpl').hide();
    $('.tab-inner a:first-child').addClass('active');
}
if (mark == "tpl") {
    $('.tpl').show();
    $('.works').hide();
    $('.tab-inner a:last-child').addClass('active');
}

//拉去我的作品
function getWorks(num) {
    $.ajax({
        url: "http://hersheys.wehuge.com/diy/act/data/getDiys.wx",
        data: "ut=" + utStr + "&pages=" + num,
        type: "POST",
        async: false,
        success: function (data) {
            myData = data.data;
            if (num==1&&myData == null) {
                $('.no-works').show();
                $('.yes-works').hide();
            } else {
                $.each(myData, function (index, item) {
                    var tmpl = "";
                    var tmpl1 = "";
                    var tmpl2 = "";
                    var myName = myData[index].name;
                    var myArr = myData[index].types.split(',');
                    for (var i = 0; i < myArr.length; i++) {
                        tmpl1 += "<div class='" + ("choco" + myArr[i]) + "'></div>";
                    }
                    var newArr = simArr(myArr);
                    for (var j = 0; j < newArr.length; j++) {
                        // console.log(newArr[j][0] + ":" + newArr[j][1]);
                        var Src = "images/chocoNum" + newArr[j][0] + ".png";
                        tmpl2 += "<div class='num-item'><img src='" + Src + "'><span>X<em>" + newArr[j][1] + "</em>颗</span></div>";
                    }
                    tmpl += "<li class='clearfix' data-page='" + num + "'><div class='yes-works-show fl'><div class='yes-works-dots clearfix'>" + tmpl1 + "</div>" + "<div class='yes-works-num clearfix'>" + tmpl2 + "</div></div>" +
                        "<div class='yes-works-operate fr'><p>" + myName + "</p><a class='yes-works-share'>分享</a><a href='http://m.jd.com/product/4143628.html'>一键购买</a><a class='yes-works-del'>删除作品</a><input class='yes-works-id' type='hidden' value='" + myData[index].id + "'></div></li>"
                    $('.yes-works-content ul').append(tmpl);
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
getWorks(1);
/*$('.yes-works-content ul').scroll(function () { //滚动加载页面
 var ulDis = $(this).offset().top + $(this).height();
 var liItem = $(this).children('li').eq(pageNum * 10 - 1);

 // var liDis=$(this).children('li:last-child').offset().top;

 if (liItem.length > 0) {
 var liDis = liItem.offset().top;
 if (liDis <= ulDis && myData !== null) {
 pageNum += 1;
 console.log(pageNum);
 console.log(myData);
 getWorks(pageNum);
 }
 }

 });*/
$('.yes-works-content ul').scroll(function () { //滚动加载页面
    var ulDis = $(this).offset().top + $(this).height();
    var liItem = $(this).children('li:last-child');
    var liMark = parseInt(liItem.attr('data-page'));
    var liDis = liItem.offset().top;
    if (liDis <= ulDis && myData !== null) {
        pageNum = liMark;
        pageNum += 1;
        getWorks(pageNum);
    }


});
//删除作品

$('.yes-works-content').on('click', '.yes-works-del', function () {
    var $this = $(this);
    var delId = $(this).next().val();
    var delNum = $this.parents('li').attr('data-page'); //当前删除第几页
    var numPage = $this.parents('ul').find('li[data-page=' + delNum + ']'); //当前删除所在页数所有元素
    var s=$this.parents('li').index();

    $('.yes-works-content ul li:gt('+s+')').remove();
    numPage.remove();
    if (delNum == 1) {
        $('.yes-works-content ul').empty();
    }

    $.ajax({
        url: "http://hersheys.wehuge.com/diy/act/data/delDiyById.wx",
        type: "POST",
        data: "ut=" + utStr + "&id=" + delId + "",
        async: false,
        success: function () {
            $this.parents('li').remove();
            getWorks(delNum);
            delNum++;
            if (myData !== null) {
                getWorks(delNum);
            }
            if($('.yes-works-content ul li').length==0){
                $('.no-works').show();
                $('.yes-works').hide();
            }
            layer.open({
                content: '该作品已删除！'
                , shade: false
                , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                , time: 3
            });
        },
        error: function () {
            layer.open({
                content: '删除失败，请稍后再试！'
                , shade: false
                , style: 'background-color: rgba(0,0,0,.8);font-size:24px; color:#fff; border:none;width:70%;' //自定风格
                , time: 3
            });
        }
    })

})


//我的作品模板 返回游戏页
$('.yes-works-bottom a,.tpl-back,.no-works-bottom').on('touchstart', function () {
    //提交成功
    var newUrl = basicUrl + "game.html?ut=" + utStr;
    $(this).attr('href', newUrl);
});

//作品模板相互切换
$('.tab-inner a').on('touchstart', function () {
    var $index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('#works-tpl .mark').eq($index).show().siblings('.mark').hide();
});
//不同模板相互切换
$('.tpl-tab .tab-item').on('touchstart', function () {
    var $index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tpl-content .content-list').eq($index).show().siblings().hide();
})

/*
 //我的作品
 $('.tab-inner a:first-child').click(function () {

 var newUrl = basicUrl + "works-tpl.html?ut=" + utStr+"&hd=works";
 $(this).attr('href', newUrl);
 });

 //模板
 $('.tab-inner a:last-child').click(function () {
 //提交成功
 var newUrl = basicUrl + "works-tpl.html?ut=" + utStr+"&hd=tpl";
 $(this).attr('href', newUrl);
 });
 */
//分享
$('.yes-works-content').on('click', '.yes-works-share', function () {
    var shareId = $(this).siblings('.yes-works-id').val();
    $('.end-share').show();
    wxshare(shareId);
    return false;
});
$('.go-jd .popup-close').on('touchstart', function () {
    $('.go-jd').hide();
});
$('.end-share').click(function () {
    $(this).hide();
});