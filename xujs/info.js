;(function($){
	var timer=null;
	//angular渲染

		var myApp=angular.module("myApp",[]);
			myApp.controller("ctr",["$scope","$http",function($scope,$http){
				
					$http.get("data.json")

						.success(function(data){
								$scope.infos=data;
						})

			}])


	//初始化
		setTimeout(function(){
			init();
		},20);
		
		function init(){
			
			//门票导航
			$("#menpiaonav").on("click","li",function(){
			
				$(this).addClass("on").siblings().removeClass();

			})

			//头部颜色淡出
				
			
			var maincon=document.getElementById('main_scroll'),
				content=document.getElementById("content_scroll"),
				content_top=0,
				main_top=0;

			maincon.onscroll=function(){
				 main_top=maincon.scrollTop,	//滚动条高度
				h1=document.getElementById("h1"),
				img_height=$(".title").height(),	//放图片盒子的高度
				top_height=$(".header").height(),	//头部的高度
				n=h1.getAttribute("data-opction"),	//自定义属性
				content_top=content.offsetTop,		//定位导航距离顶部的高度
				i=0;
				
				if(main_top>=content_top-top_height){
					$(".nav").css({
						"position":"fixed",
						"left":0,
						"top":""+top_height+"px",
					    "z-index":"10000"
					})
				}else{
					$(".nav").css({
						"position":"relative",
						"left":0,
						"top":0
						
					})
				}
				
				if(main_top<img_height-top_height){

					var n=0+main_top*0.0087
					$(".header h1").css({
						"opacity":n
					})
				}else{
					$(".header h1").css({
						"opacity":1
					})
				}				
			}

			//点击导航添加样式
			$(".nav").on("click","li",function(){
				$(this).addClass("on").siblings().removeClass();

				main_top=main.scrollTop,  //滚动条高度
				targetd=$(this).attr("data-value"),
				content_top=content.offsetTop;
				
				if(!targetd){
					$("#main_scroll").css({
						"-webkit-transform":"translate3d(0,-main_top+content_top,0)",
						"-webkit-transform":"transform 2s" 

					})/*(main_top+content_top)*/
				}
				
			})


			//点击门票玩乐等导航
			
			$(".manu").on("click","li",function(){
				var index=$(this).index();
				/*console.log(index)*/
				if(index==1){
					window.location.href="menpiaowanle.html";
				}else if(index==0){
					window.location.href="zhoubian.html";
				}
			})

			$(".info").on("click","dl",function(){
				var index=$(this).index();
				/*console.log(index)*/
				if(index==0){
					window.location.href="chujing.html";
				}else if(index==1){
					window.location.href="guonie.html";
				}else if(index==2){
					window.location.href="jipiao.html";
				}
			})


		}

})(Zepto)