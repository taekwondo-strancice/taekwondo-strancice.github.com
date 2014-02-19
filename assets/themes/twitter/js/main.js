;(function(win, doc, $){
	$(doc).ready(function(){
		// open external links in new window
		$(document.links).filter(function() {
		    return this.hostname != window.location.hostname;
		}).attr('target', '_blank');
		
		$('.x-frame').each(function() {
		  $(this).after('<iframe width="870" height="500" src="' + ($(this).attr('data-src')) + '" frameborder="0"></iframe>');
		});
	});
})(window, document, jQuery)
