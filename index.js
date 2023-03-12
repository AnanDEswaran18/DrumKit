// document.querySelector(".w").addEventListener("click", function () {
//     alert("w got clicked");
// });


// document.querySelector(".a").addEventListener("click", function () {
//     alert("a got clicked");
// });

// document.querySelector(".s").addEventListener("click", function () {
//     alert("s got clicked");
// });
// var audio = new Audio('sounds/tom-1.mp3');
// document.querySelector(".d").addEventListener("click", function(){
//     audio.play();
// });

// document.querySelector(".j").addEventListener("click", function () {
//     alert("j got clicked");
// });

// document.querySelector(".k").addEventListener("click", function () {
//     alert("k got clicked");
// });

// document.querySelector(".l").addEventListener("click", function () {
//     alert("l got clicked");
// });

// for(var i=0;i<document.querySelectorAll("button").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         this.style.color="white";
//     });
// }


for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // var curr = ;
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}//buttonClick

document.addEventListener("keypress",function(event){
    // console.log(event);
    makesound(event.key);
    buttonAnimation(event.key)
})//keypress
// document.getElementById("title").addEventListener("click",function(event){
//   console.log(event.x);
// });

function makesound(value){
  switch (value) {
      case "w":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
      case "a":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
      case "s":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
      case "d":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
      case "j":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;
      case "k":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
      case "l":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;

      default:
          break;
  }
}

function buttonAnimation(keyPressed){
  const button = document.querySelector("."+keyPressed).classList;
  button.add("pressed");
  setTimeout(function(){
    button.remove("pressed");
  },300);
}

//
// function anotherAddEventListener(typeOfEvent,callback){
//
//   var eventThatHappened = {
//     eventType:"keypress",
//     key:"p",
//     duration:2
//   }
//
//   if(eventThatHappened.eventType === typeOfEvent){
//     callback(eventThatHappened);
//   }
//
// }
// anotherAddEventListener("keypress",function(event){
//   console.log(event);
// });
