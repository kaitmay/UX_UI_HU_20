console.log("your index.js file is loaded correctly");


$('.carousel').carousel({
  interval: 200
});

$('#myCarousel').on('slide.bs.carousel', function () {
  // do something...
})

$("button").click(function(){
  $("p").fadeIn();
});

$('.collapse').collapse()

