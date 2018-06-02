/*
* @Author: zhaoxixiong
* @Date:   2018-02-27 21:58:46
* @Last Modified by:   zhaoxixiong
* @Last Modified time: 2018-03-11 20:04:42
*/

var aLink = document.getElementsByClassName("link-to");
for(var i=0;i<aLink.length;i++){
	aLink[i].onclick = function(){
		moveToBlock(this.hash);
		return false;
	}
}

function moveToBlock (hash){
	var target = document.getElementById(hash.slice(1,hash.length));
	var curScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var cord = {scrollVal:curScrollTop};
	var tween = new TWEEN.Tween(cord)
		.to({ scrollVal:target.offsetTop }, 300)
		.onUpdate(function() {
			document.documentElement.scrollTop = cord.scrollVal.toFixed(0);
			document.body.scrollTop = cord.scrollVal.toFixed(0);
		})
	.start();
	requestAnimationFrame(animate);
	function animate(time) {
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}
}
