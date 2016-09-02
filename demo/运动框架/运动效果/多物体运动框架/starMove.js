/**
 * Created by wangzan on 2015/11/20.
 */
function getStyle(obj, attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj,false)[attr];
    }
}
//    var timer=null;
function starMove(obj,attr,target){
    var oDiv=document.getElementById('div1');
    clearInterval(obj.timer)//开多个定时器
    obj.timer=setInterval(function () {
        var iCur=0;
        if(attr=='opacity'){
            iCur=parseInt(parseFloat(getStyle(obj,attr)*100));//  alert(0.07*100)
        }else{
            iCur=parseInt(getStyle(obj,attr));
        }
        var speed=(target-iCur)/8;//缓冲运动
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(iCur==target){
            clearInterval(obj.timer);
        }else{
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
                obj.style.opacity=(iCur+speed)/100;
                //document.getElementById('txt').value=obj.style.opacity;
            }
            obj.style[attr]=iCur+speed+'px';
        }
    },30);
}