
    $(window).load(function(){
      addCol();
    });
    //生成色块
    function addCol(){
      $(".color").remove();
      $(".gameMty>img").attr("src","images/mty0.png");
      for(var y=0;y<10;y++){
        for(var x=0;x<10;x++){
          var colLeft=56*x;
          var colTop=56*y;
          var rand=parseInt(Math.random()*5+1);
          $(".gameStart").append("<div onclick='javascript:colClick(this);' name='c"+rand+"' id='a"+x+"b"+y+"' class='a"+x+"b"+y+" color c"+rand+"' style='top:"+colTop+"px;left:"+colLeft+"px;'></div>");
        }
      }
      //插入猫头鹰色块
      for(var i=1;i<=5;i++){
        var cLength=$(".c"+i).length;
        var cRand=parseInt(Math.random()*cLength);
        var cRand2;
        $(".c"+i).eq(cRand).addClass("cMty c"+i+"_1");
        if(cRand<3){
          cRand2=cRand+2;
        }else{
          cRand2=cRand-2;
        }
        if(i==1||i==2){
          $(".c"+i).eq(cRand2).addClass("cMty c"+i+"_1");
        }
      }

      // for(var i=1;i<=5;i++){
      //   var cLength=$(".c"+i).length;
      //   var cLength2=cLength-1;
      //   var arrC=[];
      //   for(var j=0;j<cLength2;j++){
      //     arrC.push(j);
      //   }
      //   var cRand=parseInt(Math.random()*cLength);
      //   arrC.splice($.inArray(cRand,arrC),1);
      //   var cRand2=parseInt(Math.random()*arrC.length);
      //   $(".c"+i).eq(cRand).addClass("cMty c"+i+"_1");
      //   if(i==1||i==2){
      //     $(".c"+i).eq(cRand2).addClass("cMty c"+i+"_1");
      //   }
      // }
    }
    //点击色块
    function colClick(obj){
      $(obj).addClass("clearCol");//clerCol用作需要清除色块的标识
      funSearch();//判断点击色块周围颜色
      var clearLength=$(".clearCol").length;
      $(obj).addClass("rotate");
      setTimeout(function(){
        $(".rotate").removeClass("rotate");
        if(clearLength>=3){
          $(".clearCol").remove();
        }else{
          $(".clearCol").removeClass("clearCol");
        }
      },300);
      setTimeout(function(){
        var cMtyL=$(".cMty").length;//剩余猫头鹰色块的数量
        var cMtyL2=7-cMtyL;//当前收集猫头鹰数量
        if(cMtyL<=2){
          funSuc();
        }else{
          for(var i=0;i<cMtyL2;i++){
            $(".gameMty>img").eq(i).attr("src","images/mty1.png");
          }
        }
        //色块向下移动
        for(var y=0;y<10;y++){
          for(var x=0;x<10;x++){
            var idLength=$("#a"+x+"b"+y+"").length;//判断当前坐标位置是否有色块
            if(idLength==0){
              var h=0;
              for(var i=0;i<y;i++){//遍历当前列判断刚消失的色块上方有多少位置为空
                var l=$("#a"+x+"b"+i+"").length;
                if(l==0){h++;}
              }
              for(var j=y-1;j>=h;j--){//遍历当前列判断刚消失的色块上方有多少色块
                var k=j+1;
                $("#a"+x+"b"+j+"").attr("id","a"+x+"b"+k+"");//更新色块坐标
              }
            }
          }
        }
        //色块向左移动
        for(var x=9;x>=0;x--){
          var m=0;//用于判断当前列有多少位置为空
          for(var y=0;y<10;y++){
            var idLength=$("#a"+x+"b"+y+"").length;
            if(idLength==0){
              m++;
              if(m>=10){//如果整列为空
                for(var j=0;j<10;j++){
                  for(var i=x+1;i<10;i++){
                    var k=i-1;
                    $("#a"+i+"b"+j+"").attr("id","a"+k+"b"+j+"");//更新色块坐标
                  }
                }
              }
            }
          }
        }
        //执行移动效果
        for(var y=0;y<10;y++){
          for(var x=0;x<10;x++){
            var colLeft=56*x;
            var colTop=56*y;
            $("#a"+x+"b"+y+"").animate({"top":colTop+"px","left":colLeft+"px"},500);
          }
          
        }
      },300);
      
      
      
    }
    function funSearch(){
      //xy为色块坐标
      for(var y=0;y<10;y++){
        for(var x=0;x<10;x++){
          if($("#a"+x+"b"+y+"").hasClass("clearCol")){
            var colName=$("#a"+x+"b"+y+"").attr("name");//用于判断是否是相同颜色
            var xL=x-1;
            var xR=x+1;
            var yT=y-1;
            var yB=y+1;
            if($("#a"+xL+"b"+y+"").attr("name")==colName||$("#a"+xR+"b"+y+"").attr("name")==colName||$("#a"+x+"b"+yT+"").attr("name")==colName||$("#a"+x+"b"+yB+"").attr("name")==colName){
              // $("#"+colId+"").addClass("clearCol");
              //左边
              if($("#a"+xL+"b"+y+"").attr("name")==colName){
                $("#a"+xL+"b"+y+"").addClass("clearCol");
                $("#a"+xL+"b"+y+"").addClass("rotate");
                searchXY(colName,xL,y);
              }
              //右边
              if($("#a"+xR+"b"+y+"").attr("name")==colName){
                $("#a"+xR+"b"+y+"").addClass("clearCol");
                $("#a"+xR+"b"+y+"").addClass("rotate");
                searchXY(colName,xR,y);
              }
              //上边
              if($("#a"+x+"b"+yT+"").attr("name")==colName){
                $("#a"+x+"b"+yT+"").addClass("clearCol");
                $("#a"+x+"b"+yT+"").addClass("rotate");
                searchXY(colName,x,yT);
              }
              //下边
              if($("#a"+x+"b"+yB+"").attr("name")==colName){
                $("#a"+x+"b"+yB+"").addClass("clearCol");
                $("#a"+x+"b"+yB+"").addClass("rotate");
                searchXY(colName,x,yB);
              }
            }else{
              $("#a"+x+"b"+y+"").removeClass("clearCol");
            }
          }
        }
      }
    }

    //遍历相邻色块
    function searchXY(colName,x,y){
      var xL=x-1;
      var xR=x+1;
      var yT=y-1;
      var yB=y+1;
      //左边
      if($("#a"+xL+"b"+y+"").attr("name")==colName){
        if(!$("#a"+xL+"b"+y+"").hasClass("clearCol")){
          $("#a"+xL+"b"+y+"").addClass("clearCol");
          $("#a"+xL+"b"+y+"").addClass("rotate");
          searchXY(colName,xL,y);
        }
        
      }
      //右边
      if($("#a"+xR+"b"+y+"").attr("name")==colName){
        if(!$("#a"+xR+"b"+y+"").hasClass("clearCol")){
          $("#a"+xR+"b"+y+"").addClass("clearCol");
          $("#a"+xR+"b"+y+"").addClass("rotate");
          searchXY(colName,xR,y);
        }
      }
      //上边
      if($("#a"+x+"b"+yT+"").attr("name")==colName){
        if(!$("#a"+x+"b"+yT+"").hasClass("clearCol")){
          $("#a"+x+"b"+yT+"").addClass("clearCol");
          $("#a"+x+"b"+yT+"").addClass("rotate");
          searchXY(colName,x,yT);
        }
      }
      //下边
      if($("#a"+x+"b"+yB+"").attr("name")==colName){
        if(!$("#a"+x+"b"+yB+"").hasClass("clearCol")){
          $("#a"+x+"b"+yB+"").addClass("clearCol");
          $("#a"+x+"b"+yB+"").addClass("rotate");
          searchXY(colName,x,yB);
        }
      }
              
    }
    

    //完成游戏
    function funSuc(){
      clearInterval(gt);//停止计时
      $(".gameMty>img").attr("src","images/mty1.png");
      $(".gameBtn0").hide();
      $(".gameBtn1").show();
      $(".gameShade").show();
    }


    













