var preload=(function(){
	this.imgs={
		batA: "img/batA.png",
		batB: "img/batB.png",
		ghostL: "img/ghost-l.png",
		ghostR: "img/ghost-r.png",
		ghostAngerL: "img/ghostAngerL.png",
		ghostAngerR: "img/ghostAngerR.png",
	}
	var lNum=Object.keys(this.imgs).length;
	this.imgNum=lNum;
	var loadedNum=0;
	var loadAsset=function(dic,name){
		if(this[dic][name].status!=="loading"){return;}
		this[dic][name].status = "loaded";
		loadedNum++;
		if(loadedNum===lNum && typeof this.finished === "function"){
			this.finished();
		}
	}	
	//-------------------------------
	this.downloadAll=function(){
		var _this=this;
		for(var img in this.imgs){
			if (this.imgs.hasOwnProperty(img)) {
				var src=this.imgs[img];
				(function(_this,img){
					_this.imgs[img]=new Image();
					_this.imgs[img].status="loading";
					_this.imgs[img].name=img;
					_this.imgs[img].onload=function() {loadAsset.call(_this,"imgs",img);}
					_this.imgs[img].src=src;
				})(_this,img);
			}
		}
	}
	//------------------------------
	return {
		imgs: this.imgs,
		assetNum: this.imgNum,
		downloadAll: this.downloadAll  
	}
})();
preload.finished=function(){
	gameStart();
}
