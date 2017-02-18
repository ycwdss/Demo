(function(window, undefined) {
	"use strict";
	var Wx3Tool = function (wx) {
		this.init(wx);
	};
	Wx3Tool.prototype = {
		version : "0.0.1",
		auther : "李鹏飞",
		wx : null,
		init : function(wx) {
			this.wx = wx;
		},
		error : "微信公众号开发工具错误！",
		pvCounterUrl : "../platform/pvCounter.wx",
		METHOD_GET : "GET",
		METHOD_POST : "POST",
		getCurrentUrl : function() {
			return window.location;
		},
		// 获得毫秒。
		getCurrentTimeMillis : function() {
			return new Date().getTime();
		},
		// 获得秒。
		getCurrentSeconts : function() {
			return Math.round(new Date().getTime() / 1000);
		},
		// 获得随机字符串。
		getNonceStr : function() {
			return Math.random().toString().replace(".", "");
		},
		// 获得jsapi签名。
		getSignature : function(ticket, nonceStr, timestamp) {
			var ret = {
				jsapi_ticket : ticket,
				nonceStr : nonceStr,
				timestamp : timestamp,
				url : this.getCurrentUrl()
			};
			var keys = Object.keys(ret);
			keys = keys.sort();
			var newArgs = {};
			keys.forEach(function(key) {
				newArgs[key.toLowerCase()] = ret[key];
			});
			var string = '';
			for ( var k in newArgs) {
				string += '&' + k + '=' + newArgs[k];
			}
			var signStr = string.substr(1);
			return CryptoJS.SHA1(signStr).toString();
		},
		//获得卡券签名。
		getWxCardSignature : function(ticket, timestamp, cardId, code, nonceStr) {
			var args = Array.prototype.slice.call(arguments);
			args = args.sort();
			var strTmp = '';
			for ( var k in args) {
				strTmp += args[k];
			}
			return CryptoJS.SHA1(strTmp).toString();
		},
		//获得卡券扩展信息。
		getCardExt : function(ticket, timestamp, cardId, code, openId, nonceStr) {
			signature = this.getWxCardSignature(ticket, timestamp, cardId, code, nonceStr);
			var str = {
				card_id : cardId,
				code : code,
				timestamp : timestamp,
				nonce_str : nonceStr,
				signature : signature
			};
			return JSON.stringify(str);
		},
		//pv统计。
		pvCounter : function (type, mem, source) {
			$.ajax({
				url : this.pvCounterUrl,
				type : this.METHOD_POST,
				data : {'url' : this.getCurrentUrl().pathname, 'type' : type, 'mem' : mem, 'source' : source},
				//data : "url=" + this.getCurrentUrl().pathname + "&type=" + type + "&mem=" + mem,
				success : function (data) {
				}
			});
		},
		//微信配置。
		wxConfig : function (isDebug, appId, timestamp, nonceStr, signature, jsApiList) {
			wx.config({
				debug : isDebug,
				appId : appId,
				timestamp : timestamp,
				nonceStr : nonceStr,
				signature : signature,
				jsApiList : jsApiList
	        });
		},
		//隐藏右上角功能按钮。
		hideMenu : function () {
			wx.hideOptionMenu();
		},
		//只可分享到朋友圈和朋友
		shareWechatModel : function () {
			wx.hideMenuItems({
	            menuList: ['menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:copyUrl', 'menuItem:share:qq','menuItem:share:QZone', 'menuItem:share:email', 'menuItem:favorite' ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
	        });
		},
		//分享到朋友圈。
		shareToFriends : function (shareTitle, shareUrl, shareImg, fn) {
			wx.onMenuShareTimeline({
	            title: shareTitle, // 分享标题
	            link: shareUrl, // 分享链接
	            imgUrl: shareImg, // 分享图标
	            success: fn
	        });
		},
		//分享给朋友。
		shareToFriend : function (shareTitle, shareDesc, shareUrl, shareImg, type, dataUrl, fn) {
			wx.onMenuShareAppMessage({
	            title: shareTitle, // 分享标题
	            desc: shareDesc, // 分享描述
	            link: shareUrl, // 分享链接
	            imgUrl: shareImg, // 分享图标
	            type: type, // 分享类型,music、video或link，不填默认为link
	            dataUrl: dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
	            success: fn
	        });
		},
		//获取位置信息。
		getLocation : function (fn) {
			wx.getLocation({
				success : fn
			});
		},
		//打开位置信息。
		openLocation : function (data) {
			wx.openLocation(data);
		}
	};
	window.Wx3Tool = Wx3Tool;
})(window);
