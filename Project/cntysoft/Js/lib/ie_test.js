/**
 * Created by Administrator on 2016/1/6.
 */
/*
 测试IE
 */
var browser = getBrowserInfo() ;//浏览器名字+版本字符串
var verinfo = (browser+"").replace(/[^0-9.]/ig,"");//版本号
var name = (browser+"").replace(/[^a-zA-Z]/ig,"");//浏览器内核
var ele = getElementsByClassName('section');
var header = getElementsByClassName('header');
var array = verinfo.split('.');
if(name == 'msie'){
    /*
     ie10 头部3D旋转不支持
     */
    if(array[0]>=10 && array[0]<11){
        header[0].className+=' ie10';
    }
    /*
     ie 9  不支持animition
     */
    if(array[0]< 10){
        if(array[0] == 9 && ele!=null){
            for(var i=0;i<ele.length;i++){
                ele[i].className+=" "+"low";
            }
        }else{
            //IE8及以下
            alert('您的浏览器版本过低,请使用更高版本的浏览器!');
            window.opener=null;
            window.open('','_self');
            window.close();
            if (array[0] != null) {
                for (var i = 0; i < ele.length; i++) {
                    ele[i].className += " " + "low";
                }
            }
        }
    }

}
/*
 谷歌浏览器31不支持头部3D
 */
if(name == 'chrome'){
    if(array[0]<=31){
        header[0].className+=' ie10';
    }
}
function getBrowserInfo()
{
    var agent = navigator.userAgent.toLowerCase() ;

    var regStr_ie = /msie [\d.]+/gi ;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi ;
    var regStr_saf = /safari\/[\d.]+/gi ;
    //IE
    if(agent.indexOf("msie") > 0)
    {
        return agent.match(regStr_ie) ;
    }

    //firefox
    if(agent.indexOf("firefox") > 0)
    {
        return agent.match(regStr_ff) ;
    }

    //Chrome
    if(agent.indexOf("chrome") > 0)
    {
        return agent.match(regStr_chrome) ;
    }

    //Safari
    if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
    {
        return agent.match(regStr_saf) ;
    }
}
function getElementsByClassName(classname){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(classname);
    }else{
        var results = new Array();
        var elems = document.getElementsByTagName('*');
        for(var i=0;i<elems.length;i++){
            if(elems[i].className.indexOf(classname) != -1){
                results[results.length] =elems[i];
            }
        }
        return results;
    }
}