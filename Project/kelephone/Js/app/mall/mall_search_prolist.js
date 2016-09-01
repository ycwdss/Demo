/**
 * Created by jiayin on 2016/1/6.
 */
define(['zepto'], function () {
    //头部导航样式
    $('#mallSearchNav li').tap(function(){
        $(this).addClass('maincolor').siblings().removeClass('maincolor');
        if($('.sanjiao').hasClass('current')){
            $(this).find('.sanjiao').toggleClass('current');
        }
    });
    //点击筛选
    $('#shaixuan').tap(function(){
        $('#shaixuanBox').removeClass('hide');
        $('html,body').css({'height': '100%', 'overflow': 'hidden'});
    });
    //点击取消
    $('.cancel').tap(function(){
        $('#shaixuanBox').addClass('hide');
        $('html,body').css({'height': 'auto', 'overflow': 'visible'});
    });
    ////点击条件
    $('.shaixuan_item .module_text_nav li').tap(function(){
        var index = $(this).closest('.shaixuan_item').index();
        $(this).addClass('maincolor').siblings().removeClass('maincolor');
        var textValue = $(this).children('a').text();
        $('#shaixuanListBox').hide();
        $('#shaixuanIndex').show();
        $('#shaixuanListNav li').eq(index).find('span').text(textValue);
    });
    //点击分类
    $('#shaixuanListNav li').tap(function(){
        var indexA=$(this).index();
        $('#shaixuanIndex').hide();
        $('#shaixuanListBox').show();
        $('#shaixuanListBox').find('.shaixuan_item').hide().eq(indexA).show();
    });

    //清除选择
    $('.submit_btn').tap(function(){
        $('#shaixuanListNav').find('.choose_text').text('全部');
    });
    //返回按钮
    $('#shaixuanListBox .goback').tap(function(){
        $('#shaixuanListBox').hide();
        $('#shaixuanIndex').show();
    })
});


