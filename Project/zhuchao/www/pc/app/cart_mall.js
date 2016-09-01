
/**
 * Created by Administrator on 2015/10/15.
 */
define(['jquery'],function(){
    $(function(){
        //购物栏 滑动显示文字
        var time;
       $('.com_logo').hover(function(){
           var $this = $(this);
           var delay=0;
          if(!$(this).hasClass('cart_current')&&$(this).index()!=3&&!$(this).hasClass('cart_click')){
              $($this).addClass('cart_current');
              time=setInterval(function(){
                  delay++;
                  if(delay>2){
                      $($this).animate({'width':'130px'},200);
                     window.clearInterval(time);
                  }
              },100);
          }
       },function(){
           clearInterval(time);
           var n= $.inArray(this,$('.com_logo'));
           $(this).animate({'width': '40px'}, 200, function () {
               $('.com_logo').eq(n).removeClass('cart_current');
           });
       });
        //商品浮现加入购物车
        $('.pro_img').hover(function(){
            if($(this).find('.add_cart').height()>0) {
                $(this).find('.add_cart').animate({'height':'0'});
            }
            else{
                $(this).find('.add_cart').animate({'height':'20px'});
            }
        });
        //购物栏详情显示
        $('.com_logo').click(function(){
           var n= $.inArray(this,$('.com_logo'));
            if(n<3){
                if(!$(this).hasClass('cart_click')){
                    $(this).siblings().removeClass('cart_click');
                    $(this).addClass('cart_click');
                    $('.cart_ele').stop();
                    $('.cart_ele').css('left','270px');
                    $('.cart_ele').eq(n).animate({'left':'20px'});
                    $('.right_cart').animate({'width':'270px'});
                }
                else{
                    $('.cart_ele').animate({'left':'270px'});
                    $('.right_cart').animate({'width':'0'},function(){
                        $('.com_logo').eq(n).removeClass('cart_click');
                    });
                }
            }
        });
        //删除
        $('.del_all').click(function(){
            $('.cart_pro').remove();
        });
        $('.pro_del').click(function(){
            $(this).parent('div').siblings('div').removeClass('clear_rightM');
            $(this).parent('div').siblings('div:odd').addClass('clear_rightM');
            $(this).parent('div').remove();

        });
        $('.del_buy').click(function(){
            $(this).parents('.cart_ele_content').remove();
        });
        //购物车全选
        $('.choose_all').click(function(){
            if($(this).find('input').attr("checked")){
                $('.cart_buy').find('input').attr('checked',true);
            }
            else{
                $('.cart_buy').find('input').attr('checked',false);
            }
        });
        //收藏切换
        $('.store_top h4').click(function () {
          var n= $.inArray(this,$('.store_top h4'));
            $('.store_top h4').removeClass('my_store_current');
            $(this).addClass('my_store_current');
            $('.m_store').hide();
            $('.m_store').eq(n).show();
        });
    });
});