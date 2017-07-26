;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.js-scroll').on('click', function(event) {

			event.preventDefault();

			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 400 );
		});	
	});

})(jQuery, window, document);
