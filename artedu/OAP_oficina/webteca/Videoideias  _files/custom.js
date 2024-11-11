jQuery.noConflict();

jQuery(document).ready(function(){
	jQuery('ul.nav').superfish({ 
		delay:       300,                            // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'fast',                          // faster animation speed 
		autoArrows:  true,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 
	});
	jQuery('ul.nav > li > a.sf-with-ul').parent('li').addClass('sf-ul');
			
	var $featured_content = jQuery('#featured_content'),
		et_disable_toptier = jQuery("meta[name=et_disable_toptier]").attr('content'),
		et_featured_slider_pause = jQuery("meta[name=et_featured_slider_pause]").attr('content'),
		et_featured_slider_auto = jQuery("meta[name=et_featured_slider_auto]").attr('content'),
		et_featured_auto_speed = jQuery("meta[name=et_featured_auto_speed]").attr('content'),
		et_featured_slider_effect = jQuery("meta[name=et_featured_slider_effect]").attr('content');
		
	jQuery(window).load( function(){
		if ($featured_content.length) {
			var et_cycle_options = {
				timeout: 0,
				speed: 500,
				cleartypeNoBg: true,
				cleartype: true,
				prev: '#featured a#left-arrow',
				next: '#featured a#right-arrow',
				fx: et_featured_slider_effect,
				pause: 0
			}
			if ( et_featured_slider_auto == 1 ) et_cycle_options.timeout = et_featured_auto_speed;
			if ( et_featured_slider_pause == 1 ) et_cycle_options.pause = 1;

			$featured_content.css( 'backgroundImage', 'none' ).cycle(et_cycle_options);
			
			if ( $featured_content.find('.slide').length == 1 ){
				$featured_content.find('.slide').css({'position':'absolute','top':'0','left':'0'}).show();
				jQuery('#featured a#left-arrow, #featured a#right-arrow').hide();
			}
		}
	} );
				
	var $footer_widget = jQuery("#footer-widgets .footer-widget");
	if (!($footer_widget.length == 0)) {
		$footer_widget.each(function (index, domEle) {
			// domEle == this
			if ((index+1)%3 == 0) jQuery(domEle).addClass("last").after("<div class='clear'></div>");
		});
	}

	var $et_blurb_thumb = jQuery('div.project a');
	$et_blurb_thumb.hover(function(){
		jQuery(this).find('img').fadeTo('fast', 0.8);
		jQuery(this).find('.zoom-icon').fadeTo('fast', 1);
	}, function(){
		jQuery(this).find('img').fadeTo('fast', 1);
		jQuery(this).find('.zoom-icon').fadeTo('fast', 0);
	});
			
	jQuery('.js #featured').css('visibility','visible');
	if ( et_disable_toptier == 1 ) jQuery("ul.nav > li > ul").prev("a").attr("href","#");
});