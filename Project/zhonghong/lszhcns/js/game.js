var MyJs={
    img:["allRight.png","bg1.png","bg2.png","bg3.png","bg4.png","caitiBtn1.png","caitiBtn2.png","caitiBtn3.png","choujiangPic.png","choujiangTips.png","delete.png","fudai0.png","fudai1.png","fudai2.png","fudaiBtn1.png","fudaiBtn2.png","gamePic1.png","gamePic2.png","gamePic3.png","gamePic4.png","gamePic5.png","gamePic6.png","gamePic7.png","gamePic8.png","gamePic9.png","gamePic10.png","guizeBg.png","guizeBtn.png","guizeTop.png","help.png","helpBtn1.png","helpBtn2.png","hengfu1.png","hengfu2.png","hengfu3.png","hengfu4.png","hengfu5.png","indexBtn1.png","indexBtn2.png","indexBtn3.png","indexPic.png","jiangpinBox.png","jiangpinBtn0.png","jiangpinBtn1.png","jiangpinLi.png","loading.png","nameTxt.png","telTxt.png","nlb0.png","nlb1.png","nlbBt.png","right.png","share.png","tijiaoBtn.png","tijiaoPic.png","winBg.png","winBtn1.png","wrong.png"],
	init:function(){
		this.loading();//图片预加载
	},
	loading:function(){
		var self=this;
		var d=0;
		for(var i=0;i<this.img.length;i++){
			var imgs=new Image();
			imgs.src="images/"+this.img[i];
			imgs.onload=a;
			var per=parseInt(i/(this.img.length-1)*100);
			var barLength=parseInt(i/(this.img.length-1)*240);
			$(".barSpan").text(per+"%");
			$(".bar").css("width",barLength+"px");
		}
		function a(){
			d++;
			if(d==self.img.length){
				MyJs.startJs();//首页s执行
				MyJs.startGame();//游戏js执行
				MyJs.startChoujiang();//抽奖js执行
				MyJs.startHelp();//助力Js
				MyJs.startJiangpin();//我的奖品页js
			}
		}
	},

	//首页js
	startJs:function(){
		$(".index").show();
		var nlbNum=3//能量包数量
		for(var i=0;i<nlbNum;i++){
			$(".nlb").eq(i).attr("src","images/nlb1.png");
		}
		$(".indexBtn3").click(function(){//首页规则按钮
			$(".hide").hide();
			$(".guize").show();
		});
		$(".guizeBtn").click(function(){//规则页按钮
			$(".hide").hide();
			$(".index").show();
		});
		$(".indexBtn1").click(function(){//开始游戏
			if(nlbNum<1){
				$(".zhegai").show();
				$(".win1").show();
			}else{
				window.location.href="game.html";
				nlbNum-=1;//能量包减一 存入数据库
			}
		});
		$(".winBtn1").click(function(){//请求助力
			$(".win1").hide();
			$(".helpTips").show();
		});
	},

	//游戏页js
	startGame:function(){
		var arr=[];
		function createRandom(num ,from ,to )
		{
		    
		    for(var i=from;i<=to;i++)
		        arr.push(i);
		    arr.sort(function(){
		        return 0.5-Math.random();
		    });
		    arr.length=num;
		    return arr;
		}
		createRandom(3,1,10);
		ti(arr[0]);
		function ti(x){
			switch(x){
				case 1:MyJs.ti1();
				break;
				case 2:MyJs.ti2();
				break;
				case 3:MyJs.ti3();
				break;
				case 4:MyJs.ti4();
				break;
				case 5:MyJs.ti5();
				break;
				case 6:MyJs.ti6();
				break;
				case 7:MyJs.ti7();
				break;
				case 8:MyJs.ti8();
				break;
				case 9:MyJs.ti9();
				break;
				case 10:MyJs.ti10();
				break;
			}
		}

		// 选择文字
		$(".gameS>.s").bind("click",function(){
			var sClick=parseInt($(".sClick").val());//判断当前第几次点击
			var q=$(".q1").text()+$(".q2").text()+$(".q3").text();//已选择文字
			if(q.indexOf($(this).text())==-1){
				if(sClick==0){
					$(".q1").text($(this).text());
				}else if(sClick==1){
					$(".q2").text($(this).text());
				}else if(sClick==2){
					$(".q3").text($(this).text());
				}
				sClick+=1;
				$(".sClick").val(sClick);
			}else{

			}
			
		});

		//删除答案
		$(".delete").bind("click",function(){
			$(".q").text("");
			$(".sClick").val("0");
		});

		//提交答案
		$(".gamesBtn").bind("click",function(){
			var q=$(".q1").text()+$(".q2").text()+$(".q3").text();
			var rightQ=$(".rightQ").val();
			var rightNum=parseInt($(".rightNum").val());
			$(".gameTips").hide();
			$(".gameJs").show();
			if(q==rightQ){//答对三题以下
				if(rightNum<2){
					$(".gameDati").hide();
					$(".gameRight").show();
				}else{
					$(".gameDati").hide();
					$(".gameOver").show();
				}
			}else{//三题全部答对
				$(".gameDati").hide();
				$(".gameWrong").show();
			}
		});
		//点击下一题
		$(".caituBtn1").bind("click",function(){

			$(".gameDati").show();
			$(".gameRight").hide();
			$(".gameTips").show();
			$(".gameJs").hide();
			$(".q").text("");
			$(".s").text("");
			var rightNum=parseInt($(".rightNum").val());
			if(rightNum==0){
				ti(arr[1]);
			}else if(rightNum==1){
				ti(arr[2]);
			}
			rightNum++;
			$(".rightNum").val(rightNum);
			$(".sClick").val("0");
		});
		//三题全部答对点击抽奖
		$(".caituBtn2").bind("click",function(){
			window.location.href="choujiang.html";
		});
		//答错题
		$(".caituBtn3").bind("click",function(){
			window.location.href="index.html";
		});
	},

	//抽奖页js
	startChoujiang:function(){
		$(".choujiangPic").bind("click",function(){
			var luckNum=parseInt(Math.random()*3);//所中奖项 0为未中奖 1为50M电信流量 2为70元礼品
			$(".hide").hide();
			$(".zhongjiang").show();
			if(luckNum==0){
				$(".fudai>img").attr("src","images/fudai0.png");
				$(".fudaiBtn2").show();
			}else if(luckNum==1){
				$(".fudai>img").attr("src","images/fudai1.png");
				$(".fudaiBtn1").show();
			}else if(luckNum==2){
				$(".fudai>img").attr("src","images/fudai2.png");
				$(".fudaiBtn1").show();
			}
		});
		$(".fudaiBtn2").bind("click",function(){
			window.location.href="index.html";
		});
		$(".fudaiBtn1").bind("click",function(){
			window.location.href="tijiao.html";
		});
	},

	//助力页js
	startHelp:function(){
		var helpNum=2;//今日被助力次数
		var isFollow=1;//是否关注公众号0为未关注 1为关注
		$(".helpBtn1").bind("click",function(){
			$(".zhegai").fadeIn(500);
			if(helpNum<2){
				$(".win2").fadeIn(500);
			}else{
				$(".win3").fadeIn(500);
			}
		});
		$(".helpBtn2").bind("click",function(){
			if(isFollow==1){
				window.location.href="index.html";//关注进入首页
			}else{
				window.location.href="#";//未关注跳微刊
			}
		});
		$(".winBtn2").bind("click",function(){
			if(isFollow==1){
				window.location.href="index.html";//关注进入首页
			}else{
				window.location.href="#";//未关注跳微刊
			}
		});
	},

	//我的奖品页js
	startJiangpin:function(){
	 	var jiangpinNum;//用于判断该奖品是否兑换,0为可兑换，1为已兑换
		$(window).load(function(){
			var liLength=$(".jiangpinLi").length;
			for(var i=0;i<liLength;i++){
				jiangpinNum=parseInt($(".jiangpinLi").eq(i).children(".div3").children(".jiangpinNum").val());
				if(jiangpinNum==0){
					$(".jiangpinLi").eq(i).children(".div2").children(".sp2").text("");
					$(".jiangpinLi").eq(i).children(".div3").children(".jiangpinBtn1").css("display","block");
				}else{
					$(".jiangpinLi").eq(i).children(".div3").children(".jiangpinBtn0").css("display","block");
				}
			}
			$(".jiangpinBtn1").bind("click",function(){
				var jpCode="AD432131442df";//兑换码，数据库读取
				$(this).hide();
				$(this).prev().css("display","block");
				$(this).parent().prev().children(".sp2").text(jpCode);
				jiangpinNum=1;//存入数据库
				window.location.href="tijiao.html";
			});
		})
	},

	//十道题
	ti1:function(){
		var rightQ="大扫除";
		$(".rightQ").val(rightQ);
		var arrS="清生大擦地窗年除理拖扫卫迎";
		$(".gamePic").attr("src","images/gamePic1.png");
		$(".gameTips").text("Tips：打扫");
		$(".gameJs").text("“腊月二十四，掸尘扫房子”。每逢春节来临，大家都会打扫环境迎接新年！绿小宝提醒您：打扫卫生时记得垃圾进行分类处理哦！");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti2:function(){
		var rightQ="贴春联";
		$(".rightQ").val(rightQ);
		var arrS="窗门联扫迎祭贴春除地年灶旦";
		$(".gamePic").attr("src","images/gamePic2.png");
		$(".gameTips").text("Tips：对仗  红色");
		$(".gameJs").text("每逢春节，无论城市还是农村，家家户户都要精选一副大红春联贴于门上，为节日增加喜庆气氛。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti3:function(){
		var rightQ="放爆竹";
		$(".rightQ").val(rightQ);
		var arrS="爆花联贴灯糕放岁守竹跑元谜";
		$(".gamePic").attr("src","images/gamePic3.png");
		$(".gameTips").text("Tips：贺新年  鞭炮");
		$(".gameJs").text("绿小宝提醒您：2016年元旦起，《上海烟花爆竹安全管理条例》规定上海外环以内禁止燃放炮竹，为了您和他人安全请勿燃放烟花爆竹。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti4:function(){
		var rightQ="贴窗花";
		$(".rightQ").val(rightQ);
		var arrS="蒸贴岁拜发花夕窗会谜红大联";
		$(".gamePic").attr("src","images/gamePic4.png");
		$(".gameTips").text("Tips：剪纸 窗户");
		$(".gameJs").text("在汉族民间人们还喜欢在窗户上贴上各种剪纸——窗花。窗花不仅烘托了喜庆的节日气氛，也集装饰性、欣赏性和实用性于一体。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti5:function(){
		var rightQ="看春晚";
		$(".rightQ").val(rightQ);
		var arrS="美家秀看忘晚开简春票项道影";
		$(".gamePic").attr("src","images/gamePic5.png");
		$(".gameTips").text("Tips：除夕  难忘今宵");
		$(".gameJs").text("每年的大年三十，一家人围坐在一起看“央视春节联欢晚会”早已成为众多家庭的习惯。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti6:function(){
		var rightQ="压岁钱";
		$(".rightQ").val(rightQ);
		var arrS="声压德两年将伶钱南请功岁过";
		$(".gamePic").attr("src","images/gamePic6.png");
		$(".gameTips").text("Tips：恭喜发财，红包拿来！");
		$(".gameJs").text("新年到来，长辈给予晚辈新年红包，庆贺晚辈长了一岁。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti7:function(){
		var rightQ="接财神";
		$(".rightQ").val(rightQ);
		var arrS="闲周喜符面看瓶财神能鞭接际";
		$(".gamePic").attr("src","images/gamePic7.png");
		$(".gameTips").text("Tips：正月初二吃元宝");
		$(".gameJs").text("接财神是个古老的汉族节习俗，民间传说正月初五是财神的生日，各家在前一晚准备宴席，庆贺财神爷的生辰，以祈求今年有个好财运。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti8:function(){
		var rightQ="逛庙会";
		$(".rightQ").val(rightQ);
		var arrS="逛玩游买集庙市卖动会乐活园";
		$(".gamePic").attr("src","images/gamePic8.png");
		$(".gameTips").text("Tips：吃喝玩乐 热闹非凡");
		$(".gameJs").text("早期仅是一种隆重的祭祀活动，随着经济发展和人们交流需要，逐渐融入了集市交易活动并增加娱乐性活动。于是过年就有了这一说。 ");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti9:function(){
		var rightQ="猜灯谜";
		$(".rightQ").val(rightQ);
		var arrS="谜彩灯火语月花逛猜焰赏正放";
		$(".gamePic").attr("src","images/gamePic9.png");
		$(".gameTips").text("Tips：谜语 花灯");
		$(".gameJs").text("流传已久的元宵节特色活动，每逢农历正月十五，大家会挂起彩灯，燃放焰火，后来有好事者把谜语写在纸条上，贴在彩灯上供人猜。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
	ti10:function(){
		var rightQ="吃元宵";
		$(".rightQ").val(rightQ);
		var arrS="吃汤元圆夜年宵夜团子饭园浮";
		$(".gamePic").attr("src","images/gamePic10.png");
		$(".gameTips").text("Tips：团圆 思念");
		$(".gameJs").text("在正月十五元宵节吃元宵是一个古老的汉族传统节日习俗，，意喻团团圆圆、平平安安。");
		for(var i=0;i<13;i++){
			var j=i+1;
			$(".gameS>span").eq(i).append(arrS[i]);
		}
	},
}
MyJs.init();