/**
 * Created by jiayin on 2015/12/31.
 */
requirejs.config({
    baseUrl: '../../Js/lib',
    paths: {
        app: '../app',
        jquery:'jquery1.8.3'
    }
});
requirejs([], function () {
    var require = document.getElementById('require');
    var appJs = require.getAttribute('app');
    requirejs(['app/'+appJs]);
});