/**
 * Created by jiayin on 2015/10/21.
 */
define(['jquery','effect/layer'], function ($) {
    $(function () {
        layer.open({
            content: '测试回调',
            success: function(layero, index){
                console.log(layero, index);
            }
        });
    });
});