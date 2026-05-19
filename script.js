jQuery(document).ready(function($){

	$(document).on('click', '.bs-canvas-pull-button', function() {
		$('body').prepend('<div class="bs-canvas-overlay bg-dark position-fixed w-100 h-100"></div>');

		var canvasPullButtonId = $(this)[0].id;
		
		switch(canvasPullButtonId) {
			case "character-sheet-button-left" :
				$('#character-sheet-canvas-left').addClass('ml-0');
				break;
			case "character-sheet-button-right" :
				$('#character-sheet-canvas-right').addClass('mr-0');
				break;
			case "damage-calculator-button-left" :
				$('#damage-calculator-canvas-left').addClass('ml-0');
				break;
			case "damage-calculator-button-right" :
				$('#damage-calculator-canvas-right').addClass('mr-0');
				break;
			default :
		}
			
		return false;
	});
	
	$(document).on('click', '.bs-canvas-close, .bs-canvas-overlay', function() {

		var pullCanvas = $(this).hasClass('bs-canvas-close') ? $(this).closest('.bs-canvas') : $('.bs-canvas');

		pullCanvas.removeClass('mr-0 ml-0');

		$('.bs-canvas-overlay').remove();

		return false;
	});

});