/**
 * Created by Administrator on 2016/12/7 0007.
 */

var basicUrl = "http://qianduan.wehuge.com/hs_puzzle/";
var href = window.location.href;
//获取到的数组去重并保存数量
function simArr(arr) {
    var result = [];
    arr.sort(); //排序
    for (var i = 0; i < arr.length;) {
        var count = 0;
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        result.push([arr[i], count]);
        i += count;
    }
    return result;
}