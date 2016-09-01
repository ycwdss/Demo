/**
 * Created by wangzan on 2016/1/22.
 */

define(['jquery'], function () {
    ;(function ($) {
        $.fn.drop = function (options) {
           $(this).each(function () {
                var obj=$(this);
                obj.click(function (e) {
                    var $show = $(this).find('.drop_show');
                    if ($(this).hasClass('down')) {
                        $(this).removeClass('down');
                        $(this).find('.drop_arrow').removeClass('active');
                        $(this).find('.drop_list').hide();
                    } else {
                        $(this).find('.drop_arrow').addClass('active');
                        $(this).find('.drop_list').show();
                        $(this).addClass('down')
                    }
                    $(this).siblings().removeClass('down');
                    $(this).siblings().find('.drop_arrow').removeClass('active');
                    $(this).siblings().find('.drop_list').hide();
                    $(this).find('.drop_list').find('li').click(function () {
                        $show.html($(this).html());
                    });
                    //阻止滚动
                    obj.find('.drop_list').each(function () {
                        var _this = this;
                        if (navigator.userAgent.indexOf('Firefox') >= 0) {
                            _this.addEventListener('DOMMouseScroll', function (e) {
                                _this.scrollTop += e.detail > 0 ? 60 : -60;
                                e.preventDefault();
                            }, false);
                        } else {
                            _this.onmousewheel = function (e) {
                                e = e || window.event;
                                _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;
                                return false;
                            };
                        }
                    })
                    e.stopPropagation();
                });

                $('html,body').click(function () {
                    obj.removeClass('down');
                    $('.drop_list').hide();
                    $('.drop_arrow').removeClass('active');
                });

            });
        }
    })(jQuery);
    $('.drop_menu').drop();
});

