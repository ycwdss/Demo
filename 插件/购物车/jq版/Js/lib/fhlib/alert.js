/**
 * Created by liu on 15-10-12.
 */
define(['jquery'], function (){
    $.showAlert = function (options){
        if(!options){
            options = new Object();
        }
        var appendHtml = '<div id="alertShadePage"  style="display:none;"><div class="alert_bg"></div><div id="alertMessage">' +
            '<div class="alert_header"><p class="type">警告!</p></div><span id="alertClose">×</span>' +
            '<p id="alertMessageContent">提示信息内容.</p><p id="alertButton">确定</p></div></div>';
        message_com(options, appendHtml);
    };
    $.showConfirm = function (options){
        if(!options){
            options = new Object();
        }
        var appendHtml = '<div id="alertShadePage"  style="display:none;"><div class="alert_bg"></div><div id="alertMessage">' +
            '<div class="alert_header"><p class="type">警告!</p></div><span id="alertClose">×</span>' +
            '<p id="alertMessageContent">提示信息内容.</p><p id="confirmCancel">取消</p><p id="alertButton">确定</p></div></div>';
        options['showtime'] = -1;
        message_com(options, appendHtml);
    };
    $.showPrompt = function (options){
        var content = null;
        var appendHtml = '<div id="alertShadePage" style="display:none;"><div class="prompt_bg"></div><div id="alertMessage">' +
            '<div class="alert_header"><p class="type">警告!</p></div><span id="promptClose">×</span>' +
            '<p id="promptInput"><span id="alertMessageContent">请输入内容</span><input type="text" autofocus="autofocus" id="promptValue"></p>' +
            '<p id="promptCancel">取消</p><p id="promptButton">确定</p></div></div>';
        options['showtime'] = -1;
        message_com(options, appendHtml);
    };
    function message_com(options, appendHtml){
        var defaults = {
            color : null, //文字颜色
            title : '提示', //提示信息类别 提示,警告,错误等
            content : '提示信息内容.', //提示信息内容
            showtime : -1,
            type : null, //常用颜色定义 alert_success,alert_warning等
            callback : function (){
            }
        };
        var options = $.extend(defaults, options);
        if($('#alertShadePage').length){
            $('#alertShadePage').remove();
        }
        $('body').append(appendHtml);
        $('#alertShadePage').fadeIn(300);
        hiddenOverflow();
        if(options.showtime > 0){
            setTimeout(function (){
                if($('#alertShadePage').length){
                    $('#alertShaderPage').remove();
                }
            }, options.showtime);
        }
        if($('#alertShadePage').length){
            var $wrap = $('#alertShadePage');
            options.content ? $('#alertMessageContent').html(options.content) : false;
            options.title ? $($wrap).find('.type').html(options.title) : false;
            options.color ? $($wrap).css('color', options.color) : false;
            options.type ? $($wrap).addClass(options.type) : false;
        }
        $('#alertButton,#promptButton').click(function (){
            var value = '';
            if($('#promptValue').length){
                value = $('#promptValue').val();
            }
            $('#alertShadePage').remove();
            options.callback(value);
            autoOverflow();
        });
        $('#confirmCancel,#promptCancel,#promptClose,#alertClose').click(function (){
            $('#alertShadePage').remove();
            autoOverflow();
        });
        $('#alertShadePage').find('.alert_bg').click(function (){
            $('#alertShadePage').remove();
            autoOverflow();
        });
    }
    function hiddenOverflow(){

        if($(window).height() < $('html').height()){
            $('body').css('padding-right', '17px');
        }

        document.documentElement.style.overflow = 'hidden';
        $('#alertShadePage').css('top', $(window).scrollTop());
    }
    function autoOverflow(callback){
        document.documentElement.style.overflow = 'auto';
        if($(window).height() < $('html').height()){
            $('body').css('padding-right', '0');
        }
    }
});