/**
 * Created by liu on 15-11-26.
 */
define(['jquery', 'app/demo/banner', 'app/demo/productcard1','effect/colpick'], function () {
        var contentFrame = parent.webContent.contentWindow;
        var contentDoc = contentFrame.document;
        $('.colpickbutton').colpick({
            layout: 'hex',
            submit: 0,
            colorScheme: 'light',
            livePreview: true,
            color: 'ff8800',
            onChange: function (hsb, hex, rgb, el, bySetColor) {
                $(el).css('background', '#' + hex);
                var cssText = $(el).siblings('.css_text').text();
                var cssText = cssText.replace(/\*\*\*/igm, '#' + hex);
                $('#colpick_' + $(el).attr('id') + ' style', contentDoc).html(cssText);
            }
        }).keyup(function () {
            $(this).colpickSetColor(this.value);
        }).css('background-color', '#ff8800');

        $('#default_theme_color li').click(
            function () {
                var color = getHexColorValue($(this).css('backgroundColor'));
                var cssText = $('#nav_bg_color ~ .css_text').text();
                var cssText = cssText.replace(/\*\*\*/igm, color);
                console.log(cssText);
                $('#colpick_nav_bg_color style', contentDoc).html(cssText);
            }
        );
        function getHexColorValue(color) {
            var rgbRegExp = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
            var isrgb = rgbRegExp.test(color);
            if (isrgb) {
                color = color.replace(/[(rgb)\(\) ]/g, '');
                color = color.split(',');
                $.each(color,function(index,value){
                    value =  parseInt(color[index]);
                    if(value<16){
                        color[index] = '0' + parseInt(color[index]).toString(16);
                    }
                    else{
                        color[index] =parseInt(color[index]).toString(16);
                    }
                });
                return '#' + color[0] + color[1] + color[2];
            } else if (/[a-f0-9]{6}/.test(color)) {
                return '#' + color;
            }
        }
});