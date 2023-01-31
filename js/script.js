function playAudio(url) {
    new Audio(url).play();
    audio.currentTime = 0; audio.play();
  }


// SOUND SAMPLES
let pad_1 = "./sounds/hiphop/kick_1.wav"
let pad_2 = "./sounds/hiphop/snare_1.wav"
let pad_3 = "./sounds/hiphop/hat_1.wav"

let pad_4 = "./sounds/hiphop/kick_2.wav"
let pad_5 = "./sounds/hiphop/snare_2.wav"
let pad_6 = "./sounds/hiphop/hat_2.wav"

let pad_7 = "./sounds/hiphop/kick_3.wav"
let pad_8 = "./sounds/hiphop/snare_3.wav"
let pad_9 = "./sounds/hiphop/snap_1.wav"

// EVENT LISTENER TO KEY PRESS
const body = document.body;

document.addEventListener('keypress', bodyEvent);

function bodyEvent(e) {
    if (e.key == "1"){
      playAudio(pad_1);
      buttonAnimation(e);
      
    }
    else if (e.key == "2") {
      playAudio(pad_2);
      
    }
    else if (e.key == "3") {
      playAudio(pad_3);
      
    }
    else if (e.key == "4") {
      playAudio(pad_4);
      
    }
    else if (e.key == "5") {
      playAudio(pad_5);
      
    }
    else if (e.key == "6") {
      playAudio(pad_6);
      
    }
    else if (e.key == "7") {
      playAudio(pad_7);
      
    }
    else if (e.key == "8") {
      playAudio(pad_8);
      
    }
    else if (e.key == "9") {
      playAudio(pad_9);
      
    }
}

body.addEventListener("keypress", function(event) {
  console.log(event);
  buttonAnimation(event.key);
} )




function buttonAnimation(e){

  const activeButton = document.querySelector(".pad" + e);
  activeButton.classList.add("pressed");

   setTimeout(function(){
      activeButton.classList.remove("pressed")

   }, 100)

}






$("button").mousedown(function(){
  $(this).addClass("pressed");
});

$("button").mouseup(function(){
  $(this).removeClass("pressed");
});


// $("button").keypress(function(){
//   $(this).addClass("pressed");
// });

// $("button").keyup(function(){
//   $(this).removeClass("pressed");
// });




// function btnPressedAnim (pads) {
//   var btn = document.querySelectorAll("button");

//   btn.addClass("pressed");

//   setTimeout(function(){
//     btn.removeClass("pressed");
//   },500);

// }


// function btnPressedAnim () {

//   document.querySelectorAll("button").keypress(function(){
//     document.querySelectorAll("button").addClass("pressed");
//   });

//   document.querySelectorAll("button").keyup(function(){
//     document.querySelectorAll("button").removeClass("pressed");
//   });

// }



// function mouseClick() {

//   const btn  = document.querySelector("button");

//   btn.addEventListener('click', e => {
//     // btn.classList.add("pressed");
//     console.log('ghj');

//       // setTimeout(function(){
//       //   btn.classList.remove("pressed");
//       // },500);

//   });

// }

