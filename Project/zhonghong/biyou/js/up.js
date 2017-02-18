!function(){
	 var yx=$(window).height();
	 var startTime=0,startY=0,offsetY=0,idx=1,ii=0,mm=0,boundary=0,endTime,len=5;
     up={   
     	    box:document.getElementById('box'),
     	    init:function(){
     	    	      var self=this;
	                  $('.youpage').show();
                      $('.page').each(function(i){
                            $('.page').eq(i).css("top",i*yx+"px");  
                      });
                      self.loading();    	    	      
     	    },
     	    loading:function(){
     	    	      var self=this;
     	    	      setTimeout(function(){
     	    	      	   $(".page1").css("-webkit-transition","top 0.5s");
     	    	      	   $(".loading").css("-webkit-transition","top 0.5s");
                           $(".loading").css('top','-100%');
                           $(".page1").css('top','0%');
                           setTimeout(function(){
                           		$("#music")[0].play();
                       			$(".musicIcon").show();
                           	    self.page1('up');
                                self.Event();
								$('.hide').addClass('show').removeClass('hide');
                           },500);
                       },500);  
     	    },
     	    page1:function(fx){
     	    		$('.page1_sp2').css({"opacity":"1","-webkit-transform":"rotate(6deg)"});
     	    	    $('.page1_sp3').css({"opacity":"1","background-size":"100% 100%"});
     	    	    $('.page1_sp4').css({"opacity":"1","right":"60px"});
     	    	    $('.page1_sp5').css({"opacity":"1"});
     	    	    $('.page1_sp6').css({"opacity":"1"});
     	    	    setTimeout(function(){
     	    	    	$(".page1_sp6").addClass("ani1_3");
     	    	    },2400);
     	    	    setTimeout(function(){
     	    	    	$(".page1_sp5").addClass("ani1_1");
     	    	    },3900);
     	    	    setTimeout(function(){
     	    	    	$(".page1_sp3").addClass("ani1_2");
     	    	    },4500);
     	    },
     	    page2:function(fx){
     	    	     $('.page2_sp2').css({"opacity":"1","background-size":"65% 65%"});
     	    	    $('.page2_sp3').css({"opacity":"1","right":"10px"});
     	    	    $('.page2_sp4').css({"opacity":"1","-webkit-transform":"rotate(0deg)"});
     	    	    $('.page2_sp5').css({"opacity":"1"});
     	    	    $('.page2_sp6').css({"opacity":"1"});
     	    	    setTimeout(function(){
     	    	    	$(".page2_sp6").addClass("ani2_3");
     	    	    },2400);
     	    	    setTimeout(function(){
     	    	    	$(".page2_sp5").addClass("ani2_1");
     	    	    },3900);
     	    	    setTimeout(function(){
     	    	    	$(".page2_sp3").addClass("ani2_2");
     	    	    },4500);
     	    },
     	    page3:function(fx){
     	    	      $('.page3_sp2').css({"opacity":"1","background-size":"100% 100%"});
     	    	    $('.page3_sp3').css({"opacity":"1","left":"50px"});
     	    	    $('.page3_sp4').css({"opacity":"1","top":"750px"});
     	    	    $('.page3_sp5').css({"opacity":"1"});
     	    	    $('.page3_sp6').css({"opacity":"1"});
     	    	    setTimeout(function(){
     	    	    	$(".page3_sp6").addClass("ani3_3");
     	    	    },2400);
     	    	    setTimeout(function(){
     	    	    	$(".page3_sp5").addClass("ani3_1");
     	    	    },3900);
     	    	    setTimeout(function(){
     	    	    	$(".page3_sp3").addClass("ani3_2");
     	    	    },4500);
     	    },
     	    page4:function(fx){
     	    	     $('.page4_sp3').css({"opacity":"1"});
                $('.page4_sp4').css({"opacity":"1"});
                setTimeout(function(){
                  $(".page4_sp3").addClass("ani4_1");
                },1000);
                setTimeout(function(){
                  $(".page4_sp4").addClass("ani4_2");
                },3500);
     	    },
     	    Event:function(){
                  this.box.addEventListener('touchstart', this.start);
			      this.box.addEventListener('touchmove', this.move);
			      this.box.addEventListener('touchend', this.end);
     	    },
     	    start:function(evt){
     	    	//记录刚刚开始按下的时间
				 	startTime = new Date() * 1;
                     
				 	//记录手指按下的坐标
				 	startY = evt.touches[0].pageY;
	                $('.page').css("-webkit-transition","");
	                //清除偏移量
				 	offsetY = 0;
     	    	   // console.log(startY);
     	    },
     	    move:function(evt){
     	    	 evt.preventDefault();
     	    	  offsetY = evt.targetTouches[0].pageY -startY;
                  //起始索引
                  console.log(idx);
     	    	  ii=idx-1;
     	    	  //结束索引
     	    	  mm=idx+1;
     	    	  //console.log(ii+'...'+idx+'...'+mm)
     	    	  
     	    	  if(ii>=1){
			 	       $('.page:eq('+ii+')').css("top",(offsetY-yx)+"px");
			 	  }
	              $('.page:eq('+idx+')').css("top",(offsetY)+"px");
	              $('.page:eq('+mm+')').css("top",(offsetY+yx)+"px");
			 		
     	    	
     	    },
     	    end:function(){
     	    	 var self=this;
     	    	 boundary = 200;
				 //手指抬起的时间值
				 endTime = new Date() * 1;
				 if(offsetY!=0){
				     if(endTime - startTime > 300){
								if(offsetY >= boundary){
									goIndex(-1);
								}else if(offsetY <-boundary){
									goIndex(+1);
								}else{
									goIndex(0);
								}
							 }else{
								if(offsetY > 50){
									goIndex(-1);
								}else if(offsetY < -50){
									goIndex(+1);
								}else{
									goIndex(0);
								}
					}
				}
						 function goIndex(n){
						 	      console.log(n);
								  if(ii>=1){
							 	       $('.page:eq('+ii+')').css("-webkit-transition","top 0.5s");
							 	  }
					              $('.page:eq('+idx+')').css("-webkit-transition","top 0.5s");
					              $('.page:eq('+mm+')').css("-webkit-transition","top 0.5s");
					              $('.page:eq('+(idx+2)+')').css("-webkit-transition","top 0.5s");
							 	  if(n==0){
							     	    	  if(ii>=1){
										 	       $('.page:eq('+ii+')').css("top",(-yx)+"px");
										 	  }
								              $('.page:eq('+idx+')').css("top","0px");
								              $('.page:eq('+mm+')').css("top",(yx)+"px");
								 }
								 if(n==1){
								 	     if(idx<len-1){
							     	    	  if(ii>=1){
										 	       $('.page:eq('+ii+')').css("top",(-yx)+"px");
										 	  }
								              $('.page:eq('+idx+')').css("top",(-yx)+"px");
								              $('.page:eq('+mm+')').css("top","0px");
								              $('.page:eq('+(idx+2)+')').css("top",(yx)+"px");
								              idx++;
								              setTimeout(function(){
								                   pageshow(idx,"up");
								              },500);
								          }else{
								          	  if(ii>=1){
										 	       $('.page:eq('+ii+')').css("top",(-yx)+"px");
										 	  }
								              $('.page:eq('+idx+')').css("top","0px");
								              $('.page:eq('+mm+')').css("top",(yx)+"px");
								          }
								 }
								 if(n==-1){   
								 	       if(idx>1){
								 	          if((ii-1)>=1){
										 	       $('.page:eq('+(ii-1)+')').css("top",(-yx)+"px");
										 	  }
							     	    	  if(ii>=1){
										 	       $('.page:eq('+ii+')').css("top",(0)+"px");
										 	  }
								              $('.page:eq('+idx+')').css("top",(yx)+"px");
								              $('.page:eq('+mm+')').css("top",(yx)+"px");
								              idx--;
								              setTimeout(function(){
								                   pageshow(idx,"down");
								              },500);
								            }else{
								            	 if(ii>=1){
										 	       $('.page:eq('+ii+')').css("top",(-yx)+"px");
											 	  }
									              $('.page:eq('+idx+')').css("top","0px");
									              $('.page:eq('+mm+')').css("top",(yx)+"px");
								            }
								 }

							     if(idx==(len-1)){
							     	document.getElementById('aab').style.display='none';
							     }else{
							     	document.getElementById('aab').style.display='block';

							     }
						 }

						 function pageshow(pageid,mfx){
                                   if(pageid==2){
                                   	     	 up.page2(mfx);
                                   }
                                   if(pageid==3){
                                   	     	 up.page3(mfx);
                                   }
                                   if(pageid==4){
                                   	     	 up.page4(mfx);
                                   }
						 }
     	    }
     }
}();