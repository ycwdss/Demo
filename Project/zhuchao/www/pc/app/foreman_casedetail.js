
/**
 * Created by Administrator on 2015/10/12.
 */
define(['jquery'],function(){
$(function(){
   //$('.img_cycle').slick({
   //    slidesToShow:1,
   //    slidesToScroll:1,
   //    infinite:false,
   //    dots:false,
   //    prevArrow:'.arrow_prev',
   //    nextArrow:'.arrow_next'
   //});
    var origin_img=$('.c_case_img img');
    for(var i=0;i<origin_img.size();i++){
        $('.img_cycle').append("<img src="+origin_img.eq(i).attr('src')+">");
        if(origin_img.siblings('.img_descri').eq(i).html()){
            $('.show_img').append("<p>"+origin_img.siblings('.img_descri').eq(i).html()+"</p>")
        }
        else{
            $('.show_img').append("<p>暂无描述。。</p>")
        }
       ;
    }
    var n=0;
    $('.c_case_img img').click(function(){
        var a= $.inArray(this,$('.c_case_img img'));
        $('.img_cycle img').eq(a).show();
        $('.show_img_bg').show();
        show_img(0);
        windowResize();
        $('body').css({'width':'100%','height':'100%','overflow':'hidden'});
        $('.show_title a').html($(this).siblings('p').eq(0).html());
        $('.show_title span:eq(0)').html(a+1);
        $('.show_title span:eq(1)').html($('.img_cycle img').size());

    });
    $('.arrow_com').click(function(event){
        $('.img_cycle img').hide();
        $('.show_img p').hide();
        var now=$('.show_title span:eq(0)').html();
        if($(this).hasClass('arrow_prev')){
            n=Math.max(now-1,1);
            $('.show_title span:eq(0)').html(n);
            $('.show_img p').eq(n-1).show();
            $('.img_cycle img').eq(n-1).show();
        }
        else{
            n=Math.min(parseInt(now)+1, $('.show_title span:eq(1)').html());
            $('.show_title span:eq(0)').html(n);
            $('.show_img p').eq(n-1).show();
            $('.img_cycle img').eq(n-1).show();
        }
        show_img(n-1);
        windowResize();
        event.stopPropagation();
    });
    function show_img(n){
        var img=new Image();
        img.src=$('.img_cycle img').eq(n-1).attr('src');
        $('.img_cycle').css('width',img.width* $('.img_cycle').height()/img.height+"px");
        //$('.img_cycle .slick-slide').css('width',img.width* $('.img_cycle').height()/img.height+"px");
        //$('.slick-track').css('width',$('.img_cycle').width()*2+'px');
        $('.show_img h2').css('line-height',$('.show_img h2').height()+'px');
    }
    $(window).resize(function(){
        show_img(n);
        windowResize();
    });
    function windowResize(){
            var sizeW=(Math.max($(window).width(),600)-$('.img_cycle').width())/2-50;
             var sizeH=(Math.max($(window).height(),500)-90)/2;
        $('.arrow_com').css({'top':sizeH+'px'});
        $('.arrow_prev').css('left',sizeW+"px");
        $('.arrow_next').css('right',sizeW+"px");
    }
    $('.show_img p,.show_img h2,.img_cycle img').click(function(event){
        event.stopPropagation();
    });
    $('.show_img_bg').click(function(){
        $('.show_title span:eq(0)').html(1);
        $(this).hide();
        $('.img_cycle img').hide();
        $('body').css({'width':'auto','height':'auto','overflow':'scroll'});
    })
});
    $('.textarea').keyup(function () {
        var n = $('.textarea').val();
        $('.last_word span').html(250 - n.length);
    });
});