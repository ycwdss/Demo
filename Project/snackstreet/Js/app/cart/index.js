/**
 * Created by Administrator on 2015/12/12.
 */
define(['jquery', 'lazyload', 'imglazy', 'totop','qrcode','module/qrcode'], function () {
    $(function () {
        /*商品选择按钮点击事件
         * 全选choose_all
         * 商品模块 cart_pro_infor
         *商品单价 pro_price
         * 商品数量模块 pro_quantity  数量 pro_num
         * 单个商品总价 pro_sum
         * 最终 数量 total_num
         * 最终总价  total_price
         * 单个商品删除 pro_del
         * 多个 删除 del_choose
         **/
        eachPro();
        $('.choose_all').click(function () {

            if ($(this).find(' input').prop('checked')) {
                $('.choose_all').find('input').prop('checked', true); //因为有两个全选按钮
                $('.cart_pro_infor').find('.pro_checkbox input').prop('checked', true);
            }
            else {
                $('.choose_all').find('input').prop('checked', false); //因为有两个全选按钮
                $('.cart_pro_infor').find('.pro_checkbox input').prop('checked', false);
            }
            eachPro();
        });
        $('.cart_pro_infor').find('.pro_checkbox input').click(function () {

            if (!$(this).prop('checked')) {
                $('.choose_all').find('input').prop('checked', false); //因为有两个全选按钮
            }
            else {
                confirmChoose();
            }
            eachPro();
        });
        /*
         判断是否已全选
         */
        function confirmChoose(){
            var state = true;
            $('.cart_pro_infor').find('.pro_checkbox input').each(function () {
                if (!$(this).prop('checked')) {
                    state = false;
                }
            });
            if (state == true) {
                $('.choose_all').find('input').prop('checked', true); //因为有两个全选按钮
            }
        }
        function eachPro() {
            // 清空总价，总数量
            $('.total_num').html("0");
            $('.total_price').html("0");

            $('.cart_pro_infor').each(function () {
                /*
                 *每个商品 单价*数量=总价
                 */
                if ($(this).find('.pro_checkbox input').prop('checked')) {

                    var price_ele = parseFloat($(this).find('.pro_price span').html());
                    var count = parseInt($(this).find('.pro_quantity .pro_num').val());
                    $(this).find('.pro_sum span').html(price_ele * count);

                    // 总的变化
                    $('.total_num').html(parseInt($('.total_num').html()) + count);
                    $('.total_price').html(parseFloat($('.total_price ').html()) + price_ele * count);
                }
            });
        };
        /*
         *商品数量增减
         */
        $('.pro_minus').click(function () {
            $(this).siblings('.pro_num').val(Math.max(1, parseInt($(this).siblings('.pro_num').val()) - 1));
            $(this).parents('.cart_pro_infor').find('.pro_checkbox input').prop('checked', true);
            confirmChoose();
            eachPro();
        });
        $('.pro_add').click(function () {
            $(this).siblings('.pro_num').val(parseInt($(this).siblings('.pro_num').val()) + 1);
            $(this).parents('.cart_pro_infor').find('.pro_checkbox input').prop('checked', true);
            confirmChoose();
            eachPro();
        });
        /*
         手动增减商品数量
         */
        function getElementsByClassName(node,classname){
            if(node.getElementsByClassName){
                //使用现有方法
                return node.getElementsByClassName(classname);
            }
            else{
                var results = new Array();
                var elems = node.getElementsByClassName('input');
                for(var i=0;i<elem.length;i++){
                    if(elems[i].className.indexOf(classname) != -1){
                        results[results.length] = elems[i];
                    }
                }
                return results;
            }
        }
        function countChange(that){
            that.parents('.cart_pro_infor').find('.pro_checkbox input').prop('checked', true);
            confirmChoose();
            eachPro();
        };
        var pro_num = getElementsByClassName(document,'pro_num');
        var testinput = document.createElement('input');
        if('oninput' in testinput){
            for(var i = 0; i<pro_num.length;i++){
                pro_num[i].oninput = function(){
                    countChange($(this));
                }
            }


        }else{
            pro_num.onpropertychange = function(){
                for(var i = 0; i<pro_num.length;i++){
                    pro_num[i].oninput = function(){
                        countChange($(this));
                    }
                }
            };
        }
        /*
         商品删除
         */
        $('.pro_del').click(function(){
            $(this).parents('.cart_pro_infor').remove();
            eachPro();
        });
        $('.del_choose').click(function(){
            $('.cart_pro_infor').each(function(){
                if($(this).find('.pro_checkbox input').prop('checked')){
                    $(this).remove();
                }
            }) ;
            eachPro();
        });
    })
});