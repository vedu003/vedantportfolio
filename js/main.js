					/// Preloader

var preloader = document.getElementById('preloader');

function loadingFunc(){
    preloader.style.display = 'none';
}
					 
					 
					 //   riplle btn


$(document).ready(function(e){
    $('.btn').on('mouseenter',function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })

    $('.btn').on('mouseout',function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
})


                         //   Top button arrow


mybutton = document.getElementById('myBtn');
window.onscroll = function() {scrollFunc()};

function scrollFunc() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display= "block";
    }
    else{
        mybutton.style.display= "none";
    }
}

function topFunction() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
                      

 							//   Progress bar

$(document).ready(function() {
	'use strict';
	 
	var $pline = $('.progressbar.line');
	var $pcircle = $('.progressbar.circle');
	$pline.each(function(i) {
		var line = new ProgressBar.Line(this, {
			strokeWidth: 6,
			trailWidth: 6,
			duration: 3000,
			easing: 'easeInOut',
			text: {
				style: {
					color: 'inherit',
					position: 'absolute',
					right: '0',
					top: '-30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},
			step: function(state, line, attachment) {
				line.setText(Math.round(line.value() * 100) + ' %');
			}
		});
		var value = ($(this).attr('data-value') / 100);
		$pline.waypoint(function() {
			line.animate(value);
		}, {
			offset: "100%"
		})
	});
	$pcircle.each(function(i) {
		var circle = new ProgressBar.SemiCircle(this, {
			strokeWidth: 5,
			trailWidth: 5,
			duration: 2000,
			easing: 'easeInOut',
			step: function(state, circle, attachment) {
				circle.setText(Math.round(circle.value() * 100));
			}
		});
		var value = ($(this).attr('data-value') / 100);
		$pcircle.waypoint(function() {
			circle.animate(value);
		}, {
			offset: "100%"
		})
	});
	 
	$('.counter .value').counterUp({
		delay: 50,
		time: 1000
	});
	 
	$(".countdown").countdown();	 
});
    


       // ============= Animated text ==============

	   var typed = new Typed(".animate",{
		strings: [
			"Developer",
			"Designer",
			"Freelancer",
			"Innovator",
			"Blogger"
		],
		typeSpeed: 60,
		backSpeed: 60,
		loop: true
	});

	  // ============= Dark Theme ==============

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
	
