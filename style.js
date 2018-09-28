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
				{ name: 'Título 1', element: 'h2', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h3', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h3', attributes: { 'class': 'bck-title3'} },
				{ name: 'Flecha verde', element: 'h3', attributes: { 'class': 'bck-title4'} },
				{ name: 'Flecha morado', element: 'h3', attributes: { 'class': 'bck-title13'} },
				{ name: 'titulo verde', element: 'h3', attributes: { 'class': 'bck-title5'} },
				{ name: 'titulo morado', element: 'h3', attributes: { 'class': 'bck-title11'} },
				{ name: 'titulo gris', element: 'h3', attributes: { 'class': 'bck-title8'} },
				{ name: 'explora', element: 'h3', attributes: { 'class': 'bck-title6'} },
				{ name: 'paso gris', element: 'h3', attributes: { 'class': 'bck-title7'} },
				{ name: 'paso naranja', element: 'h3', attributes: { 'class': 'bck-title12'} },
				{ name: 'pie de foto', element: 'h3', attributes: { 'class': 'bck-title9'} },
				{ name: 'relaciona', element: 'h3', attributes: { 'class': 'bck-title10'} },
							

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				{ name: 'Énfasis Naranja', element: 'span', attributes: { 'class': 'bck-enfasis-naranja'} },
				{ name: 'Versalitas', element: 'span', attributes: { 'class': 'bck-versalitas'} },
				{ name: 'verde', element: 'span', attributes: { 'class': 'bck-verde1'} },
				{ name: 'morado', element: 'span', attributes: { 'class': 'bck-morado'} },
				{ name: 'circulo naranja', element: 'span', attributes: { 'class': 'bck-naranja'} },
				{ name: 'azul claro', element: 'span', attributes: { 'class': 'bck-azulclaro'} },
				{ name: 'verde desafio', element: 'span', attributes: { 'class': 'bck-verdedesafio'} },
				{ name: 'sombreado', element: 'span', attributes: { 'class': 'bck-sombreado'} },
				{ name: 'enfasis gris', element: 'span', attributes: { 'class': 'bck-gris'} },

				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista naranja', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista verde', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista morado', element: 'ol', attributes: { 'class': 'bck-ol-7' } },				
				{ name: 'Lista letra verde', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'Lista letra naranja', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'Lista letra morado', element: 'ol', attributes: { 'class': 'bck-ol-8' } },
				
				
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Des verde', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista Des amarilla', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'Lista Des blanca', element: 'ul', attributes: { 'class': 'bck-ul-5'} },
				{ name: 'Lista Des morado', element: 'ul', attributes: { 'class': 'bck-ul-6'} },
				
				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'Caja marron', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'Caja blanca', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'Caja flotante', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },
				{ name: 'Caja Activaverde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'Caja Activaazul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },
				{ name: 'Caja Activamorado', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'Caja materiales', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'Caja comprensión', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'Caja resumen naranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
                                { name: 'Caja saber más', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'Caja imagen', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-11' } },
				{ name: 'Caja azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },
				{ name: 'Caja formacion', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				
				{ name: 'Tabla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'Tabla verde', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				{ name: 'Celda', element: 'td', attributes: { 'class': 'bck-td'} },
				{ name: 'Celda verde', element: 'td', attributes: { 'class': 'bck-td-1' } },

				{ name: 'Desplegable', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_demo-dropdown' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_demo-dropdown-2' } },

				{ name: 'Imagen Sin Bordes', type: 'widget', widget: 'image', attributes: { 'class': 'normal-img' } },
				{ name: 'Imagen derecha', element: 'img', attributes: { 'class': 'bck-img right' } },
				{ name: 'Imagen izquierda', element: 'img', attributes: { 'class': 'bck-img left' } }

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
