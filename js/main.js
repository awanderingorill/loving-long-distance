$(document).ready(function(){

	//code to play trailer for project 
	$('#title').click(function(){
		$('.full-vid-wrapper').toggle().addClass('animated fadeIn');
		$('#fullvid').attr('src', 'http://player.vimeo.com/video/107348115?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179&amp;autoplay=1');
	})

	//code to exit video
	$('#exit-vid').click(function(){
		$('.full-vid-wrapper').hide();
		$('#fullvid').removeAttr('src');
	})


	// this is to set the vimeo player height for the trailer
	var	screen_width = window.innerWidth;

	if (screen_width < 500){
		$('.vimeo-iframe2').attr('height', (screen_width/1.777777));
	} else {
		$('.vimeo-iframe2').attr('height', 280);
	}

	//for googleform
	$('#ss-form').submit(function(){
       $(this).hide();
       $('#lld-submit-page').show();
	});
		
})