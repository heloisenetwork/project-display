var resultSkeleton = {};
var resultSize = 5;
$('document').ready(function(){
	$('#startQuery').click(askNewQuestion);
	resultSkeleton = $('.result');
});

var askNewQuestion = function(clickEvent){
	$('#page').val('0');
	askHeloiseRubbered(clickEvent);
}

var askHeloiseRubbered = function(clickEvent){
	clickEvent.preventDefault();
	query = $('#query').val();
	firstResult = parseInt($('#page').val()) * resultSize;
	$.ajax({
		url: abaelardusConfig.heloiseSearchEndpoint,
		data: {
			q : query,
			size: resultSize,
			from: firstResult,
			},
		crossDomain: "true",
		jsonp: "false",
		dataType: "json",
		success: updateResultset, 
	});
}

function updateResultset(data){
	$('#results').hide(0);
	appendNewResults(data);
	$('#results').show(1000);
}

function appendNewResults(data){
	resultWrapper = $('#results');
	resultWrapper.html('');

	results = data.hits.hits;
	if(results && results.length > 0){
		results.forEach(function(rawRes, index){
			res = rawRes._source;
			resultStub = $(resultSkeleton.clone());
			
			appendEntryHeadTo(resultStub, res, rawRes);		
			appendMetadataTo(resultStub, res);


			resultWrapper.append(resultStub);
			
			});
			resultWrapper.append(newPagination(data.hits.total));
			
	}
	else{
			resultWrapper.append($('<h2/>').text('Leider habe ich nichts gefunden.'));
	}
}

function appendEntryHeadTo(stub, res, rawRes){
	listEntryHead = stub.children('h2').children('a');
	listEntryHead.text(res.name);
	listEntryHead.attr('href', res.url);
	listEntryHead.attr('alt', res.name + " aus dem Katalog von " + rawRes._type);
	listEntryHead.parent.after('<p>Project: ' + rawRes._type + '</p>');

}

function appendMetadataTo(stub, res){
	metadata = resultStub.children('.entrymetadata');

	leftMeta = $('<div class="left" />');
	leftMeta.append(newMetadataPair("ID",res.id));
	leftMeta.append(newMetadataPair("Titel",res.title));

	rightMeta = $('<div class="right" />');
	rightMeta.append(newMetadataPair("Geburtstag/-Ort",res.birthDate + "/" + res.birthCity));
	rightMeta.append(newMetadataPair("Todestag/-Ort",res.deathDate + "/" + res.deathCity));

	metadata.append(leftMeta);
	metadata.append(rightMeta);

}

function newMetadataPair(title,content){
	wrapper = $('<div />'); 
	wrapper.append(newCategoryTitle(title));
	wrapper.append(newCategoryContent(content));
	return wrapper;
}

function newCategoryTitle(title){
	return $('<span />').addClass('cat-title').text(title + ":");
}
function newCategoryContent(content){
	return $('<span />').addClass('cat-content').text(content);
}

function newPagination(nrOfHits){
	nrOfPages = parseInt((nrOfHits / resultSize)-1);
	list = $('<ul />').addClass('pagination');
	for(i = 0; i < nrOfPages; i++ ){
		aElement = $('<a/>').attr('href',i).text(i + 1);
		addClassIfActive(aElement);
		list.append($('<li/>').append(aElement));	
	}
	if(nrOfHits % resultSize != 0 ){
		aElement = $('<a/>').attr('href',nrOfPages).text(nrOfPages + 1);
		addClassIfActive(aElement);
		list.append($('<li/>').append(aElement));	
	}
	addListenerTo(list);
	return list;

}

function addClassIfActive(aElement){

	if(aElement.attr('href')  == $('#page').val()){
		aElement.addClass('activePage');
	}
}

function addListenerTo(pagination){
	$.each(pagination.children('li'),function(index, listElement){
		$(listElement).children('a').click(navigate);
	});
}

var navigate = function(clickEvent){
	
	$('#page').val($(clickEvent.target).attr('href'));
	askHeloiseRubbered(clickEvent);

}
