//表单验证
	$(function(){
		$('#denglu').click(function(e){
			var dat = {
			user:$('#yonghuming').val(),
			pass:$('#mima').val()
			}

			$.post('data/check.php',dat,function(data){
				if(data.code==1){
					$('#yonghuming').css('border','1px solid red')
					$('#mima').css('border','1px solid red')
				}else{
					alert('登录成功');
					location.href = 'shouye.html';
				}
			},'json')
			e.preventDefault()
		})
		
	})