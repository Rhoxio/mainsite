sayingArray = ["Experience is an apt teacher, but wisdom is the medium of creativity.",'To change the world, you need only to speak your mind.', "Existence is the process of learning, and learning is the process of living.", 'Inspiration is a product of passion; a consequence of the human spirit.']
rubyProficiencies = "Ruby is my first programming love. I have experience with Rails, Sinatra, Nokogiri, ActiveRecord with SQLite/Postgresql as well as plethora of other gems and resources. I am currently building my game, Adjective, on a Rails platform, and have never been happier with the results."
jsProficiencies = "Javascript is the langauge of the web, and no web developer would be caught dead without knowing at least a few core frameworks and libraries. I like using Coffeescript, D3, Angular, Node.js, Express, and the CreateJS suite. Smooth Transaction, my final group project at Dev Bootcamp, was built using pure Javascript with MongoDB."
profIntro = 'I am completely open to learning any new technologies, but I am most experienced in Ruby and Javascript. Hover over the icons to see a more detailed description about my skills with each.'

$( document ).ready(function(){

	$('.tagline').html(sayingArray[Math.floor(Math.random() * sayingArray.length)])

	$('.pro-display').html(profIntro)
	
	$('.about').on('click', function(event){
		event.preventDefault();
		var offset = $('.about-me').offset().top - 10;
		$('html,body').animate({scrollTop: offset}, 1000)
	})

	$('.projects-link').on('click', function(event){
		event.preventDefault();
		var offset = $('.projects').offset().top - 10;
		$('html,body').animate({scrollTop: offset}, 1000)
	})

// I tried looping the event listeners, but it wouldn't instatiate
// the bindings for some reason. I will do it the un-DRY way for now until I fix it up. 
	
	$('.game-engine-overlay').hover(function(){
		$(this).animate({'opacity':'0.7'}, 'fast')
		$('.game-engine-text').animate({'opacity':'1'}, 'fast')
	})

	$('.game-engine-overlay').mouseout(function(){
		$(this).animate({'opacity':'0'}, 'fast')
		$('.game-engine-text').animate({'opacity':'0'}, 'fast')
	})

	$('.adjective-overlay').hover(function(){
		$(this).animate({'opacity':'0.7'}, 'fast')
		$('.adjective-text').animate({'opacity':'1'}, 'fast')
	})

	$('.adjective-overlay').mouseout(function(){
		$(this).animate({'opacity':'0'}, 'fast')
		$('.adjective-text').animate({'opacity':'0'}, 'fast')
	})

	$('.smooth-overlay').hover(function(){
		$(this).animate({'opacity':'0.7'}, 'fast')
		$('.smooth-text').animate({'opacity':'1'}, 'fast')
	})

	$('.smooth-overlay').mouseout(function(){
		$(this).animate({'opacity':'0'}, 'fast')
		$('.smooth-text').animate({'opacity':'0'}, 'fast')
	})

	$('.ruby').hover(function(){
		$('.pro-display').html(rubyProficiencies)
		$(this).css('opacity','0.9')
	})

	$('.js').hover(function(){
		$('.pro-display').html(jsProficiencies)
		$(this).css('opacity','0.9')
	})

	$('.ruby').mouseleave(function(){	
		$('.pro-display').html(profIntro)
		$(this).css('opacity','1')
	})

	$('.js').mouseleave(function(){	
		$('.pro-display').html(profIntro)
		$(this).css('opacity','1')
	})

	$('.footer').hover(function(){
		$(this).animate({'opacity': '1'}, 'fast')
	})

	$('.footer').mouseleave(function(){
		$(this).animate({'opacity': '0.9'}, 'fast')
	})

	$('.github-icon').hover(function(){
		$(this).animate({'bottom':'10px'}, 150)
	})

	$('.github-icon').mouseout(function(){
		$(this).animate({'bottom':'0px'}, 150)
	})

	$('.youtube-icon').hover(function(){
		$(this).animate({'bottom':'10px'}, 150)
	})

	$('.youtube-icon').mouseout(function(){
		$(this).animate({'bottom':'0px'}, 150)
	})

	$('.gmail-icon').hover(function(){
		$(this).animate({'bottom':'10px'}, 150)
	})

	$('.gmail-icon').mouseout(function(){
		$(this).animate({'bottom':'0px'}, 150)
	})

	$('.linkedin-icon').hover(function(){
		$(this).animate({'bottom':'10px'}, 150)
	})

	$('.linkedin-icon').mouseout(function(){
		$(this).animate({'bottom':'0px'}, 150)
	})

// ------------------------
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
 