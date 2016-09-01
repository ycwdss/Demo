/**
 * Created by wangzan on 2015/12/9.
 */
require.config({
    baseUrl:"../Js/lib",
    paths:{
        app:'../app'
    }
});
requirejs(['jquery'], function () {
    var require = document.getElementById('require');
    var appJs = require.getAttribute('app');
    requirejs(['app/'+appJs]);
});