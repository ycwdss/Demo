/**
 * Created by Administrator on 2016/4/8.
 */
define(['zepto','hammer'],function () {
    ;(function ($) {
        $('body').append("<div class='hammer ' id='hammer'>" +
            " <i class='icon-fanhuijian'></i>"+
            "<div><img  id='hammer_img' src=' ' >"+
            "</div>"+
            "</div>");
        $('body,html').css('position','relative');
        $('.hammer').css({'position':'absolute','display':'none','top':'0','left':'0',
                            'width':'100%','height':'100%','background':'#fff','text-align':'center',
                            'z-index':'999'});
        $('.hammer >i').css({'position':'absolute','top':'0','left':'0','width':'40px','font-size':'24px',
                            'line-height':'40px','text-align':'center','color':'#666'});
        $('.hammer >div').css({'display':'table-cell','vertical-align':'middle','text-align':'center','width':'100%'});
        $('.hammer img').css({'position':'relative','max-width':'100%','max-height':'80%'});

        /*
         放大 事件
         */
        $.fangda  = function (options) {
            var setting= {  
                'src': " "
            }

            $.extend(setting,options);
            
            $('body,html').css({'height':'100%','overflow':'hidden'})
            $('#hammer_img').attr('src',setting.src);
            $('.hammer').css('display','table');

            
            var origin_size =  1; //上一次放大比例
            var size = 0;       //记录动态放大比例
            // $('#hammer_img').css('transform','scale(0.1,0.1)');
            // $('#hammer_img').css('-webkit-transform','scale(0.5,0.5)');
            var hammer = new Hammer(document.getElementById('hammer_img'));
            hammer.add(new Hammer.Pinch());
            hammer.add(new Hammer.Pan());

            /*
             缩小图片
             */

            hammer.on('pinchin',function (e) {
                size = origin_size-Math.floor(Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY))/70;
                if(size >= 1){
                    $('#hammer_img').css('transform','scale('+size+','+size+')');
                    $('#hammer_img').css('-webkit-transform','scale('+size+','+size+')');
                }else{
                    size = 1;
                }
                // $('.hammer p').html(e.deltaX+" "+e.deltaY+" "+size);
                e.preventDefault();
            });

            /*
             放大图片
             */

            hammer.on('pinchout',function (e) {
                size = origin_size+Math.floor(Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY))/70;
                if(size <= 2){
                    $('#hammer_img').css('transform','scale('+size+','+size+')');
                    $('#hammer_img').css('-webkit-transform','scale('+size+','+size+')');
                }else{
                    size = 2;
                }
                $('.hammer p').html(e.deltaX+" "+e.deltaY+" "+size);
                e.preventDefault();
            });

            /*
             两点触摸事件停止
             */

            hammer.on('pinchend',function () {
                origin_size = size;
            });
            /*
             拖动事件
             */
            var moveX=0;
            var moveY=0;
            var origin_x,origin_y;  //上一次位移
            hammer.on('panmove',function (e) {


                if(origin_size >= 1){
                    origin_x = e.deltaX;
                    origin_y = e.deltaY;

                    $('.hammer p').html(e.deltaX+" "+e.deltaY+" ");

                    $('#hammer_img').css('margin-left',(moveX+origin_x)+'px');
                    $('#hammer_img').css('margin-top',(moveY+origin_y)+'px');
                    // $('#hammer_img').css('-webkit-transform','translate('+(moveX+origin_x)+'px,'+(moveY+origin_y)+'px');

                    e.preventDefault();
                }
            });
            hammer.on('panend',function (e) {
                if(origin_size>=1){
                    moveX += origin_x;
                    moveY += origin_y
                    e.preventDefault();
                }
            });
            /*
             双击还原
             */
            hammer.on('doubletap',function (e) {
                origin_size=1;
                moveX=0;
                moveY=0;
                $('#hammer_img').css('transform','scale(1,1)');
                $('#hammer_img').css('-webkit-transform','scale(1,1)');


                $('#hammer_img').css('display','inline');
                $('#hammer_img').css('margin-left','auto');
                $('#hammer_img').css('margin-top','auto');

            });
        };

        //隐藏放大
        $('.hammer >i').click(function () {
            $('.hammer').css('display','none');
        });

    })(Zepto);
})