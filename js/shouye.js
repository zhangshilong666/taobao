// !function(){
// 	var oDiv = document.getElementsByClassName('main1_1right_left_top')[0];
// 	var ul = document.getElementsByClassName("main1_1right_left_top")[0].getElementsByTagName("ul")[0];
// 	var speed = -1;

// 	var timer = setInterval(function(){
// 		ul.style.left = ul.offsetLeft + speed + 'px';
// 		if(ul.offsetLeft<=500){

// 		}
// 	},1)
// }();

	$(function(){
		$('#lunbuoxuanfukuang').hover(function(){
			$('#prev').css('display','block')
			$('#next').css('display','block')
		},function(){
			$('#prev').css('display','none')
			$('#next').css('display','none')
		})
	})
//轮播图
	$(function() {

				$('section .section_main1 .main1_1 .main1_1right .main1_1right_left_top ul').carouFredSel({
					prev: '#prev',
					next: '#next',
					pagination: "#pager",
					scroll: 1000
				});
			});
	$(function(){
		$('section .section_main1 .main1_1 .main1_1right .main1_1right_left_bottom .mrlb_bottom ul').carouFredSel({
					prev: '#pre',
					next: '#nex',
					pagination: "#pager",
					scroll: 1000
				});
		});

//回到顶部动画
	$(function(){
			$('#huidaodingbu .dingbu').click(function(e){
				$('html,body').animate({scrollTop:0},'farst','linear');
				e.preventDefault()
			})

	});


//最大选项卡
	$(function(){
		$('section .section_main1 .main1_1 .main1_1left').hover(function(){
			$('section .section_main1 .main1_1 .main1_1left .sm1_1l_active').fadeTo('slow',1);
		},function(){
			$('section .section_main1 .main1_1 .main1_1left .sm1_1l_active').hide();
		})
	});
	$(function () {

		$("#first").css({ "z-index": "16" });
		$("#second").css({ "z-index": "15" });
		$("#third").css({"z-index":"14"})
		$("#fourth").css({"z-index":"13"})
		$("#fifth").css({"z-index":"12"})
		$("#sixth").css({"z-index":"11"})
		$("#seventh").css({"z-index":"10"})
		$("#eighth").css({"z-index":"9"})
		$("#ninth").css({"z-index":"8"})
		$("#tenth").css({"z-index":"7"})
		$("#eleventh").css({"z-index":"6"})
		$("#twelfth").css({"z-index":"5"})
		$("#thirteenth").css({"z-index":"4"})
		$("#fourteenth").css({"z-index":"3"})
		$("#fifteenth").css({"z-index":"2"})
		$("#sixteenth").css({"z-index":"1"})

		$('section .section_main1 .main1_1 .main1_1left li').hover(function () {
		var thisId = $(this).attr("id");
		$("section .section_main1 .main1_1 .main1_1left .sm1_1l_active div").not($("#k" + thisId)).animate({ opacity: 0 }, 10);
		$("section .section_main1 .main1_1 .main1_1left .sm1_1l_active div").not($("#k" + thisId)).css({ "z-index": "0" });
		$(this).addClass("cur");
		$("#k" + thisId).stop(true, true).animate({ opacity: 1.0 }, 10);
		$("#k" + thisId).css({ "z-index": "16" });
		}, function () {
			var thisId = $(this).attr("id");
			$(this).removeClass("cur");
		});

	});

//回到顶部父级滚动事件
//回到顶部显示隐藏滚动事件
//顶部固定搜索滚动事件
	$(function(){
		$(window).on("scroll",(function(){

			if($(window).scrollTop()>=158){
				$('.gudingsosuo').css('display','block');
			}else{
				$('.gudingsosuo').css('display','none')
			}

			if($(window).scrollTop()>=400){
				$('section #huidaodingbu').css({
					'position':'fixed',
					'top':'60px'
				})
			}else{
				$('section #huidaodingbu').css({
					'position':'absolute',
					'top':'300px'
				})
			}

			if($(window).scrollTop()>=947){
				$('section #huidaodingbu .dingbu').css('display','block')
			}else{
				$('section #huidaodingbu .dingbu').css('display','none')
			}
		}))
	});


//section顶部li hover事件
	$(function(){
		$('section .section_top .conter ul li').hover(
			function(){
				$(this).append("<div><img src='img/shouye_teshuxuanfu1.png'></div>")
			},function(){
				$('section .section_top .conter ul li div').empty()
			}
		)
	});


//ajax页面无刷新
	$(function(){
		$(window).on('scroll',function(){
			if($('body').height()-$(window).scrollTop()-$(window).height()<=1){
				if($(window).scrollTop()<=6000){
					$.get('./data/index_shopping.json',{},function(data){
						$.each(data,function(i,v){
							var div = $(`<div class="shopping"><img src="`+v.image+`" alt=""><p class="p1">`+v.xiangqing+`</p><p class="p2">`+v.price+`</p></div>`)
							$('section .section_main2 .main2_bottom').append(div)
						})	
					},'json')
				}else{
					return;
				}
				
			}
		})
	})