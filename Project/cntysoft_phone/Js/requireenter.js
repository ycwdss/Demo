/**
 * Created by liu on 15-12-19.
 */
requirejs.config({
    baseUrl: 'Js/lib',
    paths: {
        app: '../app',
        module:'../module'
    }
});
requirejs([], function () {
    var require = document.getElementById('require');
    var appJs = require.getAttribute('app');
    requirejs(['app/'+appJs]);
});