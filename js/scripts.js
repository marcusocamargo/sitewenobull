$(function () {

    //DESLIZA O MENU!
    $('.main_menu a[class!="special"]').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.hd-menu').outerHeight()}, 1000);
        return false;
    });
	
	
    //SUSPENDE MENU
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.hd-menu').outerHeight() + 10) {
            $('body').css('padding-top', $('.hd-menu').outerHeight());
            $('.hd-menu').addClass('hd-menu_fixed');
            $('.j_back').fadeIn(500);
			
				
			
        } else {
            $('body').css('padding-top', '0');
            $('.hd-menu').removeClass('hd-menu_fixed');
            $('.j_back').fadeOut(500);
        }
    });

    //BACK TOPO
    $('.j_back').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });


    
});

//MENU RESPONSIVO
(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#cssmenu").menumaker({
    title: "",
    format: "multitoggle"
  });

  $("#cssmenu").prepend("<div id='menu-line'></div>");

var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

$("#cssmenu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $("#cssmenu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();

defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$("#cssmenu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, 
function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});

});


});
})(jQuery);
//MENU RESPONSIVO



//VALIDA CONTATO
function validarcontato() {

			if (document.contato.nome.value=="") { alert( "Preencha o campo Nome!" ); document.contato.nome.focus(); return false; }
			
			if (document.contato.email.value=="") { alert( "Preencha o campo E-mail!" ); document.contato.email.focus(); return false; }
			
			if (document.contato.telefone.value=="") { alert( "Preencha o campo Telefone!" ); document.contato.telefone.focus(); return false; }
			
			if (document.contato.msg.value=="") { alert( "Preencha o campo Mensagem!" ); document.contato.msg.focus(); return false; }
}	
//VALIDA CONTATO



//VALIDA CADASTRO
function validarcadastro() {

			if (document.cadastro.nome.value=="") { alert( "Preencha o campo Nome!" ); document.cadastro.nome.focus(); return false; }
	
			if (document.cadastro.telefone.value=="") { alert( "Preencha o campo Telefone!" ); document.cadastro.telefone.focus(); return false; }
			
			if (document.cadastro.email.value=="") { alert( "Preencha o campo E-mail!" ); document.cadastro.email.focus(); return false; }
	
			if (document.cadastro.cidade.value=="") { alert( "Preencha o campo Cidade!" ); document.cadastro.cidade.focus(); return false; }

		
			if (document.cadastro.senha.value=="" || document.cadastro.senha.value.length < 6) { alert("Preencha a senha corretamente. Minimo 6 caracteres"); document.cadastro.senha.focus(); return false; }
			
}	
//VALIDA CADASTRO


//VALIDA ENVIA SENHA
function validarenviasenha() {
			if (document.senha.email.value=="") { alert( "Preencha o campo E-mail!" ); document.senha.email.focus(); return false; }
}	
//VALIDA ENVIA SENHA