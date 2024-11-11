$(document).ready(function(){
	
	$('.post_body a').hover(function(){
		$(this).stop(true,true).animate({color: '#f18e1c'}, 'fast');
	}, function(){
		$(this).stop(true,true).animate({color: '#53c9bf'}, 'fast');
	});
	
	$('.autor_bio a').hover(function(){
		$(this).stop(true,true).animate({color: '#f18e1c'}, 'fast');
	}, function(){
		$(this).stop(true,true).animate({color: '#53c9bf'}, 'fast');
	});
	
	$('.commentsPost a').hover(function(){
		$(this).children('strong').stop(true,true).animate({color: '#53c9bf'}, 'fast');
	}, function(){
		$(this).children('strong').stop(true,true).animate({color: '#000000'}, 'fast');
	});
	
	$('.info a').hover(function(){
		$(this).stop(true,true).animate({color: '#f18e1c'}, 'fast');
	}, function(){
		$(this).stop(true,true).animate({color: '#53c9bf'}, 'fast');
	});
	
	$('.autor_social a').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});

	$("#menu-blog").addClass("selected")
	
	$('.next_post, .prev_post').hover(function(){
		$(this).stop(true,true).animate({'background-color': '#dee0e3'}, 'fast');
	}, function(){
		$(this).stop(true,true).animate({'background-color': '#e9e9e9'}, 'fast');
	});
	
	$('.veja_container').cycle({ 
		fx:     'scrollHorz', 
		speed:  'fast', 
		next:   '#veja_next', 
    	prev:   '#veja_prev',
    	timeout: 0
	});
	
	$('.veja_list_item').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
		 $(this).children('.img_container').delay(300).stop(true,true).animate({ 'top' : '-10px' }, 'fast');
		 $(this).children('.title').stop(true,true).animate({ 'bottom' : '30px' }, 'fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
		$(this).children('.img_container').delay(300).stop(true,true).animate({ 'top' : '0' }, 'fast');
		$(this).children('.title').delay(300).stop(true,true).animate({ 'bottom' : '-200px' }, 'fast');
	});
});



