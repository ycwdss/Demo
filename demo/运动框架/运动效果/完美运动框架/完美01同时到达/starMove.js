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

    clearInterval(obj.timer)//�������ʱ��
    obj.timer=setInterval(function () {
        for(var attr in json){
            //1.ȡ��ǰֵ
            var iCur=0;
            if(attr=='opacity'){
                iCur=parseInt(parseFloat(getStyle(obj,attr)*100));//  alert(0.07*100)
            }else{
                iCur=parseInt(getStyle(obj,attr));
            }
            //2.���ٶ�
            var speed=(json[attr]-iCur)/8;//�����˶�
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //3.���ֹͣ
            if(iCur==json[attr]){
                clearInterval(obj.timer);
                if(fn){ //ִ�н�������ִ������һ������
                    fn();
                }
            }else{
                if(attr=='opacity'){
                    obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
                    obj.style.opacity=(iCur+speed)/100;
                    //document.getElementById('txt').value=obj.style.opacity;
                }
                obj.style[attr]=iCur+speed+'px';
            }
        }
    },30);

}