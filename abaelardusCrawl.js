$(document).ready(function(){


	$('#crawlCplIndex').click(startIndexCrawling);

});

var startIndexCrawling=function(){
	$.ajax({
					url: "http://localhost:8666/cpl/index",
		success: function(){
			alert("success");
		}

	});
}
