angular.module('EliteBattleArena.Sounds')
.service("battleSounds",function(ngAudio,$rootScope){
    var battleSounds = this;

     var sounds = {
    	punch1:ngAudio.load('audio/Punch Hit 1.wav'),
    	punch2:ngAudio.load('audio/Punch Hit 2.wav'),
    	punch3:ngAudio.load('audio/Punch Hit 3.wav'),
    	punch4:ngAudio.load('audio/Punch 4.wav'),
    	punch5:ngAudio.load('audio/Punch 1.wav'),
    	punch6:ngAudio.load('audio/Punch 2.wav'),
    	punch7:ngAudio.load('audio/Punch 3.wav'),
    	swing1:ngAudio.load('audio/Swing Fist 1.wav'),
    	swing2:ngAudio.load('audio/Swing Fist 2.wav'),
    	block1:ngAudio.load('audio/Block 1.wav'),
    	block2:ngAudio.load('audio/Block 2.wav'),
    };

    
    $rootScope.$watch('game.soundVolume',function(vol){
        for (key in sounds) {
            // consle.log("setting volume");
            sounds[key].volume = vol;
        }
    })

    this.hit = function(options) {
    	var sound = _.sample([sounds.punch1,sounds.punch2,sounds.punch3,sounds.punch4,sounds.punch5,sounds.punch6])
    	sound.play();
    }

    this.swing = function(options) {
    	var sound = _.sample([sounds.swing1,sounds.swing2])
    	sound.unbind();
    	sound.play();
    }

    this.block = function(options) {
    	var sound = _.sample([sounds.block1,sounds.block2]);
    	sound.play();
    }
})

