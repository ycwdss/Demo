function loaddata(){
   
  
   $('.youpage').hide();
   setTimeout(function(){
       loadimg();
   },500);

}
function loadimg(){
	function a() {
        d++;
        d == 20 && up.init();
        console.log(d);
        }   
    for (var b = ["images/jp1.jpg","images/jp2.jpg","images/jp3.jpg","images/jp4.jpg","images/jp5.jpg","images/jp6.jpg","images/jpp1.png","images/jpp2.png","images/jpp3.png","images/jpp4.png","images/jpp5-1.png","images/jpp5-2.png","images/jpp5-3.png","images/jpp5-4.png","images/jpp5-5.png","images/z1.png","images/z2.png","images/z3.png","images/z4.png","images/z5.png"], c = b.length, d = 0, e = 0; c > e; e++) {
        var g = new Image;
        g.onload = a, g.src = b[e]
    }
}