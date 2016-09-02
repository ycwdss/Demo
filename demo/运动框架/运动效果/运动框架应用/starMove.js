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
function starMove(obj,json,fn){

    clearInterval(obj.timer)//开多个定时器
    obj.timer=setInterval(function () {
        for(var attr in json){
            var stop=true;//这一次运动结束了or所有的值都到达了
            //1.取当前值
            var iCur=0;
            if(attr=='opacity'){
                iCur=parseInt(parseFloat(getStyle(obj,attr)*100));//  alert(0.07*100)
            }else{
                iCur=parseInt(getStyle(obj,attr));
            }
            //2.算速度
            var speed=(json[attr]-iCur)/8;//缓冲运动
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //3.检测停止
           if(iCur!=json[attr]){
               stop=false;
           }
                if(attr=='opacity'){
                    obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
                    obj.style.opacity=(iCur+speed)/100;
                    //document.getElementById('txt').value=obj.style.opacity;
                }else{
                    obj.style[attr]=iCur+speed+'px';
                }
            }
        if(stop){
            clearInterval(obj.timer);
            if(fn){ //执行结束后，在执行另外一个函数
                fn();
            }
        }
    },30);

}