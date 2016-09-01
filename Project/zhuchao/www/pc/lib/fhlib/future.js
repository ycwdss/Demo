/**
 * Created by liu on 15-9-30.
 */
/**
 * Created by shuai on 15-9-10.
 */
define(['require', 'exports', 'zepto'], function (require, exports) {
    var FH = {
        FRONT_API_GATEWAY: "/front-api-entry",
        REQUEST_META_KEY: "REQUEST_META",
        REQUEST_DATA_KEY: "REQUEST_DATA"
    }
    exports.ajax = ajax;
    exports.toQueryString = toQueryString;
    exports.fromQueryString = fromQueryString;
    function toQueryString(object, recursive)
    {
        var paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;
        for (i in object) {
            if (object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(toQueryObjects(i, object[i], recursive));
            }
        }

        for (j = 0, ln = paramObjects.length; j < ln; j++) {
            paramObject = paramObjects[j];
            value = paramObject.value;
            if (isEmpty(value)) {
                value = '';
            } else if (isDate(value)) {
                value = $.Json.encodeDate(value);
            }

            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }

        return params.join('&');
    }
    function fromQueryString(queryString, recursive) {
        var parts = queryString.replace(/^\?/, '').split('&'),
            object = {},
            temp, components, name, value, i, ln,
            part, j, subLn, matchedKeys, matchedName,
            keys, key, nextKey;
        for (i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];
            if (part.length > 0) {
                components = part.split('=');
                name = decodeURIComponent(components[0]);
                value = (components[1] !== undefined) ? decodeURIComponent(components[1]) : '';
                if (!recursive) {
                    if (object.hasOwnProperty(name)) {
                        if (!$.isArray(object[name])) {
                            object[name] = [object[name]];
                        }

                        object[name].push(value);
                    }
                    else {
                        object[name] = value;
                    }
                }
                else {
                    matchedKeys = name.match(/(\[):?([^\]]*)\]/g);
                    matchedName = name.match(/^([^\[]+)/);
                    //<debug error>
                    if (!matchedName) {
                        throw new Error('[Ext.Object.fromQueryString] Malformed query string given, failed parsing name from "' + part + '"');
                    }
                    //</debug>

                    name = matchedName[0];
                    keys = [];
                    if (matchedKeys === null) {
                        object[name] = value;
                        continue;
                    }

                    for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
                        key = matchedKeys[j];
                        key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                        keys.push(key);
                    }

                    keys.unshift(name);
                    temp = object;
                    for (j = 0, subLn = keys.length; j < subLn; j++) {
                        key = keys[j];
                        if (j === subLn - 1) {
                            if ($.isArray(temp) && key === '') {
                                temp.push(value);
                            }
                            else {
                                temp[key] = value;
                            }
                        }
                        else {
                            if (temp[key] === undefined || typeof temp[key] === 'string') {
                                nextKey = keys[j + 1];
                                temp[key] = (isNumeric(nextKey) || nextKey === '') ? [] : {};
                            }

                            temp = temp[key];
                        }
                    }
                }
            }
        }

        return object;
    }

    function toQueryObjects(name, value, recursive) {
        var self = toQueryObjects,
            objects = [],
            i, ln;

        if ($.isArray(value)) {
            for (i = 0, ln = value.length; i < ln; i++) {
                if (recursive) {
                    objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: value[i]
                    });
                }
            }
        }
        else if ($.isObject(value)) {
            for (i in value) {
                if (value.hasOwnProperty(i)) {
                    if (recursive) {
                        objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                    }
                    else {
                        objects.push({
                            name: name,
                            value: value[i]
                        });
                    }
                }
            }
        }
        else {
            objects.push({
                name: name,
                value: value
            });
        }

        return objects;
    }
    //是否为数字类型
    exports.isNumeric = isNumeric;
    function isNumeric(value)
    {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    //值是否为空
    exports.isEmpty = isEmpty;
    function isEmpty(value, allowEmptyString)
    {
        return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || ($.isArray(value) && value.length === 0);
    }
    //判断是否为日期对象
    exports.isDate = isDate;
    function isDate(value)
    {
        return toString.call(value) === '[object Date]';
    }
    //发送ajax请求
    function ajax(name, method, params, callback, scope)
    {
        callback = callback || $.emptyFn;
        var requestObject = {};
        var errorCallback = function (jqXHR, textStatus, errorThrown)
        {
            //@TODO 是否要加入code参数
            callback.call(scope, {
                status: false,
                msg: textStatus
            });
        };
        var successCallback = function (data, textStatus, jqXHR)
        {
            //@TODO 是否要加入code参数
            callback.call(scope, data);
        };
        requestObject[this.REQUEST_META_KEY] = $.Json.encode({
            cls: name,
            method: method
        });
        requestObject[this.REQUEST_DATA_KEY] = $.Json.encode(params);
        var ajaxOpt = {
            dataType: 'json',
            type: 'POST',
            data: requestObject,
            async: true,
            error: errorCallback,
            success: successCallback,
            url:Fh.FRONT_API_GATEWAY
        };
        $.ajax(ajaxOpt);
    }
})