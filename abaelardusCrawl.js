$(document).ready(function(){


	$('#crawlCplIndex').click(startIndexCrawling);

});

var startIndexCrawling=function(){
	$.ajax({
					url: "http://project-crawler:8666/cpl/index",
		success: function(){
			alert("success");
		}

	});
}
