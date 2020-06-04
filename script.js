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
