/**
 * Created by Administrator on 2016/2/2.
 */
define(['jquery','slick'],function(){
    $(function(){
        $('.recommend_slick').slick({
            slidesToShow:4,
            arrows:true,
            prevArrow:'.recommend_left',
            nextArrow:'.recommend_right'
        })
    })
})