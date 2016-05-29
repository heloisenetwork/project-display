$(document).ready(function(){


	$('#crawlIndex').click(startIndexCrawling);

});

var startIndexCrawling=function(){
	$.ajax({
		url: "project-crawler:8666",
		success: function(){
			alert("success");
		}

	});
}
