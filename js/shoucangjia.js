//批量管理点击事件
	$(function(){
		var a = true;
		$('#piliangguanli').click(function(e){
			if(a==true){
				$('#guanli').css('display','block')
				$('section .s_conter .sc_main1 .scm1_bottom ul li :checkbox').css('display','block')
				a=false;
			}else{
				$('#guanli').css('display','none')
				$('section .s_conter .sc_main1 .scm1_bottom ul li :checkbox').css('display','none')
				a=true;
			}
			e.preventDefault()
		})
	})
//全选
	$(function(){
		var a = true;
		$('#quanxuan').click(function(){
			if(a==true){
				$('section .s_conter .sc_main1 .scm1_bottom ul li :checkbox').prop('checked',true)
				a=false;
			}else{
				$('section .s_conter .sc_main1 .scm1_bottom ul li :checkbox').prop('checked',false)
				a=true;
			}
		})
	})
//删除
	$(function(){
		$('#del').click(function(){
			$('section .s_conter .sc_main1 .scm1_bottom ul li input:checked').parent().remove()
		})
	})