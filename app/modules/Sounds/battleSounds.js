angular.module('EliteBattleArena.Sounds')
.service("battleSounds",function(ngAudio){
    var battleSounds = this;

     var sounds = {
    	punch1:'audio/Punch Hit 1.wav',
    	punch2:'audio/Punch Hit 2.wav',
    	punch3:'audio/Punch Hit 3.wav',
    	swing1:'audio/Swing Fist 1.wav',
    	swing2:'audio/Swing Fist 2.wav',
    	block1:'audio/Block 1.wav',
    	block2:'audio/Block 2.wav',
    };

    for (key in sounds) {
    	ngAudio.load(sounds[key]);
    }

    this.attack = function(options) {
    	var punchSoundSrc = _.sample([sounds.punch1,sounds.punch2,sounds.punch3])
    	var punchSound = ngAudio.load(punchSoundSrc);
    	punchSound.volume = 0.3;
    	punchSound.play();
    }
})

