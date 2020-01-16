$(document).ready(function(){
  $("#submit").click(function(){
    event.preventDefault();


    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "1"){
      alert("You have selected Koala")
      $("#koala").show();
      $("#kangaroo").hide();
      $("#wombat").hide();
    } else if (animal === "2"){
      alert("You have selected Kangaroo")
      $("#kangaroo").show();
      $("#koala").hide();
      $("#wombat").hide();
    } else {
      alert("You have selected Wombat")
      $("#wombat").show();
      $("#koala").hide();
      $("#kangaroo").hide();
    }


  })
  event.preventDefault();
})