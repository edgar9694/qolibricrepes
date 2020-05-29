$(document).ready(function(){
  $("#orderModal").modal('show');

  var date = new Date();
  console.log(date);
  isOpen()

});


function isOpen(){
  //reloj 24
  const date = new Date()
  const current_hour = date.getHours()
  console.log(current_hour);
  if(current_hour < 18 || current_hour > 23){
    $("#is-open .text").html("Cerrado ahora <br> Abierto de 6pm a 11:45pm")
  } else {
      $("#is-open .text").html("Abierto de 6pm a 11:45pm")
  }
}
