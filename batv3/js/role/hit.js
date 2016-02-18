function hit (x,y) {
	this.type="hit";
	this.x=x;
	this.y=y;
	this.r=10*game.scale;
	this.opacity=1;
	this.fade = 0.05;
	this.remove=true;
	this.update=function(){
		this.opacity -= this.fade;
        this.remove = (this.opacity < 0) ? true : false;
        var ghostHitted=false;
        var target=this;
		if(game.input.tapped){
			for(var bb=0; bb<game.elements.length; bb++){
				if(game.elements[bb].type=="ghost"){
					if(game.getShotted(game.elements[bb],target)){
						game.elements[bb].hitted=true;
						ghostHitted=true;
						game.result.misHit++;
						break;
					}
				}
				if((game.elements[bb].type=="bat")&&!ghostHitted){
					if(game.getShotted(game.elements[bb],target)){
						game.elements[bb].hitted=true;
						game.result.hit++;
						break;
					}
				}
			}
        }
        game.input.tapped=false;
	}
	this.render=function(){
		game.draw.circle(this.x, this.y, this.r, 'rgba(255,0,0,' + this.opacity + ')');
	}
}


game.getShotted = function(t, b) {
    var tcx = t.x + t.w / 2;
    var tcy = t.y + t.h / 2;
    var tr = t.w > t.h ? t.h : t.w;
    var distance_squared = (((tcx - b.x) * (tcx - b.x)) +
        ((tcy - b.y) * (tcy - b.y)));
    var radii_squared = (tr + b.r) * (tr + b.r);
    if (distance_squared < radii_squared) {
        return true;
    } else {
        return false;
    }
}