$(document).ready(function() {

	/**
	 * Bootstrap hover dropdown: https://github.com/CWSpear/bootstrap-hover-dropdown
	 * apply dropdownHover to all elements with the data-hover="dropdown" attribute
	 */
	$('[data-hover="dropdown"]').dropdownHover();

	/**
	 * Handle fixed header on scroll bottom
	 */
	$(window).on('scroll load', function() {
		 if ($(window).scrollTop() > 0) {
			 $('#header').addClass('scrolled');
		 } else {
			 $('#header').removeClass('scrolled');
		 }
	});

	/**
	 * FAQ accordion
	 */
	function toggleIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find('.panel-title a')
			.toggleClass('active')
			.find("i.fa")
			.toggleClass('fa-plus-square fa-minus-square');
	}
	$('.panel').on('hidden.bs.collapse', toggleIcon);
	$('.panel').on('shown.bs.collapse', toggleIcon);

	/**
	 * Vimeo API: http://developer.vimeo.com/player/js-api
	 * http://stackoverflow.com/questions/24952984/play-and-stop-vimeo-video-placed-in-bootstrap-modal
	 * Auto play Vimeo in Bootstrpa Modal
	 */
	var iframe = document.getElementById('vimeo-video');
	var player = $f(iframe);

	$('#modal-video').on('hidden.bs.modal', function () {
		player.api('pause');
	});

	$('#modal-video').on('shown.bs.modal', function () {
		player.api('play');
	});

	// Stop Video Playing When Close the Modal Window
	$("#modal-video .close").on("click", function() {
		$("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));
	});

	/**
	 * Animations
	 */
	function animate(argsCnt, target) {
		var self = argsCnt;
		var $animationAttr = self.data('vc-animation');
		var $animation = typeof $animationAttr !== typeof undefined && $animationAttr !== false ? $animationAttr : 'transition.fadeIn';
		var $durationAttr = self.data('vc-duration');
		var $duration = typeof $durationAttr !== typeof undefined && $durationAttr !== false ? $durationAttr : 400;
		var $easingAttr = self.data('vc-easing');
		var $easing = typeof $easingAttr !== typeof undefined && $easingAttr !== false ? $easingAttr : 'swing';
		var $staggerAttr = self.data('vc-stagger');
		var $stagger = typeof $staggerAttr !== typeof undefined && $staggerAttr !== false ? $staggerAttr : 0;

		target
			.velocity($animation, {
				duration: $duration,
				easing: $easing,
				stagger: $stagger,
			});
	}

	// Single Element Animation
	$('.js-animate').each(function() {
		$(this).one('inview', function(e) {
			self = $(this);
			self.waypoint({
				handler: function() {
					animate(self, $(e.target));
					this.destroy();
				},
				offset: '70%',
			});
		});
	});

	// Multiple Elements Animation
	$('.js-animate-children').each(function() {
		$(this).one('inview', function(e) {
			self = $(this);
			self.waypoint({
				handler: function() {
					animate(self, $(e.target).children());
					this.destroy();
				},
				offset: '70%',
			});
		});
	});

	/**
	 * Only for demo purpose
	 * Style Switcher
     * Append config box to body / 
	 */
    $.get('_style-switcher.html', function(data) {
        if (!$('body').hasClass('no-skin-config'))
            $('body').append(data);
			setTimeout(function() {
				$('#config-trigger').addClass('loaded');
			}, 100);
    });
});
