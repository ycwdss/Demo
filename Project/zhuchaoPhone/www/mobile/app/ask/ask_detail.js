/**
 * Created by 佳音 on 2015/11/11.
 */
define(['zepto','fhlib/new_totop'],function() {
   $('#question_btn').tap(function(){
        $('#my_answer').show(300);
       $('html').css({'position':'fixed','width':'100%'});
   });
    $('#answerOff').tap(function(){
        $('#my_answer').hide(300);
        $('html').css({'position':'static'});
    });


    $('.answer_ping').tap(function(){
        $('#pinglun_box').show(300);
        $('html').css({'position':'fixed','width':'100%'});
    });
});
