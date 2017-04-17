$(function() {
  $('.navbar').addClass('animated fadeInLeft')
  $('.main-center').addClass('animated fadeInRight')
  $(".lightgallery").lightGallery({
      animateThumb: true,
      mode:'lg-soft-zoom'
  });
/*
  $('.navbar-nav li').hover(function(){
      $(this).addClass('animated pulse')
  },function(){
      $(this).removeClass('animated pulse')
  })
  */
  $('.lightgallery a img').hover(function(){
      $(this).addClass('animated pulse');
  },function(){
      $(this).removeClass('animated pulse')
  })

  	$('body').prepend("<a ng-click="+'gotoElement("header")'+"  class='back-to-top'>Back to Top</a>");
})

var amountScrolled = 300;
$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
