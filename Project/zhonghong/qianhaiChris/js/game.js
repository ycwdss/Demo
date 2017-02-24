/**
 * Created by Administrator on 2016/12/16 0016.
 */

setWH('.game-state');
//提示消失
var imgSrc = ["images/time3.png", "images/time2.png", "images/time1.png", "images/go.png"];
$('.state-btn').click(function () {
    $('.game-state').hide();
    $('.game-123').show();
   go();
});
function go() {
    var i = 0;
    var timer = setInterval(function () {
        i++;
        $('.game-123 img').attr('src', imgSrc[i]);
        if (i == 4) {
            clearInterval(timer);
            $('.game-123').remove();
            deerTime();
            roadTime();
            impactTime();
            totalTime();
        }
    }, 1000);
}

//小鹿在动
var deerTimer;
function deerTime() {
    var deerArr = ["images/game-chs1.png", "images/game-chs2.png", "images/game-chs3.png"]
    var i = 0;
    deerTimer = setInterval(function () {
        i++;
        i %= deerArr.length;
        $('#target').attr('src', deerArr[i]);
    }, 300);
}
//倒计时
var total =30;
var totalTimer;
function totalTime(){
    totalTimer = setInterval(function () {
        total--
        if (total >= 0) {
            $('.tool1 em').html(total);
        } else {
            window.location.href = webUrl + "fail.html?ut=" + utStr + "";
        }
    }, 1000);
}
//背景滚动
var sTime =20000;
var roadH = 12006;
var dixR =roadH - view().h; //背景要滚动的距离
var dixSpeed =dixR/sTime*10; //每一毫秒要走的距离


var targetH = $('#target').height();
var dixT = view().h - targetH - 320;
var tTime = (sTime / roadH) * dixT;


var dixSpeed2=0;
var roadTimer;
function roadTime() {
    roadTimer=setInterval(function () {
        dixSpeed2+=dixSpeed;

        if(dixSpeed2>=dixR){
            clearInterval(roadTimer);
            $('#target').animate({
                'top': dixT + 'px'
            }, tTime, 'linear', function () {//小鹿到达终点
                clearInterval(totalTimer);
                clearInterval(deerTimer);
                window.location.href =webUrl + "finish.html?ut=" + utStr + "";
                // 修改游戏记录
                $.ajax({
                    url: "http://" + bgUrl + "/qhchristmasflow/updatePlayRecord.html",
                    type: 'post',
                    data: "ut=" + utStr+"&pid="+pid,
                    success:function (data) {

                    },
                    error:function () {

                    }
                });
            })
        }else {
            $('.game-road').css({
                'top': -dixSpeed2 + 'px'
            })
        }

    },10);
}


//拖拽圣诞老人
$('.game-road').on('touchstart',".target", function (event) {
    var cX = event.originalEvent.targetTouches[0].clientX;
    var disX = cX - $(this).offset().left;
    $(".game-road").on('touchmove',".target", function (event) {
        var cX = event.originalEvent.targetTouches[0].clientX;
        $(this).css({
            left: cX - disX + 'px',
        });
        var thisLeft = parseInt($(this).css('left'));
        if (thisLeft <= 100) {
            $(this).css({
                left: 100 + 'px',
            });
        }
        if (thisLeft >= 395) {
            $(this).css({
                left: 395 + 'px',
            });
        }

    });
    return false;
});


var impactTimer;
function impactTime(){
    impactTimer=setInterval(function () {
        //检测碰撞
    $('.game-wrap img').each(function (i, t) {
        accident(i);
    })
},10);
} 

//碰撞
function accident(num) {
    var snow = $('.game-snow').eq(num);
    if (impact($('#target'), snow)) {
        snow.addClass('flag');
        clearInterval(roadTimer);
        clearInterval(deerTimer);
        clearInterval(impactTimer);
        $('#target').attr('src', "images/game-chs4.png").removeClass("target");
        //撞到大雪堆
        if (snow.hasClass('b-snow')) {
            snow.attr('src', 'images/b-snow-bad.png');
            setTimeout(function () {
                $('#target').attr('src', "images/game-chs1.png").addClass("target");
                $('.flag').remove();
                deerTime();
                roadTime();
                impactTime();
            }, 3000)
        } else {
            //撞到小雪堆 
            snow.attr('src', 'images/s-snow-bad.png');
            setTimeout(function () {
                $('#target').attr('src', "images/game-chs1.png").addClass("target");
                console.log('.snow' + num);
                $('.flag').remove();
                deerTime();
                roadTime();
                impactTime();
            }, 1000)
        }
    }
}




