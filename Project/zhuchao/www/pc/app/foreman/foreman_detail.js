/**
 * Created by guan on 2015/10/9.
 */
//���˵���ʾ
var aA=$('.intro_list').find('a');
aA.each(function(){
    $(this).click(function(){
        aA.attr('class','');
        $(this).attr('class','active');
    })
});



//ԤԼ��ѯ������
var oConsult=$('.active_green');
var oShadeConsult=$('.shade_consult');
var oAlert=$('.alert');
var oCross=$('.cross');
oConsult.click(function(){  //��ʾ������
    oShadeConsult.css("display","block");
    oAlert.css("display","block");
});
oCross.click(function(){  //�رյ�����
    oShadeConsult.css("display","");
    oAlert.css("display","");
});



//ԤԼ������input������ʾ
var aInput=$('form').find('input');
aInput.each(function(){
    $(this).click(function(){
        $(this).css("border-color","#093");
    });
    $(this).blur(function(){
        $(this).css("border-color","");
    });
});
//ԤԼ����������ı��������ʾ
var oTextarea=$('textarea');
oTextarea.click(function(){
    $(this).css("border-color","#093");
});
oTextarea.blur(function(){
    $(this).css("border-color","");
});
