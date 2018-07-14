//$(document).ready(function) {
 //  $("#sizePicker").submit(function makeGrid(grid) {
 //    $('table tr').remove();
 //   var rows= $("#inputHeight").val();
 //  var cols= $("#inputWeight").val();

 //    for(var i=1; i<= rows; i=++) {
 //      $('table').append('<tr></tr>');
 //       for (var j=1; j<= cols; j=++) {
 //        $('tr:last').append('<td></td>');
 //        $('td').attr("class", 'cells');
 //      }
 //    }

 //    grid.preventDefault();

 //    $('.cells').click(function(event)) {
 //      var paint = $("#colorPicker").val();
 //      $(event.target).css('background-color', paint);
 //    };

 // };

//});
$(document).ready(() =>
{
  const length = $("#inputHeight");
  const width = $("#inputWeight");
  let pixel = $("#pixelCanvas");
  let color;
  $("#sizePicker").submit((event) =>{
    event.preventDefault();
    $("table").html("");
    makeGrid();
  });
  //pick a color
  pixel.on("click","td", function(){
    color = $("#colorPicker").val();
    $(this).css("background-color",color);
  });
  //create a make grid funtion
  var  makeGrid = () => {
    let row = "",cell = "";
    for( let x = 0;x<length.val();x++){
      console.log(length);
      row = pixel[0].insertRow(x);
      for(let y = 0; y<width.val();y++){
        console.log(width);
        cell = row.insertCell(y);
      }
    }
  }
});
