/**
 * 通用函数库.
 */
define(['jquery'],function($){
    var rets = {};
    // 鼠标经过头像
   	rets.headFn=(function (){
		var timer=null;
		$('.headImg').hover(function (){
			clearInterval(timer);
			timer=setTimeout(function (){
				$('.menu').slideDown();
			},200)
		},function (){
			clearInterval(timer);
			timer=setTimeout(function (){
				$('.menu').slideUp();
			},200)
		});
	})();
    rets.init=function (){

    }
    // 调用
    rets.init();

    return rets;
});
