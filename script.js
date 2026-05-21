jQuery(document).ready(function($) {

	$(document).on('click', '.bs-canvas-pull-button', function() {
		var canvasPullButtonId = $(this)[0].id;

		$('body').prepend('<div class="bs-canvas-overlay bg-dark position-fixed w-100 h-100"></div>');
		
		switch(canvasPullButtonId) {
			case "characterSheetButtonLeft" :
				$('#characterSheetCanvasLeft').addClass('ml-0');
				break;
			case "characterSheetButtonRight" :
				$('#characterSheetCanvasRight').addClass('mr-0');
				break;
			case "damageCalculatorButtonLeft" :
				$('#damageCalculatorCanvasLeft').addClass('ml-0');
				break;
			case "damageCalculatorButtonRight" :
				$('#damageCalculatorCanvasRight').addClass('mr-0');
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