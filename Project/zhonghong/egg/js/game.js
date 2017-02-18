/**
 * Created by Administrator on 2017/1/17 0017.
 */

$(function () {
    var randomNum;
    var ut = GetUT('ut'); //获取ut
    var wordArr; //前海征信 字数
    var speed = (684 - 178) / 300;//速度
    var moveTimer;
    var leftBtn = $('.game-left');
    var rightBtn = $('.game-right');
    var mark = false;//是不是集齐4个字符

    $('.state-begin').on('click', function () {
        $('.state').hide();
    });

    //移动猫头鹰
    function targetMove(operation) {
        var targetLeft = parseInt($('.game-target').css('left'));//初始left值
        moveTimer = setInterval(function () {
            targetLeft += operation;
            if (targetLeft >= 506) {
                targetLeft = 506;
                clearInterval(moveTimer);
            }
            if (targetLeft <= 0) {
                targetLeft = 0;
                clearInterval(moveTimer);
            }
            $('.game-target').css('left', targetLeft + 'px');
        }, 10)
    }

    //往右移动
    rightBtn.on('touchstart', function (ev) {
        targetMove(+speed);
        getPlayNum(); //机会用完了
        ev.preventDefault();
    });
    rightBtn.on('touchend', function () {
        clearInterval(moveTimer);
    });
    //往左移动
    leftBtn.on('touchstart', function (ev) {
        targetMove(-speed);
        getPlayNum(); //机会用完了
        ev.preventDefault();
    });
    leftBtn.on('touchend', function () {
        clearInterval(moveTimer);
    });
    //点击go


    $('.game-timer').on('click', function () {

        if (playNum > 0) {          //6次游戏机会用完了
            randomNum = parseInt(Math.random() * 4 + 1);//产生随机数
            $('.target-bd').animate({  //猫头鹰中间杆子变长
                height: 280 + 'px'
            }, 1000, function () {
                $('.target-ft').css({  //抽蛋
                    left: 8 + 'px',
                    width: 166 + 'px',
                    height: 280 + 'px'
                }).addClass('target-ft' + randomNum);
            });
            setTimeout(function () {
                $('.zi').show();
                $('.zi-content').addClass('zi' + randomNum);
                addWord();//传后台数字
                updatePlayCount();  //减少游戏次数
                GetUserInfo2();//再玩一次更新数据
            }, 2000);
        } else {
            clearInterval(moveTimer);
            if (helpCount < 3) {    //还有助力次数
                $('.share').show();
            } else {             //没有助力次数了，明天再来吧
                $('.over').show();
            }
            //分享 用完机会弹窗
            SetPopup();
        }
    });

    //再玩一次 没集齐
    $('.zi-again,.notip-btn').on('click', function () {
        $('.notip').hide();//隐藏没集齐弹框
        $('.zi').hide();           //弹框隐藏
        $('.target-bd').css('height', 30 + 'px');  //下拉杆
        $('.target-ft').removeClass().addClass('target-ft').css({  //变换的猫头鹰
            left: 4 + 'px',
            width: 178 + 'px',
            height: 251 + 'px'
        });
        $('.zi-content').removeClass('zi' + randomNum);  //移除已存在弹框类名
        getPlayNum(); //机会用完了
    })

    //减少游戏次数
    function updatePlayCount() {
        $.ajax({
            url: _data.updateUserPlayCount,
            data: {
                ut: ut
            },
            dataType: 'json',
            type: 'POST',
            async: false,
            success: function () {

            },
            error: function () {

            }

        })
    }

    //添加抽到的字符
    function addWord() {
        $.ajax({
            url: _data.addLight,
            data: {
                ut: ut,
                id: randomNum
            },
            dataType: 'json',
            type: 'POST',
            async: false,
            success: function () {

            },
            error: function () {

            }

        })
    }

    //页面第一次加载后初始化获取用户信息
    GetUserInfo2();
    function GetUserInfo2() {
        GetUserInfo(ut); //获取用户信息
        console.log('playNum:' + playNum, "helpCount:" + helpCount, "openId:" + openId, "isTel:" + isTel, "qword:" + qword, "hword:" + hword, "zword:" + zword, "xword:" + xword);
        //前海征信收集的数量
        wordArr = [qword, hword, zword, xword];
        for (var i = 0; i <= wordArr.length; i++) {
            $('.game-collect li').eq(i).find('span').html('X' + wordArr[i]);
        }
        //游戏次数
        $('.game-count').html('剩余次数 ' + playNum);
        console.log('测试数组：' + wordArr);
        mark = wordArr.every(function (item) {
            return item >= 1;
        });
        console.log('测试：' + mark);
        //去抽奖
        $('.zi-reward').on('click', function () {
            if (mark) {
                window.location.href = "tel.html?ut=" + ut;
            } else {
                $('.zi').hide();
                $('.notip').show();
            }
        });
    }

    //机会用完了
    function getPlayNum() {
        if (playNum <= 0) {          //6次游戏机会用完了
            clearInterval(moveTimer);
            if (helpCount < 3) {    //还有助力次数
                $('.share').show();
            } else {             //没有助力次数了，明天再来吧
                $('.over').show();
            }
            //分享 用完机会弹窗
            SetPopup();
        }
    }

})