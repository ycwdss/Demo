
// 获取浏览器参数值
function GetQueryString(name)
{
 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
 var r = window.location.search.substr(1).match(reg);
 if(r!=null)return  unescape(r[2]); return null;
}

// 获取用户信息
function GetUserInfo(ut){
	$.ajax({
        url: http+_data.getUserInfo,
        data:{
          ut:ut
        },
        dataType: 'json', //服务器返回json格式数据
        type: "POST",
        async: false,
        success: function (data) {
          console.log(data)

            if(data.code>=100){
              playNum=data.playNum;
              plCount=data.plCount;
              openId=data.openId;
              isTel=data.isTel;
            }
        },
        error: function () {
          alert("网络异常，请稍后再试");
        }
    });
}

// 添加访问记录
function addAccess(ut,url){
	$.ajax({
        url: http+_data.addAccess,
        data:{
          ut:ut,
          type:url
        },
        dataType: 'json', //服务器返回json格式数据
        type: "POST",
        async: false,
        success: function (data) {
          console.log(data);

        },
        error: function () {
          alert("网络异常，请稍后再试");
        }
    });
}

// 验证手机号类型
		// function checkTel(tel){
			
		// 	$.ajax({
	 //             type: "get",
	 //             url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+tel,
	 //             dataType: "jsonp",
	 //             jsonp: "callback",
	 //              async : false,
	 //             success: function(data){
	 //                console.log(data);
	 //                $('.error').css('display','none');
	 //                 	province = data.province,//省份
	 //                  	operators = data.catName,//手机号类型
	 //                    num = data.telString;//手机号码
	                   
	 //             },
	 //             error:function (){    
	 //                alert("手机号有误");        
	 //             }
	 //         });
			
		// }


// 禁止滑动事件
$('body').on('touchmove', function (event) {
	event.preventDefault();
});







