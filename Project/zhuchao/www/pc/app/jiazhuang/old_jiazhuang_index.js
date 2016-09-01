/**
 * Created by Administrator on 2015/10/27.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(function () {
        for(var i=0;i<$('.descri_container').size();i++){
            $('.descri_container').eq(i).find('.descri_ele').hide();
            $('.descri_container').eq(i).find('.descri_ele').eq(0).show();
        }
        var state=false;//旋转状态量
        var time;//setInterval
        var delay=0;
        //旋转
        $('.yangban_ele').hover(function () {
            var index = $.inArray(this, $(".yangban_ele"));
            state=false;
             time=setInterval(function(){
                 delay++;
                 if(delay==4){
                     state=true;
                     delay=0;
                     turn( $('.price_show'),  $('.yangban_descri'),index);
                     clearInterval(time);
                     console.log(state,delay);
                 }
            },100);
            //$('.price_show').eq(index).animate({'transform':'rotateY(90deg)'},500,function(){
            //    $('.price_show').eq(index)
            //});
            //turn( $('.price_show'),  $('.yangban_descri'),index);
        },function(){
            if(delay!=0){
                clearInterval(time);
                delay=0;
            }
            else{
                if(state){
                    console.log(23);
                    var index = $.inArray(this, $(".yangban_ele"));
                    turn($('.yangban_descri'),$('.price_show'),index);
                }
                clearInterval(time);
            }
        });
        //$('.yangban_ele').mouseleave(function(){
        //    clearInterval(time);
        //    var index= $.inArray(this,$('.yangban_ele'));
        //    turn( $('.yangban_descri'),$('.price_show'),index);
        //});
        //轮播
        $('.arrow_com').click(function(){
            if($(this).hasClass('prev')){
                var index= $.inArray(this,$('.prev'));
                var n=0;
                for(var i=0;i<$(this).siblings('.descri_ele').size();i++){
                    if($('.prev').eq(index).siblings('.descri_ele').eq(i).css('display')!='none'){
                        n=i;
                    }
                 }
                if(n-1<0){
                    n= $('.descri_container').eq(index).find('.descri_ele').size();
                }
                $('.descri_container').eq(index).find('.descri_ele').hide();
                $('.descri_container').eq(index).find('.descri_ele').eq(n-1).show();
            }
            else{
                var index= $.inArray(this,$('.next'));
                var s=0;
                for(var j=0;j<$(this).siblings('.descri_ele').size();j++){
                    if($('.prev').eq(index).siblings('.descri_ele').eq(j).css('display')!='none'){
                        s=j;
                    }
                }
                if(s+1==$('.descri_container').eq(index).find('.descri_ele').size()){
                    s= -1;
                }
                $('.descri_container').eq(index).find('.descri_ele').hide();
                $('.descri_container').eq(index).find('.descri_ele').eq(s+1).show();
            }
        });
        //旋转函数
        function turn(face,opposite,index){
            //if(state==true) {
                var count = 0;
                var n = setInterval(function () {
                    if (count > 90) {

                        setCss3(opposite.eq(index), {transform: "rotateY(" +(count-180)+ "deg)"});
                    }
                    else {
                        if (count == 90) {
                            face.eq(index).hide();
                            opposite.eq(index).show();
                            setCss3(opposite.eq(index), {transform: "rotateY(-90deg)"});
                        }
                        setCss3(face.eq(index), {transform: "rotateY(" + count + "deg)"});
                    }
                    if (count == 180) {
                        clearInterval(n);
                        count = 0;
                    }
                    count += 10;
                }, 40)
            }

        //}
        //transform 多个内核控制
        function setCss3(obj, attrObj) {
            for (var i in attrObj) {
                var newi = i;
                if (newi.indexOf("-") > 0) {
                    var num = newi.indexOf("-");
                    newi = newi.replace(newi.substr(num, 2), newi.substr(num + 1, 1).toUpperCase())
                }
                //console.log(obj.style[newi]);
                obj.css(newi,attrObj[i]);
                //obj.style[newi] = attrObj[i];
                newi = newi.replace(newi.charAt(0), newi.charAt(0).toUpperCase());
                obj.css("webkit" + newi,attrObj[i]);
                obj.css("moz" + newi,attrObj[i]);
                obj.css("o" + newi,attrObj[i]);
                obj.css("ms" +newi,attrObj[i]);
                //obj.style[newi] = attrObj[i];
                //obj.style["webkit" + newi] = attrObj[i];
                //obj.style["moz" + newi] = attrObj[i];
                //obj.style["o" + newi] = attrObj[i];
                //obj.style["ms" + newi] = attrObj[i];

            }
        }
    });
});