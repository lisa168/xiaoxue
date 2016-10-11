require(['js/config.js'],function (){
	require(['jquery','utils'],function ($,utils){
		var funcs={};
		funcs.tabFn=function (){
			var W=$('.imgbox').width(),
				timer2=null,
				iNow=0;
			$('.imgbox a').clone(true).appendTo($('.imgbox'));
			$('.imgbox').css({'width':$('.imgbox a').eq(0).outerWidth(true)*$('.imgbox a').length});
			
			// 下一张
			$('.whiteBg .nextBtn').on('click',function (){
				iNow++;
				tab();
			});
			// 上一张
			$('.whiteBg .prevBtn').on('click',function (){
				iNow--;
				tab();
			});
			$('.whiteBg .nextBtn,.whiteBg .prevBtn').hover(function (){
				clearInterval(timer2);
			},function (){
				timer2=setInterval(function (){
					iNow++;
					tab();
				},2000)
			});
			clearInterval(timer2);
			timer2=setInterval(function (){
				iNow++;
				tab();
			},2000)
			function tab(){
				move($('.imgbox'),-$('.imgbox a').outerWidth(true)*iNow);
			}
			var w=$('.imgbox').width()/2;
			var left=0;
			function move(obj,iTarget){
				var start=left;
				var dis=iTarget-start;
				var count=Math.floor(700/30);
				var n=0;
				clearInterval(timer);
				var timer=setInterval(function (){
					n++;
					var a=1-n/count;
					left=start+dis*(1-Math.pow(a,3));
					if(left<0){
						obj.css({'left':left%W+'px'});	
					}else{
						obj.css({'left':(left%W-W)%W+'px'});	
					}
					if(n==count){
						clearInterval(timer);
					}
				},30)
			}
		}
		// 初始化
		funcs.init=function (){
			this.tabFn();
		}
		funcs.init();
	});
});
