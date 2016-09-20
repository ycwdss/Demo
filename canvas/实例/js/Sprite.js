/**
 * Created by wangzan on 2016/9/19 0019.
 */
function Sprite(option) {
    //构造函数执行的时候，立即调用初始化的函数
    this._init( option );
};

Sprite.prototype = {
    _init: function (option) {

        //画布上小人坐标位置
        this.x = option.x === 0 ? 0 : (option.x || 0);//如果option.x 不为空，null,undefine  this.x=option.x
        this.y = option.y === 0 ? 0 : (option.y || 0);//如果option.x 不为空，null,undefine  this.x=option.x

        //画布上图片大小
        this.w = option.w || 40;
        this.h = option.h || 65;
        this.fps = option.fps || 10;
        this._dirIndex = 0;
        this._imgSrc = option.imgSrc || '';
        //图片裁切的大小
        this.originWidth = option.originWidth || 40;
        this.originHeight = option.originHeight || 65;

        this._dirIndex = 0;
    },
    render: function (ctx) { //把自己画到画布上
        //第一步：图片加载

        var img = new Image();
        img.src = this._imgSrc;

        var _this = this;
        img.onload = function () {

            var frameIndex = 0;
            setInterval(function () {
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                ctx.drawImage(
                    img,
                    frameIndex * _this.originWidth,
                    _this._dirIndex * _this.originHeight,
                    _this.originWidth,
                    _this.originHeight,
                    _this.x,
                    _this.y,
                    _this.w,
                    _this.h
                );
                frameIndex++;
                frameIndex %= 4;
            }, 1000 / _this.fps);

        };

    },
    //改变方向
    changeDir: function( dir ) {
        if( dir == 'left' ) {
            this._dirIndex = 1;
        }

        if( dir == 'right' ) {
            this._dirIndex = 2;
        }


        if( dir == 'up' ) {
            this._dirIndex = 3;
        }

        if( dir == 'down' ) {
            this._dirIndex = 0;
        }
    }

};
