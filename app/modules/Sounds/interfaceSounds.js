angular.module('EliteBattleArena.Sounds')
.service("interfaceSounds",function(ngAudio){

     var sounds = {
    	click1:ngAudio.load('audio/multimedia-button-click-188.mp3'),
    };

    this.click = function(options) {
    	var sound = _.sample([sounds.click1]);
    	sound.volume = 0.3;
    	sound.play();
    }
})

