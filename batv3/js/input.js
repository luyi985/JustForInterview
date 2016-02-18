game.input={
	x: 0,
    y: 0,
    tapped: false,
    set: function(e) {
       /* this.y = (e.pageY - game.offset.top) * game.scale;
        this.x = (e.pageX - game.offset.left) * game.scale;*/
        this.y = (e.pageY - game.offset.top);
        this.x = (e.pageX - game.offset.left)
        //alert("Point: ("+this.x+","+this.y+")");
        game.elements.push(new hit(this.x,this.y));
        //game.mkSound.gunFireStop();
        //game.mkSound.gunFire();
        this.tapped = true;
    }
}