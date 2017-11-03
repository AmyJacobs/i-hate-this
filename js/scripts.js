$(document).ready(function() {
  $("#blanks").submit(function(event) {
  event.preventDefault();
  var oneInput = $("#one").val();


  var groceryList = oneInput.split("");

  console.log(groceryList);

  for (var index = 0; index < groceryList.length; index +=1) {
        //debugger;
        if (groceryList[index] = "q") {
          $(".output").append("w");
        }
        if (groceryList[index] = "w") {
          $(".output").append("e");
        }
         if (groceryList[index] = "e") {
          $(".output").append("r");
        }
         if (groceryList[index] = "r") {
          $(".output").append("t");}
  }

  // capGroceries.forEach(function(groc){
  //     $(".output").append("<li>"+groc+"</li>");
  // });

  // $(".one").text(capGroceries[0]);
  // $(".two").text(capGroceries[1]);
  // $(".three").text(capGroceries[2]);
  // $(".four").text(capGroceries[3]);
  // $(".five").text(capGroceries[4]);
  // $(".six").text(capGroceries[5]);

    $("#story").show();
    $("#blanks form").hide();
  });
});
