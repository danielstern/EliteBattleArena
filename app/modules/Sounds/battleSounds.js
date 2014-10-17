angular.module('EliteBattleArena.Sounds')
.service("battleSounds",function(ngAudio){
    var battleSounds = this;

    var preloaders = {
    	punch:ngAudio.load('audio/Swing Fist 2.wav')
    }

    this.attack = function(options) {
    	console.log("playing attack sound");
    	var punch = ngAudio.load('audio/Swing Fist 2.wav');
    	punch.play();

    }
})

