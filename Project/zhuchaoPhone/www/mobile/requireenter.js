/**
 * Created by liu on 15-10-8.
 */

requirejs.config({
    baseUrl: '../mobile/lib',
    paths: {
        app: '../app'
    }
});
requirejs([], function () {
    var require = document.getElementById('require');
    var appJs = require.getAttribute('app');
    requirejs(['app/'+appJs]);
});