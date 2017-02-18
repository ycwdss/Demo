 //弹窗 start
    function showMask(){  
         $("#mask").css("height",$(document).height());  
         $("#mask").css("width",$(document).width());  
         $("#mask").show();  
    }  
    //让指定的DIV始终显示在屏幕正中间
    var count=0;  
    function letDivCenter(divName,content){  
    
        var top = ($(window).height() - $(content).height())/2; 
        console.log($(window).height(),$(content).height())
        var left = ($(window).width() - $(content).width())/2;              
                
        $(divName).html($(content).html()).css( { position : 'fixed', 'top' : top, left : 0, right : 0 } ).show();  
        
    }  
    function showAll(divName,serviceInfo){  
         showMask();  
         letDivCenter(divName,serviceInfo);  
    }
    function hideAll(divName){
         $("#mask").hide();
         $(divName).hide();
    } 
    //弹窗 end