$(document).ready(function() {

	/**
	 * Blog masonry
	 * http://desandro.github.io/masonry/index.html
	 */
	var $container = $('#blog-masonry');
	$container.imagesLoaded(function() {
		$container.masonry({
			itemSelector : '.post'
		});
	});

	/**
	 * Blog animations
	 */
	var articlesCnt = $('#blog-masonry');
	// Select and slice articles
	var articles = articlesCnt.find('article'),
		articlesFirst = articles.slice(0,3), // articles 1-3
		articlesLast = articles.slice(3); // rest of the articles after #3

	articles.css('opacity', 0);

	// Sequential Animation
	var seq = [
		{ elements: articlesFirst, properties: 'transition.slideUpIn', options: { duration: 700, stagger: 120, display: false, easing: 'easeOutCirc' } },
		{ elements: articlesLast, properties: 'transition.slideUpIn', options: { stagger: 0, display: false, easing: 'easeOutCirc' } }
	];
	$.Velocity.RunSequence(seq);

   /**
    * Blog searchbox
	* http://thecodeblock.com/expanding-search-bar-with-jquery-tutroial/
	*/
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.on('click', function() {
		if (isOpen === false) {
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	}); 

	submitIcon.mouseup(function() {
		return false;
	});
	searchBox.mouseup(function() {
		return false;
	});

	$(document).mouseup(function() {
		if (isOpen === true) {
			$('.searchbox-icon').css('display','block');
			submitIcon.click();
		}
	});

	function buttonUp() {
		var inputVal = $('.searchbox-input').val();
		inputVal = $.trim(inputVal).length;
		if (inputVal !== 0) {
			$('.searchbox-icon').css('display','none');
		} else {
			$('.searchbox-input').val('');
			$('.searchbox-icon').css('display','block');
		}
	}

	inputBox.keyup(function() {
		buttonUp();
	});

	// Make sure the "Go" button is not shown
	// when resize the browser window from mobile to desktop
	$(window).resize(function() {
		$('.searchbox-icon').css('display','block');
		searchBox.removeClass('searchbox-open');        
	});

});
