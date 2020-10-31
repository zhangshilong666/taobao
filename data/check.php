<?php
	//获取用户名以及密码
	$name = $_POST['user'];
	$pass = $_POST['pass'];

	//查询数据库
	$u = '123456';
	$p = '123456';

	if($name==$u && $pass==$p){
		$arr = [
			'code' => 0,
			'msg'  => 'success'
		];
	}else{
		$arr = [
			'code' => 1,
			'msg'  => 'error'
		];
	}

	echo json_encode($arr,true);