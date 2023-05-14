var CURRENT_VIDEO_ID, CURRENT_VIDEO_SOURCE, CURRENT_VIDEO_URL;

$(document).ready(function(){


	//Start cideo adaptation
		//Set main video
			window.MAIN_VIDEO_URL = '<iframe id="video" src="https://player.vimeo.com/video/47911018" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			$('header').html( window.MAIN_VIDEO_URL );

		//Get video container width
			window.CURRENT_VIDEO_ID = '47911018';
			window.CURRENT_VIDEO_SOURCE = 'vimeo';


			if( window.CURRENT_VIDEO_SOURCE=='vimeo' ){
				window.CURRENT_VIDEO_URL = 'https://player.vimeo.com/video/' + window.CURRENT_VIDEO_ID; }
			else if( window.CURRENT_VIDEO_SOURCE=='youtube' ){
				window.CURRENT_VIDEO_URL = 'https://www.youtube.com/embed/' + window.CURRENT_VIDEO_ID; }

			//$( "#video" ).contents().find( "button.fullscreen" ).css( "display", "none" );

			resizeVideo();
	//Start cideo adaptation



	//For thumbnails
		$('body .videos').on('click', '.col-md-3', function(){
			
			$('.videos .row .col-md-3').removeClass('active');
			$(this).addClass('active');


			window.CURRENT_VIDEO_ID = $(this).attr('data-id');
			window.CURRENT_VIDEO_SOURCE = $(this).attr('data-source');


			if( window.CURRENT_VIDEO_SOURCE=='vimeo' ){
				window.CURRENT_VIDEO_URL = 'https://player.vimeo.com/video/'+$(this).attr('data-id')+'?autoplay=1';

				$('body header iframe').attr( 'src', 'https://player.vimeo.com/video/'+$(this).attr('data-id')+'?api=1&player_id=player&autoplay=1' );
				$('html,body').animate({ scrollTop: 80 }, 'slow');
			}
			else if( window.CURRENT_VIDEO_SOURCE=='youtube' ){
				window.CURRENT_VIDEO_URL = 'https://www.youtube.com/embed/'+$(this).attr('data-id')+'?autoplay=1';

				$('body header iframe').attr( 'src', 'https://www.youtube.com/embed/'+$(this).attr('data-id')+'?autoplay=1' );
				$('html,body').animate({ scrollTop: 80 }, 'slow');
			}

			resizeVideo();
		});
	//For thumbnails



	//Listen resize event
		window.onresize = function(event) { resizeVideo(); };
	//Listen resize event
});




function resizeVideo(){
	if( window.CURRENT_VIDEO_SOURCE=='vimeo' ){
	  	$.post('http://sunrise.ru.com/_cdn/video/iframe-responsive/about-video.php', {TYPE: 'VIMEO', ID:window.CURRENT_VIDEO_ID}, function(data){
			
			var eWidth = parseInt($('header').css('width') );
			var eHeight = eWidth / data.coef;

		    //Resize header video-------------------------
			$('header').css('height', eHeight+'px' );
		    $('header iframe').css('height', eHeight+'px' );
		    
		    //setTimeout(function(){ $('header iframe').attr( 'src', window.CURRENT_VIDEO_URL ); },777);
		    //Resize header video-------------------------
		},'json');
	} // vimeo adaptation---------------------------------------
	else if( window.CURRENT_VIDEO_SOURCE=='youtube' ){

		$.post('http://sunrise.ru.com/_cdn/video/iframe-responsive/about-video.php', {TYPE: 'YOUTUBE', ID:window.CURRENT_VIDEO_ID}, function(data){
			
			var eWidth = parseInt($('header').css('width') );
			var eHeight = eWidth / data.coef;

		    //Resize header video-------------------------
			$('header').css('height', eHeight+'px' );
		    $('header iframe').css('height', eHeight+'px' );
		    
		    //setTimeout(function(){ $('header iframe').attr( 'src', window.CURRENT_VIDEO_URL ); },777);
		    //Resize header video-------------------------
		},'json');

	} // youtube adaptation---------------------------------------
}// .resizeHeaderVideo