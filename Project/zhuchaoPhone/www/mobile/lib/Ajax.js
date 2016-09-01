/**
 * Created by liu on 15-9-30.
 */
;
(function ($, window, document, undefined) {
    var walterfuller = function (ele, opt) {
        this.$element = ele,
            this.defaults = {},
            this.options = $.extend({}, this.defaults, opt),
            this.rowNumb = 1;
        this.$sub = this.$element.children('*'), this.perRowNum, this.perLineHeight;
    }
// 初始化
    walterfuller.prototype.init=function(itemMargin,wrapper) {
        var itemMargin = itemMargin;                                       //瀑布流小窗口margin值
        var items = $("#" + wrapper + " div");                                       //瀑布流分布子类
        items.css('position','absolute')
        var wrap = parseInt($('#' + wrapper).css('width'));               //父类窗口宽度
        var nextPosition = 0;                                        //下一个小窗口的位置
        var nowItemHeight = 0;
        var itemWidth = parseInt($('#wrap div').eq(1).css('width')) + itemMargin;  //宽度
        var lineTop = new Array();

        var lineNumb = parseInt(wrap / itemWidth);              //每行四个

//        console.log("lineNumb"+lineNumb);
        for (var i = 0; i < lineNumb; i++) {                //初始化
            lineTop[i] = 0;
        }
        for (var i = 0; i < items.length; i++) {
            nextPosition = 0;
            for (j = 1; j < lineNumb; j++) {
                if (lineTop[j] < lineTop[j - 1]) {
                    nextPosition = j;
                }
                console.log(nextPosition);
            }
            $(items[i]).css('left', nextPosition * itemWidth);
            $(items[i]).css('top', lineTop[nextPosition] + "px");
            nowItemHeight = parseInt($(items[i]).css('height'));
            lineTop[nextPosition] += (nowItemHeight + itemMargin);
            if(i==items.length-1){
                $('#' + wrapper).css('height',lineTop[nextPosition]);
            }

        }
    }
    $.fn.waterfull = function (options) {
        var waterfuller = new walterfuller(this, options);
        waterfuller.init();
        return waterfuller.$element;
    }
})($, window, document);