/**
 * Created by liu on 15-10-8.
 */

requirejs.config({
    baseUrl: '../Js/lib',
    paths: {
        app: '../app',
        modules:'../../../../node_modules'
    },
    shim:{
        'effect/jquery.slimscroll':['jquery']
    }
});
requirejs([], function () {
    var require = document.getElementById('require');
    var appJs = require.getAttribute('app');
    requirejs(['app/'+appJs]);
});