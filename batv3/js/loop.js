
game.update=function(){

	game.countDown.update(function(){
		/*game.nextBat-=1;
		if(game.nextBat<=0||game.elements.length<3){
			game.elements.push(new game.bat());
			game.nextBat=game.rand(120,130);
		}*/
		if(game.elements.length<4){
			game.elements.push(new game.bat());
			game.elements.push(new game.bat());
		}
		if(!game.hasGhost){
			game.elements.push(new game.ghost());
			game.hasGhost=true;
		}
		for(var el=0;el<game.elements.length;el++){
			game.elements[el].update();
		}
		if(game.canStartGame){
			game.score.update();
		}
	});
	
}

game.render=function(){
	game.countDown.render(function(){
		for(var el=0;el<game.elements.length;el++){
			if(game.elements[el].remove){
				game.elements.splice( el, 1 );
			}
			else{
				if(game.elements[el].type=="ghost"){continue;}
				game.elements[el].render();
			}
		}
		for(var el=0;el<game.elements.length;el++){
			if(game.elements[el].type=="ghost"){
				game.elements[el].render();
				break;
			}
		}
		game.score.render();
	});
}	

game.loop=function() {
	requestAnimFrame(game.loop);
	game.resize();
	game.update();
	game.draw.clear();
	game.render();
}