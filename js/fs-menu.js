jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

    //FIXED HEADER ON
	$('#nav-stick').affix({
      offset: {
        top: 1,
      }
});

	//open/close primary navigation
	$('.fs-primary-nav-trigger').on('click', function(){
		$('.fs-menu-icon').toggleClass('is-clicked'); 
		$('.fs-header').toggleClass('menu-is-open');
    $('#nav-stick').addClass('affix-fix');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.fs-primary-nav').hasClass('is-visible') ) {
      $('#nav-stick').removeClass('affix-fix');
			$('.fs-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
      //$('#nav-stick').removeClass('affix-fix');
			$('.fs-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		};
    
    event.preventDefault();
	});
});