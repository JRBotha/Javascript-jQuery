var gridSize = 64;
var squareSize = 1000/gridSize;


$(document).ready(function(){
	
	createGrid();
	hoverGrid();
	buttonClearGrid();
				
});


function createGrid(){

	for(var x = 0; x < gridSize * gridSize; x++){	
		var gridDiv = $("<div class='gridUnit'></div>");
		gridDiv.appendTo('#gridWrapper');
	}
	
	$('.gridUnit').css({height: squareSize});
	$('.gridUnit').css({width: squareSize});
	
}

function hoverGrid(){
	$('.gridUnit').hover(
		function(){ $(this).addClass('hover') }		
		);
}

function buttonClearGrid(){
	$('#button-clear').on({
		click: function(){	
			gridSize = prompt("Please enter new grid");
			squareSize = 1000/gridSize;	
			$('#gridWrapper').children().remove();
			createGrid();
			hoverGrid();		
		}		
	});
}

