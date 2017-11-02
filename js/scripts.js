$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  console.log(event);
  var oneInput = $("input#one").val();
  var twoInput = $("input#two").val();
  var threeInput= $("input#three").val();
  var fourInput = $("input#four").val();
  var fiveInput = $("input#five").val();
  var sixInput = $("input#six").val();

  var groceryList = oneInput.split(",");

  var capGroceries = groceryList.map(function(grocery) {
    return grocery.toUpperCase();
  });
  capGroceries.sort();

  capGroceries.forEach(function(groc){
      $(".output").append("<li>"+groc+"</li>");
  });

  // $(".one").text(capGroceries[0]);
  // $(".two").text(capGroceries[1]);
  // $(".three").text(capGroceries[2]);
  // $(".four").text(capGroceries[3]);
  // $(".five").text(capGroceries[4]);
  // $(".six").text(capGroceries[5]);

    $("#story").show();
    $("#blanks form").hide();
    event.preventDefault();
  });
});
