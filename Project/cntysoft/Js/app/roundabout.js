/**
 * Created by Administrator on 2015/12/25.
 */
define(['jquery','roundabout','roundabout_shapes','model/totop'],function(){
    $(function(){
            $('#case1').roundabout({
                shape: 'figure8',
                minOpacity: 1,
            });
            $('#case2').roundabout({
                shape: 'figure8',
                minOpacity: 1,
            });
        });
});