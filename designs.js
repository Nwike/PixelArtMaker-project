// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

var table = $("#pixelCanvas");

function clearGrid() {
	table.children().remove();
};

function makeGrid() {

// Your code goes here!
	var height = $("#inputHeight").val();
	// console.log(height);
	var width = $("#inputWidth").val();
	// console.log(width);

	for(var row = 0; row < height; row++){
		table.append("<tr></tr>");
		for(var col = 0; col < width; col++){
			$("tr").last().append("<td> </td>");
		};
	};
};

$("#sizePicker").submit(function(event){
	// for (var i = 0; i < height; i++) {
	// 	// console.log(i);
	// 	var row = document.createElement("tr");
	// 	// for (var j = 0; j < height; j++) {
	// 	// 	$("#pixelCanvas").find("tr").last().append("<th>A</th>");
	// 	// 	// $("#pixelCanvas").append("<tr><td>A</td></tr>\n");
	// 	// }
	// }
	clearGrid();
	makeGrid();
	event.preventDefault();
});

table.on("click", "td", function(){
	var color = $("#colorPicker").val();
	console.log(color);
	// if background color isn't set
	// console.log($(this).css("background-color"));
	if ($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
		$(this).css("background-color", color);
	} else {
		$(this).css("background-color", "rgba(0, 0, 0, 0)");
	}
	// $(this).attr("bgcolor", color);
	if ($(this).css("background-color") == color) {
		// console.log($(this).css("background-color"));
		// $(this).css("background-color", "rgba(0, 0, 0, 0)");
	}
	// $(this).toggleClass("clear")
});

// Using pure JS
// function makeGrid() {

// 	// Your code goes here!
// 	var height=document.getElementById('input_height').value;
// 	var width=document.getElementById('input_width').value;
// 	var table=document.getElementById('pixel_canvas');

// 	//table grid

// 	table.innerHTML='';
// 	var tbody=document.createElement('tbody');
// 	for(var i=0; i<height; i++){
// 	var tr=document.createElement('tr');
// 		for(var j=0; j<width; j++){
// 			var td=document.createElement('td');
// 			td.appendChild(document.createTextNode(''));
// 			tr.appendChild(td);
// 		}
// 	tbody.appendChild(tr);
// 	}
// 	table.appendChild(tbody);

// }