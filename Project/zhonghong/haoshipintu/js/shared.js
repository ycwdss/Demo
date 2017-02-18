/**
 * Created by Administrator on 2016/12/9 0009.
 */

var href = window.location.href;
var utStr = href.substring((href.indexOf("?ut=") + 4), (href.indexOf("&flag")));
var shareId = href.substring((href.indexOf("&flag=") + 6));
/*   alert(utStr);
 alert(shareId);*/
$.ajax({
    url: "http://hersheys.wehuge.com/diy/act/data/getDiyById.wx",
    data: "ut=" + utStr + "&id=" + shareId + "",
    type: "POST",
    success: function (data) {
          console.log(JSON.stringify(data));
       if(data.code>0&&data.data!==null){
           var sharedArr = data.data.types.split(",");
           var sharedTpl='';
           //拼图完成重新生成图
           for (var i = 0; i < sharedArr.length; i++) {
               //$('.shaked-wrap .end-show div').eq(i).addClass("choco" + sharedArr[i]);
               sharedTpl+= "<div class='" + ("choco" + sharedArr[i]) + "'></div>";
           }
           $('.shaked-wrap .end-show').append(sharedTpl);
       }
       else {
            var sharedDefault=[
                4,4,4,4,4,4,4,4,4,4,
                4,4,4,4,4,4,0,0,4,4,
                4,4,4,4,4,4,4,0,0,4,
                4,4,4,0,4,4,4,4,0,4,
                0,0,0,4,4,4,4,0,0,4,
                0,0,0,4,4,4,0,0,0,4,
                0,0,0,4,4,4,0,0,0,4,
                4,4,0,0,4,0,0,0,4,4,
                0,0,0,0,0,0,0,0,0,4,
                4,4,4,4,0,0,0,0,0,4,
                4,4,4,4,4,0,0,0,0,4,
                4,4,4,4,4,4,0,0,0,4,
                4,4,4,4,4,4,4,0,0,4,
                4,4,4,4,4,4,4,4,0,4,
                4,4,4,4,4,4,4,4,4,4,
                4,4,4,4,4,4,4,4,4,4,
            ];
            var defaultTpl='';
           //用户删除显示默认图片
           for (var i = 0; i < sharedDefault.length; i++) {
               //$('.shaked-wrap .end-show div').eq(i).addClass("choco" + sharedArr[i]);
               defaultTpl+= "<div class='" + ("choco" + sharedDefault[i]) + "'></div>";
           }
           $('.shaked-wrap .end-show').append(defaultTpl);

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
