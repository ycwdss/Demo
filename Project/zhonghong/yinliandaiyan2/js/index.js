/**
 * Created by Administrator on 2016/10/24 0024.
 */





document.onreadystatechange = loading;
function loading() {
    if (document.readyState == "complete") {
        $("#loading").hide();
        $(".content").show();
    }
};

//第一页
$('.spoke-btn').click(function () {
    $(this).css('background', 'url("images/page1-spoke-btn2.png") no-repeat');
    $('.neon').css('background', 'url("images/page1-neon1.png") no-repeat');
    $('.page1-bg').hide();
    $('.page2-bg').show();
});
$('.rule-btn').click(function () {
    $(this).css('background', 'url("images/page1-rule-btn2.png") no-repeat');
    $('.neon').css('background', 'url("images/page1-neon1.png") no-repeat');
    $('.popup').show();
    $('.popup-wrap').addClass('popup-scale');

});

$('.ikonw').click(function () {
    $('.popup').hide();
    $('.rule-btn').css('background', 'url("images/page1-rule-btn1.png") no-repeat');
});

//第二页
$('.page2-man .btn-blue').on('touchstart', function () {
    $(this).addClass('btn-blue-tap');
});
$('.page2-woman .btn-red').on('touchstart', function () {
    $(this).addClass('btn-red-tap');
});

$('.page4-bg .btn-red').click(function () {
    $('.page3-bg').show();
    $('.page4-bg').hide();
});
//第四页

$('.page4-tags li').each(function (index, ele) {
    var Src = '';
    var $ele = $(ele);

    $ele.on('click', function () {
        var ThisIndex = $(this).index();

        Src = $(this).find('img').attr('src')

        if (!$(this).hasClass('active')) {
            if ((index + 1) % 2) {

                $(this).addClass('active odd').siblings('.odd').removeClass('active');

                $('.decoratepic2').remove();
                $('.page4-uppic').append('<img class="open decoratepic2" src="">')
                $('.decoratepic2').attr({
                    'src': Src,
                    'data-tag': ThisIndex
                });
                drag('.decoratepic2');

            } else {
                $(this).addClass('active even').siblings('.even').removeClass('active');

                $('.decoratepic1').remove();
                $('.page4-uppic').append('<img class="open decoratepic1" src="">')
                $('.decoratepic1').attr({
                    'src': Src,
                    'data-tag': ThisIndex
                });
                drag('.decoratepic1');

            }
        } else {
            if ($(this).children().attr('src') == $('.decoratepic1').attr('src')) {
                $('.decoratepic1').remove();
            } else if ($(this).children().attr('src') == $('.decoratepic2').attr('src')) {
                $('.decoratepic2').remove();
            }
            $(this).removeClass('active');
        }

    });


});



//拖拽
function drag(obj) {
    $(obj).on('touchstart', function (event) {
        var cX = event.originalEvent.targetTouches[0].clientX;
        var cY = event.originalEvent.targetTouches[0].clientY;

        var disX = cX - $(this).offset().left;
        var disY = cY - $(this).offset().top;
        var wrapX = $('.page4-uppic').offset().left;
        var wrapY = $('.page4-uppic').offset().top;
        $(this).on('touchmove', function (event) {
            var cX = event.originalEvent.targetTouches[0].clientX;
            var cY = event.originalEvent.targetTouches[0].clientY;
            $(this).css({
                left: cX - disX - wrapX + 'px',
                top: cY - disY - wrapY + 'px',
            });
            var $thisleft = parseInt($(this).css('left'));
            var $thistop = parseInt($(this).css('top'));
            var $thisY = $('.page4-uppic').height() - $thistop - $(this).height();
            var $thisX = $('.page4-uppic').width() - $thisleft - $(this).width();

            if ($thisleft < 0) {
                $(this).css({
                    left: 0 + 'px',
                });
            }
            if ($thistop < 0) {
                $(this).css({
                    top: 0 + 'px',
                });
            }
            if ($thisY < 0) {
                $(this).css({
                    top: $('.page4-uppic').height() - $(this).height() + 'px',
                });
            }
            if ($thisX < 0) {
                $(this).css({
                    left: $('.page4-uppic').width() - $(this).width() + 'px',
                });
            }
        });
        return false;
    });


};

