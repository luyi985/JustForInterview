var val=(function(){
	var errMessage={
		empty:"Field could not be empty",
		email:"Invalid Email",
		phone:"Please input 10 digits phone number",
		number: "Number Only"		
	}
	return {
		emptyCheck: function(v){
			if(!v||v.length==0){
				return [false,errMessage.empty]
			}
			else{
				return [true,"Ok"];
			}
		},
		emailCheck: function(v){
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			if(re.test(v)){
				return [true,"Ok"];
			}
			else{
				return [false,errMessage.email];
			}
		},
		phoneCheck: function(v){
			if(!v||v.length!=10){
				return [false,errMessage.phone];	
			}
			else{
				return [true,"Ok"];	
			}
		},		
		numberCheck: function(v){
			var re=/^\d+$/;
			if(re.test(v)){
				return [true,"Ok"];		
			}
			else{
				return [false,errMessage.number];
			}
		}
	}
})();