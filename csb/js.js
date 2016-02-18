var csb=angular.module("csb",[])

//--------Filter-------------------------------------------------

csb.filter("filterCountry",function(){
	var countryList={
		"AU"			: 			"Australian",
		"ZA"			: 			"South Africa",
		"JP"			: 			"Jepan",
		"AR"			: 			"Argentina"
	}
	return function(input){
		return countryList[input.toUpperCase()];
	}
})
.filter("filterState",function(){
	return function(input){
		return input.split("-")[1];
	}
})

//-------SERVICES------------------------------------------

csb.factory("servConnectionData",[function(){
	return {
		url				: 			function (n,p){	return "http://api.demo.muulla.com/cms/merchant/all/active/"+n+"/"+p },
		auth			: 			"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY"
	}

}])
.factory("servConnect",["servConnectionData","$http",function(servConnectionData,$http){
	return function(n,p){
		return $http.get( servConnectionData.url(n,p),{headers:{
			'Authorization': servConnectionData.auth
		}});
	}
}]);

//-------CONTROLLER--------------------------------------------

csb.controller("ctrLoadContent",["servConnect","$scope",function(servConnect,$scope){
	$scope.pagination={
		itemPerPage			: 			10,
		currentPage			: 			1,
		totalPage			: 			-1,
		currentItems		: 			{},
		nextPage 			: 			nextPageFun,
		prePage 			: 			prePageFun,
		updateItemPerPage 	: 			updateItemPerPageFun
	}

	servConnect($scope.pagination.itemPerPage,$scope.pagination.currentPage)
	.then(function(res){
		updatePage(res);
	});


	function nextPageFun(){
		if(this.totalPage<=0) return;
		if(this.currentPage>=this.totalPage) return;
		this.currentPage++;
		servConnect(this.itemPerPage,this.currentPage)
		.then(function(res){
			updatePage(res);
		});
	}

	function prePageFun(){
		if(this.currentPage<=1) return;
		this.currentPage--;	
		servConnect(this.itemPerPage,this.currentPage)
		.then(function(res){
			updatePage(res)
		});
	}

	function updateItemPerPageFun(){
		servConnect(this.itemPerPage,1);
		this.currentPage=1;
		servConnect(this.itemPerPage,this.currentPage)
		.then(function(res){
			updatePage(res)
		});
	}

	function updatePage(res){
		$scope.pagination.totalPage 		= 		res.data.pagination.total_pages;
		$scope.pagination.currentItems 		= 		res.data.data;
	}

}]);
