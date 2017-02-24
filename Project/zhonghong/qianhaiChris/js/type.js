// 雪花漂浮
/*function snowFuc(speed, src, width) {
 var i = 0;
 $("body").append("<img class='snow0' src='" + src + "'  style='z-index:777;-webkit-backface-visibility: hidden;width:140px;position:absolute;top:-135px;left:50px;' />");
 $(".snow0").animate({"top": "1200px"}, 20000, function () {
 $(this).remove()
 });
 setInterval(function () {
 i++;
 var snowSize = parseInt(Math.random() * width) + 1;//随机尺寸
 var snowLeft = parseInt(Math.random() * 550) + 50;
 $("body").append("<img class='snow" + i + "' src='" + src + "'  style='z-index:777;-webkit-backface-visibility: hidden;width:" + snowSize + "px;position:absolute;top:-135px;left:" + snowLeft + "px;' />");
 $(".snow" + i).animate({"top": "1200px"}, 20000, function () {
 $(this).remove()
 });
 }, speed);
 }*/

function flowSnow() {
    var snowArr=["images/snow.png","images/snow1.png","images/snow2.png"];
    var snowSpeed = 600;//设置下雪的速度，越大雪花越多，下的越快
    setInterval(function(){
        var randSnow=parseInt( Math.random()*3,10);//0 到3的随机整数
        var d="<div class='snow'><img src='"+snowArr[randSnow]+"'><div>";

        var f=$(document).width();
        var e=Math.random()*f-100; //开始的时候left值

        var nowWid=parseInt(Math.random()*90)+1; //图片宽度

        var l = e - 100 + 200 * Math.random();
        var k=2000 + 5000 * Math.random();
        $(d).clone().appendTo(".snow-wrap").css({
            left:e+"px",
            opacity:1,
            width:nowWid+'px',
        }).animate({
            top:"1200px",
            left:l+"px",
            opacity:0.1,
        },k,"linear",function(){$(this).remove()})
    },snowSpeed)
}






























