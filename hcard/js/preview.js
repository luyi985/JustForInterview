var preview=(function () {
	function ele(id){
		return document.getElementById(id);
	}
	function phonePreview(feId,preId){
		var fe=ele(feId);
		var pre=ele(preId);
		var v=fe.value;
		if(v.length==10){
			pre.innerHTML=v.substring(0,2)+" "+v.substring(2,6)+" "+v.substring(6,v.length);
		}
		else{
			pre.innerHTML=v;
		}
	}

	return{
		ele:ele,
		phonePreview:phonePreview
	}	
})();