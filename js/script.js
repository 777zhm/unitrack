
(function($) {

	$( document ).ready(function() {
		
		$('.open_submenu a').click(function(){
			$('.uni_block').slideToggle();
		});
		$('.load_more_opportunities').click(function(){
			$('.more_opportunities').slideDown();
			$('.more_opportunities').css('display', 'flex');
			$(this).hide();
		});


		window.onscroll = function() { //вызываем при скролле
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			var block_top = $('header').height();

			if(scrolled < block_top){
				$('.uni_block').removeClass('fixed');
			} else{
				$('.uni_block').addClass('fixed');

			}

		}

		$('.partners_slider').owlCarousel({
			navigation : false,
			pagination : false,
		      items : 5,
		      itemsDesktop : [1199,4],
		      itemsDesktopSmall : [979,3],
			autoPlay : 3500
		});



	   $('#contact_form').submit(function(e){
	    e.preventDefault();
	    send_contact_form( $(this) );

	        console.log('submit');
	   })


	  function send_contact_form( form ) {
	    var data = form.serialize();

	      $.ajax({
	      type: 'POST',
	      url: 'send.php',
	      dataType: 'json',
	      data: data,
	      beforeSend: function() {
	        $('#load_banner').children('.popup_bg').fadeIn();  
	      },
	      success: function() {
	        $('#load_banner').children('.popup_bg').fadeOut();  
	        $('#success_banner').children('.popup_bg').fadeIn();  

	      },
	      error: function(){
	        console.log('error');
	      }
	      });
	  }



	$('.popup_bg').mousedown(function(e) {
		var clicked = $(e.target); // get the element clicked
		if (clicked.is('.popup') || clicked.parents().is('.popup')) {
			return;
		} else {
			$('.popup_bg').hide();
		}        
	});




	});

})( jQuery );