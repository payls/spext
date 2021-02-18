$(document).ready(function(){
	$('.spext-player-play').click(function(){
		$(this).toggleClass('paused');

		if($(this).hasClass('paused')) {
			document.getElementById('spext-song').play();
		} else {
			document.getElementById('spext-song').pause();
		}
	});

	$('.spext-hide-ctrlBtn').click(function(){
		$(this).parent().toggleClass('close');
		$(this).closest('.spext-musicWrp').toggleClass('close')
	});

	$('#spext-social-btn').click(function(){
		$(this).siblings('.spext-social-share').addClass('open');
	});

	$('.spext-close-socialBtn').click(function(){
		$(this).closest('.spext-social-share').removeClass('open');
	});

	console.log(document.getElementById('spext-song').currentTime, document.getElementById('spext-song').duration);

	// Audio Play Slider Progress 
	var player = document.getElementById("spext-song");
	var currentTime = document.querySelector(".spext-current-time");
	var totalTime = document.querySelector(".spext-total-time");
	var progress = document.querySelector(".spext-progress");

	player.addEventListener("loadedmetadata", function() {
	    totalTime.textContent = formatTime(player.duration);
	});
	player.addEventListener("timeupdate", updateProgress);

	console.log(currentTime, totalTime, formatTime(player.duration));
	

	function updateProgress() {
	  var current = player.currentTime;
	  var percent = (current / player.duration) * 100;

	  // progress.style.width = percent + "%";
	  var width = percent + "%";
	  $('.spext-progress').animate({ width: width }, 250);
	  $('#spext-pin').animate({ left: width }, 250);

	  currentTime.textContent = formatTime(current);
	}

	function formatTime(time) {
	  var min = Math.floor(time / 60);
	  var sec = Math.floor(time % 60);
	  return min + ":" + (sec < 10 ? "0" + sec : sec);
	}

	$('.spext-slider').on('click', function(e) {
	   	var self = $(this),
	        totalWidth = self.width(),
	        offsetX = e.offsetX,
	        offsetPercentage = offsetX / totalWidth;

	       // console.log(totalWidth, offsetX, offsetPercentage)
	  
	  	if (e.type === 'click') {
			player.currentTime = player.duration * offsetPercentage;
	  	}
	});
});