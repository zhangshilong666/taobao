//商品全选
//结算价格
	$(function(){
		var a = true;
		
		
		$('#quanxuan,#quanxuan1').on('click',function(){
			if(a==true){
				$('#qx_main :checkbox').prop('checked',true)
				$('#quanxuan,#quanxuan1').prop('checked',true)
				$('#jiesuan').css('background','#ff5000')
				$('.yingfu').each(function(i,v){
					b = $(v).text().substr(1)
					
					console.log(b)
					$('#heji').text(b)
				})
				a = false
			}else{
				$('#qx_main :checkbox').prop('checked',false)
				$('#quanxuan,#quanxuan1').prop('checked',false)
				$('#jiesuan').css('background','#B0B0B0')
				$('#heji').text('0.00')
				a = true
			}
		})
	});



	$(function(){
		
		var a=true
		$('section .c_bottom .cb_main .cbm_shopping :checkbox').click(function(){
			if(a==true){
				$('#jiesuan').css('background-color','#ff5000')
				console.log($(this).parent().parent(".yingfu"))
				$('#heji').text('666')
				a=false
			}else{
				$('#heji').text('0.00')
				$('#jiesuan').css('background-color','#B0B0B0')
				a=true
			}
		})
	})