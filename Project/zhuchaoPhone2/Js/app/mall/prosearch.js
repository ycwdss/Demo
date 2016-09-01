/**
 * Created by jiayin on 2016/3/16.
 */
define(['zepto','module/mall_nav','module/totop'], function () {
    $(function () {

        //点击头部筛选条件
        $('#mallSearchNav li').tap(function () {
            var that = $(this);
            $(this).addClass('current').siblings().removeClass('current up down');
            if ($.inArray(this, $('#mallSearchNav li')) < 3) {
                if (that.hasClass('search_price')) {
                    if (that.hasClass('up')) {
                        $(this).removeClass('up').addClass('down')
                    }
                    else {
                        $(this).addClass('up').removeClass('down')
                    }
                }
            }
            else {
                $('html,body').addClass('current');
                $('#shaixuanBox').show();
            }
        });
        //点击取消
        $('.cancel').tap(function(){
            $('#shaixuanBox').hide();
            $('html,body').removeClass('current');
        });
        ////点击条件
        $('.shaixuan_item .module_text_nav li').tap(function(){
            var index = $(this).closest('.shaixuan_item').index();
            $(this).addClass('current').siblings().removeClass('current');
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
});