game.resize=function() {
	game.ratioConfig();
	/*game.canvas.width=game.width;
	game.canvas.height=game.height;*/
	game.currentHeight=window.innerHeight;
	game.currentWidth=window.innerHeight*game.ratio;
	//game.canvas.style.width=game.currentWidth+'px';
	//game.canvas.style.height=game.currentHeight+'px';
	
	if(game.currentWidth<=600){
		game.scale=0.6;
	}
	else if((600<game.currentWidth)&&(game.currentWidth<1025)){
		game.scale=0.8;	
	}
	else{
		game.scale=1;	
	}
	game.canvas.width=game.currentWidth;
	game.canvas.height=game.currentHeight;
	game.width=game.currentWidth;
	game.height=game.currentHeight;
	game.offset.top=game.canvas.offsetTop;
    game.offset.left=game.canvas.offsetLeft;
}