//日历
	$(function(){
		var d= Date()
		$('#date').text(d.substring(8,10))
		$('#day').text(d.substring(0,3))
		$('#year').text(d.substring(11,15)+'.'+d.substring(4,7))
	})
//ajax页面无刷新
	$(function(){
		$(window).scroll(function(){
			if($('body').height()-$(window).scrollTop()-$(window).height()<1){
				if($(window).scrollTop()<=5000){
					$.get('data/mytaobao.json',{},function(date){

						$.each(date,function(i,v){
		
							var li = $(`<li>
										<img src="`+v.image+`" alt="">
										<div><span>`+v.price+`</span></div>
										<div> <p>`+v.xiangqing+`</p></div>
										<div><i>月销: 5290</i></div>
									</li>`)
							$('#sp').append(li);
						})
					},'json')
				}else{
					return;
				}
			}
		})
	})