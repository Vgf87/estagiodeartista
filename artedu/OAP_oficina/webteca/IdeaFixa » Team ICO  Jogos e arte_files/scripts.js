var blog_url = $('meta[name=blog_url]').attr('content');
var viuBannerRodape = false;
var viuBannerSidebar = false;

$(document).ready(function(){
	
	$('#cycle_destaques').hover(function(){
		 $('#cycle_nav').stop(true,true).fadeIn(300);
	}, function(){
		$('#cycle_nav').stop(true,true).fadeOut(300);
	});
	
	$('header .logo').hover(function(){
		 $(this).children('.bg').stop(true,true).animate({ 'top' : '-10px' }, 'fast');
	}, function(){
		$(this).children('.bg').stop(true,true).animate({ 'top' : '0' }, 'fast');
	});
	
	$('#em_breve').hover(function(){
		 $(this).children('a').children('.over').stop(true,true).fadeIn(300);
	}, function(){
		$(this).children('a').children('.over').stop(true,true).fadeOut(300);
	});
	
	$('header .logo').click(function() {
		window.location = blog_url;
	});
	
	$('#nav a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#53c9bf' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#5b595f' }, 'fast');
	});
	
	$('.text_box a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#53c9bf' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#000' }, 'fast');
	});
	
	$('.social_bar a').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});
	
	$('.search_button').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});
	
	$('.search_button').click(function() {
		var busca = $('#searchField').val();
		window.location = blog_url+'?s='+busca;
		return false;
	});
	
	$('#searchField').keyup(function(event) {
		var key = event.which;
		if (key == 13) {
			$('.search_button').click();			
		};
	});
	
	$('#scroll_top').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});
	
	$('#scroll_top').click(function() {
		$('html,body').animate({
			scrollTop:0
		});
	});

	$("#list_posts .list_item").each(function(){
	})
	
	$("#list_posts .list_item:nth-child(2)").addClass("margin")
	$("#list_posts .list_item:nth-child(5)").addClass("margin")

	var contFooter = 1;
	$("#list_posts .list_item").each(function(idx){
		if(contFooter == idx){
			$(this).addClass("margin");
			contFooter += 3;
		}else{
			$(this).removeClass("margin");
		}
	})
	
	$('.list_item').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
		 $(this).children('.img_container').delay(300).stop(true,true).animate({ 'top' : '-10px' }, 'fast');
		 $(this).children('.title').stop(true,true).animate({ 'bottom' : '30px' }, 'fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
		$(this).children('.img_container').delay(300).stop(true,true).animate({ 'top' : '0' }, 'fast');
		$(this).children('.title').delay(300).stop(true,true).animate({ 'bottom' : '-200px' }, 'fast');
	});

	$('.mail_button').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});
	
	$('.logo_footer').hover(function(){
		 $(this).stop(true,true).animate({ 'opacity' : '.5' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'opacity' : '1' }, 'fast');
	});
	
	$('.links_bar a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#fff' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#777' }, 'fast');
	});
	
	$('.link_credits a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#fff' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#777' }, 'fast');
	});
	
	$('.copyright a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#fff' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#777' }, 'fast');
	});
	
	$('.tags a').hover(function(){
		 $(this).stop(true,true).animate({ 'background-color' : '#53c9bf' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'background-color' : '#9d9b9f' }, 'fast');
	});
	
	$('.tags_box a').hover(function(){
		 $(this).stop(true,true).animate({ 'background-color' : '#53c9bf' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'background-color' : '#9d9b9f' }, 'fast');
	});
	
	$('#categories a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#53c9bf' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#5b595f' }, 'fast');
	});
	
	$('#colunas-lista a').hover(function(){
		 $(this).stop(true,true).animate({ 'color' : '#53c9bf' }, 'fast');
	}, function(){
		$(this).stop(true,true).animate({ 'color' : '#5b595f' }, 'fast');
	});	
	
	$('.botao_nav_home').hover(function(){
		$(this).find('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).find('.over').stop(true,true).fadeOut('fast');
	});
	
	$('.numero_nav_home').hover(function(){
		if (!$(this).hasClass('pagina_selecionada')) $(this).stop(true,true).animate({'background-color': '#53c9bf', 'color': '#FFFFFF'}, 'fast');
	}, function(){
		if (!$(this).hasClass('pagina_selecionada')) $(this).stop(true,true).animate({'background-color': '#d8dadc', 'color': '#5b595f'}, 'fast');
	});
	
	$('#open_tags').hover(function(){
		 $(this).children('.over').stop(true,true).fadeIn('fast');
	}, function(){
		$(this).children('.over').stop(true,true).fadeOut('fast');
	});
	
	var n = $(".tags a").length;
	if(n<=15){
		$('#open_tags').hide();
	};
	
	$('#open_tags').click(function() {
		$(".tags a:hidden:lt(15)").fadeIn("slow");
		n = $(".tags a:hidden").length;
		if(n==0){
			$(this).fadeOut(300);
			};
	});
	
	
	$(".tags a:hidden:lt(15)").fadeIn("slow");
	
	$(".submitFile input[type=file]").change(function(){
		var nomeArquivo = $(this).val();
		$(this).parent().find(".txtSubmit").html(nomeArquivo);
	});

	$("#sendNewsletter").click(function(){
		$("#formNewsletter").submit();
	});

	$("#formNewsletter").submit(function(){

		$(this).find(".required").each(function(idx, elm){
			if(elm.value == elm.defaultValue){
				$(this).parent().addClass("empty");
			}else{
				$(this).parent().removeClass("empty");
			}
		});

		if($(".empty").length > 0){
			return false;
		};
	});

	/*remove, adiciona value input*/
	$(".clearValue").live({
		focus:function(){

			if(this.value == this.defaultValue){
				this.value = "";
			}
		},
		blur:function(){

			if(this.value == ""){
				this.value = this.defaultValue;
			}
		}
	});
	
	var items = $('[data-q="attach"]');
	items.each(function(index, element) 
	{
		$(this).load(function() 
		{
			var iw = $(this).width(); 
			var ih = $(this).height();
			var cw = Number($(this).attr('data-cw')); 
			var ch = Number($(this).attr('data-ch'));
			var rect = img_style(iw, ih, cw, ch);
			$(this).css({"top":rect[0], "left":rect[1]});
		});
		if(this.complete)
		{
			$(this).trigger('load');
		}
    });
    
    $(window).scroll(function() 
    {
    	var alturaTela = $(window).height();
		var posicaoTela = $(window).scrollTop();
	
		
    	if ($("#ad").length > 0)
    	{
			var bannerSidebarOffset = $('#ad').offset().top;
			var posLimiteSidebar = bannerSidebarOffset - alturaTela;
			
			if(posicaoTela > posLimiteSidebar)
			{
				if(!viuBannerSidebar) 
				{
					_gaq.push(['_trackEvent', 'Banner Sidebar', 'Visualizado', $('#ad a').data('nome')]);
					//console.log($('#ad a').data('nome'));
					viuBannerSidebar = true;
				}
			}
		}
		
		if($('#google_ad').length > 0)
		{
			var bannerOffset = $('#google_ad').offset().top;
			var posLimite = bannerOffset - alturaTela;
			
			if(posicaoTela > posLimite)
			{
				if(!viuBannerRodape) 
				{
					_gaq.push(['_trackEvent', 'Banner Rodapé', 'Visualizado', $('#google_ad a').data('nome')]);
					//console.log($('#google_ad a').data('nome'));
					viuBannerRodape = true;
				}
			}
		}
    });
});

function img_style(iw, ih, cw, ch)
{
	var rect = [];
	var prop = ih/iw;
	var cprop = ch/cw;
	
	var width = 0;
	var height = 0;
	
	if(cprop<=prop)
	{
		width = cw;
		height = Math.round(cw * prop);
	}else
	{
		height = ch;	
		width =  Math.round(ch / prop);
	}
	
	var top = Math.round((ch - height) / 2);
	var left = Math.round((cw - width) / 2);
	
	rect[0] = (top==Infinity||top==-Infinity) ? 0 : top;
	rect[1] = (left==Infinity||left==-Infinity) ? 0 : left;
	
	return rect;
}

function validaEmail(email)
{
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email;
	if (reg.test(address)) 
	{
		return true;
	} else 
	{
		return false;
	}
}

function validarCPF(cpf) 
{ 
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
        return false;
		
    // Valida 1o digito
    add = 0;
    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
     
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
         
    return true;
}