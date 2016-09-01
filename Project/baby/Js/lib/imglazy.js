/**
 * Created by jiayin on 2015/12/11.
 */
//图片延迟加载
define(['jquery','lazyload'],function(){
    $(function(){
        $(".lazy").lazyload({
            threshold: 10,
            effect: "fadeIn",
            placeholder: "/Statics/Skins/Images/pc/lazyicon.png"
        });

    })
});