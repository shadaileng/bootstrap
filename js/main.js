$(function(){
	let items = $('#dl_carousel .carousel-inner .item')
	items.each((index, item)=>{
		let src = $(item).data('src');
		$(item).css({
			backgroundImage: 'url(' + src + ')'
		})
	});
	$('#dl_navbar_nav a').each((index, item) => {
		let href = $(item).attr('href')
		let obj = $(href.substr(0, href.length - 1))
		if ($(obj).context) {
			$(item).on('click', () => {
				$('html, body').animate({scrollTop: $(obj).offset().top}, 500)
			})
		}
	})
	// $('html body').on('scroll',)
});