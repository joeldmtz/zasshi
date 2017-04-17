var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  23.25495219, lng: -106.45828363},
    zoom: 17
  });
  var image = 'public/images/icon-mark.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 23.25495219,lng:-106.45828363},
    map: map,
    icon: image
  });
}

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
    setTimeout(initMap,2000)
})

var amountScrolled = 300;
$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
