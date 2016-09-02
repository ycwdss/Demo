/**
 * Created by Administrator on 2015/12/4.
 */
define(['jquery'],function(){
    $(function(){
        $('#zoom').hover(function(){
            $('#float').show();
            $('#big_img').show();
        },function(){
            $('#float').hide();
            $("#big_img").hide();
        });
        var zoom=document.getElementById('zoom');
        zoom.onmousemove = function (ev) {
            $('.float,.big_pic').show();
            var zoom_offset=$('#zoom').offset();
            var zoomImg_offset = $('#zoom img').offset();
            var float_offset = $('#float').offset();

            var oEvent = ev || event;
            var l = oEvent.clientX - zoom_offset.left- ($('#float').width()+2)/ 2;
            var h = oEvent.clientY - zoom_offset.top -  ($('#float').height()+2)/2;
            if (l < 0) {
                l = 0;
            }
            else if (l > $('#zoom img').width() - $('#float').width()-2) {
                l = $('#zoom').width() - $('#float').width()-2
            }
            if (h < 0) {
                h = 0;
            }
            else if (h > $('#zoom img').height() - $('#float').height()-2) {
                h=$('#zoom').height() - $('#float').height()-2;
            }
            $('#float').css({'left':l+'px','top':h+'px'});
            //float.style.left = l + 'px';
            //float.style.top = h + 'px';
            var l_percent = l / ($('#zoom img').width() - $('#float').width()-2);
            var h_percent = h / ($('#zoom img').height() - $('#float').height()-2);

            //var l_percent = l / (small_pic.offsetWidth - float.offsetWidth);
            //var h_percent = h / (small_pic.offsetHeight - float.offsetHeight);
            var big_left=($('#big_img').width() -$('#big_img img').width() )* l_percent;
            var big_top=($('#big_img').height() -$('#big_img img').height()) *h_percent;
            //big.style.left = -(big.offsetWidth - big_pic.offsetWidth) * l_percent + 'px';
            //big.style.top = -(big.offsetHeight - big_pic.offsetHeight) * h_percent + 'px';
            $('#big_img img').css({'left':big_left+'px','top':big_top+'px'});
        }
    });
});