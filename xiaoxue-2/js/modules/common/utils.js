/**
 * 通用函数库.
 */
define(['jquery'],function($){
    var rets = {};
    rets.codeShowFn=function (){
		var timer=null;
		$('.download a').hover(function (){
			clearInterval(timer)
			timer=setTimeout(function (){
				$('.code').show();
			},200)
		},function (){
			clearInterval(timer)
			timer=setTimeout(function (){
				$('.code').hide();
			},200)
		});
	}
	rets.goBackFn=function (){
		var timer=null;
		var isSys=false;
		$('.goBack').on('click',function (){
			var scrollTop=$(window).scrollTop();
			if(scrollTop>0){
				var start=scrollTop;
				var dis=0-scrollTop;
				var count=Math.floor(700/30);
				var n=0;
				timer=setInterval(function (){
					isSys=false;
					n++;
					var a=1-n/count;
					$(window).scrollTop(start+dis*(1-Math.pow(a,3)));
					if(n==count){
						clearInterval(timer);
					}
				},30)
			}
		});
		$(window).on('scroll',function (){
			if(isSys){
				clearInterval(timer);
			}
			isSys=true;
		});
	}
	rets.marqueeFn=function (){
		if($('.marquee').length>0){
			$('.marquee ul li').clone().appendTo($('.marquee ul'));
			$('.marquee ul').css({'width':$('.marquee ul li').length*$('.marquee ul li').eq(0).outerWidth(true)});
			var W=$('.marquee ul').width()/2;
			var left=0;
			clearInterval(timer);
			var timer=setInterval(function (){
				left+=2;
				$('.marquee ul').css({left:-left%W+'px'})
			},30)
		}
	}
	rets.tabFn=function (){
		if($('.tabBtn').length>0){
			$('.tabBtn ul li').on('click',function (){
				$(this).addClass('active').siblings().removeClass('active');
				$('.tabBox .tabItem').eq($(this).index()).show().siblings().hide();
			});
		}
	}
    rets.init=function (){
      //显示二维码
      this.codeShowFn();
      //置顶
      this.goBackFn();
      // 无缝滚动
      this.marqueeFn();
      // 选项卡
      this.tabFn();

    }
    // 调用
    rets.init();

    return rets;
});
