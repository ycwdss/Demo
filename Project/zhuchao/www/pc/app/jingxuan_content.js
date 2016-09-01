/**
 * Created by Administrator on 2015/9/21.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'], function () {
    $(function(){
        if($('.special_hd h2').height()>30){
            $('.special_hd h2').css({'top':'0'});
        }
    });
});