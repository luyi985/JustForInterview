game.ratioConfig=function(){
	function portrait(){
		var width=275;
		var height=480;
		game.isLandscape=false;
		return width/height;
	}
	function landscape(){
		var width=480;
		var height=360;
		game.isLandscape=true;
		return width/height;
	}
	game.ratio=window.innerWidth>window.innerHeight?landscape():portrait(); 
}


game.init=function () {
	game.ratioConfig();
	game.canvas.width=game.width;
	game.canvas.height=game.height;
	game.ctx=game.canvas.getContext("2d");
    game.resize();
	//-----------------------Magic Touch--------------------
        if (game.android || game.ios) {
            window.addEventListener('touchstart', function(e) {
                e.preventDefault();
                //alert("touch");
                game.input.set(e.touches[0]);
            }, false);
            window.addEventListener('touchend', function(e) {
                e.preventDefault();
            }, false);
            window.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);
        } else {
            window.addEventListener('click', function(e) {
                e.preventDefault();
                //alert("click");
                game.input.set(e);
            }, false);
        }
}