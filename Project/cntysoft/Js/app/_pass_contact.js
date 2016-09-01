/**
 * Created by jiayin on 2015/12/28.
 */
define(['jquery','map','model/totop'],function($) {
    //标注点数组
    var markerArr = [{
        title: "神恩信息总部",
        content: "河南省郑州市金水区郑汴路与玉凤路凤凰城北城五楼",
        point: "113.719633|34.75151",
        isOpen: 1,
        icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}
    }
    ];

//创建和初始化地图函数：
    function initMap(markerArr) {
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker(markerArr);//向地图中添加marker
    }

//创建地图函数：
    function createMap() {
        var map = new BMap.Map("Map");//在百度地图容器中创建一个地图
        var point = new BMap.Point(113.718957, 34.749541);//定义一个中心点坐标
        map.centerAndZoom(point, 18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
//地图事件设置函数：
    function setMapEvent() {
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }

//地图控件添加函数：
    function addMapControl() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }
//创建marker
    function addMarker(markerArr) {
        for (var i = 0; i < markerArr.length; i++) {
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0, p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point, {icon: iconImg});
            var iw = createInfoWindow(markerArr,i);
            var label = new BMap.Label(json.title, {"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor: "#808080",
                color: "#333",
                cursor: "pointer"
            });

            (function () {
                var index = i;
                var _iw = createInfoWindow(markerArr,i);
                var _marker = marker;
                _marker.addEventListener("click", function () {
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open", function () {
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close", function () {
                    _marker.getLabel().show();
                })
                label.addEventListener("click", function () {
                    _marker.openInfoWindow(_iw);
                })
                if (!!json.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }

//创建InfoWindow
    function createInfoWindow(markerArr,i) {
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
        return iw;
    }

//创建一个Icon
    function createIcon(json) {
        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json.h), {
            imageOffset: new BMap.Size(-json.l, -json.t),
            infoWindowOffset: new BMap.Size(json.lb + 5, 1),
            offset: new BMap.Size(json.x, json.h)
        })
        return icon;
    }

    initMap(markerArr);//创建和初始化地图

        //导航背景
    $(window).scroll(function () {
        var header = $(".header");
        var top = $(window).scrollTop();
        if (top > 700) {
            header.addClass('header_active');
        }
        else {
            header.removeClass('header_active');
        }
    });

define(['jquery'],function($) {
   $(function(){
// 百度地图API功能
       var map = new BMap.Map('Map');
       var poi = new BMap.Point(113.719633,34.75151);
       map.centerAndZoom(poi, 16);
       map.disableScrollWheelZoom();

       var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
           '地址：金水区郑汴路与玉凤路凤凰城北城五楼<br/>电话：0371-55221883<br/>简介：凤凰筑巢整合了建材家居行业的所有信息，用户可以根据自己的需求， 任意搜索想要的商品，包括展示图、价格、品牌、店铺等' +
           '</div>';

       //创建检索信息窗口对象
       var searchInfoWindow = null;
       searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
           title  : "凤凰筑巢总部",      //标题
           width  : 290,             //宽度
           height : 105,              //高度
           panel  : "panel",         //检索结果面板
           enableAutoPan : true,     //自动平移
           searchTypes   :[
               BMAPLIB_TAB_SEARCH,   //周边检索
               BMAPLIB_TAB_TO_HERE,  //到这里去
               BMAPLIB_TAB_FROM_HERE //从这里出发
           ]
       });
       var marker = new BMap.Marker(poi); //创建marker对象
       marker.enableDragging(); //marker可拖拽
       searchInfoWindow.open(marker);
       //marker.addEventListener("click", function(e){
       //    searchInfoWindow.open(marker);
       //})
       map.addOverlay(marker); //在地图中添加marker
       //样式1
       var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "凤凰筑巢总部", {
           title: "凤凰筑巢总部", //标题
           panel : "panel", //检索结果面板
           enableAutoPan : true, //自动平移
           searchTypes :[
               BMAPLIB_TAB_FROM_HERE, //从这里出发
               BMAPLIB_TAB_SEARCH   //周边检索
           ]
       });
       function openInfoWindow1() {
           searchInfoWindow1.open(new BMap.Point(113.719633,34.75151));
       }
   })

})
});