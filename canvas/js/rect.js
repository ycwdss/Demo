/**
 * Created by wangzan on 2016/9/19 0019.
 */
//1、 封装属性：  x， y  w ， h，  fillStyle  strokeStyle  rotation  opacity
// 2、render
//思考：我们用到的矩形需要哪些绘制的东西呢？
/*1、矩形的 x、y坐标
 2、矩形的宽高
 3、矩形的边框的线条样式、线条宽度
 4、矩形填充的样式
 5、矩形的旋转角度
 6、矩形的缩小放大*/

function Rect(option) {
    this._init(option);
}

Rect.prototype = {
    _init: function (option) {
        option = option || {};
        //矩形的x,y坐标
        this.x = option.x == 0 ? 0 : option.x || 0;
        this.y = option.y == 0 ? 0 : option.y || 0;
        //矩形的宽高
        this.w=option.w || 100;
        this.h=option.h || 100;
        //矩形边框的线条样式 线条宽度
        this.strokeStyle= option.strokeStyle || 'red';
        this.fillStyle=option.fillStyle || 'blue';
        //矩形旋转
        this.rotation=option.rotation || 0;
        //设置透明度
        this.opacity=option.opacity || 1;
        //设置缩放
        this.scaleX=option.scaleX || 1;
        this.scaleY=option.scaleY || 1;

        
    },
    render:function (ctx) {
        ctx.save();  //把当前的上下文的状态保存一下
        ctx.beginPath(); //开始一个新的路径

        ctx.translate(this.x,this.y); //整个画布进行位移
        ctx.scale(this.scaleX,this.scaleY);//设置画布缩放大小
        ctx.globalAlpha=this.opacity;//设置透明度

        //给 ctx规划一个路径。注意：规划的路径会一直保存。所以
        //最好在每次绘制矩形的时候beginPath一下标志一个新的路径。
        ctx.rect(0, 0 , this.w, this.h );

        ctx.fillStyle = this.fillStyle;
        ctx.fill();

        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();

        ctx.restore();//还原绘制的状态
    }
}

