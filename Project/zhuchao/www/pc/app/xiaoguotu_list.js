/**
 * Created by Administrator on 2015/9/12.
 */
define(['jquery','fhlib/totop','lazyload','fhlib/navselect','fhlib/search','../app/xiaoguotu_pubuliu'],function(){
$(function () {
    var have_arrow_state=0;
    //var lis_choice=new Array('t','s','p','c');
    //var origin_url='';
    //var url=window.location.href;
    //var message=window.location.hash;
    ////var message=url.substr(url.lastIndexOf("/"));
    //if(message.indexOf('.')<0&&message!=''){
    //}
    //else{
    //    origin_url=url+'#';
    //}
    //if(message.indexOf('.')<0&&message!=''){
    //    var split=message.split("&");
    //    for(var i=0;i<split.length;i++){
    //        if(i==0){
    //            var lis_num= $.inArray(split[i].substr(1,1),lis_choice);
    //            var n=split[i].substr(3);
    //        }
    //        else{
    //            var lis_num= $.inArray(split[i].substr(0,1),lis_choice);
    //            var n=split[i].substr(2);
    //        }
    //        if(split[i]!=''){
    //            $('.lis_choice').eq(lis_num).find('li').eq(n).css('color','#f60');
    //            var text=$('.lis_choice').eq(lis_num).find('li').eq(n).html();
    //            $('.lis_index').append('<li><span class="lis_arrow"></span><a href="#"><div class="lis_clicked"><span>'+text+'</span><span class="lis_cancel"></span></div></a></li>');
    //        }
    //    }
    //}
    //$('.lis_choice li').click(function(){
    //    var li_id= $.inArray(this,$('.lis_choice li'));
    //    var lis0=$('.lis_choice').eq(0).find('li').size();
    //    var lis1=$('.lis_choice').eq(1).find('li').size();
    //    var lis2=$('.lis_choice').eq(2).find('li').size();
    //    var lis3=$('.lis_choice').eq(3).find('li').size();
    //    //var lis_num= $.inArray($(this).parent('lis_choice'),$('lis_choice'));
    //    //alert($(this).parent('lis_choice'));
    //    //url+=lis_choice[lis_num]+'='+ $.inArray(this,$('this').parent());
    //    if(li_id<lis0){
    //        replace('t',li_id);
    //    }
    //    else if(li_id-lis0<lis1){
    //        li_id-=lis0;
    //        replace('s',li_id);
    //    }
    //    else if(li_id-lis0-lis1<lis2){
    //        li_id=li_id-lis0-lis1;
    //        replace('p',li_id);
    //    }
    //    else if(li_id-lis0-lis1-lis2<lis3){
    //        li_id=li_id-lis0-lis1-lis2;
    //        replace('c',li_id);
    //    }
    //    //window.location.href=url;
    //});
    //function replace(lis,id){
    //    if(message.indexOf(lis)>0){
    //        var local=message.indexOf(lis);
    //        if(message.substr(local+3,1)!='&'){
    //            message=message.replace(message.substr(local+2,2),id)
    //        }
    //        else{
    //            message=message.replace(message.substr(local+2,1),id)
    //        }
    //    }
    //    else if(message!=''){
    //        message+='&'+lis+'='+id;
    //    }
    //    else{
    //        message+=lis+'='+id;
    //    }
    //    window.open(origin_url+message);
    //}
    $('.have_arrow').click(function(){
        $('.sort li').removeClass('sort_click');
        $('.have_arrow').addClass('sort_click');
        if(have_arrow_state==0){
            $('.sort_arrow').removeClass('sort_arrow1 sort_arrow3');
            $('.sort_arrow').addClass('sort_arrow2');
        }
        else{
            $('.sort_arrow').removeClass('sort_arrow2');
            $('.sort_arrow').addClass('sort_arrow3');
            have_arrow_state=-1;
        }
        have_arrow_state+=1;
    });
    $('.pubuliu_ele').hover(function(){
       $('.store').eq($.inArray(this,$('.pubuliu_ele'))).stop().animate({width:'70px'},200);
    });
    $('.pubuliu_ele').mouseleave(function(){
        $('.store').eq($.inArray(this,$('.pubuliu_ele'))).stop().animate({width:'0'},200);
    });
});
});