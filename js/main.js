$(document).ready(function(){
	// document.getElementById("emailbox").focus();

	$('#title').click(function(){
		$('.full-vid-wrapper').toggle().addClass('animated fadeIn');
		$('#fullvid').attr('src', 'http://player.vimeo.com/video/107348115?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179&amp;autoplay=1');
	})

	$('#exit-vid').click(function(){
		console.log('exit been clicked!!');
		$('.full-vid-wrapper').hide();
	})
})