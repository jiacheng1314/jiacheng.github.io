$(function() {
	$(".content .nav ul li:not(#nav-li) a").hover(function() {
		$(this).css("color", "#fff");
		$(this).css("background-color", "#d61518");
	}, function() {
		$(this).css("color", "#000");
		$(this).css("background-color", "#d9d8e0");
	});


	// 定义两个数组
	// 1.遍历li单击数组
	// 2.遍历div内容数组

	// 初始给div设置一个类，display：none；
	// 再设置一个类为display：block；

	// 用for循环的方式添加点击事件


	function ani(claname, type1, type2, type3, type4) {
		if(($("."+claname).offset().top - $(window).scrollTop())<$(window).height()){
			$("." + claname).find("li").eq(0).addClass(type1);
			$("." + claname).find("li").eq(1).addClass(type2);
			$("." + claname).find("li").eq(2).addClass(type3);
			$("." + claname).find("li").eq(3).addClass(type4);
		};
		$(window).scroll(function() {
			if(($("."+claname).offset().top - $(window).scrollTop())<$(window).height()){
				$("." + claname).find("li").eq(0).addClass(type1);
				$("." + claname).find("li").eq(1).addClass(type2);
				$("." + claname).find("li").eq(2).addClass(type3);
				$("." + claname).find("li").eq(3).addClass(type4);
			};
		});
	};
	ani("one", "bounceInLeft", "bounceInRight", "bounceInLeft", "bounceInRight");
	ani("two", "bounceIn", "bounceIn");
	ani("thr", "fadeInDownBig", "fadeInDownBig");
	ani("for", "bounceInUp", "bounceInUp");
	ani("fiv", "rotateInDownLeft", "rotateInDownRight");
	ani("a1", "zoomInLeft", "zoomInRight");
	ani("a2", "bounceInUp", "bounceInUp");
	ani("a3", "rotateInDownLeft", "rotateInDownRight");
	ani("a4", "zoomInLeft", "zoomInRight");
});
