$(document).ready(function(){


	$('#crawlCplIndex').click(startIndexCrawling);
	$('#crawlCplDetails').click(startDetailCrawling);

});

var startIndexCrawling=function(){
	$.ajax({
			url: "http://localhost:8666/cpl/index",
			corssDomain:'true',
			success: function(){
				alert("success");
			}

	});
}
var startDetailCrawling=function(){
	$.ajax({
			url: "http://localhost:8666/cpl/details",
			corssDomain:'true',
			success: function(){
				alert("success");
			}

	});
}
