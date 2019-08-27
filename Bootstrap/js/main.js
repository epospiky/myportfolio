


(function($) {

"use strict";
/* for smooth scroll*/
$('.smoothscroll').on('click', function (e){
	e.preventDefault();
	var target = this.hash,
	$target = $(target);
	$('html, body' ).stop().animate({
		'scrollTop':$target.offset().top
	}, 800, 'swing', function (){
		window.location.hash = target;
	});
});

/*
*
*for loader
*
*/
$(window).load(function (){
	//$("#loader, #loader1").fadeOut('slow', function (){
		$('#preloader').delay(1500).fadeOut('slow');
	//})
})

/*
*
*highlight the current section in the navigation bar
*
*/
var navigation = $('.main-navigation li a');

navigation.on('click', function () {
	//e.preventDefault();
	//active = $(this);
	if (navigation.parent().siblings().hasClass("current")) {
		$(this).parent().siblings().removeClass("current");
		$(this).parent().addClass("current");
	};
})


var $waypoint = $('section'),
nav_links = $(".main-navigation li a");
$waypoint.waypoint({
	handler: function (direction) {
	var active_section = $('section#' + this.element.id);
	if (direction === "up") 
		console.log('hey i just enabled the waypoint to go up');
		active_section = active_section.prev();
		var active_link = $('.main-navigation li a[href = "#'+ active_section.attr('id') + '"]');
		nav_links.parent().removeClass("current");
		active_link.parent().addClass("current");
		if (direction === "down") {
			active_section = active_section.next();
		var active_link = $('.main-navigation li a[href = "#'+ active_section.attr('id') + '"]');
		nav_links.parent().removeClass("current");
		active_link.parent().addClass("current");
		};
	 
}, offset:'10%'});

//var $sections = $("section"),
//navigation_links = $("#main-nav-wrap li a");
//$sections.waypoint( function () {
//		console.log('hey!  i just trigger waypoint!')
	 //var active_section;
	 //active_section = $('section#' + this.element.id);
	 //if (direction === "up") active_section = active_section.prev();
	 //var active_link = $('#main-nav-wrap a[href="#' + active_section.attr('id') + '"]');
	 //navigation_links.parent().removeClass("current");
	 //active_link.parent().addClass("current");

//	}
//);






/*
*
*for scroll to top button
*
*/
var pxShow = 300;
var fadeOutTime = 400;
var fadeInTime = 400;
var ScrollSpeed = 300;

jQuery(window).scroll(function(){
	if (!($("#header-search").hasClass('is-vissible'))) {
	if (jQuery(window).scrollTop() >= pxShow) {
		jQuery('#to-top').fadeIn(fadeInTime);
	}else {
		jQuery('#to-top').fadeOut(fadeOutTime);

	}
}
});


/* for toggle menu*/
var toggleButton = $('.menu-toggle'), 
nav = $('.main-navigation');
toggleButton.on('click', function (e){
	e.preventDefault();
	toggleButton.toggleClass('is-clicked');
	$('.top-bar').toggleClass('border-r').animate("fast");
	nav.slideToggle();
})
nav.find('li a').on('click', function (){
	//e.preventDefault();
	$('.top-bar').toggleClass('border-r').animate("fast");
	toggleButton.toggleClass('is-clicked');
	nav.fadeOut();
	//$('.top-bar').css({"border-radius" :"0 0 10px 10px;"});
})


/*
*
*  for message validation
*
*/




$('#contactForm').validate({
	submitHandler: function(form){
		var url = "send.php";
		var msg = "Oppsy! Please try again"
var sLoader = $('#submit-loader');
var data = $('#contactForm').serialize();
$.ajax({

	type: 'post',
	url: url,
	data: data,
	
	success: function(data){
		if (data==="1") {
			sLoader.fadeOut();
			$('#contactForm').trigger('reset');
			$('#message-warning').hide();
			//$('#contactForm').fadeOut();
			$('#message-success').fadeIn();
			$('#message-success').delay(3500).fadeOut();
		} else{
			sLoader.fadeOut();
			$('#message-warning').html(msg);
			$('#message-warning').fadeIn();
		};
	},
	error: function(jqXHR,textStatus,errorThrown){
		sLoader.fadeOut();
		$('#message-warning').html('An error occured. Reload and try again!');
		$('#message-warning').fadeIn();
	},
	beforeSend: function(){
		sLoader.fadeIn();
	},
})
	}
});


/*$('#contactForm').validate({
			/* submit via ajax *
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');
			var form = $('#contactForm').serialize();
			var url = $('#contactForm').attr('action');
			$.ajax({      	

		      type: "POST",
		      url: url,
		      data: form,
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(response) {

	            // Message was sent
	            if (response === "1") {
	            	sLoader.fadeOut(); 
	            	$('#contactForm').trigger('reset');
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	         /*   else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}
});*/

})(jQuery);