/*
 * Swiper Scrollbar 2.4.1
 * Scrollbar plugin for Swiper
 *
 * http://www.idangero.us/sliders/swiper/plugins/scrollbar.php
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: June 27, 2014
 */
define(['jquery', 'swiper'], function () {
    Swiper.prototype.plugins.scrollbar = function (a, b) {
        function c(a) {
            return document.querySelectorAll ? document.querySelectorAll(a) : jQuery(a)
        }

        function d() {
            u.style.width = "", u.style.height = "", s ? (h = a.h.getWidth(t, !0), b.dragSize && b.dragSize > 0 ? (l = b.dragSize, n = h - l, p = a.h.getWidth(a.wrapper) + a.wrapperLeft + a.wrapperRight - a.width, k = n / p) : (j = a.width / (a.h.getWidth(a.wrapper) + a.wrapperLeft + a.wrapperRight), k = j * (h / a.width), l = h * j), u.style.width = l + "px") : (i = a.h.getHeight(t, !0), b.dragSize && b.dragSize > 0 ? (m = b.dragSize, o = i - m, q = a.h.getHeight(a.wrapper) + a.wrapperTop + a.wrapperBottom - a.height, k = o / q) : (j = a.height / (a.h.getHeight(a.wrapper) + a.wrapperTop + a.wrapperBottom), k = j * (i / a.height), m = i * j), m > i && (m = i), u.style.height = m + "px"), r.style.display = j >= 1 ? "none" : ""
        }

        var e = b && b.container;
        if (e) {
            var f = {hide: !0, draggable: !0, snapOnRelease: !1, dragSize: void 0};
            b = b || {};
            for (var g in f)g in b || (b[g] = f[g]);
            if ((document.querySelectorAll || window.jQuery) && (b.container.nodeType || 0 !== c(b.container).length)) {
                var h, i, j, k, l, m, n, o, p, q, r = b.container.nodeType ? b.container : c(b.container)[0], s = "horizontal" === a.params.mode, t = r, u = document.createElement("div");
                u.className = "swiper-scrollbar-drag", b.draggable && (u.className += " swiper-scrollbar-cursor-drag"), t.appendChild(u), b.hide && (t.style.opacity = 0);
                var v, w, x, y, z = a.touchEvents;
                if (b.draggable) {
                    var A = !1;
                    v = function (c) {
                        A = !0, c.preventDefault ? c.preventDefault() : c.returnValue = !1, y(c), clearTimeout(C), a.setTransition(t, 0), t.style.opacity = 1, a.setWrapperTransition(100), a.setTransition(u, 100), b.onScrollbarDrag && b.onScrollbarDrag(a)
                    }, w = function (c) {
                        A && (c.preventDefault ? c.preventDefault() : c.returnValue = !1, y(c), a.setWrapperTransition(0), a.setTransition(t, 0), a.setTransition(u, 0), b.onScrollbarDrag && b.onScrollbarDrag(a))
                    }, x = function () {
                        A = !1, b.hide && (clearTimeout(C), C = setTimeout(function () {
                            t.style.opacity = 0, a.setTransition(t, 400)
                        }, 1e3)), b.snapOnRelease && a.swipeReset()
                    };
                    var B = a.support.touch ? t : document;
                    a.h.addEventListener(t, z.touchStart, v, !1), a.h.addEventListener(B, z.touchMove, w, !1), a.h.addEventListener(B, z.touchEnd, x, !1), y = function (b) {
                        var c = 0, d = 0;
                        if (s) {
                            var e = "touchstart" === b.type || "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX || b.clientX;
                            c = e - a.h.getOffset(t).left - l / 2, 0 > c ? c = 0 : c + l > h && (c = h - l)
                        } else {
                            var f = "touchstart" === b.type || "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY || b.clientY;
                            d = f - a.h.getOffset(t).top - m / 2, 0 > d ? d = 0 : d + m > i && (d = i - m)
                        }
                        a.setTranslate(u, {x: c, y: d});
                        var g = -c / k, j = -d / k;
                        a.setWrapperTranslate(g, j, 0), a.updateActiveSlide(s ? g : j)
                    }
                }
                var C;
                return {
                    onFirstInit: function () {
                        d()
                    }, onInit: function () {
                        d()
                    }, onTouchMoveEnd: function () {
                        b.hide && (clearTimeout(C), t.style.opacity = 1, a.setTransition(t, 200))
                    }, onTouchEnd: function () {
                        b.hide && (clearTimeout(C), C = setTimeout(function () {
                            t.style.opacity = 0, a.setTransition(t, 400)
                        }, 1e3))
                    }, onSetWrapperTransform: function (c) {
                        var d;
                        if (s) {
                            var e = c.x * k, f = l;
                            e > 0 ? (d = e, e = 0, f = l - d) : -e + l > h && (f = h + e), a.setTranslate(u, {x: -e}), u.style.width = f + "px"
                        } else {
                            var g = c.y * k, j = m;
                            g > 0 ? (d = g, g = 0, j = m - d) : -g + m > i && (j = i + g), a.setTranslate(u, {y: -g}), u.style.height = j + "px"
                        }
                        a.params.freeMode && b.hide && (clearTimeout(C), t.style.opacity = 1, C = setTimeout(function () {
                            t.style.opacity = 0, a.setTransition(t, 400)
                        }, 1e3))
                    }, onSetWrapperTransition: function (b) {
                        a.setTransition(u, b.duration)
                    }, onDestroy: function () {
                        var b = a.support.touch ? t : document;
                        a.h.removeEventListener(t, z.touchStart, v, !1), a.h.removeEventListener(b, z.touchMove, w, !1), a.h.removeEventListener(b, z.touchEnd, x, !1)
                    }
                }
            }
        }
    };
});