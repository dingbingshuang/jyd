/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-31 09:08:06
 * @version $Id$
 */
$(document).ready(function(){

  $('.to_top').click(function(){
  	  var speed=400;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
  });
  var $num=$(window).scrollTop();
         if ($num == 0){
       $('.to_top').hide();
    }
});
$(document).scroll(function(){
	 var $num=$(window).scrollTop();
    if ($num > 100){
    	$('.to_top').show();
    }
    else{

    	$('.to_top').hide();
    }
});