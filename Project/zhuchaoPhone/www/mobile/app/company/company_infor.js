/**
 * Created by 佳音 on 2015/9/28.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    var companyZS = new Swiper('#companyZS', {
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: 3000
    });

//.click(function(){
//    $('.nav_list').show();
//    if(window.event){
//        //e.returnValue=false;//阻止自身行为
//        e.cancelBubble=true;//阻止冒泡
//    }else if(e.preventDefault){
//        //e.preventDefault();//阻止自身行为
//        e.stopPropagation();//阻止冒泡
//    }
//});
//$(document).click(function(){
//    $('.nav_list').hide();
//});


    var navbtn = $('#companyNav').find('.nav_btn');
    $(navbtn).bind({
        'click': function (e) {
            $('.nav_list').toggle();
            if (window.event) {
                //e.returnValue=false;//阻止自身行为
                e.cancelBubble = true;//阻止冒泡
            } else if (e.preventDefault) {
                //e.preventDefault();//阻止自身行为
                e.stopPropagation();//阻止冒泡
            }
        }
    });

    $(document).click(function () {
        $('.nav_list').hide();
    });
});
