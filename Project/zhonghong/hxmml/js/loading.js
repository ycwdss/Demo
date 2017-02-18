/**
 * Created by Administrator on 2015/11/23 0023.
 */


       var MyGame={
           img:["bg.png","bg2.png","bizhi.jpg","close.png","col1.png","col2.png","col3.png","col4.png","col5.png","col1-1.png","col2-1.png","col3-1.png","col4-1.png","col5-1.png","formBtn.png","formFont.png","gameBg.png","gameBtn0.png","gameBtn1.png","gameTop.png","handL.png","handR.png","indexBtn.png","indexBtn2.png","indexMty.png","indexTheme.png","logo.png","mty0.png","mty1.png","overFont.png","share1.png","share2.png","share3.png","share4.png","winBg1.png","winBtn1.png","winBtn2.png","winBtn3.png","winBtn4.png","winFont1.png","winFont2.png","winFont3.png","winFont4.png","winTit1.png","winTit4.png","xin0.png","xin1.png","loading.gif"],
          
           init:function(){
                this.loading();
           },
           loading:function(){
                var self=this;
               var d=0;
                for(var i=0;i<this.img.length;i++){
                      var imgs=new Image();
                      imgs.src="images/"+this.img[i];
                      imgs.onload=a;

                }
                   function a(){
                           d++;
                           if(d==self.img.length){
                               self.startGame();
                           }
                   }
           },
           startGame:function(){
              $("#loading").hide();
           },
        }
MyGame.init();