var video = document.querySelector(".video");
var play_button = document.querySelector("#play");
var pause_button = document.querySelector("#pause");
var slower_button = document.querySelector("#slower");
var faster_button = document.querySelector("#faster");
var skip_button = document.querySelector("#skip");
var mute_button = document.querySelector("#mute");
var vintage_button = document.querySelector("#vintage");
var orig_button = document.querySelector("#orig");
var video_slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	video.load();
});

play_button.addEventListener("click", function() {
	video.play();
	// And update volume information
	document.querySelector("#volume").innerHTML = video.volume * 100;
});

pause_button.addEventListener("click", function(){
	video.pause();
});

slower_button.addEventListener("click", function(){
	//slow current video by 10% each time clicked
	video.playbackRate = video.playbackRate * 0.9;
	//log new speed to console
	console.log(video.playbackRate);
});

faster_button.addEventListener("click", function(){
	//increase current video speed each time clicked
	video.playbackRate = video.playbackRate / 0.9;
	//log new speed to console
	console.log(video.playbackRate);
});

skip_button.addEventListener("click", function(){
	//advance current video by 10 seconds
		//if length has been exceeded go back to start of video
	video.currentTime = video.currentTime + 10;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.pause();
	}
	//log current location of video
	console.log(video.currentTime);
});

mute_button.addEventListener("click", function(){
	if(video.muted){
		//if video is currently muted
		video.muted = false;
		mute_button.innerHTML = "Mute";
	} else{
		//if video currently unmuted
		video.muted = true;
		mute_button.innerHTML = "Unmute";
	}
});

//Volume slider:
// change volume based on the slider and update volume information
video_slider.addEventListener("change", function(){
	video.volume = video_slider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

vintage_button.addEventListener("click", function(){
	//utilize existing oldschool class on video element?
	video.classList.add("oldSchool");
});

orig_button.addEventListener("click", function(){
	//remove oldschool class from video element
	video.classList.remove("oldSchool");
});

