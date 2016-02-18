game.countDown=(function() {
	var timing=60;
	var seconds=3;
	return {
		update: function(callback){
			timing-=1;
			if(timing<=0){
				seconds-=1;
				timing=60;
			}
			if(seconds<=0){
				callback();
			}
			else{
				game.elements=[];
			}
		},
		render:function(callback){
			if(seconds<=0){
				callback();
			}
			else{
				game.draw.text(seconds,game.width/2-60,game.height/2+60,240,'#000');
			}
		},
		reset:function(){
			timing=60;
			seconds=3;
		}
	}
}());