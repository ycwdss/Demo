/**
 * Created by wangzan on 2015/12/4.
 */
$(function () {
    var alen=$('.cates_item').length;
    for(var i=0;i<alen;i++){
        var index=i;
        $('.cates_item').eq(index).children('h3').on("click",function() {
            var _this=$(this);
            if(_this.hasClass('current')){
                _this.next('.item_son').hide();
                _this.removeClass('current');
            }else{
                _this.next('.item_son').show();
                _this.addClass('current');
            }
        });
    }
});