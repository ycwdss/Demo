/**
 * Created by liu on 16-1-6.
 */
define(['jquery','model/totop'],function($) {
    var map = new BMap.Map("Map");          // 创建地图实例
    var point = new BMap.Point(113.719409,34.751165);  // 创建点坐标
    map.centerAndZoom(point, 18);                 // 初始化地图，设置中心点坐标和地图级别

    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());

    function createIcon(json) {
        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json.h))
        return icon;
    }

    var marker2 = new BMap.Marker(point,{icon:createIcon({w:20,h:20})});  // 创建标注
    map.addOverlay(marker2);

    var opts = {
        width : 250,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title : "郑州神恩信息技术有限公司",  // 信息窗口标题
        position:BMap.Point(100.719409,33.751165)

    }
    var infoWindow = new BMap.InfoWindow("河南省郑州市金水区郑汴路与玉凤路凤凰城北城五楼", opts);  // 创建信息窗口对象

    var label = new BMap.Label("郑州神恩信息技术有限公司",{
        position:point
    });  // 创建文本标注对象
    label.setStyle({
        color : "red",
        fontSize : "12px",
        height : "20px",
        lineHeight : "20px",
        fontFamily:"微软雅黑"
    });
    map.addOverlay(label);

    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
});