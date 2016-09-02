/**
 * Created by wangzan on 2015/12/3.
 */
$(function () {
    //购物车订单选择
    //添加数量
    //减
    // 更新总数和总价格，已选浮层
    function gettotal(){
        var seleted = 0;
        var price = 0;
        var len=$('.lists_wrap').length;
        for(var i=0;i<len;i++){
            if()
        }
    }
/*

    var _index=$('.lists_wrap').length;
    //商品加减--------------------
    for(var i=0;i<_index;i++){
        //加------
        $('.lists_wrap').eq(i).find('.add').click(function () {
            //加号改变数量
            var input_val=$(this).prev().val();
            var num=parseInt(input_val)+1;
            $(this).prev().val(num);
            var input_num=$(this).prev().val();
            //改变价格
            var em=$(this).parents('.items_amount').next().find('em');
            var money=$(this).parents('.items_amount').prev().find('em').text();
            em.text((parseInt(input_num)*money).toFixed(2));
        });
        //减---
        $('.lists_wrap').eq(i).find('.minus').click(function () {
            //加号改变数量
            var input_val=$(this).next().val();
            var num=parseInt(input_val)-1;
            $(this).next().val(num);
            var input_num=$(this).next().val();
            if(input_num<=1){
                $(this).next().val(1);
                input_num=$(this).next().val();
            }
            //改变价格
            var em=$(this).parents('.items_amount').next().find('em');
            var money=$(this).parents('.items_amount').prev().find('em').text();
            em.html((parseInt(input_num)*money).toFixed(2));

        });


    }

//全选-----------------


    $('.check_total').click(function () {
        var total=0;
        if($(this).is(":checked")){
            $('.check').each(function(){
                this.checked="checked";
            });
            $(".lists_wrap").each(function(){
                total +=parseFloat($(this).find(".items_num").find("em").text());
            });
        }else{
            $('.check').each(function(){
                $(this).attr("checked",false);
                total=0;
            });
        }
        $(".cart_next .money .num em").text(total);
    });
//不全选--------------------

    $('.lists_wrap .check').click(function (e) {
        var total1=0;
        if(!$(this).is(":checked")){
            selectAll(!0);
        }
        else{
            selectAll(0,e.target);
        }
        $(".lists_wrap .check").each(function(){
            if($(this).is(":checked")){
                total1+=parseFloat($(this).closest(".lists_checkall").siblings(".items_num").find("em").text());
            }
            $(".money .num em").text(total1);
        });
    });


    function  eachelement(e){

        $(e).closest("div.lists_wrap").siblings("div.lists_wrap").find(":checkbox").each(function(){

            if(!$(this).is(":checked")){
                $('.check_total').each(function(){
                    $(this).attr("checked",false);
                });
                return false;
            }
            else {
                $('.check_total').each(function(){
                    this.checked="checked";
                });
            }
        });
    }
    function selectAll(bool,e){
        bool? $('.check_total').each(function(){
            $(this).attr("checked",false);
        }): eachelement(e);
    }
    //金额
*/

});






