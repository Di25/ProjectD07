// // Animation Splash Screen
// const intro = document.querySelector(".pads_Load");




setTimeout(() => {
    // document.querySelector(".intro").style.filter = "opacity(0)";
    document.querySelector(".pads_Load").classList.add("main_LS_Fade");
  }, "4000")

setTimeout(() => {
    // document.querySelector(".intro").style.filter = "opacity(0)";
    document.querySelector(".main_loadScreen").classList.add("main_LS_Display");
  }, "5600")

setTimeout(() => {
    // document.querySelector(".intro").style.filter = "opacity(0)";
    document.querySelector(".main_loadScreen").style.display = "none";
  }, "6000")