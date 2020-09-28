/*
 * Copyright (c) 2020 Aminul
 * Author: Aminul
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	

	openSlideMenu();
	closeSlideMenu();
	abh_tm_portfolio();
	abh_magnificPopup();
	abh_wow_int();	
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		
		openSlideMenu();
		closeSlideMenu();
		
	});
	jQuery(window).on('resize',function(){
		abh_tm_portfolio();

	});
	
	$(window).on('load', function() {
		setTimeout(function(){
        jQuery('.abh_tm_preloader').addClass('loaded');
    }, 1000);
		
	});
	

	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------



// -----------------------------------------------------
// ---------------  Navebar-------------------
// -----------------------------------------------------
function openSlideMenu(){
	"use strict";
	
		document.getElementById('menu').style.width='150px';
		document.getElementById('content').style.marginLeft='-150px';
	}
function closeSlideMenu(){
	"use strict";
	
	document.getElementById('menu').style.width='0';
	document.getElementById('content').style.marginLeft='0';
	
}




// -----------------------------------------------------
// ---------------  portfolio Filter-------------------
// -----------------------------------------------------

function abh_tm_portfolio(){
	
	"use strict";
	

		// image loaded portfolio init
		
		$('.grid').imagesLoaded(function() {
			$('.portfolio-filter').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
			var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-item',
				}
			});
		});        
			
		// portfolio Filter
		$('.portfolio-filter button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
		
	}


// -----------------------------------------------------
// ---------------  magnificPopup-------------------
// -----------------------------------------------------

function abh_magnificPopup(){
	
	"use strict";
	

		// magnificPopup init
		$('.image-popup').magnificPopup({
			type: 'image',
			callbacks: {
				beforeOpen: function() {
				   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInUp');
				}
			},
			gallery: {
				enabled: true
			}
		});
	
	
	}
	
// -----------------------------------------------------
// ---------------  WOW-------------------
// -----------------------------------------------------

function abh_wow_int(){
	
	"use strict";
	
		// Active  WOW
		new WOW().init();

	}






