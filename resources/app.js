

$(document).ready(function () {


   var interval,oldValue = $('#cNumberfield').val();
   function check() {
     if (oldValue != $('#cNumberfield').val()) {
       console.log($('#cNumberfield').val());
     }
     oldValue = $("#cNumberfield").val();

   }
   $("#cNumberfield").bind("change keyup paste mouseup", function(){
     check();
     $('.cardtitle').text(creditCardTypeFromNumber($(this).val()));
     $(this).val(function (index, value) {
      return value.replace(/[^0-9]/g, "").replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  });
   })
   .bind('focus', function() {
    interval = setInterval(check, 0);
  })
  .bind('blur', function() {
    clearInterval(interval);
    check();
  });
   
  $("#cNumberfield").on("click mousedown mouseenter mouseup mouseleave",function(){
    $("#cNumberfield2").val(oldValue);
  });

  var Inter,OldNameValue = $('#cNamefield').val();
  function nameCheck() {
    if(OldNameValue != $('#cNamefield').val()) {
      OldNameValue = $('#cNamefield').val();
    }
    OldNameValue = $('#cNamefield').val();

  }
  $('#cNamefield').bind("change keyup paste mouseup", function(){
    nameCheck();
   
  })
  .bind('focus', function() {
   Inter = setInterval(nameCheck, 0);
 })
 .bind('blur', function() {
   clearInterval(Inter);
   nameCheck();
 });

 $("#cNamefield").on("click mousedown mouseenter mouseup mouseleave",function(){
  $("#cNamefield2").val(OldNameValue);
 });

 function creditCardTypeFromNumber(oldValue) {
  // first, sanitize the number by removing all non-digit characters.
  oldValue = oldValue.replace(/[^\d]/g,'');
  // now test the number against some regexes to figure out the card type.
  if (oldValue.match(/^5[1-5]\d{14}$/)) {
    return 'MasterCard';
  } else if (oldValue.match(/^4\d{15}/) || oldValue.match(/^4\d{12}/)) {
    return 'Visa';
  } else if (oldValue.match(/^3[47]\d{13}/)) {
    return 'AmEx';
  } else if (oldValue.match(/^6011\d{12}/)) {
    return 'Discover';
  }
  return 'Card Type';
}


});







