/**
 * Created by Administrator on 2015/11/23 0023.
 */


       var MyGame={
           img:["bg.png","flower1-1.png","flower1-2.png","flower1-3.png","flower1-4.png","flower1-5.png","flower1-6.png","flower1-7.png","flower1-8.png","flower1-9.png","flower2-1.png","flower2-2.png","flower2-3.png","flower3-1.png","flower3-2.png","flower3-3.png","flower3-4.png","flower3-5.png","flower3-6.png","flower3-7.png","flower3-8.png","flower3-9.png","flowerShadow.png","formWinBg.png","formWinBtn.png","friend.png","friendBtn.png","fruitBg.png","fruitBtn0.png","fruitBtn1.png","helpBtn.png","helpTips.png","indexBtn.png","indexTitle.png","jug.png","loading0.png","loading1.png","newIcon.png","nlzBg.png","npk.png","prizeWinBg.png","prizeWinBtn.png","progress.png","progressBg.png","roomBg.png","roomBtn.png","roomBtn2.png","ruleBg.png","ruleBtn.png","ruleTitle.png","seed1.png","seed2.png","seed3.png","seed4.png","seed5.png","seed6.png","seed7.png","seed8.png","seed9.png","seedBg.png","seedBtn.png","seedDoubt.png","seedHide1.png","seedHide2.png","seedHide3.png","seedSeal.png","seedShadow.png","seedTips1.png","seedTips2.png","seedTips3.png","seedWin.png","seedWinBtn.png","share.png","sickle.png","star.png","sun.png","tool1.png","tool2.png","tool3.png","tool4.png","tool1-0.png","tool2-0.png","tool3-0.png","tool4-0.png","water.png"],
          
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
                      setInterval(function(){
                        var loadSrc=$(".loadIcon>img").attr("src");
                        if(loadSrc=="images/loading0.png"){
                          $(".loadIcon>img").attr("src","images/loading1.png");
                        }else{
                          $(".loadIcon>img").attr("src","images/loading0.png");
                        }
                      },1000);
                }
                   function a(){
                           d++;
                           if(d==self.img.length){
                               $(".index").show();
                           }
                   }
           },
        }
MyGame.init();