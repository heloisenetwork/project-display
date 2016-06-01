$(document).ready(function(){

	$('#crawlCplIndex').click(startIndexCrawling);
	$('#crawlCplDetails').click(startDetailCrawling);

});

var startIndexCrawling=function(){
	$.ajax({
			url: abaelardusConfig.crawlerUrl + abaelardusConfig.cplIndexEndPoint,
			corssDomain:'true',
			success: function(){
				alert("success");
			}

	});
}
var startDetailCrawling=function(){
	$.ajax({
			url: abaelardusConfig.crawlerUrl + abaelardusConfig.cplDetailsEndPoint,
			corssDomain:'true',
			success: function(){
				alert("success");
			}

	});
}
