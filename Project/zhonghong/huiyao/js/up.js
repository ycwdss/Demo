!function(){
	 var yx=$(window).height();
	 var startTime=0,startY=0,offsetY=0,idx=1,ii=0,mm=0,boundary=0,endTime,len=7;
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
                           	    self.page1('up');
                                self.Event();
								$('.hide').addClass('show').removeClass('hide');
                           },500);
                       },500);  
     	    },
     	    page1:function(fx){
     	    	     $('.page1_sp2').css("-webkit-transform","scale(1)");
     	    	     $('.page1_sp3').css({"left":"36px","opacity":"1"});
     	    },
     	    page2:function(fx){
     	    	     $('.page2_sp2').css({"-webkit-transform":"scale(1)","top":"388px","left":"272px"});
     	    	     $('.page2_sp3').css({"left":"33px","opacity":"1"});
     	    },
     	    page3:function(fx){
     	    	     $('.page3_sp2').css({"left":"174px","opacity":"1"});
     	    	     $('.page3_sp3').css({"left":"31px","opacity":"1"});
     	    },
     	    page4:function(fx){
     	    	     $('.page4_sp2').css({"left":"206px","opacity":"1"});
     	    	     $('.page4_sp3').css({"left":"28px","opacity":"1"});
     	    },
     	    page5:function(fx){
				     setTimeout(function(){
							 $('.page5_sp2,.page5_sp3,.page5_sp4,.page5_sp5,.page5_sp6').css({"-webkit-transform":"scale(1)","opacity":"1"});
							 $('.page5_sp7').css({"left":"28px","opacity":"1"});
					 },500);
     	    },
     	    page6:function(fx){
     	    	if(fx=='up'){
     	    	      $('.page6_word').css({"opacity":"1"});
     	    	      $('.page6_sp4').css({"opacity":"1","left":'377px'});
     	    	      $('.page6_sp5').css({"top":"382px","left":'182px',"-webkit-transform":'scale(1,1)'});
     	    	 }
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
                                   if(pageid==5){
                                   	     	 up.page5(mfx);
                                   }
                                   if(pageid==6){
                                   	     	 up.page6(mfx);
                                   }
						 }
     	    }
     }
}();