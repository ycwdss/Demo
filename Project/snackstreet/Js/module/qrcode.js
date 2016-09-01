/**
 * Created by Administrator on 2016/3/11.
 */
define(['jquery','qrcode'],function(){
    $(function(){
       $("#qrcode").qrcode({width: 100,height: 100,text: "http://baidu.com"});
    });
})