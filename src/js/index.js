const xyd = require('../../build/xyd.js');
var xydArray = Object.keys(xyd.xydEntry).map(function(el){
	return el
});
var shuzhu = [];
var html = function(el){
	console.log(el)
};
xydArray.forEach(function(item){
	var xydConf = {
		filename: './'+item+'.html',
		template: './'+item+'.html',
		chunks:[item],
		inject:true,
		hash:true
	}
	shuzhu.push(html(xydConf));
})