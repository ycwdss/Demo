/**
 * Created by Administrator on 2016/1/19.
 */
define(['jquery', 'slick', 'magnifying', 'imglazy','totop','qrcode','module/qrcode'], function () {
    $(function () {
        //小图切换
        $("#proImgTab").slick(
            {
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 3,
                dots: false,
            });
        $('#proImgTab').find('.small_tab_list img').hover(function () {
            var imgSrc = $(this).attr('src');
            var imgBigImg = $(this).attr('big-img');
            $('.magnifier_wrapper img').attr({
                "src": imgSrc,
                "origin-src": imgSrc,
                "big-img": imgBigImg
            });
        });
        //图片放大
        $('.magnifier_wrapper').magnify({
            magnifierSize: [500, 500],  //定义放大的显示区域大小
            multiple: 3,                          //放大倍数
            cursorShadeClass: '',        //给过滤镜添加自定义类,有些属性需要加important覆盖
            magnifierClass: 'magnifier',            //给放大显示区域添加自定义类
            loazyloadImg: 'http://statics-res.fhzc.com/Images/pc/plugin/layer/loading-0.gif' //延迟加载图标url
        });

        //商品详情、评价、规格参数
        $('.pro_nav span').click(function(){
            var n = $.inArray(this,$('.pro_nav span'));
            if(!$(this).hasClass('main')){
                $(this).siblings().removeClass('main');
                $(this).siblings().removeClass('main_border');
                $('.pro_infor_container>div').addClass('hide');
                $(this).addClass('main');
                $(this).addClass('main_border');
                $('.pro_infor_container>div').eq(n).removeClass('hide');
            }
        });

        //加入购物车
        $('.join_cart').click(function(){
            $('.success').show();
        });
        $('.continue_buy,.success_close').click(function(){
            $('.success').hide();
        });
        //成功加入收藏
        $('.store_btn').click(function(){
            $('.collect').show();
        });
        $('.collect_close').click(function(){
            $('.collect').hide();
        });
        //商品数量加减
        $('.add_btn').click(function(){
            var count = $(this).siblings('.count_num').val();
            $(this).siblings('.count_num').val(parseInt(count)+1);
        });
        $('.minus_btn').click(function(){
            var count = $(this).siblings('.count_num').val();
            $(this).siblings('.count_num').val(Math.max(parseInt(count)-1,1));
        })
    })
});