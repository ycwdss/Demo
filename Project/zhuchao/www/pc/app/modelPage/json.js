/**
 * Created by liu on 15-10-21.
 */
define(['jquery'],function(){
require(["/fenghuang/www/modelPage/data.json?callback=define"],
    function (data) {
        console.log(data);
    }
);
})