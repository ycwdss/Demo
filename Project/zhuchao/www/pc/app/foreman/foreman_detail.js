/**
 * Created by guan on 2015/10/9.
 */
//左侧菜单显示
var aA=$('.intro_list').find('a');
aA.each(function(){
    $(this).click(function(){
        aA.attr('class','');
        $(this).attr('class','active');
    })
});



//预约咨询弹出框
var oConsult=$('.active_green');
var oShadeConsult=$('.shade_consult');
var oAlert=$('.alert');
var oCross=$('.cross');
oConsult.click(function(){  //显示弹出框
    oShadeConsult.css("display","block");
    oAlert.css("display","block");
});
oCross.click(function(){  //关闭弹出框
    oShadeConsult.css("display","");
    oAlert.css("display","");
});



//预约弹出框input高亮显示
var aInput=$('form').find('input');
aInput.each(function(){
    $(this).click(function(){
        $(this).css("border-color","#093");
    });
    $(this).blur(function(){
        $(this).css("border-color","");
    });
});
//预约弹出框多行文本框高亮显示
var oTextarea=$('textarea');
oTextarea.click(function(){
    $(this).css("border-color","#093");
});
oTextarea.blur(function(){
    $(this).css("border-color","");
});
