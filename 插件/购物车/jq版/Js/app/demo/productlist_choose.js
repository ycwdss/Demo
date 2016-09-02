/**
 * Created by 佳音 on 2015/12/4.
 */
define(['jquery','lazyload', 'fhlib/imglazy'], function () {
    //更多品牌
    $('#chooseMoreBrand').click(function(){
        var chooseMoreBrand=$('#chooseMoreBrand');
        if(chooseMoreBrand.hasClass('current')){
            $(this).removeClass('current').find('span').html('更多');
            $(this).parent('.choose_brand_list_box').removeClass('current');
        }
        else{
            $(this).addClass('current').find('span').html('收起');
            $(this).parent('.choose_brand_list_box').addClass('current');
        }
    });

    $('#chooseMore').click(function(){
        var chooseMore=$('#chooseMore');
        if(chooseMore.hasClass('current')){
            $(this).removeClass('current').find('span').html('更多');
            $(this).prev('.choose_list_text').height('22px');
        }
        else{
            $(this).addClass('current').find('span').html('收起');
            $(this).prev('.choose_list_text').height('auto');
        }
    });

    //更多筛选条件
    var chooseBtn=$('#chooseBtn');
    var spanText=$('#chooseBtn').find('span').html();
    $(chooseBtn).click(function(){
        if(chooseBtn.parent().hasClass('current')){
            $(this).parent().removeClass('current').find('span').html(spanText);
            $('.choose_list_box').find("dl:gt(3)").addClass('hide');
        }
        else{
            $(this).parent().addClass('current').find('span').html('收起');
            $('.choose_list_box').find('dl:gt(3)').removeClass('hide');
        }
    })
});