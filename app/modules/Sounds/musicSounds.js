angular.module('EliteBattleArena.Sounds')
.service("musicSounds",function(ngAudio,$rootScope){

     var sounds = {
    	menu:ngAudio.load('audio/2-05 Mellow Darkness.mp3'),
    	battle:ngAudio.load('audio/1-02 Resonant Hopes Ignited Wills.mp3'),
    	victory:ngAudio.load('audio/2-12 Victory Theme.mp3'),
    };

    function muteAllSounds() {
    	for (key in sounds) {
    		sounds[key].muting = true;
    	}
    }

    this.menu= function(options) {
    	muteAllSounds();
    	var sound = sounds.menu;
    	sound.muting = false;
    	sound.loop = true;
    	sound.play();
    }

    this.battle = function(options) {
    	muteAllSounds();
    	var sound = sounds.battle;
    	sound.muting = false;
    	sound.currentTime = 0;
    	sound.loop = true;
    	sound.play();
    }

    this.victory = function() {
    	muteAllSounds();
    	var sound = sounds.victory;
    	sound.muting = false;
    	sound.currentTime = 0;
    	sound.loop = true;
    	sound.play();

    }

    $rootScope.$watch('game.musicVolume',function(vol){
        for (key in sounds) {
            // consle.log("setting volume");
            sounds[key].volume = vol;
        }
    })
})

