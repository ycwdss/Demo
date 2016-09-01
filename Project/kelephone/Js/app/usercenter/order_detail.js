/**
 * Created by jiayin on 2016/1/11.
 */
define(['zepto'],function() {
    $(function(){
        $('#orderWuliu').tap(function(){
            var wuliuList=$('.order_wuliu_list');
            if(wuliuList.hasClass('open')){
                $(wuliuList).removeClass('open');
                $(wuliuList).find('ul li:not(:first-child)').addClass('hide');
            }
            else{
                $(wuliuList).addClass('open');
                $(wuliuList).find('ul li:not(:first-child)').removeClass('hide');
            }
        })
    })
});