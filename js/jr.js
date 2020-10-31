//获取整个页面的滚动距离
function windowScrollTop(){
	return    window.pageYOffset  						//高级浏览器
                || document.documentElement.scrollTop  //IE
                || document.body.scrollTop  			//低版本Chrome
}

function windowScrollLeft(){
	return    window.pageXOffset  						//高级浏览器
                || document.documentElement.scrollLeft //IE
                || document.body.scrollLeft 			 //低版本Chrome
}

//获取整个窗口的可视区域大小
function windowClientHeight(){
	return  window.innerHeight   				   //高级浏览
        ||  document.documentElement.clientHeigth 	//IE
        ||  document.body.clientHeigt  				//低版本的Chrome
}

function windowClientWidth(){
	return  window.innerWidth  					 //高级浏览
        ||  document.documentElement.clientWidth //IE
        ||  document.body.clientWidth  			 //低版本的Chrome
}

/*
 * @desc 获取元素的样式
 * @author zhangguiming
 * @time 2019-12-3 8:30:22
 *
 * @param obj DOMObject  获取到的DOM标签
 * @param attr string    要获取的css属性
 *
 * @return css_obj[attr]  string   返回要获取的css的样式
 */
function getStyle(obj,attr){
	var css_obj = obj.currentStyle 						 //IE低版本
		||  window.getComputedStyle(obj,null);			 // 高级浏览器
	return css_obj[attr];
}

//获取第一个元素子节点
function getFirstElementChild(obj){
	return obj.firstElementChild
			|| obj.firstChild;
}
//获取最后一个元素子节点
function getLastElementChild(obj){
	return obj.lastElementChild
			|| obj.lastChild;
}

//上一个兄弟节点
function getPreviousElementSibling(obj){
	return obj.previousElementSibling
			 || obj.previousSibling;
}
//下一个兄弟节点
function getNextElementSibling(obj){
	return obj.nextElementSibling
			 || obj.nextSibling;
}

/*
 * @desc 阻止事件默认行为的兼容函数
 *
 * @param e eventObject  事件对象
 *
 */
function preventDefault(e){
	//高级浏览器获取符合W3C标砖的浏览器执行
	if(e&&e.preventDefault){
		e.preventDefault();
	}else{
		//IE 执行
		window.event.returnValue = false;
	}
}

/*
 * @desc 阻止事件冒泡
 *
 * @param e eventObject  事件对象
 *
 */
function stopPropagation(e){
	//chrome ,FF 等W3C规范浏览器
	if(e&&e.stopPropagation){
		e.stopPropagation();
	}else{
		//IE, 但是目前很多都支持
		window.event.cancelBubble = true;
	}

}

/**
 * @desc 添加事件的兼容实现
 * @param DOMObject   obj    要添加事件的dom对象
 * @param string     eve     事件类型，注意没有on
 * @param Function fn        事件处理函数，事件绑定函数
 * @param Object    options  具体的可选对象的参数
 *
 * options 可选
	一个指定有关 listener 属性的可选参数对象。可用的选项如下：
	capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
	once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
	passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
	 mozSystemGroup: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。
 */
function addEvent(obj,eve,fn,options){
	//IE
	if(obj.attachEvent){
		obj.attachEvent('on'+eve,fn,options);
	}else{
		//高级浏览器
		obj.addEventListener(eve,fn,options );
	}
}