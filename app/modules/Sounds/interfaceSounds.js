angular.module('EliteBattleArena.Sounds')
.service("interfaceSounds",function(ngAudio,$rootScope){

     var sounds = {
    	click1:ngAudio.load('audio/multimedia-button-click-188.mp3'),
    };

    this.setVolume = function(vol) {
    	for (key in sounds) {
    		sounds[key].volume = vol;
    	}
    }


    this.click = function(options) {
    	var sound = _.sample([sounds.click1]);
    	sound.play();
    }

    $rootScope.$watch('game.soundVolume',function(vol){
        for (key in sounds) {
            // consle.log("setting volume");
            sounds[key].volume = vol;
        }
    })
})