//代言就这张了
$('.page4-btn-wrap .btn-blue').on('click',function () {

    $(this).addClass('btn-blue-tap');
 /*   var tags = 'tag1,tag2';
    var positionX = 'tag1X,tag2X';
    var positionY = 'tag1Y,tag2Y';*/



    if (!$('.page4-tags li').hasClass('active')) {
        $('.page4-forgettags').show();
    } else {
        $('.page4-tel,.popup-mask,.tel-error ').show();

        $('.error-box').find('input[type=tel]').focusin(function () {
            $('.error-title img').removeClass('shake');
        });

    }
});


$('.error-box').find('input[type=submit]').click(function () {
    var tag1 = $('.decoratepic1').attr('data-tag');
    var tag1X = parseFloat($('.decoratepic1').css('left'));
    var tag1Y = parseFloat($('.decoratepic1').css('top'));

    var tag2 = $('.decoratepic2').attr('data-tag');
    var tag2X = parseFloat($('.decoratepic2').css('left'));
    var tag2Y = parseFloat($('.decoratepic2').css('top'));


    var openLength=$('.open').length;

    if(openLength==1){
        alert(1);
        console.log($('.open').attr('data-tag'));
     }
     if(openLength==2){
         alert(2);
     }


    var phone = $(this).prev().val();
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(phone)) {
        $('.error-title img').addClass('shake');
        $('.error-title span').html('请输入有效的手机号码！')

    } else {
        /*验证手机号成功*/

    }

});

$('.popup-mask').click(function () {
    $('.tel-error').hide();
    $('.page4-btn-wrap .btn-blue').removeClass('btn-blue-tap');
    $(this).hide();
    return false;
});


$('.page4-forgettags').click(function () {
    $(this).hide();
});

$('.page4-bg .btn-red').on('touchstart', function () {
    $(this).addClass('btn-red-tap');
});

//第五页
$('.page6-bg .btn-blue').click(function () {
    $('.page6-bg').hide();
    $('.page7-bg ').show();
    $('body').css('background', '#74b0d8');
})
$('.page5-bg .btn-red').click(function () {
    $('.receive-popup').show();

});

//第六页
$('.page6-bg .btn-red').click(function () {
    $('.page6-share').show();

});

var flowersNum = 999;
$('.today-num .flower-num span').html(flowersNum);

var tags='1,2';
var positionX='200,50';
var positionY='100,30';

if(tags.indexOf(',')==-1){
    var tagNum='tag'+tags;
    var $Src='images'+'/'+tagNum+'.'+'png';
    $('.page6-bg .decoratepic1').css({
        top:parseFloat(positionX) + 'px',
        left: parseFloat(positionY) + 'px'
    })
    $('.page6-bg .decoratepic1').attr('src',$Src)
}else {


    var tag=tags.split(',');
    var x=positionX.split(',');
    var y=positionY.split(',');

    var tagNumOne='tag'+tag[0];
    var tagNumTwo='tag'+tag[1];

    $("#tag1").attr("class", "decoratepic"+tag[0]).css({
        top: x[0]+ 'px',
        left: y[0] + 'px'
    });
    $('#tag1').attr('src','images'+'/'+tagNumOne+'.'+'png')

    $("#tag2").attr("class", "decoratepic"+tag[1]).css({
        top: x[1]+ 'px',
        left: y[1] + 'px'
    });
    $('#tag2').attr('src','images'+'/'+tagNumTwo+'.'+'png')

}

//第七页
$('.page7-rank .rank-arrow').click(function () {
    if (!$(this).hasClass('rank-arrow-turn')) {
        $('.page7-rank ul').addClass('sildedown');
        $(this).addClass('rank-arrow-turn');
    } else {
        $('.page7-rank ul').removeClass('sildedown');
        $(this).removeClass('rank-arrow-turn');
    }
});
//第八页
$('.page8-rank .rank-arrow').click(function () {
    if (!$(this).hasClass('rank-arrow-turn')) {
        $('.page8-rank ul').addClass('sildedown');
        $(this).addClass('rank-arrow-turn');
    } else {
        $('.page8-rank ul').removeClass('sildedown');
        $(this).removeClass('rank-arrow-turn');
    }
});
