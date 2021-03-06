(function (blink) {
	'use strict';

	var santillana_demoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	santillana_demoStyle.prototype = {
		bodyClassName: 'content_type_clase_santillana_demo',
		ckEditorStyles: {
			name: 'santillana_demo',
			styles: [
				
				{ name: 'Flecha verde', element: 'h3', attributes: { 'class': 'bck-title4'} },
				{ name: 'Flecha morado', element: 'h3', attributes: { 'class': 'bck-title13'} },
				{ name: 'Flecha rojo', element: 'h3', attributes: { 'class': 'bck-title14'} },
				{ name: 'Flecha azul', element: 'h3', attributes: { 'class': 'bck-title15'} },
				{ name: 'titulo verde', element: 'h3', attributes: { 'class': 'bck-title5'} },
				{ name: 'titulo morado', element: 'h3', attributes: { 'class': 'bck-title11'} },
				{ name: 'titulo rojo', element: 'h3', attributes: { 'class': 'bck-title16'} },
				{ name: 'titulo azul', element: 'h3', attributes: { 'class': 'bck-title17'} },
				{ name: 'titulo naranja', element: 'h3', attributes: { 'class': 'bck-title3'} },
				{ name: 'titulo gris', element: 'h3', attributes: { 'class': 'bck-title8'} },
				{ name: 'titulo fondo rojo', element: 'h3', attributes: { 'class': 'bck-title42'} },
				{ name: 'explora', element: 'h3', attributes: { 'class': 'bck-title6'} },
				{ name: 'explora rojo', element: 'h3', attributes: { 'class': 'bck-title43'} },
				{ name: 'paso gris', element: 'h3', attributes: { 'class': 'bck-title7'} },
				{ name: 'paso naranja', element: 'h3', attributes: { 'class': 'bck-title12'} },
				{ name: 'paso morado', element: 'h3', attributes: { 'class': 'bck-title32'} },
				{ name: 'paso verde', element: 'h3', attributes: { 'class': 'bck-title33'} },
				{ name: 'paso azul', element: 'h3', attributes: { 'class': 'bck-title34'} },
				{ name: 'paso violeta', element: 'h3', attributes: { 'class': 'bck-title39'} },
				{ name: 'paso rosa', element: 'h3', attributes: { 'class': 'bck-title40'} },
				{ name: 'pie de foto', element: 'h3', attributes: { 'class': 'bck-title9'} },
				{ name: 'Saber hacer', element: 'h3', attributes: { 'class': 'bck-title24'} },
				{ name: 'Saber hacer2', element: 'h3', attributes: { 'class': 'bck-title25'} },
				{ name: 'revisa-naranja1', element: 'h3', attributes: { 'class': 'bck-title10'} },
				{ name: 'revisa-naranja2', element: 'h3', attributes: { 'class': 'bck-title18'} },
				{ name: 'revisa-azul', element: 'h3', attributes: { 'class': 'bck-title19'} },
				{ name: 'demuestra-verde', element: 'h3', attributes: { 'class': 'bck-title20'} },
				{ name: 'demuestra-naranja', element: 'h3', attributes: { 'class': 'bck-title21'} },
				{ name: 'demuestra-azul', element: 'h3', attributes: { 'class': 'bck-title22'} },
				{ name: 'demuestra-morado', element: 'h3', attributes: { 'class': 'bck-title23'} },
				{ name: 'relaciona', element: 'h3', attributes: { 'class': 'bck-title26'} },
				{ name: 'fondo verde', element: 'h3', attributes: { 'class': 'bck-title31'} },
				{ name: 'argumentar azul', element: 'h3', attributes: { 'class': 'bck-title27'} },
				{ name: 'argumentar verde', element: 'h3', attributes: { 'class': 'bck-title35'} },
				{ name: 'form ciervoybuitre', element: 'h3', attributes: { 'class': 'bck-title28'} },
				{ name: 'Pasado al presente', element: 'h3', attributes: { 'class': 'bck-title29'} },
				{ name: 'epa', element: 'h3', attributes: { 'class': 'bck-title30'} },
				{ name: 'Titulo Actividades', element: 'h3', attributes: { 'class': 'bck-title36'} },
				{ name: 'obj derecha titulo', element: 'h3', attributes: { 'class': 'bck-title37'} },
				{ name: 'obj derecha verde', element: 'h3', attributes: { 'class': 'bck-title38'} },
				{ name: 'obj derecha rojo', element: 'h3', attributes: { 'class': 'bck-title41'} },
				
				
				
							

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				{ name: 'Énfasis Naranja', element: 'span', attributes: { 'class': 'bck-enfasis-naranja'} },
				{ name: 'Versalitas', element: 'span', attributes: { 'class': 'bck-versalitas'} },
				{ name: 'verde', element: 'span', attributes: { 'class': 'bck-verde1'} },
				{ name: 'subrayado verde', element: 'span', attributes: { 'class': 'bck-verde2'} },
				{ name: 'subrayado rojo', element: 'span', attributes: { 'class': 'bck-subrojo'} },
				{ name: 'morado', element: 'span', attributes: { 'class': 'bck-morado'} },
				{ name: 'fondo coral', element: 'span', attributes: { 'class': 'bck-coral'} },
				{ name: 'azul', element: 'span', attributes: { 'class': 'bck-azul'} },
				{ name: 'rojo', element: 'span', attributes: { 'class': 'bck-rojo'} },
				{ name: 'circulo naranja', element: 'span', attributes: { 'class': 'bck-naranja'} },
				{ name: 'circulo verde', element: 'span', attributes: { 'class': 'bck-circuloverde'} },
				{ name: 'circulo rojo', element: 'span', attributes: { 'class': 'bck-circulorojo'} },
				{ name: 'azul claro', element: 'span', attributes: { 'class': 'bck-azulclaro'} },
				{ name: 'verde desafio', element: 'span', attributes: { 'class': 'bck-verdedesafio'} },
				{ name: 'sombreado', element: 'span', attributes: { 'class': 'bck-sombreado'} },
				{ name: 'enfasis gris', element: 'span', attributes: { 'class': 'bck-gris'} },
				{ name: 'Explora-aprende azul', element: 'span', attributes: { 'class': 'bck-fondoazul'} },
				{ name: 'derecha título', element: 'span', attributes: { 'class': 'bck-titulopequeno'} },
				{ name: 'subtítulo-pie', element: 'span', attributes: { 'class': 'bck-subtitulo'} },
				
				
				
				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista naranja', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista verde', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista morado', element: 'ol', attributes: { 'class': 'bck-ol-7' } },
				{ name: 'Lista roja', element: 'ol', attributes: { 'class': 'bck-ol-9' } },
				{ name: 'Lista azulclaro', element: 'ol', attributes: { 'class': 'bck-ol-10' } },
				{ name: 'Lista letra verde', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'Lista letra naranja', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'Lista letra morado', element: 'ol', attributes: { 'class': 'bck-ol-8' } },
				{ name: 'Lista letra rojo', element: 'ol', attributes: { 'class': 'bck-ol-11' } },
				
				
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Des verde', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista Des amarilla', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'Lista Des blanca', element: 'ul', attributes: { 'class': 'bck-ul-5'} },
				{ name: 'Lista Des morado', element: 'ul', attributes: { 'class': 'bck-ul-6'} },
				{ name: 'Lista Des azul claro', element: 'ul', attributes: { 'class': 'bck-ul-9'} },
				{ name: 'Lista Des naranja', element: 'ul', attributes: { 'class': 'bck-ul-10'} },
				{ name: 'Lista Des rojo', element: 'ul', attributes: { 'class': 'bck-ul-7'} },
				{ name: 'Lista Cuadrada rojo', element: 'ul', attributes: { 'class': 'bck-ul-8'} },
				
				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'Caja marron', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'Caja blanca', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'Caja fondo color', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },
				{ name: 'Caja Activaverde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'Caja Activaazul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },
				{ name: 'Caja Activamorado', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'Caja Activarojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-15' } },
				{ name: 'Caja Activarojo2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-32' } },
				{ name: 'Caja queverde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-18' } },
				{ name: 'Caja queazul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-19' } },
				{ name: 'Caja quemorado', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-20' } },
				{ name: 'Caja querojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-21' } },
				{ name: 'Caja materiales', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'Caja comprensión', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'Caja resumen naranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
                                { name: 'Caja saber más', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'Caja escucha verde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-22' } },
				{ name: 'Caja imagen', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-11' } },
				{ name: 'Caja azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },
				{ name: 'Caja formacion-ciervo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				{ name: 'Caja formacion-ciervo2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-16' } },
				{ name: 'Caja formacion-buitre', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-17' } },
				{ name: 'Caja form-ciervoybuitre', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-24' } },
				{ name: 'Fondo azul mate', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-23' } },
				{ name: 'Caja bocadillo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-25' } },
				{ name: 'Caja Actividades', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-26' } },
				{ name: 'Caja Relaciona', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-27' } },
				{ name: 'Caja desafio rojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-28' } },
				{ name: 'Caja desafio verde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-29' } },
				{ name: 'Caja peq azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-30' } },
				{ name: 'Caja bordes rojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-31' } },
				
				{ name: 'Tabla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'Tabla verde', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				{ name: 'Tabla azul', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-3'} },
				{ name: 'Tabla rojo', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-4'} },
				{ name: 'Celda', element: 'td', attributes: { 'class': 'bck-td'} },
				{ name: 'Celda verde', element: 'td', attributes: { 'class': 'bck-td-1' } },
				{ name: 'Celda azul', element: 'td', attributes: { 'class': 'bck-td-2' } },
				{ name: 'Celda rojo', element: 'td', attributes: { 'class': 'bck-td-5' } },
				{ name: 'Celda azul-claro', element: 'td', attributes: { 'class': 'bck-td-3' } },
				{ name: 'Celda azul-claro2', element: 'td', attributes: { 'class': 'bck-td-6' } },
				{ name: 'Celd borde abajo', element: 'td', attributes: { 'class': 'bck-td-4' } },

				{ name: 'Desplegable', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_demo-dropdown' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_demo-dropdown-2' } },
				{ name: 'Desplegable 3 rojo', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_demo-dropdown-3' } },
				
				{ name: 'Icono Antes', element: 'span', attributes: { 'class': 'icon icon-antes' } },
				{ name: 'Icono Durante', element: 'span', attributes: { 'class': 'icon icon-durante' } },
				{ name: 'Icono Despues', element: 'span', attributes: { 'class': 'icon icon-despues' } }


			]
		},
		slidesTitle: {},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			this.fillSlidesTitle();
			this.formatCarouselindicators();
			this.animateNavbarOnScroll();
			this.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},
		
		
		configEditor: function (editor) {
		editor.dtd.$removeEmpty['span'] = false;
		},
		

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			var firstSlide = eval('t0_slide');
			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<span class="sectionTitle"></span>' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			$navbarBottom.find('li').tooltip('destroy');

			var navigatorIndex = 0;

			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title.replace(/<span class="index">[\d]+<\/span>/g, ''),
					textIndice = stripHTML(slideTitle),
					clase = '';

				if (slide.isConcatenate) continue;

				if (slide.seccion) {
					clase = (slide.seccion == 'taller') ? ('fa fa-edit') : ('fa fa-check');
				}

				dropDown += '<li role="presentation"><a role="menuitem"></span> <span class="title">' + textIndice + '</span></a></li>';

				navigatorIndex++;
			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'santillana_demo-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator" class="hidden"/>')
					.end()
				.find('.dropdown')
					.find('li')
						.on('click', function (event) {
							$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
						});

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			})

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) + '_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			var curso = blink.getCourse(idcurso);
			curso.done(function () {
				var units = curso.responseJSON.units;
				var number = 0;
				var dropDownTemas = '' +
					'<div class="dropdownTemas">' +
						'<button id="tLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<h2><span id="courseIndex"></span>' +
								'<div id="nombre-tema-wrapper">' +
									'</span><span id="nombre-tema">' + blink.courseInfo.unit + '<span class="caret"></span></span>' +
									'<a href="#" id="goTo-indice">' + text_web.slide_volver_indice + '</a>' +
								'</div>' +
							'</h2>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="tLabel">';

				for (var i in units) {
					var title = units[i].title;
					if (title && units[i].subunits.length) { //Si el tema tiene actividades
						dropDownTemas += '' +
							'<li role="presentation" class="lista-temas" data-url="' + units[i].subunits[0].url + '">' +
								'<span>'+ units[i].number + '</span><a role="menuitem">' + title + '</a>' +
							'</li>'
						if (title == blink.courseInfo.unit) number = units[i].number;
					}
				}

				dropDownTemas += '' +
						'</ul>' +
					'</div>';

				$('.dropdown')
					.before(dropDownTemas)
					.end()
					.find('#courseIndex').text(number);

				$('.lista-temas').click(function() {
					redireccionar($(this).data('url'));
				})

				$('#goTo-indice').click(function(event) {
					event.stopPropagation();
					return showCursoCommit();
				});
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}


			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var $navigator = $('<div class="navigator"><div class="main-navigator"><div class="left"></div><div class="right"></div></div></div>'),
				$leftControl = $('.left.slider-control').clone(),
				$rightControl = $('.right.slider-control').clone();

			var self = this.slidesTitle;

			var esdeber = blink.activity.esdeber;

			$leftControl.add($rightControl).find('span').remove();

			var slideIndex = 0; // se utiliza como indice para saltarnos los concatenados en el each
			var slidesNav = $('.item-container');
			// Filtramos para que solo coja las slides que no son final slide para iterar sobre ellas
			slidesNav = slidesNav.filter(function(element){
				if ($(slidesNav[element]).find('#final').length > 0) {
					return false;
				}
				return true;
			});

			slidesNav.each(function (index, element) {
				var $itemNavigator = $navigator.clone(),
					$left, $right, hasLeft = false;

				var prevSlide,
					prevIndex = slideIndex-1;
				// si  hay una slide anterior se recorre hacia atras hasta que no haya concatenados
				// si estoy en la slide 0 no se pinta
				while(prevIndex>=0){
					prevSlide = window['t'+ prevIndex +'_slide'];
					if(!esdeber && prevSlide.isConcatenate){
						prevIndex--;
					}
					else{
						$left = $leftControl.clone();
						$left.append('<span class="title">'+self['t'+prevIndex+'_slide']+'</span>');
						$itemNavigator.find('.left').append($left);
						hasLeft = true;
						break;
					}
				}

				slideIndex++;
				var nextSlide;
				// si  hay una slide siguiente se recorre hacia adelante hasta que no haya concatenados
				// si estoy en la slide ultima no se pinta boton next
				while(slideIndex<window.secuencia.length){
					nextSlide = window['t'+ slideIndex +'_slide'];
					if(!esdeber && nextSlide.isConcatenate){
						slideIndex++;
					}
					else{
						$right = $rightControl.clone();
						$right.prepend('<span class="title">'+self['t'+slideIndex+'_slide']+'</span>');
						$itemNavigator.find('.right').append($right);
						hasLeft && $right.parent('.right').addClass('separator');
						break;
					}
				}
				$(element).append($itemNavigator);
			});

			$('.navigator')
				.on('click', '.left.slider-control', function () {
					blink.activity.showPrevSection();
				})
				.on('click', '.right.slider-control', function () {
					blink.activity.showNextSection();
				});
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

		animateNavbarOnScroll: function () {
			if (!blink.isApp) return;
			var $navbar = $('.santillana_demo-navbar');
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},
                
                changeHighBar: function () {
                    if($('.santillana_demo-navbar').length>0 && $('.navbar').length>0){
                        blink.theme.setTopByHeight('.navbar', '.santillana_demo-navbar');
                    }
                }
	};

	santillana_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), santillana_demoStyle.prototype);

	blink.theme.styles['santillana_demo'] = santillana_demoStyle;

})( blink );
