game.score={
	timing: 60,
	update: function(){
		game.result.score=game.result.hit-game.result.misHit;
		game.score.timing-=1;
		if (game.score.timing<=0) {
			game.timeToPlay-=1;
			game.score.timing=60;
		};
		if(game.timeToPlay<=0&&game.canRecord){
			gameControll.addScores(game.result.score);
			game.canRecord=false;
			game.canStartGame=false;
		}
	},
	render: function(){
		var sstr="Score:"+game.result.score; 
		var tstr="Time Remaining :"+game.timeToPlay;
		game.draw.text(sstr,5,20,20,'#dedede');
		game.draw.text(tstr,5,45,20,'#dedede');
	}
}