var isTool1=0,isTool2=0,isTool3=0,isTool4=0;//用户当天是否已经使用过工具 0为未使用 1为已使用 数据库传值(对应四种工具)
		var flowerNo=9;//当前花的编号 数据库传值
		var nlz=47;//当前花朵的能量值 数据库传值
		var lv;//当前花朵所在等级
		var energyNum;//当前种子开花所需能量值
		var flowerShape;//当前花的形态 1为种子 2为发芽 3为开花

		
		//当前花的形态
		function funShape(){
			if(flowerNo>=1&&flowerNo<=3){
				lv=1;
			}else if(flowerNo>=4&&flowerNo<=6){
				lv=2;
			}else{
				lv=3;
			}
			switch(lv){
				case 1:if(nlz==0){flowerShape=1;}else if(nlz==1){flowerShape=2;}else{flowerShape=3;};
				break;
				case 2:if(nlz>=0&&nlz<6){flowerShape=1;}else if(nlz>=6&&nlz<12){flowerShape=2;}else{flowerShape=3;};
				break;
				case 3:if(nlz>=0&&nlz<12){flowerShape=1;}else if(nlz>=12&&nlz<48){flowerShape=2;}else{flowerShape=3;};
				break;
			}
			if(flowerShape==2){
				$(".flower>img").attr("src","images/flower2-"+lv+".png");
			}else{
				$(".flower>img").attr("src","images/flower"+flowerShape+"-"+flowerNo+".png");
				if(flowerShape==3){
					$(".roomBtn2").fadeIn(300);
					$(".tool>.toolImg").hide();
					$(".tool>.toolImg2").show();
				}
			}
		}

		//进度条
		function funNlz(){
			if(lv==1){
				energyNum=2;
				if(nlz>=2){
					nlz=2;
				}
			}else if(lv==2){
				energyNum=18;
				if(nlz>=18){
					nlz=18;
				}
			}else{
				energyNum=48;
				if(nlz>=48){
					nlz=48;
				}
			}
			$(".energyNum").text(energyNum);
			var proLength=(400*nlz)/energyNum;
			$(".progress").animate({"width":proLength+"px"},300);
		}
		//隐藏工具
		function funTool(_this){
			_this.children(".toolImg").hide();
			_this.children(".toolImg2").show();
		}



		$(".tool>.toolImg").one("click",function(){
			var _this=$(this).parent();
			funTool(_this);
			$(".layer").show();
		});
		//浇水
		$(".tool1>.toolImg").on("click",function(){
			$(".jug").css({"opacity":1,"-webkit-transform":"rotate(0)"});
			setTimeout(function(){
				$(".water").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			},1000);
			setTimeout(function(){
				$(".jug").fadeOut(300);
				$(".water").fadeOut(300);
				isTool1=1;//入库
				nlz+=1;//入库
				funShape();
				funNlz();
				if(flowerShape!=3){
					$(".shade").fadeIn(300);
					$(".share").fadeIn(300);
				}
				$(".layer").hide();
			},2500);
		});
		//除草
		$(".tool2>.toolImg").on("click",function(){
			$(".sickle").show();
			$(".star").show();
			setTimeout(function(){
				$(".sickle").fadeOut(300);
				$(".star").fadeOut(300);
				if(isTool2==0){
					isTool2=1;//入库
					nlz+=2;//入库
				}
				funShape();
				funNlz();
				$(".layer").hide();

			},1500);
		});
		//施肥
		$(".tool3>.toolImg").on("click",function(){
			$(".npk").show();
			setTimeout(function(){
				$(".npk").fadeOut(300);
				$(".star").fadeOut(300);
				if(isTool3==0){
					isTool3=1;//入库
					nlz+=3;//入库
				}
				funShape();
				funNlz();
				$(".layer").hide();
			},1500);
		});
		//阳光
		$(".tool4>.toolImg").on("click",function(){
			$(".sun").show();
			setTimeout(function(){
				$(".sun").fadeOut(300);
				if(isTool4==0){
					isTool4=1;//入库
					nlz+=4;//入库
				}
				funShape();
				funNlz();
				$(".layer").hide();
			},1500);
		});