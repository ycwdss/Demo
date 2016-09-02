/*
 * Cntysoft Cloud Software Team
 *
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */

//proContent
//商品预览

define(function(require){
    var $=require('jquery');
    require('fhlib/fangda');
    require('slick');
    require('qrcode');
    require('fhlib/totop');
    require('lazyload');
    require('Core');
    require('Front');
    require('fhlib/imglazy');
    //商品分类下拉菜单
    //var classlist = $('#classlist');
    //$(classlist).find('.classlist_items').removeClass('current');
    //$(classlist).find('.classlist_items').mouseenter(function (){
    //    var indexA = $(this).index();
    //    $(this).addClass('current');
    //    $(this).siblings().removeClass('current');
    //    $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').hide();
    //    $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').eq(indexA).show();
    //    return false;
    //});
    //$('.classlist_right').mouseleave(function (){
    //    $(this).prev('#classlist').children('.classlist_items').removeClass('current');
    //    $(this).children('.classlist_right_list').hide();
    //});
    //$('.classlist_box').mouseleave(function (){
    //    $(this).find('.classlist_items').removeClass('current');
    //    $(this).find('.classlist_right_list').hide();
    //});
    //var init=function(){

        //$('#multizoom2').addimagezoom({
        //    descArea: '#description2',
        //    disablewheel: false,
        //    speed: 1500,
        //    descpos: true,
        //    imagevertcenter: true,
        //    magvertcenter: true,
        //    zoomrange: [3, 3],
        //    magnifiersize: [400, 400],
        //    magnifierpos: 'right',
        //    cursorshadecolor: '#fdffd5',
        //    cursorshade: true,
        //    curshade: true
        //});
    $('.c_pro_img').click(function(){
        $('.targetarea img').attr('src',$(this).find('a').attr('data-large'));
        $('#big_img').find('img').attr('src',$(this).find('a').attr('data-big'));
    });
        $('#pro_slick').slick({
            speed: 500,
            slidesToShow:5,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            draggable: true,
            prevArrow:'.left_btn',
            nextArrow:'.right_btn',
            centerMode:'true'

        });

    $(".c_tabBtn span").click(
        function(){
            $(".c_tabcontent").hide();
            $(".c_tabBtn span").attr('class','');
            $(this).attr('class','current_bg');
            $(".c_tabcontent").eq($(".c_tabBtn span").index($(this))).show();
        }
    );
    var gid = parseInt(location.pathname.substr(location.pathname.lastIndexOf('/') + 1));
    $('.porIofo span.normal').click(function(){
        var me = $(this);
        var num = $('.porIofo').length;
        if(me.hasClass('not_allowed')){
            return;
        }else{
            if(me.hasClass('selected')){
                me.removeClass('selected');
                if($('.porIofo span.selected').length){
                    $('.porIofo span.selected').each(function(index, val){
                        var row = $('.porIofo').index($(val).parents('.porIofo')) + 1;
                        var col = $(val).parent().children('span').index($(val)) + 1;
                        stdChoose(row, col, num, me);
                    });
                }else{
                    $('.porIofo span').removeClass('not_allowed');
                    return;
                }
            }else{
                var row = $('.porIofo').index($(this).parents('.porIofo')) + 1;
                var col = me.parent().children('span').index($(this)) + 1;
                me.addClass('selected');
            }
            me.siblings('span').removeClass('selected');
        }
        stdChoose(row, col, num, me);
    });

    function stdChoose(row, col, num, me){
        Cntysoft.Front.callApi('Good', 'stdChoose', {
            gid : gid,
            row : row,
            col : col
        }, function(response){
            if(response.status){
                doStdShow(response.data[0], me.parents('.porIofo'), 1);
                doStdShow(response.data[1], me.parents('.porIofo'), 2);
                if($('.porIofo span').hasClass('selected not_allowed')){
                    $('.porIofo span.selected.not_allowed').removeClass('selected');
                }
                var selector = [], meta = [];
                if($('.porIofo span.selected').length == num){
                    $('.porIofo .pro_attr_wrap').each(function(index, value){
                        selector[index] = $(value).children('span').index($(value).children('span.selected')) + 1;
                        meta[index] = $(value).children('span').length;
                    });
                    Cntysoft.Front.callApi('Good', 'getGoodImages', {
                        selector : selector,
                        meta : meta,
                        gid : gid
                    }, function(response){
                        var out = '';
                        if(response.status && response.data.images){
                            $('#proShow').empty();
                            out += '<div class="multizoom2 thumbs por_box" id="pro_slick">';
                            $.each(response.data.images,function(index,value){
                                    out += '<div class="c_pro_img"><a href="'+value[1]+'" data-large="'+value[2]+'" data-title="Angelina Jolie"><img src="'+ value[0] +'" alt="Angelina" title=""/></a></div>';
                                }
                            );
                            out += '</div>';
                            $('.c_price span').html('￥'+response.data.price);
                            $('#proShow').append(out);
                            init();
                            $('.c_pro_img').click(
                                function(){
                                    $('.c_pro_img').removeClass('pro_border');
                                    $(this).addClass('pro_border');
                                }
                            );
                        }
                    },this);
                }
            }
        }, this);
    }
    function doStdShow(stds, poriofo, direction)
    {
        if(stds.children.length){
            if(1 == direction){
                var prev = poriofo.prev();
                var selector = prev.find('span');
                selector.addClass('not_allowed').removeClass('normal');
                $.each(stds.children, function(key, val){
                    selector.eq(parseInt(val.id) - 1).removeClass('not_allowed').addClass('normal');
                    if(val.children){
                        doStdShow(val, prev, direction);
                    }
                });
            }else{
                var next = poriofo.next();
                var selector = next.find('span');
                selector.addClass('not_allowed').removeClass('normal');
                $.each(stds.children, function(key, val){
                    selector.eq(parseInt(val.id) - 1).removeClass('not_allowed').addClass('normal');
                    if(val.children.length){
                        doStdShow(val, next, direction);
                    }
                });
            }
        }
    }
    /*
    * 商品小图轮播，添加 click事件
     */
    $('.c_pro_img').click(
        function(){
            $('.c_pro_img').removeClass('pro_border');
            $(this).addClass('pro_border');
        }
    );
    /*
    *商品数量加减
     */
    $('.btn_minus').click(function(){
       $('#buy_num').val(Math.max(parseInt($('#buy_num').val())-1,1));
    });
    $('.btn_add').click(function(){
        $('#buy_num').val(parseInt($('#buy_num').val())+1);
    });
});