/**
 * Created by Administrator on 2016/11/30 0030.
 */

var utStr = href.substring(href.indexOf("ut=") + 3);
$('.index-takein').on('touchstart',function () {
    var newUrl = basicUrl + "game.html?ut=" + utStr + "";
    $(".index-takein").attr('href', newUrl);
});
$('.index-music').on('touchstart',function () {
    var a = document.getElementById('music-sing');
    if (a.paused) {
        a.play();
        $(this).addClass('index-music').removeClass('index-music-pause');
    } else {
        a.pause();
        $(this).addClass('index-music-pause').removeClass('index-music');
    }
});
//loading
document.onreadystatechange = loading;
function loading() {
    if (document.readyState == "complete") {
        $("#loading-wrap").hide();
    }
}
$.ajax({
    url: "http://hersheys.wehuge.com/diy/platform/pvCounter.wx",
    type: "post",
    data: "url=index&type=1&source=0&mem=",
})
window.sessionStorage.clear();



