<<<<<<< HEAD
(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
=======
var helloSpeaker = {
    speakWord : "Hello ",
    speak : function(name) {
        console.log(this.speakWord + " " + name);
    } 
}
>>>>>>> f84969c82c52887357eb742a5a31a4e4889276d0
