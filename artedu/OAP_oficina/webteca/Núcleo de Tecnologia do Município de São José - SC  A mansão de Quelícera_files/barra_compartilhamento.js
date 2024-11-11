// Barra de Compartilhamento
// Twitter / Facebook / Orkut / Buzz
// By SemNome.net
// Direitos Reservados
// Proibida a reprodução total ou parcial desse script, também qualquer modificação sem a autorização do autor

function compartilha(obj){
//Variáveis
	twitter = obj.twitter;
	facebook = obj.facebook;
	orkut = obj.orkut;
	buzz = obj.buzz;
	url = encodeURIComponent(obj.url);
	title = encodeURIComponent(obj.titulo);
	modelo = obj.modelo;
	tamanho = obj.tamanho;
//Valores Padrão
	if(modelo!="botao"&&modelo!="icone"){
		modelo = botao;
	}
	if(tamanho!="pequeno"&&tamanho!="grande"){
		tamanho = grande;
	}
//Mudança de modelos
	if(modelo=="botao" && tamanho =="pequeno"){
		twitterimg = "http://lh3.ggpht.com/_NBm6T2_gd54/TSob796ZDwI/AAAAAAAAB8c/ko16QMuUi4U/twitterp.png";
		facebookimg = "http://lh4.ggpht.com/_NBm6T2_gd54/TSob75wCRsI/AAAAAAAAB8U/ZXkQSR2M5is/facebookp.png";
		orkutimg = "http://lh4.ggpht.com/_NBm6T2_gd54/TSob77puAWI/AAAAAAAAB8Y/NgqXEl3mA6g/orkutp.png";
		buzzimg = "http://lh6.ggpht.com/_NBm6T2_gd54/TSob7kjJRCI/AAAAAAAAB8Q/JOVre3_BE7g/buzzp.png";
		largura = 78;
		altura = 20;
	} else if(modelo=="botao" && tamanho =="grande"){
		twitterimg = "http://lh5.ggpht.com/_NBm6T2_gd54/TSnhYgeJnsI/AAAAAAAAB8I/3UKfZpQsmLA/twitter.png";
		facebookimg = "http://lh5.ggpht.com/_NBm6T2_gd54/TSnhYfvSjDI/AAAAAAAAB8A/RQV4NKRhi7I/s800/facebook.png";
		orkutimg = "http://lh5.ggpht.com/_NBm6T2_gd54/TSnhYpwlcEI/AAAAAAAAB8E/sGVHXKWDjkk/s800/orkut.png";
		buzzimg = "http://lh3.ggpht.com/_NBm6T2_gd54/TSnhYbwY7FI/AAAAAAAAB78/L83LoEokHyY/s800/buzz.png";
		largura = 101;
		altura = 26;
	} else if(modelo=="icone" && tamanho =="pequeno"){
		twitterimg = "http://lh3.ggpht.com/_NBm6T2_gd54/TSocIdLzkAI/AAAAAAAAB88/fTkrBfbtSt8/icone_twitterp.png";
		facebookimg = "http://lh5.ggpht.com/_NBm6T2_gd54/TSocICca4II/AAAAAAAAB80/OamJV1E7Xto/icone_facebookp.png";
		orkutimg = "http://lh3.ggpht.com/_NBm6T2_gd54/TSocIM9AfuI/AAAAAAAAB84/nrTYA2l_rsQ/icone_orkutp.png";
		buzzimg = "http://lh4.ggpht.com/_NBm6T2_gd54/TSocILg9QzI/AAAAAAAAB8w/mTHZXU9nHRU/icone_buzzp.png";
		largura = 30;
		altura = 30;
	} else	if(modelo=="icone" && tamanho =="grande"){
		twitterimg = "http://lh6.ggpht.com/_NBm6T2_gd54/TSob_wIQ0yI/AAAAAAAAB8s/5tG7HbAhifE/icone_twitter.png";
		facebookimg = "http://lh3.ggpht.com/_NBm6T2_gd54/TSob_o_GmoI/AAAAAAAAB8k/wLtxz_GjAAo/icone_facebook.png";
		orkutimg = "http://lh5.ggpht.com/_NBm6T2_gd54/TSob_8KzmJI/AAAAAAAAB8o/UUfIddJY0TQ/icone_orkut.png";
		buzzimg = "http://lh5.ggpht.com/_NBm6T2_gd54/TSob_t_Ac2I/AAAAAAAAB8g/Wt9-RggCaWo/icone_buzz.png";
		largura = 50;
		altura = 50;
	}
//Botões
	if(twitter=="sim"||twitter=="yes"){
		twitterb = '<a class="twittershare" href="http://twitter.com/share?count=horizontal&text='+title+'&url='+url+'" title="Compartilhe no Twitter" target="_blank"><img alt="Compartilhe no Twitter" src="'+twitterimg+'" width="'+largura+'" height="'+altura+'" border="0" class="sharebutton"/></a>';
	} else{ twitterb = "";}
	if(facebook=="sim"||facebook=="yes"){
		facebookb = '<a class="facebookshare" href="http://www.facebook.com/sharer.php?u='+url+'&t='+title+'" title="Compartilhe no Facebook" target="_blank"><img alt="Compartilhe no Facebook" src="'+facebookimg+'" width="'+largura+'" height="'+altura+'" border="0" class="sharebutton"/></a>';
	} else{ facebookb = ""; }
	if(orkut=="sim"||orkut=="yes"){
		orkutb = '<a class="orkutshare" href="http://promote.orkut.com/preview?nt=orkut.com&tt='+title+'&du='+url+'" title="Compartilhe no Orkut" target="_blank"><img alt="Compartilhe no Orkut" src="'+orkutimg+'" width="'+largura+'" height="'+altura+'" border="0" class="sharebutton"/></a>';
	} else{ orkutb = "";}
	if(buzz=="sim"||buzz=="yes"){
		buzzb = '<a class="buzzshare" href="http://www.google.com/buzz/post?url='+url+'&message='+title+'" title="Compartilhe no Google Buzz" target="_blank"><img alt="Compartilhe no Google Buzz" src="'+buzzimg+'" width="'+largura+'" height="'+altura+'" border="0" class="sharebutton"/></a>';
	} else{ buzzb = ""; }

document.write(twitterb+"\n"+facebookb+"\n"+orkutb+"\n"+buzzb);

}