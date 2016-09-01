define(['zepto','fhlib/new_totop'],function() {
        $('.choice_ele').click(function(){
           if(!$(this).hasClass('no_click')&&!$(this).hasClass('clicked')) {
               $(this).siblings('.choice_ele').removeClass('clicked');
               $(this).addClass('clicked');
           }
         });
});