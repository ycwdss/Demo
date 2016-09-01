/**
 * Created by Administrator on 2015/9/17.
 */
function qiehuan(){
    var obj=arguments[0]||false; //传递要操作的参数this
    var nav=arguments[1]||false;  //传递this所在的数组$('.')
    var attrObj=arguments[2]||false;//传递目标数组
    var speed1=arguments[3]||1;        //slideDown的速度（可选）
    var speed2=arguments[4]||1;         //slideUp的速度（可选）
    if(nav==true||attrObj==true||obj==true){
        alert("请输入必要的参数！");
    }
    else if(speed1>1){
        attrObj.slideUp(speed2);
        attrObj.eq($.inArray(obj,nav)).slideDown(speed1);
    }
    else{
        attrObj.hide();
        attrObj.eq($.inArray(obj,nav)).show();
    }
}