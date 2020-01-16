$(document).ready(function(){
  $("#submit").click(function(){
    event.preventDefault();


    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "1"){
      alert("Koala!");
    } else if (animal === "2"){
      alert("Kangaroo");
    } else {
      alert("Wombat");
    }


  })
  event.preventDefault();
})