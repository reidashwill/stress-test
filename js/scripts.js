$(document).ready(function(){
  var stressArray = [];
  var copeArray = [];
  
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var stressLevel = $(this).val();
      stressArray.push(stressLevel);
    })
    console.log(stressArray.length)

     $("input:checkbox[name=coping]:checked").each(function(){
       var copeLevel = $(this).val();
       copeArray.push(copeLevel);
     });
     console.log(copeArray.length)
     if (stressArray.length > copeArray.length) {
       $("#warning1").show();
     } else if (stressArray.length === copeArray.length) {
       $("#warning2").show();
     } else {
       $("#healthy").show();
     };
  });
});