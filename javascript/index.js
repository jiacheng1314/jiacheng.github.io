$(function(){
	//头部和footer链接导航hover
	$(".header .head ul li:not(.active) a,.footer-left-nav li a").hover(function(){
		$(this).css("color","#fff");
	},function(){
		$(this).css("color","#000");
	});
	
	$(".footer-right ul li img").hover(function(){
		$(this).css("transform","scale(1.2)");
	},function(){
		$(this).css("transform","scale(1.0)");
	});
	
})