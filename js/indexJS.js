/*rem自动换算*/
function reCalcRem() {
  var $html = document.documentElement;
  $html.style.fontSize = ($html.getBoundingClientRect().width / 750) * 100+ "px";
}
window.addEventListener('resize', reCalcRem, false);
reCalcRem();

window.onload=function(){
	var boxArr = $('.box'),
	    num = Math.floor(document.body.clientWidth / boxArr.eq(0).outerWidth(true)),
	    columnHeightArr = [];
	columnHeightArr.length = num;
	
	boxArr.each(function(index, item) {
	　　if (index < num) {
	　　　　columnHeightArr[index] = $(item).position().top + $(item).outerHeight(true);
	　　} else {
	　　　　var minHeight = Math.min.apply(null, columnHeightArr),
	           minHeightIndex = $.inArray(minHeight, columnHeightArr);
	
	　　　　$(item).css({
		       　　position: 'absolute',
		       　　top: minHeight,
		       　　left: boxArr.eq(minHeightIndex).position().left
	       });
	
	　　　　columnHeightArr[minHeightIndex] += $(item).outerHeight(true);
	　　}
	});
}