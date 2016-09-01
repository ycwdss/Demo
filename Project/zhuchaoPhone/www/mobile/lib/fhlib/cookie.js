/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(function (require, exports) {
    var CookieUtil = {
        get: function (name) {
            var cookieName = encodeURIComponent(name) + '=',
                    cookieStart = document.cookie.indexOf(cookieName),
                    cookieValue = null;
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(";", cookieStart);
                if (cookieEnd === -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        },
        //name:cookie名字，value:cookie值，day,cookie保存时间，domain:cookie关联域名，secure:跨域传输
        set: function (name, value, day, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + "=" +
                    encodeURIComponent(value);
            if (isFinite(day)) {
                var date = new Date();
                date =new Date (Date.parse(date) + day*86400000);
                cookieText += ';expires=' + date.toUTCString();
            }
            else{
                console.error('CookieUti.set中day必须为数字');
            }
            if (path) {
                cookieText += ';path=' + path;
            }
            if (domain) {
                cookieText = ';domain=' + domain;
            }
            if (secure) {
                cookieText += ';secure';
            }
            document.cookie = cookieText;
        },
        unset: function (name, path, domain, secure) {
            this.set(name, '', new Date(0), path, domain, secure);
        }
    }
    exports.CookieUtil=CookieUtil;
});