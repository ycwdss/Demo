/**
 * Created by Administrator on 2015/9/14.
 */
define(['jquery'],function(){
    $(function(){

        pubuliu(17,'wrap');
        //window.onload=function(){
        //    pubuliu(17,'wrap');
        //};

        function pubuliu(itemMargin,wrapper) {

            var itemMargin = itemMargin;
            $('#'+wrapper).show();
            var items = $("#" + wrapper + ">div");
            var wrap = parseInt($('#' + wrapper).css('width'));
            var nextPosition = 0;
            var nowItemHeight = 0;
            var itemWidth = parseInt($('#wrap >div').eq(0).css('width')) + itemMargin;
            var lineTop = new Array();

            var lineNumb = parseInt((wrap+itemMargin)/ itemWidth);

            for (var i = 0; i < lineNumb; i++) {
                lineTop[i] = 0;
            }
            for (var i = 0; i < items.length; i++) {
                items.eq(i).css('position','absolute');
                nextPosition = 0;
                var min = Math.min.apply(Math,lineTop);
                for (j = 0; j < lineNumb; j++) {
                    if (lineTop[j] === min) {
                        nextPosition = j;
                        break;
                    }
                }
                $(items[i]).css('left', nextPosition * itemWidth);
                $(items[i]).css('top', lineTop[nextPosition] + "px");
                nowItemHeight = parseInt($(items[i]).css('height'));
                lineTop[nextPosition] += (nowItemHeight + itemMargin);
                if(i==items.length-1){
                    $('#' + wrapper).css('height',Math.max.apply(Math,lineTop));
                }

            }
        }
    });
});
