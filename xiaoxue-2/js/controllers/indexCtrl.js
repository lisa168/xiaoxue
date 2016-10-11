require(['js/config.js'],function (){
	require(['jquery','utils'],function ($,utils){
		var funcs={};
		funcs.tabFn=function (){
			$('.lunboImg ul li').clone().appendTo($('.lunboImg ul'));
			$('.lunboImg ul').css({'width':$('.lunboImg ul li').length*$('.lunboImg ul li').eq(0).width()});
			var W=$('.lunboImg ul').width()/2;
			$('.lunboImg ol').css({'width':$('.lunboImg ol li').innerWidth()*$('.lunboImg ol li').length});
			$('.lunboImg ol').css({'marginLeft':-$('.lunboImg ol').width()/2});
			var len=$('.lunboImg ol li').length;
			var iNow=0;
			var timer2=null;
			// 自动轮播
			timer2=setInterval(function (){
				iNow++;
				tab();
			},2000);
			// 鼠标经过小按钮
			$('.lunboImg ol li').hover(function (){
				clearInterval(timer2);
				iNow=$(this).index();
				tab();
			},function (){
				timer2=setInterval(function (){
					iNow++;
					tab();
				},2000);
			})
			function tab(){
				$('.lunboImg ol li').eq(iNow%len).addClass('active').siblings().removeClass('active');
				startMove($('.lunboImg ul'),-iNow*$('.lunboImg ul li').width());
			}
			var left=0;
			function startMove(obj,iTarget){
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
						obj.css({'left':(left%W-W)/W+'px'});
					}
					if(n==count){
						clearInterval(timer);
					}
				},30);
			}
		}
		
		// 初始化
		funcs.init=function (){
			// 自动轮播图
			this.tabFn();
		}
		funcs.init();
	});
});
