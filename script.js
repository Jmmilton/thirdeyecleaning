$(window).click(function(e) {

    if($(".navbar-collapse").hasClass("show")){
       $('.navbar-collapse').removeClass("show"); 
       }
 });

document.addEventListener("click", function(event) {
    // If user clicks inside the element
    if (!event.target.closest(".navbar-collapse")){
       $('.navbar-collapse').removeClass("show"); 
    };
});


// // We're going to select some things and make them variables
// var select = function(s) {
//     return document.querySelector(s);
//   },
//     icons = select('#icons'),
//     button = select('.button'),
//     buttonText = document.getElementById("button-text")
  
//   // Morph the Download icon into the Checkmark icon
//   var buttonTl = new TimelineMax({paused:true});
//   buttonTl.to('#download', 1, {
//     morphSVG:{shape:'#checkmark'},
//     ease:Elastic.easeInOut
//   })
  
//   // On button click, play the animation
//   button.addEventListener('click', function() {
//     if (buttonTl.time() > 0) {
//       buttonTl.reverse();
      
//     } else {
//       buttonTl.play(0);
//     }
//   })
  
//   // On button click, swap out the button text
//   button.addEventListener('click', function() {  
//     if (button.classList.contains("saved")) {
//       button.classList.remove("saved");
//       buttonText.innerHTML = "Download";
//     } else {
//       button.classList.add("saved");
//       buttonText.innerHTML = "Saved!";
//     }
//   }, false);

var button = document.getElementById("submit-button");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);