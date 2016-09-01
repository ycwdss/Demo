/**
 * Created by wangzan on 2015/12/24.
 */
define(['jquery', 'multiscroll','jquery.easings.min','model/totop'], function () {
    $(document).ready(function(){
        var hash = window.location.hash;
         $('.main').multiscroll({
            verticalCentered:true,
            navigation:true,
             scrollingSpeed:1300,
             easing: 'easeOutQuad',
            navigationPosition:'right',
            paddingTop: '50px',
            paddingBottom: '200px',
            navigationTooltips: ['功能强大', '解决方案', '支付方式','全站式搜索','O2O营销','微信营销','网站自定义','广告管理系统',
            '商品SKU管理','帮助手册','附加功能','账号同步','商品分类管理'],
            anchors:['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10','page11','page12','page13']
        });
        $.fn.multiscroll.setScrollingSpeed(0);
        var page = parseInt(hash.substring(5));
        if(typeof page === 'number' &&  page>0 && page<14 ){
            $.fn.multiscroll.moveTo('page'+page);
        }
        else{
            $.fn.multiscroll.moveTo('page1');
        }
        $.fn.multiscroll.setScrollingSpeed(1300);
    })
})