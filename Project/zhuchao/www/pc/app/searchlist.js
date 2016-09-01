/**
 * Created by liu on 15-9-22.
 */
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

        });
    })