/**
 * Created by guan on 2015/11/9.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    //顶部新家图片滑动切换
    var casePicTab = new Swiper('#case_pic_tab', {
        direction: 'horizontal',
        loop: true,
        onSlideChangeEnd:function(swiper){
            var nowIndex=$('.swiper-slide-active').attr('data-swiper-slide-index');
            var swiperPage=$('.swiper_page');
            var nowPageNum=Number(nowIndex)+1;
            swiperPage.find('span').html(nowPageNum);  //输出分子


            var swiperTotal=$('.swiper-slide').size();
            swiperPage.find('em').html('/'+(swiperTotal-2)); //输出分母
        }

    });



    //发表评论
    $('.eva').find('i').click(function(){
        $('#edit_eva').css('display','block');
    });
});