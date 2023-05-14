$(window).load(function(){
	$(".desktop-menu").sticky({ topSpacing: 0 });
});

(function($){

    $('.desktop-menu').onePageNav({
        currentClass: 'bold',
        changeHash: false,
        scrollSpeed: 2000,
        scrollOffset: 30,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
        },
        scrollChange: function($currentListItem) {  
        }
    });
})(jQuery);

function ScrollTo(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top-100},3000);
}

$('.mobile-button').click(function() {
  $('.mobile-menu-list').toggle('slow', function() {
	return false;
  });
});

$('.mobile-menu-list a').click(function() {
  $('.mobile-menu-list').toggle('slow', function() {
	return false;
  });
});