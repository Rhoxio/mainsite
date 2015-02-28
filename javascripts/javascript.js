sayingArray = ["Experience is an apt teacher, but wisdom is the medium of creativity.",'To change the world, you need only to speak your mind.', "Existence is the process of learning, and learning is the process of living.", 'Inspiration is a product of passion; a consequence of the human spirit.']

$( document ).ready(function(){
	$('.tagline').html(sayingArray[Math.floor(Math.random() * sayingArray.length)])
	
	$('.about').on('click', function(event){
		event.preventDefault();
		var offset = $('.about-me').offset().top - 10;
		$('html,body').animate({scrollTop: offset}, 1000)
	})

	var tagFadeIn = function(){
		$('.tagline').fadeIn(2000, function(){
			console.log("Fade done. Ready for callback.")
		})
	}

	var nameFadeIn = function(){
		$('.name-desc').fadeIn(1000, function(){
			tagFadeIn()
		})
	}

	nameFadeIn()	
})
 