/**
 * Created by liu on 15-12-15.
 */
;
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}
(function ($) {
    var Magnifying = function (ele, option) {
        this.$element = ele,
            this.defaults = {
                cursorShadeClass: '',
                magnifierClass: '',
                magnifierSize: [400, 400],
                //loazyloadImg: 'http://statics-res.fhzc.com/Images/pc/plugin/layer/loading-0.gif',
                multiple: 2
            };
            this.setting = $.extend({}, this.defaults, option)
    };

    Magnifying.prototype = {
        init: function () {
            var setting = this.setting;
            this.$element.each(function (index, ele) {
                var originImg = $(ele).find('img').eq(0);
                var originImgWidth = originImg.width();
                var originImgHeight = originImg.height();
                var cursorWidth = setting.magnifierSize[0] / setting.multiple;
                var cursorHeight = setting.magnifierSize[1] / setting.multiple;
                var originImgLeft = originImg.offset().left;
                var originImgTop = originImg.offset().top;

                if ($(ele).css('position') == 'static') {
                    $(ele).css('position', 'relative');
                }

                $('<div class="mg-cursor-shade ' + setting.cursorShadeClass + '" style="display:none";></div>').appendTo($(ele)).css({
                    position: 'absolute',
                    width: cursorWidth + 'px',
                    height: cursorHeight + 'px',
                    top: 0,
                    left: 0,
                });
                $('<div class="mg-multiple ' + setting.magnifierClass + '" style="display: none;"><img origin-src="' + $(ele).find('img').attr('big-img') + '"></div>').appendTo($(ele))
                $(ele).find('.mg-multiple').css({
                    position: 'absolute',
                    top: '0px',
                    left: originImgWidth + 20 + 'px',
                    width: setting.magnifierSize[0] + 'px',
                    height: setting.magnifierSize[1] + 'px',
                    overflow: 'hidden',
                    zIndex:99999,
                    background: 'url(' + setting.loazyloadImg + ') white center no-repeat',
                });
                $(ele).find('.mg-multiple img').css({
                    height: originImgHeight * setting.multiple + 'px',
                    width: originImgWidth * setting.multiple + 'px'
                });
                $(ele).mousemove(function (event) {
                    var mouseLeft = event.pageX;
                    var mouseTop = event.pageY;
                    var cursorLeft = mouseLeft - originImgLeft > cursorWidth / 2 ? mouseLeft - originImgLeft - cursorWidth / 2 : 0;
                    var cursorLeft = cursorLeft > originImgWidth - cursorWidth ? originImgWidth - cursorWidth : cursorLeft;
                    var cursorTop = mouseTop - originImgTop > cursorHeight / 2 ? mouseTop - originImgTop - cursorWidth / 2 : 0;
                    var cursorTop = cursorTop > originImgHeight - cursorHeight ? originImgHeight - cursorHeight : cursorTop;
                    $(this).find('.mg-cursor-shade').css({
                        left: cursorLeft + 'px',
                        top: cursorTop + 'px',
                        zIndex: 0,
                        border: '1px solid #f60',
                        opacity: 0.3,
                        backgroundColor: 'rgb(255, 255, 255)'
                });
                $(this).find('.mg-multiple').scrollLeft(cursorLeft * setting.multiple);
                $(this).find('.mg-multiple').scrollTop(cursorTop * setting.multiple);
            });

            $(ele).hover(function (event) {
                $(this).find('.mg-cursor-shade,.mg-multiple').show();
                var bigImg = $(this).find('.mg-multiple img');
                bigImg.attr('src', bigImg.attr('origin-src'));
            }, function () {
                $(this).find('.mg-cursor-shade,.mg-multiple').hide();
            });
        }
    )
    ;
}
};
$.fn.magnify = function (options) {

    var magnifying = new Magnifying(this, options);

    return magnifying.init();
}
}))
;