/**
 * Created by liu on 15-10-12.
 */
define(['jquery'], function () {
    $(function () {
        var lengthTip = {
                over: '请输入不大于%%位字符',
                under: '请输入不少于%%位字符'
            },
            typeTip = {
                wrong: '请输入由%%组成的字符串'
            },
            emailTip = {
                wrong: '请输入正确的邮箱地址'
            },
            phoneTip = {
                wrong: '请输入正确的手机号'
            },
            itemWrongClass = 'item-error';
        var nameReg = /^[0-9a-zA-Z_]{5,10}$/;
        var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var phoneReg = /^1\d{10}$/;
        var $forms = $('*[form-in=form]');

        $.each($forms, function (index, $item) {
            var $items = $($item).find('*[item-type]');
            $.each($items, function (subIndex, $subItem) {
                (function () {
                        $items.eq(subIndex).change(function () {
                            var tip='',result='';
                            var itemType = $(this).attr('item-type');
                            if (itemType.indexOf('length') > -1) {
                                tip=result = checkLength($(this), $(this).attr('max-length'), $(this).attr('min-length'));
                                result = !result;
                            }
                            if (itemType.indexOf('email') > -1) {
                                result = emailReg.test($(this).val());
                                tip = result? '':emailTip.wrong;
                            }
                            if (itemType.indexOf('phone') > -1) {
                                result = phoneReg.test($(this).val());
                                tip = result? '':phoneTip.wrong;
                            }
                            if(itemType.indexOf('regular') > -1){
                                var reg = new RegExp($(this).attr('regular'));
                                result = reg.test($(this).val());
                                tip = result? '':$(this).attr('wrong-message');
                            }
                            result ? trueAction(this, tip):wrongAction(this, tip) ;
                        });
                        $items.eq(subIndex).bind('input propertychange', function () {
                            if ($(this).hasClass(itemWrongClass)) {
                                $(this).change();
                            }
                        })
                    })();
            })
        })


        function checkLength(item, max, min) {
            var length = $(item).val().length;
            console.log(length + '  ' + min);
            if (length < min) {
                return lengthTip.under.replace('%%', min);
            }
            if (length > max) {
                return (lengthTip.over).replace('%%', max);
            }
            return false;
        }

        function wrongAction(item, result) {
            $(item).addClass(itemWrongClass);
            $('#' + $(item).attr('tip-target')).html(result).addClass(itemWrongClass);
        }

        function trueAction(item, result) {
            $(item).removeClass(itemWrongClass);
            $('#' + $(item).attr('tip-target')).html(result).removeClass(itemWrongClass);
        }
    })
})