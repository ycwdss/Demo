/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery', 'Front', 'Core'], function ($) {
    $(function () {
        $("#search").keyup(
                function (event) {
                    if (13 == event.keyCode && $(this).val()) {
                        var key = $(this).val()
                        window.location.href = '/query/' + Cntysoft.toQueryString({'keyword': key}, true);
                    }
                }
        );
        $('#searchClick').click(function () {
            if ($("#search").val() !== "") {
                var key = $("#search").val()
//            alert(String.fromCharCode(key));
                window.location.href = '/query/' + Cntysoft.toQueryString({'keyword': key}, true);
            }
        });
    });
})