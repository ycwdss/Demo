/**
 * Created by liu on 15-10-21.
 */

//按需加载css文件
define(['jquery'],function($,content){
    require(['text!/fenghuang/www/Css/modelPage/text.css'],function(content){
        var a = document.createElement('style');
        a.innerHTML = content;
        $('head').append(a);
    });
});