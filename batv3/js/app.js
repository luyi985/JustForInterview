window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var game={
	canvas: document.getElementById("game"),
	ctx:null,
	width: 0,
	height: 0,
	currentWidth:0,
	currentHeight:0,
	ratio:0,
	scale:1,
	offset:{top: 0, left: 0},
	isLandscape: true,
	elements:[],
	nextBat: 10,
	hasGhost:false,
	result:{hit:0, misHit:0, score:0},
	timeToPlay: 10,
	canRecord: true,
	canStartGame:false,
	reset: function(){
		game.result={hit:0, misHit:0, score:0};
    	game.timeToPlay=10;
    	game.countDown.reset();
    	game.hasGhost=false;
    	game.elements=[];
    	game.canRecord=true;
    	game.canStartGame=true;
	}
}
game.rand=function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
game.ua = navigator.userAgent.toLowerCase();
game.android = game.ua.indexOf('android') > -1 ? true : false;
game.ios = (game.ua.indexOf('iphone') > -1 || game.ua.indexOf('ipad') > -1) ? true : false;