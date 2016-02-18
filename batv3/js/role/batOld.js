game.bat=function () {
	this.type="bat";
	this.w=180*game.scale;
	this.h=90*game.scale;
/*	this.w=180;
	this.h=90;*/
	this.x=game.rand(0,game.width-100);
	this.y=game.rand(0,game.height-50);
	this.speed=4*game.scale;
	this.livespan=1500;
	this.moving=game.rand(50,150);
	this.remove=false;
	this.hitted=false;
	this.batFly=7;
	this.batFlyIsA=true;
	this.path=game.move(this);
	this.pathId=game.rand(0,7);
	this.movingNext=false;
	this.update=function(){
		if(this.movingNext){
			this.pathId = game.rand(0,7);
			this.moving=game.rand(50,150); 
			this.movingNext=false;
		}
		if (this.moving<=0) {
         	this.movingNext=true;   
        }
        if(this.livespan<=0){
        	this.remove=true;
        }
        if(this.x< this.cage().leftBorder){
            this.pathId=1;
        }
        if(this.x> this.cage().rightBorder){
            this.pathId=0;
        }
        if(this.y>this.cage().bottomBorder){
            this.pathId=2;
        }
        if(this.y<this.cage().topBorder){
            this.pathId=3;
        }
        if(this.batFly<=0){
        	if (this.batFlyIsA) {
        		this.batFlyIsA=false;
        	}else{
        		this.batFlyIsA=true;
        	}
        	this.batFly=7;
        }
        if(this.hitted){
        	game.elements.push(new game.bat());
    	}
		this.moving-=1;
		this.path[this.pathId]();
		this.livespan-=1;
		this.batFly-=1;
		//-------------------------------------------
	}
	this.render=function(){
		if(this.hitted){
			game.exploding(this.x+this.w/2,this.y+this.h/2);
			this.remove=true;
			//game.mkSound.batDyingStop();
			//game.mkSound.batDying();
		}
		else{
			if(this.batFlyIsA){game.draw.batA(this.x,this.y);}
			else{game.draw.batB(this.x,this.y);}
		}
	}
}
game.bat.prototype.cage=game.border;