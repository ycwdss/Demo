/**
 * Created by guan on 2015/10/27.
 */
define(['jquery', 'fhlib/cookie', 'slick', 'fhlib/totop', 'fhlib/navselect', 'fhlib/search',
    'lazyload', 'Core', 'Front', 'fhlib/imglazy'], function ($) {


    //大轮播图实现
       //尊享切换
        var bigTabSpan = $('.item_1').find('.intro_tab').find('span');
        var lunBo = $('.item_1').find('.lunbo');
        bigTabSpan.each(function (index) {
            $(this).click(function () {
                bigTabSpan.attr('class', '');
                $(this).attr('class', 'active');
                lunBo.removeClass('lunbo_current');
                lunBo.eq(index).addClass('lunbo_current');
                switch (index) {
                    case 1:
                        doSlick('#lunbo12', '.last_btn12', '.next_btn12');
                        break;
                    case 2:
                        doSlick('#lunbo13', '.last_btn13', '.next_btn13');
                        break;
                    case 3:
                        doSlick('#lunbo14', '.last_btn14', '.next_btn14');
                        break;
                    case 4:
                        doSlick('#lunbo15', '.last_btn15', '.next_btn15');
                        break;
                    case 5:
                        doSlick('#lunbo16', '.last_btn16', '.next_btn16');
                        break;
                }
            })
        });

    //轻奢切换
    var bigTabSpan2 = $('.item_2').find('.intro_tab').find('span');
    var lunBo2 = $('.item_2').find('.lunbo');
    bigTabSpan2.each(function (index) {
        $(this).click(function () {
            bigTabSpan2.attr('class', '');
            $(this).attr('class', 'active');
            lunBo2.removeClass('lunbo_current');
            lunBo2.eq(index).addClass('lunbo_current');
            switch (index) {
                case 1:
                    doSlick('#lunbo22', '.last_btn22', '.next_btn22');
                    break;
                case 2:
                    doSlick('#lunbo23', '.last_btn23', '.next_btn23');
                    break;
                case 3:
                    doSlick('#lunbo24', '.last_btn24', '.next_btn24');
                    break;
                case 4:
                    doSlick('#lunbo25', '.last_btn25', '.next_btn25');
                    break;
                case 5:
                    doSlick('#lunbo26', '.last_btn26', '.next_btn26');
                    break;
            }
        })
    });

    //青春切换
    var bigTabSpan3 = $('.item_3').find('.intro_tab').find('span');
    var lunBo3 = $('.item_3').find('.lunbo');
    bigTabSpan3.each(function (index) {
        $(this).click(function () {
            bigTabSpan3.attr('class', '');
            $(this).attr('class', 'active');
            lunBo3.removeClass('lunbo_current');
            lunBo3.eq(index).addClass('lunbo_current');
            switch (index) {
                case 1:
                    doSlick('#lunbo32', '.last_btn32', '.next_btn32');
                    break;
                case 2:
                    doSlick('#lunbo33', '.last_btn33', '.next_btn33');
                    break;
                case 3:
                    doSlick('#lunbo34', '.last_btn34', '.next_btn34');
                    break;
                case 4:
                    doSlick('#lunbo35', '.last_btn35', '.next_btn35');
                    break;
                case 5:
                    doSlick('#lunbo36', '.last_btn36', '.next_btn36');
                    break;
            }
        })
    });


    function doSlick(id, last_btn, next_btn) {
        $('.lunbo_box').css('overflow', 'hidden');
        $(id).slick({
            dots: false,
            prevArrow: last_btn,
            nextArrow: next_btn,
            speed: 500,
            fade: false
        });
    }

    doSlick('#lunbo1', '.last_btn1', '.next_btn1');
    doSlick('#lunbo2', '.last_btn2', '.next_btn2');
    doSlick('#lunbo3', '.last_btn3', '.next_btn3');
    $(document).ready(function () {
        $('.lunbo_box').css('overflow', 'visible');
    });


    // 预约申请input效果
    var inputText = $('.jz_apply').find('.input_text');
    inputText.focus(function () {
        $('.input_text').css('border', '1px  solid #e4e4e4');
        $(this).css('border', '1px  solid #093');
    });
    inputText.blur(function () {
        $('.input_text').css('border', '1px  solid #e4e4e4');
    });

});