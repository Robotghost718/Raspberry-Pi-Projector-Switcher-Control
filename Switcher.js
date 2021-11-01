

//1st input button
//click function for computer button "$.get(..." links to input script in "scripts" folder
$(document).ready( function(){
  $(document).on('click', 'button:button[id^="Computer"]', function (event) {
    $.get("scripts/Inputs/input_3.php");
    $(this).addClass('selected');
    $("#DocCam").removeClass('selected');
    $("#BluRay").removeClass('selected');
    $("#Laptop").removeClass('selected');
    
    

}); 

//2nd Input Button
//click function for laptop button "$.get(..." links to input script in "scripts" folder
  $(document).on('click', 'button:button[id^="Laptop"]', function (event) {
    $.get("scripts/Inputs/input_4.php");
      $(this).addClass('selected');
    $("#Computer").removeClass('selected');
    $("#DocCam").removeClass('selected');
    $("#BluRay").removeClass('selected');
    
});
  
   //3rd Input Button
  //click function for DocCam button "$.get(..." links to input script in "scripts" folder
  $(document).on('click', 'button:button[id^="DocCam"]', function (event) {
    $.get("scripts/Inputs/input_1.php");
      $(this).addClass('selected');
    $("#Computer").removeClass('selected');
    $("#BluRay").removeClass('selected');
    $("#Laptop").removeClass('selected');
    
});
  

   //4th Input Button
  //click function for blurray button "$.get(..." links to input script in "scripts" folder
  $(document).on('click', 'button:button[id^="BluRay"]', function (event) {
    $.get("scripts/Inputs/input_5.php");
      $(this).addClass('selected');
    $("#Computer").removeClass('selected');
    $("#DocCam").removeClass('selected');
    $("#Laptop").removeClass('selected');
    
});


//Projector Power on and Off Button
//Changes the color of the button and the text and whether it sends on or off command
$('#PJ_ON').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $('#PJ_ON').text("Turn On Projector");
    $(this).css('background-color', '#7cb342');
    $('#top-background').css('background-color', '#cccccc');
     $.get("scripts/power_off.php");

  } else {
      $('#PJ_ON').text("Turn Off Projector");
      $(this).css('background-color', '#808080');
      $('#top-background').css('background-color', '#7cb342');

    $.get("scripts/power_on.php");
  }
  $(this).data("clicks", !clicks);
});
//Microphone Mute Button
//Changes the color of the button when pressed and whether it sends mute or unmute command
$('#mic_Icon').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $("#mic_Icon").attr('src',"images/Mic_Icon.svg");
    $("#micBar").removeAttr('class',"mute");
     $.get("scripts/Mic/Mic_unmute.php");

  } else {
   $("#mic_Icon").attr('src',"images/Mic_Mute.svg");
    $("#micBar").attr('class',"mute");
    $.get("scripts/Mic/Mic_mute.php");
  }
  $(this).data("clicks", !clicks);
});
//Volume Mute Button
//Changes the color of the button when pressed and whether it sends mute or unmute command
$('#volume_Icon').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $("#volume_Icon").attr('src',"images/Volume.svg");
    $("#volumeBar").removeAttr('class',"mute");
     $.get("scripts/Volume/Volume_unmute.php");

  } else {
   $("#volume_Icon").attr('src',"images/Volume_Mute.svg");
    $("#volumeBar").attr('class',"mute");
    $.get("scripts/Volume/Volume_mute.php");
  }
  $(this).data("clicks", !clicks);
});
//Sound Vollume
//Checks the value of the slider when it changes and sends the corresponding volume command
$('#volumeBar').on('input',function(){
  var volumeValue = $(this).val();
 
    
if (volumeValue < 1) {
  $.get("scripts/Volume/Volume_0.php")
} 
else if (volumeValue <= 5) {
   $.get("scripts/Volume/Volume_5.php")

 }
else if (volumeValue <= 10) {
   $.get("scripts/Volume/Volume_10.php")

}
else if (volumeValue <= 15) {
   $.get("scripts/Volume/Volume_15.php")

 } 
else if (volumeValue <= 20)  {
   $.get("scripts/Volume/Volume_20.php")

}
else if (volumeValue <= 25) {
   $.get("scripts/Volume/Volume_25.php")

 }
else if (volumeValue <= 30)  {
   $.get("scripts/Volume/Volume_30.php")

}
else if (volumeValue <= 35) {
   $.get("scripts/Volume/Volume_35.php")

 }
else if (volumeValue <= 40) {
   $.get("scripts/Volume/Volume_40.php")

}
else if (volumeValue <= 45) {
   $.get("scripts/Volume/Volume_45.php")

 }
else if (volumeValue <= 50 ) {
   $.get("scripts/Volume/Volume_50.php")

}
else if (volumeValue <= 55) {
   $.get("scripts/Volume/Volume_55.php")

 }
else if (volumeValue <= 60) {
     $.get("scripts/Volume/Volume_60.php")
}
else if (volumeValue <= 65) {
   $.get("scripts/Volume/Volume_65.php")

 }
else if (volumeValue <= 70) {
   $.get("scripts/Volume/Volume_70.php")

}
else if (volumeValue <= 75) {
   $.get("scripts/Volume/Volume_75.php")

 }
else if (volumeValue <= 80){
     $.get("scripts/Volume/Volume_80.php")

}
else if (volumeValue <= 85) {
   $.get("scripts/Volume/Volume_85.php")

 }
else if (volumeValue <= 90) {
   $.get("scripts/Volume/Volume_90.php")

 }
 else if (volumeValue <= 95) {
   $.get("scripts/Volume/Volume_95.php")

 }
else {
   $.get("scripts/Volume/Volume_100.php")
}
});
//Microphone Volume 
//Checks the value of the slider when it changes and sends the corresponding volume command
$('#micBar').on('input', function(){
  var micValue = $(this).val();
 
    
if (micValue < 1) {
  $.get("scripts/Mic/Mic_0.php")
} 
else if (micValue <= 5) {
   $.get("scripts/Mic/Mic_5.php")

} 
else if (micValue <= 10) {
   $.get("scripts/Mic/Mic_10.php")

} 
else if (micValue <= 15) {
   $.get("scripts/Mic/Mic_15.php")

} 
else if (micValue <= 20)  {
   $.get("scripts/Mic/Mic_20.php")

}
else if (micValue <= 25) {
   $.get("scripts/Mic/Mic_25.php")

} 
else if (micValue <= 30)  {
   $.get("scripts/Mic/Mic_30.php")

}
else if (micValue <= 35) {
   $.get("scripts/Mic/Mic_35.php")

} 
else if (micValue <= 40) {
   $.get("scripts/Mic/Mic_40.php")

}
else if (micValue <= 45) {
   $.get("scripts/Mic/Mic_45.php")

} 
else if (micValue <= 50 ) {
   $.get("scripts/Mic/Mic_50.php")

}
else if (micValue <= 55) {
   $.get("scripts/Mic/Mic_55.php")

} 
else {
   $.get("scripts/Mic/Mic_60.php")
}
});
//Clock
//gets the current time and displays it 
var interval = setInterval(timestamphome, 1000);




 function timestamphome(){
 var date;
date = new Date();

 
 var time = document.getElementById('clock'); 
 time.innerHTML = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});


  }
});
