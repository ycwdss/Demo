/**
 * Created by Administrator on 2016/3/16.
 */
define(['zepto','swiper','module/company_classify','module/totop','module/show'],function(){
    $(function(){
        var banner = new Swiper('.banner',{
            pagination : '.swiper-pagination',
            autoplay : 3000,
            speed:300,
            loop:true
        });
        // $('img').click(function () {
        //     $.fangda({'src':''+$(this).attr('src')});
        // });
   
        $('body').show({index:5});
        // $('img').click(function () {
        //     alert($('img').eq(i).parent().attr('href'))
        // })
        // var img_count = $('img').size();
        // for(var i = 0;i< img_count;i++){
        //     var slide = "<div class='swiper-slide'><img src='"+$('img').eq(i).attr('src')+ "'></div>"
        //     $('.out >div').append(slide);
        // }


    });
})