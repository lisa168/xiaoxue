require(['js/config.js'],function (){
	require(['jquery','utils','modules/common/pages'],function ($,utils,PageNav){
		var funcs={};
		funcs.pageFn=function (){
			var curPage=parseInt($('.currentPage').val()||1);
			var totalPage=parseInt($('.totalPage').val()||1);
			var pager=new PageNav({
				currentPage:curPage,
				totalPage:totalPage,
				wrapId:'#pageNav',
				callback:function (curPage){
					alert(curPage)
				}
			});
		}
		funcs.page2Fn=function (){
			var curPage=parseInt($('.currentPage').eq(1).val()||1);
			var totalPage=parseInt($('.totalPage').eq(1).val()||1);
			var pager=new PageNav({
				currentPage:curPage,
				totalPage:totalPage,
				wrapId:'#pageNav2',
				callback:function (curPage){
					alert(curPage)
				}
			});
		}
		funcs.page3Fn=function (){
			var curPage=parseInt($('.currentPage').eq(2).val()||1);
			var totalPage=parseInt($('.totalPage').eq(2).val()||1);
			var pager=new PageNav({
				currentPage:curPage,
				totalPage:totalPage,
				wrapId:'#pageNav3',
				callback:function (curPage){
					alert(curPage)
				}
			});
		}
		// 初始化
		funcs.init=function (){
			// 分页
			this.pageFn();
			this.page2Fn();
			this.page3Fn();
		}
		funcs.init();
	});
});
