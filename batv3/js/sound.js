game.mkSound=(function(){
	var gunEle=document.getElementById('gunshot');
	var ghostEle=document.getElementById('ghostcry');
	var batEle=document.getElementById('batDying');
	return {
		gunFire: function(){gunEle.play()},
		ghostCry:function(){ghostEle.play()},
		batDying:function(){batEle.play()},
		gunFireStop: function(){
			gunEle.pause();
			gunEle.currentTime=0;
		},
		ghostCryStop: function(){
			ghostEle.pause();
			ghostEle.currentTime=0;
		},
		batDyingStop: function(){
			batEle.pause();
			batEle.currentTime=0;
		},
	}
}());
