/**
 * Created by liu on 15-9-20.
 */
define(['jquery',
    'slick',
    'fhlib/navselect',
    'fhlib/search',
    'Core', 'Front',
    'fhlib/totop', 'lazyload', 'fhlib/imglazy'],
    function(){
    $(function () {
        var href = window.location.href, attr;
        if(href.indexOf('.html') > -1){
            sendQuery = new Object();
            href = href.replace('.html','/');
        }
        else{
            var sendQuery = href.substr(href.lastIndexOf('/')+1);
            href = href.substr(0,href.lastIndexOf('/')) +'/';
            sendQuery = Cntysoft.fromQueryString(sendQuery);
        }
        $('#page a').click(function () {
            if(!sendQuery.page){
                sendQuery.page = 1;
            }
            if (sendQuery.page != $(this).attr('page')) {
                sendQuery.page = $(this).attr('page');
                window.location.href = href + Cntysoft.toQueryString(sendQuery, true);
            }
        });
        $('.c_sort').click(function () {

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

            window.location.href = href + Cntysoft.toQueryString({
                    'sorts': sorts,
                    'attr': attr
                }, true);
        });
        $('.m_list3 a').click(function () {
            var sorts = new Object();
            var attr = new Object();
            var attrkey = $(this).attr('data');
            var attrtype = $(this).attr('index');

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

            window.location.href = href + Cntysoft.toQueryString({
                    'sorts': sorts,
                    'attr': attr
                }, true);

        });
        $('#attr a').click(
            function () {
                $(this).remove();
                var sorts = new Object();
                var attr = new Object();
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

                window.location.href = href + Cntysoft.toQueryString({
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