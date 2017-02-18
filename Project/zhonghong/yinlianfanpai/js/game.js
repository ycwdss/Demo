/**
 * Created by Administrator on 2015/11/23 0023.
 */

var _config={
    imgDate:[],
    imgNum:12,//牌的样式数量
    gk:[4,9,16,25],//关卡数及每一关的卡牌数
    time:25,//默认关卡时间
}
var cdata=[],ss=0;//ss用于存放每关正确翻了多少对卡牌
var MyGame={
    nowGk:1,//当前关卡
    isZt:false,//是否暂停
    barProgress:null,//进度条
    ruleTime:null,//时间

    init:function(){
        this.startGame();
        this.MyEvent();
    },
    startGame:function(){
        $("#gamePage").hide();
        $("#index").show();
        ss=0;
        cdata=[];//点开的第二张牌
        this.nowGk=1;
    },
    MyEvent:function(){
        var clickEvent='ontouchstart' in document.documentElement ? 'touchstart' :'click';
        var self=this;
        var isClick=true;
        $('#Box').on("touchmove","span",function(e){
            e.preventDefault();
        });


        $('#Box').on(clickEvent, "span",function(e){
            e.preventDefault();
            if($(this).attr("name")=="1"&&isClick){

                $(this).attr("name","0");
                $(this).find(".d1").addClass("dd1");
                $(this).find(".d2").addClass("dd2");
                cdata.push(this);
                //判断第一张牌与第二张掀开的牌是否相同
                if(cdata.length==2){
                    isClick=false;
                    if(cdata[0].id==cdata[1].id){  //如果两次翻牌匹配
                        cdata=[];
                        ss++;
                        if(ss==Math.floor(_config.gk[self.nowGk-1]/2)){  //如果每关匹配完成
                            if(self.nowGk<4){ //如果没有通关
                                var newMap=setTimeout(function(){
                                    ss=0;
                                    cdata=[];
                                    self.renderMap();
                                },500);

                                if(self.nowGk==3){
                                    $('.tiaozhan').show();
                                    clearInterval(self.barProgress);
                                    clearInterval(self.ruleTime);
                                    clearTimeout(newMap);
                                    cjjh+=1;
                                    $(".tiaozhan-sure").click(function () {
                                        $('.tiaozhan').hide();
                                        $('.rewards-cjjh em').text(cjjh);
                                        console.log(cjjh);
                                        setTimeout(function(){
                                            ss=0;
                                            cdata=[];
                                            self.renderMap();
                                        },500);
                                    });
                                }
                                self.nowGk++;
                            }
                            else{
                                clearInterval(self.barProgress);
                                cjjh+=1;
                                console.log(cjjh);
                                $('.rewards-cjjh em').text(cjjh);
                                $(".success").show();
                            }
                        }
                    }else{ //两次翻牌不匹配
                        setTimeout(function(){
                            $(cdata[0]).find(".d1").removeClass("dd1");
                            $(cdata[0]).find(".d2").removeClass("dd2");
                            $(cdata[1]).find(".d1").removeClass("dd1");
                            $(cdata[1]).find(".d2").removeClass("dd2");
                            $(cdata[0]).attr("name","1");
                            $(cdata[1]).attr("name","1");
                            cdata=[];
                        },400);
                    }
                    setTimeout(function(){
                        isClick=true;
                    },400)
                }
            }

        });
        $(".start-run").click(function(){
            $('.fail').hide();
            if(cs>0){
                jcs();
                if(cs==2){
                    $('.energy .energy-nomal').eq(2).addClass('energy-gray').removeClass('energy-nomal');
                }
                if(cs==1){
                    $('.energy .energy-nomal').eq(0).siblings().addClass('energy-gray').removeClass('energy-nomal');
                }
                if(cs==0){
                    $('.energy .energy-nomal').addClass('energy-gray').removeClass('energy-nomal');
                }
            }else{
                $(".energy-out").show();
            }
        });
    },
    renderMap:function(){
        clearInterval(this.barProgress);
        clearInterval(this.ruleTime);
        if(this.nowGk==1){
            _config.time=10;
        }else if(this.nowGk==2){
            _config.time=20;
        }else if(this.nowGk==3){
            _config.time=35;
        }else if(this.nowGk==4){
            _config.time=50;
        }

        $(".secs").text(_config.time);
        $(".level-progress").css({"width":"458px"});
        this.times("458",_config.time);
        $(".level-grade em").text(this.nowGk);

        var data=[];
        var Tu=_config.gk[this.nowGk-1];//当前关卡的卡牌数量
        var imgList=this.randomValue(Math.floor(Tu/2),12);
        for(var i=0;i<Math.floor(Tu/2);i++){
            data.push(imgList[i]);
            data.push(imgList[i]);
        }
        //data=getRndArray(data);//卡牌打乱
        function getRndArray(arr0){
            var arr1=new Array();
            var len=arr0.length;
            for(var i=0;i<len;i++){
                var rnd=Math.floor(Math.random()*arr0.length);
                arr1[i]=arr0[rnd];
                arr0.splice(rnd,1)
            }
            return arr1;
        }
        var html="";
        var x=0;
        //生成卡片
        for(var j=0;j<Tu;j++){
            if(Tu%2!=0&&Math.floor(Tu/2)==j){
                html+="<span style='position: relative'><img src='images/centerbg.png' style='width: 100%;position: absolute;top:0;left: 0;right: 0;bottom: 0;margin: auto;'></span>";

            }else{
                html+="<span name='1' id='"+data[x]+"'>" +
                    "<div class='a1'>" +
                    "<div class='d1'><img src='images/bg.png' width='100%' height='100%'></div>" +
                    "<div class='d2'><img src='images/"+data[x]+".png' width='100%' height='100%'></div>" +
                    "</div>" +
                    "</span>";
                x++;
            }
        }

        console.log(data);
        $("#Box").html(html+"<div style='clear:both;'></div>");
        $("#Box").attr("class","lv"+this.nowGk);
    },
    times:function(x,t){
        var self=this;
        this.barProgress=setInterval(function(){
            if(x>0){
                x--;
                $(".level-progress").css({"width":(x)+"px"});
            }else{ //游戏结束

                clearInterval(this.barProgress);

                $(".fail").css('display','block');
                $('.fail-sure').click(function () {
                    $(".fail").css('display','none');
                    $('#index').show();
                    $('#gamePage').hide();
                });
            }

        },(_config.time*1000)/458);
        this.ruleTime=setInterval(function(){
            if(t>0){
                t--;
                $(".secs").text(t);
                if(t<10){
                    $(".secs").text("0"+t);
                }
            }

        },1000);
    },
    randomValue:function(a,b){
        var y=[];
        for(var i=0;i<10000000000;i++){
            var random=Math.floor(Math.random()*b)+1;
            if(y.indexOf(random)==-1){
                y.push(random);
            }
            if(y.length==a){
                break;
            }
        }
        return y;
    }
}

MyGame.init();

