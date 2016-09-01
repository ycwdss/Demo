/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery',
    'slick',
    'fhlib/navselect',
    'fhlib/search',
    'Core', 'Front',
    'fhlib/totop', 'lazyload', 'fhlib/imglazy'],
        function ($, slick, navselect, search) {
            $(function () {
                var href = window.location.href, attr;
                var sendQuery = href.substr(href.indexOf('/query/') + 7);
                sendQuery = Cntysoft.fromQueryString(sendQuery);
                if (sendQuery.keyword) {
                    $('#search').val(sendQuery.keyword);
                }
                $('#page a').click(function () {
                    var href = window.location.href, attr;
                    var sendQuery = href.substr(href.indexOf('/query/') + 7);
                    sendQuery = Cntysoft.fromQueryString(sendQuery);
                    if(!sendQuery.page){
                        sendQuery.page = 1;
                    }
                    if (sendQuery.page != $(this).attr('page')) {
                        sendQuery.page = $(this).attr('page');
                        window.location.href = '/query/' + Cntysoft.toQueryString(sendQuery, true);
                    }
                });
                $('.c_sort').click(function () {
                    var href = window.location.href, attr;
                    var sendQuery = href.substr(href.indexOf('/query/') + 7);
                    sendQuery = Cntysoft.fromQueryString(sendQuery);

                    var attr = new Object();


                    $('#attr a').each(
                            function () {
                                var itemKey = $(this).attr('index');
                                attr[itemKey] = $(this).attr('data');
                            }
                    );
                    var sorts = new Object();
                    sorts['key'] = $(this).attr('key');
                    sorts['type'] = $(this).attr('type');
                    if (sorts['type'] == 0) {
                        sorts['type'] = 1;
                    }
                    else {
                        sorts['type'] = 0;
                    }

                    window.location.href = '/query/' + Cntysoft.toQueryString({
                        'keyword': sendQuery['keyword'],
                        'sorts': sorts,
                        'attr': attr
                    }, true);
                });
                $('.m_list3 a').click(function () {
                    var href = window.location.href, attr;
                    var sorts = new Object();
                    var attr = new Object();
                    var attrkey = $(this).attr('data');
                    var attrtype = $(this).attr('index');
                    var sendQuery = href.substr(href.indexOf('/query/') + 7);
                    sendQuery = Cntysoft.fromQueryString(sendQuery);
                    var sortsKey = 'sorts[key]';
                    var sortsType = 'sorts[Type]';
                    if (sendQuery[sortsKey]) {
                        sorts.key = sendQuery[sortsKey];
                        sorts.type = sendQuery[sortsType];
                    }
                    $('#attr a').each(
                            function () {
                                var itemKey = $(this).attr('index');
                                attr[itemKey] = $(this).attr('data');
                            }
                    );
                    attr[attrtype] = attrkey;

                    window.location.href = '/query/' + Cntysoft.toQueryString({
                        'keyword': sendQuery['keyword'],
                        'sorts': sorts,
                        'attr': attr
                    }, true);
                });
                $('#attr a').click(
                        function () {
                            $(this).remove();
                            var href = window.location.href, attr;
                            var sorts = new Object();
                            var attr = new Object();
                            var sendQuery = href.substr(href.indexOf('/query/') + 7);
                            sendQuery = Cntysoft.fromQueryString(sendQuery);
                            var sortsKey = 'sorts[key]';
                            var sortsType = 'sorts[Type]';
                            if (sendQuery[sortsKey]) {
                                sorts.key = sendQuery[sortsKey];
                                sorts.type = sendQuery[sortsType];
                            }
                            $('#attr a').each(
                                    function () {
                                        var itemKey = $(this).attr('index');
                                        attr[itemKey] = $(this).attr('data');
                                    }
                            );

                            window.location.href = '/query/' + Cntysoft.toQueryString({
                                'keyword': sendQuery['keyword'],
                                'sorts': sorts,
                                'attr': attr
                            }, true);
                        }
                );
                $(function () {
                    var now = $('#sort').attr('key');
                    $('#sort .c_sort').removeClass('first_choice');
                    var nowSpan = $('#sort .c_sort[key=' + now + ']');
                    nowSpan.addClass('first_choice');
                    if (nowSpan.length) {
                        if (nowSpan.attr('type') == 0) {
                            nowSpan.html(nowSpan.html().replace('↑', '↓'));
                        }
                        else {
                            nowSpan.html(nowSpan.html().replace('↓', '↑'));
                        }
                    }
                })
            });
        })