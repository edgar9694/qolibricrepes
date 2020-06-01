$(document).ready(function(){
  // $("#orderModal").modal('show');

  var date = new Date();
  isOpen()

});


function isOpen(){
  //reloj 24
  const date = new Date()
  const current_hour = date.getHours();
  const current_minute = date.getMinutes();
  console.log(current_hour);
  console.log(current_minute);
  if(current_hour > 18 && current_hour < 23){
    if (current_hour < 23 && current_minute < 45) {
      $("#is-open .text").html("<div class='alert alert-success' role='alert'>Abierto de 6pm a 11:45pm</div>");
    } else {
      $("#is-open .text").html("<div class='alert alert-danger' role='alert'>Closed <br> Abierto de 6pm a 11:45pm</div>");
    }
  } else {
      $("#is-open .text").html("<div class='alert alert-danger' role='alert'>Cerrado ahora <br> Abierto de 6pm a 11:45pm</div>");
  }
}
