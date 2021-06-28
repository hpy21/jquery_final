$(document).ready(function () {

	const swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'flip',
        speed:1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //圓點可點擊
        },
    
        scrollbar: {
           el: '.swiper-scrollbar',
        },
        autoplay: {
           delay: 2000,
           disableOnInteraction: false,
        },
     
    });

    $('.product').hover(function(event){
		event.preventDefault();
		$(this).find('ul').stop().slideToggle(300);
	});



});

