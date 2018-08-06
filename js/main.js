$(function(){
	let items = $('#dl_carousel .carousel-inner .item')
	items.each((index, item)=>{
		let src = $(item).data('src');
		$(item).css({
			backgroundImage: 'url(' + src + ')'
		})
	})
});