$(document).ready(function(){
	
	$('.autor_social a').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});
	
	
	
	$('.commentsPost a').hover(function(){
		$(this).children('strong').stop(true,true).animate({color: '#53c9bf'}, 'fast');
	}, function(){
		$(this).children('strong').stop(true,true).animate({color: '#000000'}, 'fast');
	});
	
	$('.read_more').hover(function(){
		$(this).children('.more').stop(true,true).animate({rotate: '+=90deg'}, 'fast');
		$(this).stop(true,true).animate({color: '#f18e1c'}, 'fast');
	}, function(){
		$(this).children('.more').stop(true,true).animate({rotate: '-=90deg'}, 'fast');
		$(this).stop(true,true).animate({color: '#000'}, 'fast');
	});
	
	$('.post_header h3 a').hover(function(){
		$(this).stop(true,true).animate({color: '#f18e1c'}, 'fast');
	}, function(){
		$(this).stop(true,true).animate({color: '#000'}, 'fast');
	});

	$('.info a').hover(function(){
		$(this).stop(true,true).animate({color: '#f18e1c'}, 'fast');
	}, function(){
		$(this).stop(true,true).animate({color: '#53c9bf'}, 'fast');
	});

	$("#menu-blog").addClass("selected")

});



