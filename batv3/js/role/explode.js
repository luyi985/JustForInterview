game.exploding=function(x,y) {
	this.x=x;
	this.y=y;
	//alert("Explod: ("+x+","+y+")");
	function smallfire(){
		this.x=x;
		this.y=y;
		this.r=game.rand(2,10)*game.scale;
		this.type="fire";
		this.speed=0.1;
		this.fade=0.02;
		this.opacity=1;
		this.remove=false;
		this.moving=1000;
		this.movingNext=false;
		this.path=game.move(this);
		this.pathId=game.rand(0,7);
		this.update=function(){
			this.opacity-=this.fade;
			this.moving-=1;
			if(this.moving>990){
				this.speed*=game.rand(1.5,2.5);
				this.path[this.pathId]();
			}
			else{
				this.speed=5;
				this.y+=this.speed;
			}
			this.remove = (this.opacity < 0) ? true : false;
			
		}
		this.render=function(){
			game.draw.circle(this.x, this.y, this.r, 'rgba(255,0,0,' + this.opacity + ')');
		}
	}
	game.elements.push(new smallfire());
	game.elements.push(new smallfire());
	game.elements.push(new smallfire());
	game.elements.push(new smallfire());
	game.elements.push(new smallfire());
}