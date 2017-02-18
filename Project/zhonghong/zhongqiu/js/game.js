
		var score=parseInt($("#score").text());//当前分数
		var inum=0;//icon编号
		var st;
		var sta;
		var iconTime=500;//图标出现频率
	    // sta = setInterval("check("+inum+")", 10);

		// 倒计时
		$(".gameStartBtn").on("touchstart",function(){
			$(".gameStart").fadeOut(300);
			$(".layer").hide();
			$(".gameCon").show();

			//同步icon编号
	 //    	st=setInterval(function(){
	 //    		sta = setInterval("check("+inum+")", 10);
	 //    		inum++;
		// console.log(inum)

	 //    	},1700);
			clearInterval(sta);


			setTimeout(function(){
				//10毫秒检测一次碰撞
				sta = setInterval(function(){
					inum=parseInt($(".num").text())-1;
					if(inum>10){
						for(var i=inum-8;i<=inum;i++){
							check(i);
						}
					}else{
						for(var i=0;i<=inum;i++){
							check(i);
						}
					}
					
				}, 10);
			},iconTime);
			
			gt=setInterval(function(){
				aa();
			},1000);

			//icon落下
			var rLeft;//icon的left值
			var num;//icon编号
			var rArr=[];//用于存放每个icon的left值
			var rcArr=[];//用于存放每个icon的种类
			rt=setInterval(function(){//1s出现一个icon
				num=parseInt($(".num").text());
				var ran=parseInt(Math.random()*100);
				if(ran<70){
					rClass=1;//月饼出现概率
				}else{
					rClass=2;//青蛙出现概率
				}
			 	rLeft=parseInt(Math.random()*375+100);//icon的left值
			 	rArr.push(rLeft);//将icon的left值放入数组
			 	rcArr.push(rClass);//将icon的种类存入数组
			 	$(".gameCon").append("<img class='icon r"+num+" c"+rClass+"' draggable='true' src='images/icon"+rClass+".png' style='left:"+rLeft+"px' />");
			 	$(".r"+num).animate({top:"850px"},2000,"linear",function(){
                    $(this).hide();
                });
    			
			 	num++;	
			 	$(".num").text(num);
			 	
			},iconTime);
		});

		//target移动
		touch.on('#target', 'touchstart', function(ev){
			ev.preventDefault();
		});

		var target = document.getElementById("target");
		var dx;
		// var dy;
		var offx=0;//target左右移动距离
		// var offy=0;//target上下移动距离
		touch.on('#target', 'drag', function(ev){
			dx = dx || 0;
			// dy = dy || 0;
			offx =parseInt(dx + ev.x);
			// offy =parseInt(dy + ev.y);
			if(offx>-180&&offx<180){
				this.style.webkitTransform = "translate3d(" + offx + "px,0,0)";
			}else if(offx<=-180){
				this.style.webkitTransform = "translate3d(-180px,0,0)";
			}else if(offx>=180){
				this.style.webkitTransform = "translate3d(180px,0,0)";
			}


			// if(offx>-180&&offx<180&&offy>-500&&offy<0){
			// 	this.style.webkitTransform = "translate3d(" + offx + "px," + offy + "px,0)";
			// }else if(offx<=-180&&offy>-500&&offy<0){
			// 	this.style.webkitTransform = "translate3d(-180px," + offy + "px,0)";
			// }else if(offx>=180&&offy>-500&&offy<0){
			// 	this.style.webkitTransform = "translate3d(180px," + offy + "px,0)";
			// }else if(offy<=-500&&offx>-180&&offx<180){
			// 	this.style.webkitTransform = "translate3d(" + offx + "px,-500px,0)";
			// }else if(offy>=0&&offx>-180&&offx<180){
			// 	this.style.webkitTransform = "translate3d(" + offx + "px,0,0)";
			// }
		});

		touch.on('#target', 'dragend', function(ev){
			dx += ev.x;
			// dy += ev.y;
			if(dx>180){
				dx=180;
			}else if(dx<-180){
				dx=-180;
			}
			// if(dy>0){
			// 	dy=0;
			// }else if(dy<-500){
			// 	dy=-500;
			// }
		});


		//游戏时间
		var t;//剩余时间
		var gt;//时间递减函数
		var rt;//icon出现循环函数
		function aa(){
			t=parseInt($("#time").text());
			t--;
			$("#time").text(t);
			if(t<=0){
				$("#time").text("0");
				clearInterval(gt);//时间停止函数
				clearInterval(rt);//停止icon循环出现函数
				clearInterval(sta);//停止碰撞检测
				$(".gameCon").hide();
				$(".shade").fadeIn(300);
				$(".gameWin").fadeIn(300);
				if(score>=600){
					$(".layer").fadeIn(300);
					$(".gameEnd1").fadeIn(300);
				}else{
					$(".layer").fadeIn(300);
					$(".gameEnd2").fadeIn(300);
				}
			}
		}

		
	    
		//检测碰撞
		function check(inum){
			// var el1 = $(".rtest");
			// inum=parseInt($(".num").text());
			// console.log(inum)
			var el1 = $(".r"+inum);
		    var el2 = $(".target");
	        if(impact(el1, el2)){
	        	safe=parseInt($(".safe").text());
	        	// console.log(1)
	        	if(el1.hasClass("c1")){//接到月饼加50分
					el1.hide();
					score+=50;
					$(".gameIcon").text("+50").css("color","red").animate({"opacity":"1"},100).animate({"opacity":"0"},100);
				}else if(el1.hasClass("c2")){//接到青蛙减20分
					el1.hide();
					score-=20;
					$(".gameIcon").text("-20").css("color","green").animate({"opacity":"1"},100).animate({"opacity":"0"},100);
				}
				$("#score").text(score);
	        }else{

	        }
	    }
	    function impact(el1, el2) {
	        var e1 = {
	            x: el1.offset().left+45,
	            y: el1.offset().top+80,
	            w: 20,
	            h: 20
	        }
	        var e2 = {
	            x: el2.offset().left+35,
	            y: el2.offset().top+180,
	            w: 120,
	            h: 220
	        }

	        var px, py;
	        px = e1.x <= e2.x ? e2.x : e1.x;
	        py = e1.y <= e2.y ? e2.y : e1.y;
	        if (px >= e1.x && px <= e1.x + e1.w && py >= e1.y && py <= e1.y + e1.h && px >= e2.x && px <= e2.x + e2.w && py >= e2.y && py <= e2.y + e2.h) {
	            return true;
	        } else {
	            return false;
	        }
	    }