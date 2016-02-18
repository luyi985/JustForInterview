/*var gameControll={
	attempts: 3,
	initial: function(){
		sessionStorage.setItem("batsmash",JSON.stringify({'attempts': gameControll.attempts,'currentAttempt':0,'attemptsRemaining':3,'bestScore':0,'score':[]}));
	},
	record: function (score) {
		var dataStr=sessionStorage.getItem("batsmash");
		var getData=null;
		if(dataStr){
			getData=JSON.parse(sessionStorage.getItem("batsmash"));
			getData.currentAttempt++;
			getData.attemptsRemaining=getData.attempts-getData.currentAttempt;
			getData.score.push(score);
			getData.bestScore=gameControll.getMaxOfArray(getData.score);
			sessionStorage.setItem("batsmash",JSON.stringify(getData));
			if(getData.attemptsRemaining<=0){
				window.location="thankyou.html";
			}
			else{
				window.location="result.html";
			}
		}
	},
	getMaxOfArray: function(numArray) {
    	return Math.max.apply(null, numArray);
	},
	clearcaches: function() {
		sessionStorage.removeItem('batsmash');
	},
	getPlayingData:function() {
		var d=JSON.parse(sessionStorage.getItem('batsmash'));
		return d;
	}
};

(function(){
if(document.getElementById("gamestart")){
	gameControll.clearcaches();
	var startGame=document.getElementById("startGame");
	var totalAttempts=document.getElementById("totalAttempts");
	totalAttempts.innerHTML=gameControll.attempts;
	startGame.addEventListener("click", function(){
		gameControll.initial();
		window.location="game.html";
	});
}
else if(document.getElementById("result")){
	var startGame=document.getElementById("startGame");
	var bestScore=document.getElementById("bestScore");
	var attemptsRemaining=document.getElementById("attemptsRemaining");
	//-----------------
	var playindData=gameControll.getPlayingData();
	bestScore.innerHTML=playindData.bestScore;
	attemptsRemaining.innerHTML=playindData.attemptsRemaining;
	startGame.addEventListener("click", function(){
		window.location="game.html";
	});
}
else if(document.getElementById("thankyou")){
	var bestScore=document.getElementById("bestScore");
	var back=document.getElementById("back");
	//-----------------
	var playindData=gameControll.getPlayingData();
	bestScore.innerHTML=playindData.bestScore;
	back.addEventListener("click", function(){
		window.location="index.html";
	});
}	
}());*/
function is_touch_device() {
 	return (('ontouchstart' in window)||(navigator.MaxTouchPoints > 0)||(navigator.msMaxTouchPoints > 0));
}
function fire(ele,callback){
	console.dir(ele);
	if(is_touch_device()){
		ele.addEventListener("touchstart",null,false);
		ele.addEventListener("touchend",callback,false);
		ele.addEventListener("touchmove",null,false);
	}else{
		ele.addEventListener("click",callback,false);
	}
}


var gameControll=(function(){
	var _this=this;
	this.details={
		roundNum:3,
		currentRound:0,
		remainingRound:0,
		bestScore:0,
		scores: [],
	}
	var gameStart=document.getElementById("gamestart");
	var gameResult=document.getElementById("result");
	var gameThankYou=document.getElementById("thankyou");
	var gameCanvas=document.getElementById("game");
	//---------------------
	//----------------------
	var pages={
		loadStartPage:function(){
			_this.loadGameDetails();
			gameStart.className="container transition active";
			gameResult.className="container transition";
			gameThankYou.className="container transition";
			gameCanvas.className="";
		},
		loadResultPage:function(){
			_this.loadGameDetails();
			gameStart.className="container transition";
			gameResult.className="container transition active";
			gameThankYou.className="container transition";
			gameCanvas.className="";
		},
		loadThanksPage:function(){
			_this.loadGameDetails();
			gameStart.className="container transition";
			gameResult.className="container transition";
			gameThankYou.className="container transition active";
			gameCanvas.className="";
		},
		loadGame:function(){
			gameStart.className="container transition";
			gameResult.className="container transition";
			gameThankYou.className="container transition";
			gameCanvas.className="active";
			game.reset();	
		}
	}
	//------------------------------------------------------
	var btnStart=document.getElementById("startGameStart");
	var btnResult=document.getElementById("startGameResult");
	var btnThank=document.getElementById("backThankYou");
	fire(btnThank,function(){
		gameControll.reset();
		gameControll.pageChange.loadStartPage();
	});
	fire(btnResult,function(){gameControll.pageChange.loadGame();});
	fire(btnStart,function(){gameControll.pageChange.loadGame();});
	//------------------------------------------------------
	var bestScoreDiv=document.getElementsByClassName("bestScore");
	var totalAttemptsDiv=document.getElementById("totalAttempts");
	var remainingAttemptsDiv=document.getElementById("attemptsRemaining");
	this.loadGameDetails=function(){
		bestScoreDiv[0].innerHTML=this.details.bestScore;
		bestScoreDiv[1].innerHTML=this.details.bestScore;
		totalAttemptsDiv.innerHTML=this.details.roundNum;
		remainingAttemptsDiv.innerHTML=this.details.remainingRound;
	}
	//------------------------------------------------------
	return {
		reset:function(){
			//console.dir(_this.details);
			_this.details.roundNum=3;
			_this.details.currentRound=0;
			_this.details.remainingRound=0;
			_this.details.bestScore=0;
			_this.details.scores=[];
		},
		getDetails: this.details,
		pageChange: pages,
		addScores: function(s){
			_this.details.currentRound++;
			_this.details.remainingRound=_this.details.roundNum-_this.details.currentRound;
			_this.details.scores.push(s);
			_this.details.bestScore=Math.max.apply(null, _this.details.scores);
			//-----------------------
			if(_this.details.currentRound>=_this.details.roundNum){
				pages.loadThanksPage();
			}
			else{
				pages.loadResultPage();
			}
		},
		loadGameDetails: function(){
			_this.loadGameDetails();
		}
	} 
})();

