
var formModule=(function(v){
	var form=function(form) {
		if(!form) throw "Please input a HTMLFORM ELEMENT"
		this.form=form;
		this.fileds=[];
	}
	form.prototype.addFields=function(f){
		this.fileds.push(document.getElementById(f));
		return this;
	}


	form.prototype.check=function(){
		correctInputHandler();
		for(var i=0,len=this.fileds.length;i<len;i++){
			var valArr=this.fileds[i].getAttribute("data-validate").split(",");
			if(valArr.length>0){
				for(var y=0,ylen=valArr.length;y<ylen;y++){
					var res;
					if(ylen==1){res=v[valArr](this.fileds[i].value);}
					else{res=v[valArr[y]](this.fileds[i].value);}
					if(!res[0]){
						this.fileds[i].focus();
						errInputHandler(this.fileds[i],res);
						return [false,this.fileds[i],res[1]];
					}
				}
			}
		}
		return [true,"","Valid"];
	}

	form.prototype.attachValEvent=function(callback){
		var self=this;
		//------------------Attach event to Form fields--------------------------
		for(var i=0,len=this.fileds.length;i<len;i++){
			this.fileds[i].onchange=function(){
				self.check();
				var id=this.getAttribute('id');
				document.getElementById("p-"+id).innerHTML=this.value;
			}
		}
		//------------------Attach event to Form submission----------------------
		this.form.onsubmit=function(event){
			if(self.check()[0]){
				alert("Submitted!!!");
			}
			else{
				if(event.preventDefault) event.preventDefault();
				else event.returnValue = false;
			}
		}
		if(callback) callback();
		//------------------Automatically preview update----------------------------
	}

	function errInputHandler(f,res){
		var errTag=document.createElement("span");
		errTag.className="text-danger";
		errTag.innerHTML=res[1];
		f.parentElement.appendChild(errTag);
		f.parentElement.className+=" has-error";
		window.scrollTo(0,f.scrollTop);
	}
	function correctInputHandler(){
		var errMsg=document.querySelectorAll(".text-danger");
		var errFe=document.querySelectorAll(".has-error");
		for(var i=0,len=errMsg.length;i<len;i++){
			errMsg[i].parentElement.removeChild(errMsg[i]);
		}
		for(var y=0,ylen=errFe.length;y<ylen;y++){
			errFe[y].className=errFe[y].className.replace(" has-error","");
		}
	}
	return form;
})(val);
