/**
 * Created by liu on 15-11-25.
 */
define(['jquery'],function(){
    require(['effect/colpick'],function(){
        var contentFrame = parent.webContent.contentWindow;
        console.log(contentFrame);
        var contentDoc = contentFrame.document;
        $('.colpickbutton').colpick({
            layout:'hex',
            submit:0,
            colorScheme:'light',
            livePreview:true,
            onChange:function(hsb,hex,rgb,el,bySetColor) {
                $(el).css('border-color','#'+hex);
                // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                $(el).css('background','#'+hex);
                console.log(contentFrame);
                console.log($('#totop',contentDoc).length);
                $('.module_nav',contentDoc).css({
                    background:'#'+hex,
                });
            }

        }).keyup(function(){

            $(this).colpickSetColor(this.value);

        });
    });
});