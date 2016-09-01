/**
 * Created by Administrator on 2016/1/7.
 */
define(['jquery'],function(){
   $(function(){
       var turn =0;
       setInterval(function(){
           turn+=6;
           setCss3($('.clock span'),{transform: "rotate(" +(-turn) + "deg)"})
           if(turn == 360){
               turn=0;
           }
       },1000)
   });
    function setCss3(obj,attrObj){
        for(var i in attrObj){
            var newi=i;
            if(newi.indexOf("-")>0){
                var num=newi.indexOf("-");
                newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase())
            }
            obj.css(newi,attrObj[i]);
            newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
            obj.css(newi,attrObj[i]);
            obj.css('webkit'+newi,attrObj[i]);
            obj.css('moz'+newi,attrObj[i]);
            obj.css('o'+newi,attrObj[i]);
            obj.css('ms'+newi,attrObj[i]);
            //obj.style[newi]=attrObj[i];
            //newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
            //obj.style[newi]=attrObj[i];
            //obj.style["webkit"+newi]=attrObj[i];
            //obj.style["moz"+newi]=attrObj[i];
            //obj.style["o"+newi]=attrObj[i];
            //obj.style["ms"+newi]=attrObj[i];

        }
    }
});