/**
 * Created by liu on 15-12-19.
 */
requirejs.config({
    baseUrl: 'Js/lib',
    paths: {
        app: '../app',
        jquery:'jquery2.0.1',
        jquery2:'jquery1.8.0',
        model:'../model'
    }
});
requirejs([], function () {
    var require = document.getElementById('require');
    var appJs = require.getAttribute('app');
    requirejs(['app/'+appJs]);
});