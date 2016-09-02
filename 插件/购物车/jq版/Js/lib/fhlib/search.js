/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery', 'Front', 'Core'], function ($) {
    $(function () {

        var getSuggest = false;
        var searchValue = '';

        $("#search").keyup(
            function (event) {
                if (13 == event.keyCode && $(this).val()) {
                    var key = $(this).val()
                    window.location.href = getUrl() + Cntysoft.toQueryString({'keyword': key}, true);
                }
            }
        );
        $('#searchClick').click(function () {
            if ($("#search").val() !== "") {
                var key = $("#search").val()
//            alert(String.fromCharCode(key));
                window.location.href = getUrl() + Cntysoft.toQueryString({'keyword': key}, true);
            }
        });

        var getSuggest = false;
        var searchValue = '';
        var $search = $('#search');
        var $searchSuggest = $('#searchSuggest');
        var $searchKey = $('#searchArea').find('.current');
        getSearchKey();



        $('#search').focusin(function () {
            getSuggest = true;
            searchValue = $('#search').val();
            if (searchValue != '');
            {
                sendSuggestion(searchValue);
            }
        });

        $search.click(function () {
            event.stopPropagation();
        });

        $(document).click(function () {
            $searchSuggest.hide();
        });
        $('#search').keyup(function () {
            if (getSuggest) {
                if ($search.val() !== searchValue) {
                    searchValue = $search.val();
                    sendSuggestion(searchValue);
                }
            }
        });
        function getUrl() {
            getSearchKey();
            var url = '/query/';
            if ($searchKey.html() === '建材') {
                url = '/query/';
            }
            else if ($searchKey.html() === '攻略') {
                url = '/querygeneral/'
            }
            return url;
        }

        function getSuggestUrl() {
            getSearchKey();
            var url = 'getGoodsQuerySuggests';

            if ($searchKey.html() === '建材') {
                url = 'getGoodsQuerySuggests';
            }
            else if ($searchKey.html() === '攻略') {
                url = 'getGinfoQuerySuggests'
            }
            return url;
        }

        function sendSuggestion(searchValue) {
            Cntysoft.Front.callApi('SearchResult', getSuggestUrl(), {
                query: searchValue
            }, function (response) {
                if (response.status) {
                    var out = '';
                    var suggestions = response.data.suggestions;
                    console.log(suggestions);
                    $.each(suggestions, function (index) {
                        out += '<li>' + suggestions[index].suggestion + '</li>';
                    })
                    $($searchSuggest).find('ul').empty();
                    $($searchSuggest).find('ul').append(out);
                    $searchSuggest.find('li').click(function () {
                        event.stopPropagation();
                        window.location.href = getUrl() + Cntysoft.toQueryString({keyword: $(this).html()}, true);
                    });
                    $searchSuggest.show();
                }
            });
        }


        function getSearchKey(){
            if ($('#searchArea').find('.current').length) {
                $searchKey = $('#searchArea').find('.current');
            }
            else if ($('#searchItems').find('#currentItem').length) {
                $searchKey = $('#searchItems').find('#currentItem');
            }
        }


    });
});