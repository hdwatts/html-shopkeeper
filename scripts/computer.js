

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

window.onload = function checkDevice() {
  if( isMobile.any() ) {
    $("div.computer_bottom").html("MOBILE DEVICE");
  }
  setInterval(function(){ flipCursor() }, 500);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        spaceDown = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 32) {
        spaceDown = false;
    }
});


function flipCursor(){
    if($("#cursor").css("display") == "none") {
        $("#cursor").css("display", "inline");
    }else{
        $("#cursor").css("display", "none");
    }
}