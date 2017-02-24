/**
 * Created by wangzan on 2016/12/18.
 */
function impact(obj1, obj2) {
    //obj1 移动的目标 obj2碰撞的目标
    var o = {
        x: obj1.offset().left,
        y: obj1.offset().top-120,
        w: obj1.width(),
        h: obj1.height()
    }
    var d = {
        x: obj2.offset().left,
        y: obj2.offset().top,
        w: obj2.width(),
        h: obj2.height()
    }
    var px, py;
    px = o.x <= d.x ? d.x : o.x;
    py = o.y <= d.y ? d.y : o.y;

    // 判断点是否都在两个对象中
    if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {
        return true;
    } else {
        return false;
    }
}
