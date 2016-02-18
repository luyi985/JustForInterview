
preload.downloadAll();
function gameStart(){
	gameControll.pageChange.loadStartPage();
	game.init();
	game.loop();	
}
window.onload=function() {
	gameControll.loadGameDetails();
}